# -*- coding: utf-8 -*-
from py2neo import Graph,Node,Relationship,NodeMatcher

class Neo4j_Handle():
	graph = None
	matcher = None
	def __init__(self):
		print("Neo4j Init ...")


	def connectNeo4j(self):
		self.graph = Graph("10.2.172.49:7474", username="neo4j", password="root")
		self.matcher = NodeMatcher(self.graph)



	def get_Disable(self, name) -> list:
		'''
       查找毒性等级
        '''
		data2 = self.graph.run(
			"MATCH (m:med)-[r1]-(n:VtypeCountry3) "
			"WHERE  m.name = $name "
			"RETURN m.name as a,n.name as b", name=name).data()

		ls = []
		for an in data2:
			start_name = an['a']
			end_name = an['b']
			ls.append(start_name)
			ls.append('是否禁用')
			ls.append(end_name)
			ls.append(0)
			ls.append(1)

		new_list_t = [ls[i:i + 5] for i in range(0, len(ls), 5)]
		return new_list_t
	def get_res_sample(self, name, type) -> list:
			'''
           查找抽检数据
            '''
			if type == '鸡':
				rtype='家禽'
			elif type == '水产':
				rtype='虾'
			data2 = self.graph.run(
				"MATCH(t:AnimalType{name:$rtype})-[r5]-(q:res_event)-[r4]-(p: med)-[r2: 残留药物]-(m:food_event)-[r1: 抽检食物]-(n:food{foodtype:$type}) "
				"WHERE  p.name = $name "
				"WITH  r4,q,p, m, n,t, r1, r2,r5 match (q1:MaxRes)-[r3]-(q:res_event)-[]-(p:med)-[]-(m:food_event)-[r6]-(ww:res) "
				"RETURN r1,r2,r3,r4,r5,r6", name=name,type=type,rtype=rtype).data()

			data1 = self.graph.run(
				"MATCH(t:AnimalType{name:$rtype})-[r5]-(q:res_event)-[r4]-(p: med)-[r2: 残留药物]-(m:food_event)-[r1: 抽检食物]-(n:food{foodtype:$type}) "
				"WHERE  p.name = $name "
				"WITH  r4,q,p, m, n,t, r1, r2,r5 match (q1:MaxRes)-[r3]-(q:res_event)-[]-(p:med)-[]-(m:food_event)-[r6]-(ww:res) "
				"RETURN collect(ww.name) as ww,collect(t.name) as t,collect(p.name) as p,collect(m.name) as m,collect(n.name) as n,collect(q.name) as q,collect(q1.name) as q1",
				name=name,type=type,rtype=rtype).data()
			entitycolor = dict()
			for an in data1:
				for cnt in range(len(an['p'])):
					entitycolor[an['p'][cnt]] = 0
					entitycolor[an['m'][cnt]] = 1
					entitycolor[an['n'][cnt]] = 2
					entitycolor[an['t'][cnt]] = 3
					entitycolor[an['q'][cnt]] = 4
					entitycolor[an['q1'][cnt]] = 5
					entitycolor[an['ww'][cnt]] = 6


			ls = []
			b = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6']
			for an in data2:
				for i in b:
					rel = an[i]
					relation_type = list(rel.types())[0]
					start_name = rel.start_node['name']
					end_name = rel.end_node['name']
					ls.append(start_name)
					ls.append(relation_type)
					ls.append(end_name)
					ls.append(entitycolor[start_name])
					ls.append(entitycolor[end_name])

			new_list_t = [ls[i:i + 5] for i in range(0, len(ls), 5)]
			temp = []
			for i in new_list_t:
				if i not in temp:
					temp.append(i)
			return temp

	def get_res(self, name,ani) -> list:
		data2 = self.graph.run(
			"MATCH(p: med)-[r2]-(m:res_event)-[r1]-(n:AnimalType) "
			"WHERE  p.name = $name and n.name=$ani "
			"WITH  p, m, n, r1, r2 match(t:MaxRes)-[r4]-(m: res_event)-[r3]-(q:Target) "
			"RETURN r1,r3,r4", name=name,ani=ani).data()

		data1 = self.graph.run(
			"MATCH(p: med)-[r2]-(m:res_event)-[r1]-(n:AnimalType) "
			"WHERE  p.name = $name and n.name=$ani "
			"WITH  p, m, n, r1, r2 match(t:MaxRes)-[r4]-(m: res_event)-[r3]-(q:Target) "
			"RETURN collect(m.name) as m,collect(n.name) as n,collect(t.name) as t,collect(q.name) as q",
			name=name,ani=ani).data()
		entitycolor = dict()
		for an in data1:
			for cnt in range(len(an['m'])):

				entitycolor[an['m'][cnt]] = 1
				entitycolor[an['n'][cnt]] = 2
				entitycolor[an['t'][cnt]] = 3
				entitycolor[an['q'][cnt]] = 4

		ls = []
		b = ['r1', 'r3', 'r4']
		for an in data2:
			for i in b:
				rel = an[i]
				relation_type = list(rel.types())[0]
				start_name = rel.start_node['name']
				end_name = rel.end_node['name']
				ls.append(start_name)
				ls.append(relation_type)
				ls.append(end_name)
				ls.append(entitycolor[start_name])
				ls.append(entitycolor[end_name])

		new_list_t = [ls[i:i + 5] for i in range(0, len(ls), 5)]
		return new_list_t
	def get_tox_level(self, name) -> list:
		'''
       查找毒性等级
        '''
		data2 = self.graph.run(
			"MATCH(p: med) "
			"WHERE  p.name = $name "
			"RETURN p.name as a,p.tox as b", name=name).data()

		ls = []
		for an in data2:
				start_name = an['a']
				end_name = an['b']
				ls.append(start_name)
				ls.append('毒性类别')
				ls.append(end_name)
				ls.append(0)
				ls.append(1)

		new_list_t = [ls[i:i + 5] for i in range(0, len(ls), 5)]
		return new_list_t

	def get_sample_area(self, name,area) -> list:
		'''
       查找抽检数据
        '''
		data2 = self.graph.run(
			"MATCH(p: med)-[r2: 残留药物]-(m:food_event)-[r1: 所属地区]-(n:area{name:$area}) "
			"WHERE  p.name = $name "
			"WITH  p, m, n, r1, r2 match(t:res)-[r4:残留量]-(m: food_event)-[r3: 抽检食物]-(q:food) "
			"RETURN r1,r2,r3,r4", name=name,area=area).data()

		data1 = self.graph.run(
			"MATCH  (p:med)-[r2:残留药物]-(m:food_event)-[r1:所属地区]-(n:area{name:$area}) "
			"WHERE  p.name = $name "
			"WITH p,m,n,r1,r2 match (t:res)-[r4:残留量]-(m:food_event)-[r3:抽检食物]-(q:food) "
			"RETURN collect(p.name) as p,collect(m.name) as m,collect(n.name) as n,collect(t.name) as t,collect(q.name) as q",
			name=name,area=area).data()
		entitycolor = dict()
		for an in data1:
			for cnt in range(len(an['p'])):
				entitycolor[an['p'][cnt]] = 0
				entitycolor[an['m'][cnt]] = 1
				entitycolor[an['n'][cnt]] = 2
				entitycolor[an['t'][cnt]] = 3
				entitycolor[an['q'][cnt]] = 4

		ls = []
		b = ['r1', 'r2', 'r3', 'r4']
		for an in data2:
			for i in b:
				rel = an[i]
				relation_type = list(rel.types())[0]
				start_name = rel.start_node['name']
				end_name = rel.end_node['name']
				ls.append(start_name)
				ls.append(relation_type)
				ls.append(end_name)
				ls.append(entitycolor[start_name])
				ls.append(entitycolor[end_name])

		new_list_t = [ls[i:i + 5] for i in range(0, len(ls), 5)]


		return new_list_t
	def get_sample_year(self, name,year) -> list:
			'''
	       查找抽检数据
	        '''
			data2 = self.graph.run(
				"MATCH(p: med)-[r2: 残留药物]-(m:food_event)-[r1: 所属地区]-(n:area) "
				"WHERE  p.name = $name and m.year = $year "
				"WITH  p, m, n, r1, r2 match(t:res)-[r4:残留量]-(m: food_event)-[r3: 抽检食物]-(q:food) "
				"RETURN r1,r2,r3,r4", name=name,  year=year).data()

			data1 = self.graph.run(
				"MATCH  (p:med)-[r2:残留药物]-(m:food_event{year:$year})-[r1:所属地区]-(n:area) "
				"WHERE  p.name = $name "
				"WITH p,m,n,r1,r2 match (t:res)-[r4:残留量]-(m:food_event)-[r3:抽检食物]-(q:food) "
				"RETURN collect(p.name) as p,collect(m.name) as m,collect(n.name) as n,collect(t.name) as t,collect(q.name) as q",
				name=name,  year=year).data()
			entitycolor = dict()
			for an in data1:
				for cnt in range(len(an['p'])):
					entitycolor[an['p'][cnt]] = 0
					entitycolor[an['m'][cnt]] = 1
					entitycolor[an['n'][cnt]] = 2
					entitycolor[an['t'][cnt]] = 3
					entitycolor[an['q'][cnt]] = 4

			ls = []
			b = ['r1', 'r2', 'r3', 'r4']
			for an in data2:
				for i in b:
					rel = an[i]
					relation_type = list(rel.types())[0]
					start_name = rel.start_node['name']
					end_name = rel.end_node['name']
					ls.append(start_name)
					ls.append(relation_type)
					ls.append(end_name)
					ls.append(entitycolor[start_name])
					ls.append(entitycolor[end_name])

			new_list_t = [ls[i:i + 5] for i in range(0, len(ls), 5)]
			return new_list_t
	def get_sample_type(self, name,type) -> list:
			'''
	       查找抽检数据
	        '''
			data2 = self.graph.run(
				"MATCH(p: med)-[r2: 残留药物]-(m:food_event)-[r1: 所属地区]-(n:area) "
				"WHERE  p.name = $name "
				"WITH  p, m, n, r1, r2 match(t:res)-[r4:残留量]-(m: food_event)-[r3: 抽检食物]-(q:food{foodtype:$type}) "
				"RETURN r1,r2,r3,r4", name=name, type=type).data()

			data1 = self.graph.run(
				"MATCH  (p:med)-[r2:残留药物]-(m:food_event)-[r1:所属地区]-(n:area) "
				"WHERE  p.name = $name "
				"WITH p,m,n,r1,r2 match (t:res)-[r4:残留量]-(m:food_event)-[r3:抽检食物]-(q:food{foodtype:$type}) "
				"RETURN collect(p.name) as p,collect(m.name) as m,collect(n.name) as n,collect(t.name) as t,collect(q.name) as q",
				name=name, type=type).data()
			entitycolor = dict()
			for an in data1:
				for cnt in range(len(an['p'])):
					entitycolor[an['p'][cnt]] = 0
					entitycolor[an['m'][cnt]] = 1
					entitycolor[an['n'][cnt]] = 2
					entitycolor[an['t'][cnt]] = 3
					entitycolor[an['q'][cnt]] = 4

			ls = []
			b = ['r1', 'r2', 'r3', 'r4']
			for an in data2:
				for i in b:
					rel = an[i]
					relation_type = list(rel.types())[0]
					start_name = rel.start_node['name']
					end_name = rel.end_node['name']
					ls.append(start_name)
					ls.append(relation_type)
					ls.append(end_name)
					ls.append(entitycolor[start_name])
					ls.append(entitycolor[end_name])

			new_list_t = [ls[i:i + 5] for i in range(0, len(ls), 5)]
			return new_list_t
	def get_entity_info(self, name) -> list:
		'''
       查找抽检数据
        '''
		data2 = self.graph.run(
			"MATCH(p: med)-[r2: 残留药物]-(m:food_event)-[r1: 所属地区]-(n:area) "
			"WHERE  p.name = $name "
			"WITH  p, m, n, r1, r2 match(t:res)-[r4:残留量]-(m: food_event)-[r3: 抽检食物]-(q:food) "
			"RETURN r1,r2,r3,r4", name=name).data()

		data1 = self.graph.run(
			"MATCH  (p:med)-[r2:残留药物]-(m:food_event)-[r1:所属地区]-(n:area) "
			"WHERE  p.name = $name "
			"WITH p,m,n,r1,r2 match (t:res)-[r4:残留量]-(m:food_event)-[r3:抽检食物]-(q:food) "
			"RETURN collect(p.name) as p,collect(m.name) as m,collect(n.name) as n,collect(t.name) as t,collect(q.name) as q", name=name).data()
		entitycolor = dict()
		for an in data1:
			for cnt in range(len(an['p'])):
				entitycolor[an['p'][cnt]] = 0
				entitycolor[an['m'][cnt]] = 1
				entitycolor[an['n'][cnt]] = 2
				entitycolor[an['t'][cnt]] = 3
				entitycolor[an['q'][cnt]] = 4

		ls = []
		b = ['r1', 'r2', 'r3','r4']
		for an in data2:
			for i in b:
				rel = an[i]
				relation_type = list(rel.types())[0]
				start_name = rel.start_node['name']
				end_name = rel.end_node['name']
				ls.append(start_name)
				ls.append(relation_type)
				ls.append(end_name)
				ls.append(entitycolor[start_name])
				ls.append(entitycolor[end_name])

		new_list_t = [ls[i:i + 5] for i in range(0, len(ls), 5)]
		return new_list_t
	def get_tox_info(self, name) -> list:
			'''
	        查找该entity所有的直接关系
	        :param name:
	        :return:
	        '''

			data1 = self.graph.run(
				"MATCH  (s:器官或状态)-[r5]-(v:影响)-[r6]-(p:med)-[r2:残留药物]-(m:food_event)-[r1:所属地区]-(n:area)"
				"WHERE  p.name = $name "
				"WITH s,v,p,m,n,r1,r2,r5,r6 match (t:food)-[r4]-(m:food_event)-[r3]-(w:res)"
				"RETURN r1,r2,r3,r4,r5,r6", name=name).data()
			data2 = self.graph.run(
				"MATCH  (s:器官或状态)-[r5]-(v:影响)-[r6]-(p:med)-[r2:残留药物]-(m:food_event)-[r1:所属地区]-(n:area)"
				"WHERE  p.name = $name "
				"WITH s,v,p,m,n,r1,r2,r5,r6 match (t:food)-[r4]-(m:food_event)-[r3]-(w:res)"
				"RETURN collect(s.name) as s,collect(v.name) as v,collect(p.name) as p,collect(m.name) as m"
				",collect(n.name) as n,collect(t.name) as t,collect(w.name) as w", name=name).data()
			entitycolor = dict()
			for an in data2:
				for cnt in range(len(an['p'])):
					entitycolor[an['s'][cnt]] = 0
					entitycolor[an['v'][cnt]] = 1
					entitycolor[an['p'][cnt]] = 2
					entitycolor[an['m'][cnt]] = 3
					entitycolor[an['n'][cnt]] = 4
					entitycolor[an['t'][cnt]] = 5
					entitycolor[an['w'][cnt]] = 6

			ls = []
			json_list = []
			b = ['r1','r2','r3','r4','r5','r6']
			for an in data1:
				for i in b:
					result = {}
					rel = an[i]
					relation_type = list(rel.types())[0]
					start_name = rel.start_node['name']
					end_name = rel.end_node['name']
					result["source"] = start_name
					result['rel_type'] = relation_type
					result['target'] = end_name
					ls.append(start_name)
					ls.append(relation_type)
					ls.append(end_name)
					ls.append(entitycolor[start_name])
					ls.append(entitycolor[end_name])
					json_list.append(result)

			new_list_t = [ls[i:i + 5] for i in range(0, len(ls), 5)]
			return new_list_t
	def get_tox_info_nong(self, name) -> list:
			'''
	        查找该entity所有的直接关系
	        :param name:
	        :return:
	        '''

			data1 = self.graph.run(
				"MATCH  (s:临床表现)-[r5]-(p:med)-[r2:残留药物]-(m:food_event)-[r1:所属地区]-(n)"
				"WHERE  p.name = $name "
				"WITH s,r5,p,m,n,r1,r2 match (t:res)-[r4:残留量]-(m:food_event)-[r3:抽检食物]-(q:food)"
				"RETURN r1,r2,r3,r4,r5", name=name).data()
			data2 = self.graph.run(
				"MATCH  (s:临床表现)-[r5]-(p:med)-[r2:残留药物]-(m:food_event)-[r1:所属地区]-(n)"
				"WHERE  p.name = $name "
				"WITH s,r5,p,m,n,r1,r2 match (t:res)-[r4:残留量]-(m:food_event)-[r3:抽检食物]-(q:food)"
				"RETURN collect(s.name) as s,collect(p.name) as p,collect(m.name) as m"
				",collect(n.name) as n,collect(t.name) as t,collect(q.name) as q", name=name).data()
			entitycolor = dict()
			for an in data2:
				for cnt in range(len(an['p'])):
					entitycolor[an['s'][cnt]] = 0
					entitycolor[an['q'][cnt]] = 1
					entitycolor[an['p'][cnt]] = 2
					entitycolor[an['m'][cnt]] = 3
					entitycolor[an['n'][cnt]] = 4
					entitycolor[an['t'][cnt]] = 5


			ls = []
			json_list = []

			b = ['r1','r2','r3','r4','r5',]
			for an in data1:
				for i in b:
					result = {}
					rel = an[i]
					relation_type = list(rel.types())[0]
					start_name = rel.start_node['name']
					end_name = rel.end_node['name']
					result["source"] = start_name
					result['rel_type'] = relation_type
					result['target'] = end_name
					ls.append(start_name)
					ls.append(relation_type)
					ls.append(end_name)
					ls.append(entitycolor[start_name])
					ls.append(entitycolor[end_name])
					json_list.append(result)

			new_list_t = [ls[i:i + 5] for i in range(0, len(ls), 5)]
			return new_list_t

	# 四.问答
	# 1 问题3 某时间-某地区-各种类食物中兽药抽检频次
	def veterinary_rate(self, name, start, end,medtype):
		answer = self.graph.run(
			"MATCH(p: med{medtype:$medtype})-[r2: 残留药物]-(m:food_event) - [r1: 所属地区]-(n:area) "
			"WHERE $end >= m.time >= $start AND n.name = $name "
			"WITH  p, m, n, r1, r2 match(m: food_event)-[r3: 抽检食物]-(q:food) "
			"RETURN p.name as name, count( p.name) as rate", name=name, start=start, end=end,medtype=medtype).data()

		answer_dict = {}
		answer_name = []
		answer_list = []
		ls = []
		for an in answer:
			ls.append(an['name'])
			ls.append(an['rate'])

		ls = [ls[i:i + 2] for i in range(0, len(ls), 2)]
		ls = dict(ls)
		cnt = 0
		for k in sorted(ls, key=ls.__getitem__, reverse=True):
			cnt += 1
			if cnt <= 9:
				result = {}
				relation_type = ''
				start_name = k
				end_name = ls[k]
				result["source"] = {'name': start_name}
				result['type'] = relation_type
				result['target'] = {'name': end_name}
				answer_list.append(result)
				answer_name.append(str(start_name) + '----' + str(end_name))
		answer_dict['answer'] = answer_name
		answer_dict['list'] = answer_list

		if len(answer_name) == 0:
			return []

		return answer_dict
	# 2 问题4 某地区某时间--各种类食物中兽药检出种类
	def veterinary_kind(self, name, start, end,medtype):
		answer = self.graph.run(
			"MATCH(p:med{medtype:$medtype})-[r2: 残留药物]-(m:food_event) - [r1: 所属地区]-(n:area) "
			"WHERE $end >= m.time >= $start AND n.name = $name "
			"WITH p, m, n, r1, r2 match(m: food_event)-[r3: 抽检食物]-(q:food) "
			"RETURN p.name as name, count( p.name) as rate ", name=name, start=start, end=end,medtype=medtype).data()

		answer_dict = {}
		answer_name = []
		answer_list = []
		for an in answer:
			result = {}
			relation_type = ''
			start_name = an['name']
			end_name = an['rate']
			result["source"] = {'name': start_name}
			result['type'] = relation_type
			result['target'] = {'name': end_name}
			answer_list.append(result)
			answer_name.append(str(start_name) + '----' + str(end_name))
		answer_dict['answer'] = answer_name
		answer_dict['list'] = answer_list

		if len(answer_name) == 0:
			return []

		return answer_dict
	# 3 问题6 某地区某时间某种食物种类—兽药检出种类占比
	def veterinary_tox(self, name, start, end, foodtype,medtype):

		answer = self.graph.run(
				"MATCH  (p:med{medtype:$medtype})-[r2:残留药物]-(m:food_event)-[r1:所属地区]-(n:area) "
				"WHERE $end >= m.time >= $start  "
				"WITH p,m,n,r1,r2 match (m:food_event)-[r3:抽检食物]-(q:food) "
				"RETURN  p.vtype as name ,count( p.vtype) as rate ", name=name, start=start, end=end,
				foodtype=foodtype,medtype=medtype).data()


		answer_dict = {}
		answer_name = []
		answer_list = []
		for an in answer:
			result = {}
			relation_type = ''
			start_name = an['name']
			end_name = an['rate']
			result["source"] = {'name': start_name}
			result['type'] = relation_type
			result['target'] = {'name': end_name}
			answer_list.append(result)
			answer_name.append(str(start_name) + '----' + str(end_name))
		answer_dict['answer'] = answer_name
		answer_dict['list'] = answer_list

		if len(answer_name) == 0:
			return []

		return answer_dict
	# 4  问题7 某地区某时间某类别–检出农药残留的水平
	def veterinary_res(self, name, start, end, foodtype,medtype):
		answer = self.graph.run(
			"MATCH  (p:med{medtype:$medtype})-[r2:残留药物]-(m:food_event)-[r1:所属地区]-(n:area) "
			"WHERE $end >= m.time >= $start AND n.name = $name "
			"WITH p,m,n,r1,r2 match (t:res)-[]-(m:food_event)-[r3:抽检食物]-(q:food{foodtype:$foodtype}) "
			"RETURN  collect(t.name) as rate", name=name, start=start, end=end, foodtype=foodtype,medtype=medtype).data()

		answer_dict = {}
		answer_name = []
		answer_list = []
		titlex = ['1-5', '5-10', '10-100', '100-1000', '>1000']
		titley = [0, 0, 0, 0, 0]
		# for an in answer:
		# 	result = {}
		# 	start_name = ''
		# 	end_name = an['rate']
		# 	result["source"] = {'name': start_name}
		# 	result['target'] = {'name': end_name}
		# 	answer_list.append(result)
		# 	answer_name.append(str(start_name) + '----' + str(end_name))

		for an in answer:
			end_name1 = an['rate']
			for end_name in end_name1:
				if end_name <= 5:
					titley[0] = titley[0] + 1
				elif end_name <= 10:
					titley[1] = titley[1] + 1
				elif end_name <= 100:
					titley[2] = titley[2] + 1
				elif end_name <= 1000:
					titley[3] = titley[3] + 1
				else:
					titley[4] = titley[4] + 1
		for i in range(5):
			result = {}
			result["source"] = {'name': titlex[i]}
			result['target'] = {'name': titley[i]}
			answer_list.append(result)
			answer_name.append(str(titlex[i]) + '----' + str(titley[i]))

		answer_dict['answer'] = answer_name
		answer_dict['list'] = answer_list

		if len(answer_name) == 0:
			return []

		return answer_dict
	# 5 问题8 某地区、某段时间内检出农药的毒性类别和检出频次
	def veterinary_tox2(self, name, start, end, foodtype,medtype):

		answer = self.graph.run(
				"MATCH  (p:med{medtype:$medtype})-[r2:残留药物]-(m:food_event)-[r1:所属地区]-(n:area) "
				"WHERE $end >= m.time >= $start AND n.name = $name "
				"WITH p,m,n,r1,r2 match (m:food_event)-[r3:抽检食物]-(q:food{foodtype:$foodtype}) "
				"RETURN  p.tox as name ,count(p.tox) as rate ", name=name, start=start, end=end,
				foodtype=foodtype,medtype=medtype).data()

		answer_dict = {}
		answer_name = []
		answer_list = []
		for an in answer:
			result = {}
			relation_type = ''
			start_name = an['name']
			end_name = an['rate']
			result["source"] = {'name': start_name}
			result['type'] = relation_type
			result['target'] = {'name': end_name}
			answer_list.append(result)
			answer_name.append(str(start_name) + '----' + str(end_name))
		answer_dict['answer'] = answer_name
		answer_dict['list'] = answer_list

		if len(answer_name) == 0:
			return []

		return answer_dict

    #某兽药在不同食物种类上的检出率
	def veterinary_foodtype(self, name,medtype):
		answer = self.graph.run(
			"MATCH  (p:med{medtype:$medtype})-[r2:残留药物]-(m:food_event)-[r1:所属地区]-(n:area) "
			
			"WITH p,m,n,r1,r2 match (m:food_event)-[r3:抽检食物]-(q:food) "
			"RETURN  q.foodtype as name ,count(q.foodtype) as rate ", name=name, medtype=medtype).data()

		answer_dict = {}
		answer_name = []
		answer_list = []
		for an in answer:
			result = {}
			relation_type = ''
			start_name = an['name']
			end_name = an['rate']
			if end_name > 200:
				result["source"] = {'name': start_name}
				result['type'] = relation_type
				result['target'] = {'name': end_name}
				answer_list.append(result)
				answer_name.append(str(start_name) + '----' + str(end_name))
		answer_dict['answer'] = answer_name
		answer_dict['list'] = answer_list

		if len(answer_name) == 0:
			return []

		return answer_dict
