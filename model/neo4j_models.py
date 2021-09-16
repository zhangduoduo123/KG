# -*- coding: utf-8 -*-
from py2neo import Graph,Node,Relationship,NodeMatcher

class Neo4j_Handle():
	graph = None
	matcher = None
	def __init__(self):
		print("Neo4j Init ...")

	def connectNeo4j(self):
		self.graph = Graph("http://127.0.0.1:7474", username="neo4j", password="root")
		self.matcher = NodeMatcher(self.graph)

	# 一.实体查询
	def get_entity_info(self, name) -> list:
		'''
        查找该entity所有的直接关系
        :param name:
        :return:
        '''

		data1 = self.graph.run(
			"MATCH(p: med)-[r2: 残留药物]-(m:food_event)-[r1: 所属地区]-(n) "
			"WHERE  p.name = $name "
			"WITH  p, m, n, r1, r2 match(t:res)-[r4:残留量]-(m: food_event)-[r3: 抽检食物]-(q:food) "
			"RETURN r1,r2,r3,r4", name=name).data()

		ls = []
		json_list = []
		b = ['r1', 'r2', 'r3','r4']
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
				json_list.append(result)


		new_list_t = [ls[i:i + 3] for i in range(0, len(ls), 3)]
		return new_list_t

	def get_tox_info(self, name) -> list:
			'''
	        查找该entity所有的直接关系
	        :param name:
	        :return:
	        '''

			data1 = self.graph.run(
				"MATCH  (s:器官或状态)-[r5]-(v:影响)-[r6]-(p:med)-[r2:残留药物]-(m:food_event)-[r1:所属地区]-(n:area)"
				"WHERE  p.name = $name and n.name = '吉林' "
				"WITH s,v,p,m,n,r1,r2,r5,r6 match (t:res)-[r4]-(m:food_event)-[r3:抽检食物]-(q:food)"
				"RETURN r1,r2,r3,r4,r5,r6", name=name).data()
			ls = []
			json_list = []
			b = ['r1','r2','r3','r4','r5','r6',]
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
					json_list.append(result)

			new_list_t = [ls[i:i + 3] for i in range(0, len(ls), 3)]
			return new_list_t

	# 四.问答
	# 1 问题3 某时间-某地区-各种类食物中兽药抽检频次
	def veterinary_rate(self, name,start,end):
		answer = self.graph.run(
			"MATCH(p: veterinary)-[r2: 残留药物]-(m:food_event) - [r1: 所属地区]-(n:area) "
			"WHERE $end >= m.time >= $start AND n.name = $name "
			"WITH  p, m, n, r1, r2 match(m: food_event)-[r3: 抽检食物]-(q:food) "
			"RETURN p.name as name, count( p.name) as rate", name=name, start=start, end=end).data()

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
		for k in sorted(ls,key=ls.__getitem__,reverse=True):
			cnt += 1
			if cnt <= 9:
				result = {}
				relation_type = ''
				start_name = k
				end_name =ls[k]
				result["source"] = {'name': start_name}
				result['type'] = relation_type
				result['target'] = {'name': end_name}
				answer_list.append(result)
				answer_name.append(str(start_name)+'----'+str(end_name))
		answer_dict['answer'] = answer_name
		answer_dict['list'] = answer_list

		if len(answer_name) == 0:
			return []

		return answer_dict
	# 2 问题4 某地区某时间--各种类食物中兽药检出种类
	def veterinary_kind(self, name, start, end):
		answer = self.graph.run(
			"MATCH(p:veterinary)-[r2: 残留药物]-(m:food_event) - [r1: 所属地区]-(n:area) "
		"WHERE $end >= m.time >= $start AND n.name = $name "
		"WITH p, m, n, r1, r2 match(m: food_event)-[r3: 抽检食物]-(q:food) "
			"RETURN p.name as name, count( p.name) as rate ", name=name, start=start, end=end).data()

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
	def veterinary_tox(self, name,start,end,foodtype):
		if name == '' and foodtype == '' :
			answer = self.graph.run(
				"MATCH  (p:veterinary)-[r2:残留药物]-(m:food_event)-[r1:所属地区]-(n:area) "
				"WHERE $end >= m.time >= $start  "
				"WITH p,m,n,r1,r2 match (m:food_event)-[r3:抽检食物]-(q:food) "
				"RETURN  p.vtype as name ,count( p.vtype) as rate ", name=name, start=start, end=end,
				foodtype=foodtype).data()
		else:
			answer = self.graph.run(
				"MATCH  (p:veterinary)-[r2:残留药物]-(m:food_event)-[r1:所属地区]-(n:area) "
				"WHERE $end >= m.time >= $start AND n.name = $name "
				"WITH p,m,n,r1,r2 match (m:food_event)-[r3:抽检食物]-(q:food{foodtype:$foodtype}) "
				"RETURN  p.vtype as name ,count( p.vtype) as rate ", name=name, start=start, end=end,foodtype=foodtype).data()

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
			answer_name.append(str(start_name)+'----'+str(end_name))
		answer_dict['answer'] = answer_name
		answer_dict['list'] = answer_list

		if len(answer_name) == 0:
			return []

		return answer_dict
	# 4  问题7 某地区某时间某类别–检出农药残留的水平
	def veterinary_res(self, name, start, end,foodtype):
		answer = self.graph.run(
				"MATCH  (p:veterinary)-[r2:残留药物]-(m:food_event)-[r1:所属地区]-(n:area) "
			"WHERE $end >= m.time >= $start AND n.name = $name "
			"WITH p,m,n,r1,r2 match (m:food_event)-[r3:抽检食物]-(q:food{foodtype:$foodtype}) "
			"RETURN  collect(m.results) as rate", name=name, start=start, end=end,foodtype=foodtype).data()

		answer_dict = {}
		answer_name = []
		answer_list = []
		titlex = ['1-5','5-10','10-100','100-1000','>1000']
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
	#5 问题8 某地区、某段时间内检出农药的毒性类别和检出频次
	def veterinary_tox2(self, name,start,end,foodtype):
		if name != '' and foodtype != '' :
			answer = self.graph.run(
				"MATCH  (p:veterinary)-[r2:残留药物]-(m:food_event)-[r1:所属地区]-(n:area) "
				"WHERE $end >= m.time >= $start AND n.name = $name "
				"WITH p,m,n,r1,r2 match (m:food_event)-[r3:抽检食物]-(q:food{foodtype:$foodtype}) "
				"RETURN  p.tox as name ,count(p.tox) as rate ", name=name, start=start, end=end,
				foodtype=foodtype).data()
		else:
			answer = self.graph.run(
				"MATCH  (p:veterinary)-[r2:残留药物]-(m:food_event)-[r1:所属地区]-(n:area) "
				"WHERE $end >= m.time >= $start "
				"WITH p,m,n,r1,r2 match (m:food_event)-[r3:抽检食物]-(q:food) "
				"RETURN  p.tox as name ,count(p.tox) as rate ",  start=start, end=end).data()

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
			answer_name.append(str(start_name)+'----'+str(end_name))
		answer_dict['answer'] = answer_name
		answer_dict['list'] = answer_list

		if len(answer_name) == 0:
			return []

		return answer_dict
	# # 0:nm 评分
	# def movie_rate(self, name):
	# 	answer = self.graph.run(
	# 		"match (m:Movie) where m.name = $name return m.name as name, m.rate as rate ", name=name).data()
	#
	# 	answer_dict = {}
	# 	answer_name = []
	# 	answer_list = []
	# 	for an in answer:
	# 		result = {}
	# 		relation_type = '评分'
	# 		start_name = an['name']
	# 		end_name = an['rate']
	# 		result["source"] = {'name': start_name}
	# 		result['type'] = relation_type
	# 		result['target'] = {'name': end_name}
	# 		answer_list.append(result)
	# 		answer_name.append(end_name+' 分')
	# 	answer_dict['answer'] = answer_name
	# 	answer_dict['list'] = answer_list
	#
	# 	if len(answer_name) == 0:
	# 		return []
	#
	# 	return answer_dict
	# # 1:nm 上映时间
	# def movie_showtime(self, name):
	# 	answer = self.graph.run(
	# 		"match (m:Movie) where m.name = $name return m.name as name, m.showtime as showtime ", name=name).data()
	#
	# 	answer_dict = {}
	# 	answer_name = []
	# 	answer_list = []
	# 	for an in answer:
	# 		result = {}
	# 		relation_type = '上映时间'
	# 		start_name = an['name']
	# 		end_name = an['showtime']
	# 		result["source"] = {'name': start_name}
	# 		result['type'] = relation_type
	# 		result['target'] = {'name': end_name}
	# 		answer_list.append(result)
	# 		answer_name.append(end_name)
	# 	answer_dict['answer'] = answer_name
	# 	answer_dict['list'] = answer_list
	#
	# 	if len(answer_name) == 0:
	# 		return []
	#
	# 	return answer_dict
	#
	# # 2: nm 类型
	# def movie_category(self, name):
	# 	answer = self.graph.run(
	# 		"match (m:Movie) where m.name = $name return m.name as name, m.category as category", name=name).data()
	#
	# 	answer_dict = {}
	# 	answer_name = []
	# 	answer_list = []
	# 	for an in answer:
	# 		result = {}
	# 		relation_type = '类型'
	# 		start_name = an['name']
	# 		end_name = an['category']
	# 		result["source"] = {'name': start_name}
	# 		result['type'] = relation_type
	# 		result['target'] = {'name': end_name}
	# 		answer_list.append(result)
	# 		answer_name.append(end_name)
	# 	answer_dict['answer'] = answer_name
	# 	answer_dict['list'] = answer_list
	#
	# 	if len(answer_name) == 0:
	# 		return []
	#
	# 	return answer_dict
	#
	# # 3:nm 简介(暂时没数据)
	# def movie_info(self, name):
	# 	pass
	#
	# # 4:nm 演员列表
	# def movie_actors(self, name):
	# 	answer = self.graph.run(
	# 		"MATCH (m:Movie)-[rel:ACTOR]->(p:Person) where m.name = $name return rel", name=name).data()
	#
	# 	answer_dict = {}
	# 	answer_name = []
	# 	answer_list = []
	# 	for an in answer:
	# 		result = {}
	# 		rel = an['rel']
	# 		relation_type = list(rel.types())[0]
	# 		start_name = rel.start_node['name']
	# 		end_name = rel.end_node['name']
	# 		result["source"] = {'name': start_name}
	# 		result['type'] = relation_type
	# 		result['target'] = {'name': end_name}
	# 		answer_list.append(result)
	# 		answer_name.append(end_name)
	# 	answer_dict['answer'] = answer_name
	# 	answer_dict['list'] = answer_list
	#
	# 	if len(answer_name) == 0:
	# 		return []
	#
	# 	return answer_dict
	#
	# # 5:nnt 介绍 (暂时没数据)
	# def actor_info(self, name):
	# 	pass
	#
	# # 6:nnt ng电影作品
	# def actor_category_movie(self, name, category):
	# 	answer = self.graph.run(
	# 		"MATCH (m:Movie)-[rel:ACTOR]->(p:Person) where p.name='" + name + "' and m.category=~'.*" + category +".*' return rel").data()
	#
	# 	answer_dict = {}
	# 	answer_name = []
	# 	answer_list = []
	# 	for an in answer:
	# 		result = {}
	# 		rel = an['rel']
	# 		relation_type = list(rel.types())[0]
	# 		start_name = rel.start_node['name']
	# 		end_name = rel.end_node['name']
	# 		result["source"] = {'name': start_name}
	# 		result['type'] = relation_type
	# 		result['target'] = {'name': end_name}
	# 		answer_list.append(result)
	# 		answer_name.append(start_name)
	# 	answer_dict['answer'] = answer_name
	# 	answer_dict['list'] = answer_list
	#
	# 	if len(answer_name) == 0:
	# 		return []
	#
	# 	return answer_dict
	#
	# # 7:nnt 电影作品
	# def actor_movie(self, name):
	# 	answer = self.graph.run(
	# 		"MATCH (m:Movie)-[rel:ACTOR]->(p:Person) where p.name = $name return rel", name=name).data()
	#
	# 	answer_dict = {}
	# 	answer_name = []
	# 	answer_list = []
	# 	for an in answer:
	# 		result = {}
	# 		rel = an['rel']
	# 		relation_type = list(rel.types())[0]
	# 		start_name = rel.start_node['name']
	# 		end_name = rel.end_node['name']
	# 		result["source"] = {'name': start_name}
	# 		result['type'] = relation_type
	# 		result['target'] = {'name': end_name}
	# 		answer_list.append(result)
	# 		answer_name.append(start_name)
	# 	answer_dict['answer'] = answer_name
	# 	answer_dict['list'] = answer_list
	#
	# 	if len(answer_name) == 0:
	# 		return []
	#
	# 	return answer_dict
	#
	# # 8:nnt 参演评分大于 x
	# def actor_gt_rate_movie(self, name, rate):
	# 	answer = self.graph.run(
	# 		"MATCH (m:Movie)-[rel:ACTOR]->(p:Person) where m.rate>$rate and p.name=$name return rel", rate=rate, name=name).data()
	#
	# 	answer_dict = {}
	# 	answer_name = []
	# 	answer_list = []
	# 	for an in answer:
	# 		result = {}
	# 		rel = an['rel']
	# 		relation_type = list(rel.types())[0]
	# 		start_name = rel.start_node['name']
	# 		end_name = rel.end_node['name']
	# 		result["source"] = {'name': start_name}
	# 		result['type'] = relation_type
	# 		result['target'] = {'name': end_name}
	# 		answer_list.append(result)
	# 		answer_name.append(start_name)
	# 	answer_dict['answer'] = answer_name
	# 	answer_dict['list'] = answer_list
	#
	# 	if len(answer_name) == 0:
	# 		return []
	#
	# 	return answer_dict
	#
	# # 9:nnt 参演评分小于 x
	# def actor_lt_rate_movie(self, name, rate):
	# 	answer = self.graph.run(
	# 		"MATCH (m:Movie)-[rel:ACTOR]->(p:Person) where m.rate<$rate and p.name=$name return rel", rate=rate,
	# 		name=name).data()
	#
	# 	answer_dict = {}
	# 	answer_name = []
	# 	answer_list = []
	# 	for an in answer:
	# 		result = {}
	# 		rel = an['rel']
	# 		relation_type = list(rel.types())[0]
	# 		start_name = rel.start_node['name']
	# 		end_name = rel.end_node['name']
	# 		result["source"] = {'name': start_name}
	# 		result['type'] = relation_type
	# 		result['target'] = {'name': end_name}
	# 		answer_list.append(result)
	# 		answer_name.append(start_name)
	# 	answer_dict['answer'] = answer_name
	# 	answer_dict['list'] = answer_list
	#
	# 	if len(answer_name) == 0:
	# 		return []
	#
	# 	return answer_dict
	#
	# # 10:nnt 电影类型
	# def actor_movie_category(self, name):
	# 	answer = self.graph.run(
	# 		"match (m:Movie)-[:ACTOR]->(p:Person{name:$name}) return p.name as name, m.category as category", name=name).data()
	#
	# 	answer_dict = {}
	# 	answer_name = []
	# 	answer_list = []
	# 	movie_cat_set = set()
	# 	name = ''
	# 	for an in answer:
	# 		name = an['name']
	# 		category = an['category']
	# 		category = category.split(';')
	# 		for cat in category:
	# 			movie_cat_set.add(cat)
	#
	# 	for cat in movie_cat_set:
	# 		result = {}
	# 		relation_type = '出演的电影风格'
	# 		start_name = name
	# 		end_name = cat
	#
	# 		result["source"] = {'name': start_name}
	# 		result['type'] = relation_type
	# 		result['target'] = {'name': end_name}
	# 		answer_list.append(result)
	# 		answer_name.append(end_name)
	#
	# 	answer_dict['answer'] = answer_name
	# 	answer_dict['list'] = answer_list
	#
	# 	if len(answer_name) == 0:
	# 		return []
	#
	# 	return answer_dict
	#
	# # 11:nnt nnr合作电影列表
	# def actor_actor_movie(self, name1, name2):
	# 	answer = self.graph.run(
	# 		"match (p:Person{name:$pname})<-[rel1:ACTOR]-(m:Movie)-[rel2:ACTOR]->(other:Person{name:$oname}) return rel1, rel2", pname=name1,
	# 		oname=name2).data()
	#
	# 	answer_dict = {}
	# 	answer_name = []
	# 	answer_list = []
	# 	for an in answer:
	# 		result = {}
	# 		rel = an['rel1']
	# 		relation_type = list(rel.types())[0]
	# 		start_name = rel.start_node['name']
	# 		end_name = rel.end_node['name']
	# 		result["source"] = {'name': start_name}
	# 		result['type'] = relation_type
	# 		result['target'] = {'name': end_name}
	# 		answer_list.append(result)
	# 		answer_name.append(start_name)
	#
	# 		rel2 = an['rel2']
	# 		relation_type2 = list(rel2.types())[0]
	# 		start_name2 = rel2.start_node['name']
	# 		end_name2 = rel2.end_node['name']
	# 		result2 = {}
	# 		result2["source"] = {'name': start_name2}
	# 		result2['type'] = relation_type2
	# 		result2['target'] = {'name': end_name2}
	# 		answer_list.append(result2)
	#
	# 	answer_dict['answer'] = answer_name
	# 	answer_dict['list'] = answer_list
	#
	# 	if len(answer_name) == 0:
	# 		return []
	#
	# 	return answer_dict
	#
	# # 12:nnt 电影数量
	# def actor_movie_count(self, name):
	# 	answer = self.graph.run(
	# 		"match (m:Movie)-[:ACTOR]->(p:Person) where p.name = $name return p.name as name, count(m) as count",
	# 		name=name).data()
	# 	answer_dict = {}
	# 	answer_name = []
	# 	answer_list = []
	# 	for an in answer:
	# 		result = {}
	# 		relation_type = '电影数量'
	# 		start_name = an['name']
	# 		end_name = an['count']
	# 		result["source"] = {'name': start_name}
	# 		result['type'] = relation_type
	# 		result['target'] = {'name': str(end_name)}
	# 		answer_list.append(result)
	# 		answer_name.append(str(end_name) + ' 部')
	# 	answer_dict['answer'] = answer_name
	# 	answer_dict['list'] = answer_list
	#
	# 	if len(answer_name) == 0:
	# 		return []
	#
	# 	return answer_dict
	#
	# # 13:nnt 出生日期(暂时没数据)
	# def movie_info(self, name):
	# 	pass
	#
	# # 14:评分大于x电影
	# def gt_rate_movie(self, rate):
	# 	answer = self.graph.run(
	# 		"MATCH (m:Movie) where m.rate>$rate return m.name as name, m.rate as rate", rate=rate,).data()
	#
	# 	answer_dict = {}
	# 	answer_name = []
	# 	answer_list = []
	# 	for an in answer:
	# 		result = {}
	# 		relation_type = '评分'
	# 		start_name = an['name']
	# 		end_name = an['rate']
	# 		result["source"] = {'name': start_name}
	# 		result['type'] = relation_type
	# 		result['target'] = {'name': end_name}
	# 		answer_list.append(result)
	# 		answer_name.append(start_name)
	# 	answer_dict['answer'] = answer_name
	# 	answer_dict['list'] = answer_list
	#
	# 	if len(answer_name) == 0:
	# 		return []
	#
	# 	return answer_dict
	#
	# # 15:评分大于x的ng类型电影
	# def gt_rate_category_movie(self, rate, category):
	# 	answer = self.graph.run(
	# 		"MATCH (m:Movie) where m.rate>$rate and m.category =~'.*category.*' return m.name as name, m.rate as rate, m.category as category", rate=rate, category=category).data()
	#
	# 	answer_dict = {}
	# 	answer_name = []
	# 	answer_list = []
	# 	for an in answer:
	# 		result = {}
	# 		relation_type = '评分'
	# 		start_name = an['name']
	# 		end_name = an['rate']
	# 		result["source"] = {'name': start_name}
	# 		result['type'] = relation_type
	# 		result['target'] = {'name': end_name}
	# 		answer_list.append(result)
	# 		answer_name.append(start_name)
	#
	# 		result = {}
	# 		relation_type_2 = '类型'
	# 		end_name_2 = an['category']
	# 		result["source"] = {'name': start_name}
	# 		result['type'] = relation_type_2
	# 		result['target'] = {'name': end_name_2}
	# 		answer_list.append(result)
	#
	# 	answer_dict['answer'] = answer_name
	# 	answer_dict['list'] = answer_list
	#
	# 	if len(answer_name) == 0:
	# 		return []
	# 	return answer_dict