# 1 问题3 某时间-某地区-各种类食物中兽药抽检频次
	def veterinary_rate_1(self, name,medtype):
		answer = self.graph.run(
			"MATCH(p: med{medtype:$medtype})-[r2: 残留药物]-(m:food_event) - [r1: 所属地区]-(n:area) "
			"WHERE n.name = $name "
			"WITH  p, m, n, r1, r2 match(m: food_event)-[r3: 抽检食物]-(q:food) "
			"RETURN p.name as name, count( p.name) as rate", name=name,medtype=medtype).data()

		answer_dict = {}
		answer_name = []
		answer_list = []
		ls = []
		for an in answer:
			ls.append(an['name'])
			ls.append(an['rate'])

		ls = [ls[i:i + 2] for i in range(0, len(ls), 2)]
		ls = dict(ls)
		cnt = 0
		for k in sorted(ls, key=ls.__getitem__, reverse=True):
			cnt += 1
			if cnt <= 9:
				result = {}
				relation_type = ''
				start_name = k
				end_name = ls[k]
				result["source"] = {'name': start_name}
				result['type'] = relation_type
				result['target'] = {'name': end_name}
				answer_list.append(result)
				answer_name.append(str(start_name) + '----' + str(end_name))
		answer_dict['answer'] = answer_name
		answer_dict['list'] = answer_list

		if len(answer_name) == 0:
			return []

		return answer_dict
	# 3 问题6 某地区某时间某种食物种类—兽药检出种类占比
	def veterinary_tox_1(self, name, foodtype,medtype):

		answer = self.graph.run(
				"MATCH  (p:med{medtype:$medtype})-[r2:残留药物]-(m:food_event)-[r1:所属地区]-(n:area) "
				
				"WITH p,m,n,r1,r2 match (m:food_event)-[r3:抽检食物]-(q:food) "
				"RETURN  p.vtype as name ,count( p.vtype) as rate ", name=name,
				foodtype=foodtype,medtype=medtype).data()


		answer_dict = {}
		answer_name = []
		answer_list = []
		for an in answer:
			result = {}
			relation_type = ''
			start_name = an['name']
			end_name = an['rate']
			result["source"] = {'name': start_name}
			result['type'] = relation_type
			result['target'] = {'name': end_name}
			answer_list.append(result)
			answer_name.append(str(start_name) + '----' + str(end_name))
		answer_dict['answer'] = answer_name
		answer_dict['list'] = answer_list

		if len(answer_name) == 0:
			return []

		return answer_dict
	# 4  问题7 某地区某时间某类别–检出农药残留的水平
	def veterinary_res_1(self, name,foodtype,medtype):
		answer = self.graph.run(
			"MATCH  (p:med{medtype:$medtype})-[r2:残留药物]-(m:food_event)-[r1:所属地区]-(n:area) "
			"WHERE  n.name = $name "
			"WITH p,m,n,r1,r2 match (t:res)-[]-(m:food_event)-[r3:抽检食物]-(q:food{foodtype:$foodtype}) "
			"RETURN  collect(t.name) as rate", name=name, foodtype=foodtype,medtype=medtype).data()


		answer_dict = {}
		answer_name = []
		answer_list = []
		titlex = ['1-5', '5-10', '10-100', '100-1000', '>1000']
		titley = [0, 0, 0, 0, 0]
		# for an in answer:
		# 	result = {}
		# 	start_name = ''
		# 	end_name = an['rate']
		# 	result["source"] = {'name': start_name}
		# 	result['target'] = {'name': end_name}
		# 	answer_list.append(result)
		# 	answer_name.append(str(start_name) + '----' + str(end_name))

		for an in answer:

			end_name1 = an['rate']

			for end_name in end_name1:
				if medtype == '农药':
					end_name = end_name * 1000

				if end_name <= 5:
					titley[0] = titley[0] + 1
				elif end_name <= 10:
					titley[1] = titley[1] + 1
				elif end_name <= 100:
					titley[2] = titley[2] + 1
				elif end_name <= 1000:
					titley[3] = titley[3] + 1
				else:
					titley[4] = titley[4] + 1
		for i in range(5):
			result = {}
			result["source"] = {'name': titlex[i]}
			result['target'] = {'name': titley[i]}
			answer_list.append(result)
			answer_name.append(str(titlex[i]) + '----' + str(titley[i]))

		answer_dict['answer'] = answer_name
		answer_dict['list'] = answer_list

		if len(answer_name) == 0:
			return []

		return answer_dict
	# 5 问题8 某地区、某段时间内检出农药的毒性类别和检出频次
	def veterinary_tox2_1(self, name, foodtype,medtype):
		answer = self.graph.run(
				"MATCH  (p:med{medtype:$medtype})-[r2:残留药物]-(m:food_event)-[r1:所属地区]-(n:area) "
				"WHERE  n.name = $name "
				"WITH p,m,n,r1,r2 match (m:food_event)-[r3:抽检食物]-(q:food{foodtype:$foodtype}) "
				"RETURN  p.tox as name ,count(p.tox) as rate ", name=name,
				foodtype=foodtype,medtype=medtype).data()


		answer_dict = {}
		answer_name = []
		answer_list = []
		for an in answer:
			result = {}
			relation_type = ''
			start_name = an['name']
			end_name = an['rate']
			result["source"] = {'name': start_name}
			result['type'] = relation_type
			result['target'] = {'name': end_name}
			answer_list.append(result)
			answer_name.append(str(start_name) + '----' + str(end_name))
		answer_dict['answer'] = answer_name
		answer_dict['list'] = answer_list

		if len(answer_name) == 0:
			return []

		return answer_dict

	"""
		@任乐乐
		# 法律法规
		# 食品安全知识
		
	"""

	#   -张馨月整理
	# 和某行业相关的食品安全法律法规有哪些
	def get_law_R(self, entity, temp):
		data = self.graph.run(
			"MATCH (p:fenlei)-[r:所属类别]-(m:law) "
			"WHERE p.name = $entity "
			"RETURN r ", entity=entity).data()
		ls = []
		b = ['r']
		data1 = self.graph.run(
			"MATCH (p:fenlei)-[r:所属类别]-(m:law) "
			"WHERE p.name = $entity "
			"RETURN collect(p.name) as p,collect(m.name) as m", entity=entity).data()
		entitycolor = dict()
		for an in data1:
			for cnt in range(len(an['p'])):
				entitycolor[an['p'][cnt]] = 3
				entitycolor[an['m'][cnt]] = 4
		for an in data:
			for i in b:
				result = {}
				rel = an[i]  # (出口茶叶生产企业注册卫生规范)-[:所属类别 {}]->(茶叶)
				relation_type = list(rel.types())[0]
				print(relation_type)
				start_name = rel.start_node['name']
				end_name = rel.end_node['name']
				ls.append(start_name)
				ls.append(relation_type)
				ls.append(end_name)
				ls.append(entitycolor[start_name])
				ls.append(entitycolor[end_name])
		new_list_t = [ls[i:i + 5] for i in range(0, len(ls), 5)]
		print(new_list_t)
		return new_list_t

	def get_law_r(self, area, hangye, leibie):
		leibie_dic = ['行业法规', '政府公告', '地方法规', '基本法规', '卫生管理法规', '进出口法规', '其他法规']
		# 某地区关于某行业的某种法规
		if area and hangye and leibie in leibie_dic:

			data = self.graph.run(
				"match (p:law_type)-[r2]-(m:law)-[r1]-(n:area) "
				"where p.name=$leibie and n.name=$area "
				"with p,m,n,r1,r2 match (t:industry{name:$hangye})-[r4]-(m:law) "
				"return p,t,m,n,r1,r2,r4", leibie=leibie, area=area, hangye=hangye).data()
			ls = []
			b = ['r1', 'r2', 'r4']
			data1 = self.graph.run(
				"match (p:law_type)-[r2]-(m:law)-[r1]-(n:area) "
				"where p.name=$leibie and n.name=$area "
				"with p,m,n,r1,r2 match (t:industry{name:$hangye})-[r4]-(m:law) "
				"return collect(p.name) as p,collect(t.name) as t,collect(m.name) as m,collect(n.name) as n",
				leibie=leibie, area=area, hangye=hangye).data()
			entitycolor = dict()
			for an in data1:
				for cnt in range(len(an['p'])):
					entitycolor[an['p'][cnt]] = 2
					entitycolor[an['m'][cnt]] = 3
					entitycolor[an['n'][cnt]] = 4
					entitycolor[an['t'][cnt]] = 5
		# 某地区发布的关于某行业的法律法规
		if area and hangye and leibie not in leibie_dic:
			data = self.graph.run(
				"match (m:law)-[r1]-(n:area) "
				"where  n.name=$area "
				"with m,n,r1 match (t:industry{name:$hangye})-[r2]-(m:law) "
				"return t,m,n,r1,r2", area=area, hangye=hangye).data()
			ls = []
			b = ['r1', 'r2', ]
			data1 = self.graph.run(
				"match (m:law)-[r1]-(n:area) "
				"where  n.name=$area "
				"with m,n,r1 match (t:industry{name:$hangye})-[r2]-(m:law) "
				"return collect(t.name) as t,collect(m.name) as m,collect(n.name) as n",
				area=area, hangye=hangye).data()
			entitycolor = dict()
			for an in data1:
				for cnt in range(len(an['m'])):
					entitycolor[an['m'][cnt]] = 3
					entitycolor[an['n'][cnt]] = 4
					entitycolor[an['t'][cnt]] = 5
		# 关于某种行业的法律法规
		if area == '' and leibie not in leibie_dic and hangye:
			data = self.graph.run(
				"match (m:law)-[r1]-(n:industry) "
				"where  n.name= $hangye "
				"return m,n,r1", hangye=hangye).data()
			ls = []
			b = ['r1']
			data1 = self.graph.run(
				"match (m:law)-[r1]-(n:industry) "
				"where  n.name= $hangye "
				"return collect(m.name) as m,collect(n.name) as n", hangye=hangye).data()
			entitycolor = dict()
			for an in data1:
				for cnt in range(len(an['m'])):
					entitycolor[an['m'][cnt]] = 3
					entitycolor[an['n'][cnt]] = 4
		# 某种行业发布的某种类型的法规
		if area == '' and leibie in leibie_dic and hangye:
			data = self.graph.run(
				"match (p:law_type)-[r2]-(m:law)-[r1]-(n:industry) "
				"where  n.name=$hangye and p.name=$leibie "
				"return m,n,r1,p,r2", leibie=leibie, hangye=hangye).data()
			ls = []
			b = ['r1', 'r2']
			data1 = self.graph.run(
				"match (p:law_type)-[r2]-(m:law)-[r1]-(n:industry) "
				"where  n.name=$hangye and p.name=$leibie "
				"return collect(p.name) as p,collect(m.name) as m,collect(n.name) as n", leibie=leibie,
				hangye=hangye).data()
			entitycolor = dict()
			for an in data1:
				for cnt in range(len(an['p'])):
					entitycolor[an['p'][cnt]] = 2
					entitycolor[an['m'][cnt]] = 3
					entitycolor[an['n'][cnt]] = 4
		for an in data:
			for i in b:
				result = {}
				rel = an[i]
				relation_type = list(rel.types())[0]
				start_name = rel.start_node['name']
				end_name = rel.end_node['name']
				ls.append(start_name)
				ls.append(relation_type)
				ls.append(end_name)
				ls.append(entitycolor[start_name])
				ls.append(entitycolor[end_name])
		new_list_t = [ls[i:i + 5] for i in range(0, len(ls), 5)]
		return new_list_t

	def get_entity_q(self, question):
		data = self.graph.run(
			"MATCH (n:law_concept) where n.name=$question return properties(n) ", question=question).data()
		if len(data) == 0:
			data = self.graph.run(
				"MATCH (n:food_anquan) where n.name=$question return properties(n) ", question=question).data()
		if len(data) >= 0:
			return [[data[0]['properties(n)']['name'], '答案', data[0]['properties(n)']['value'], 0, 0]]




