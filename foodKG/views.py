import csv

import jieba
import jieba.analyse
import jieba.posseg
jieba.load_userdict("static\med.txt")
from django.shortcuts import render
from collections import defaultdict
import json
import random
from django.shortcuts import render

# Create your views here.
# -*- coding:utf-8 -*-
import re
import pandas as pd
from django.shortcuts import render
from util.pre_load import segment, neo4jconn


def visualAnalyze(request):
	return render(request, 'visualAnalyze.html')

def test(request):
	context = {'flag1':''}
	if request.method == "POST":
		question = request.POST.get('q')
		#question = request.GET['q']
		#question = question[:300]
		# 移除空格

		question = question.strip()
		question = question.lower()

		sentence_seged = jieba.posseg.cut(question)
		outstr = ''
		word_nature = []
		for x in sentence_seged:
			outstr += "{}/{},".format(x.word, x.flag)
			word_nature.append(x.word)
			word_nature.append(x.flag)
		word_nature = [word_nature[i:i + 2] for i in range(0, len(word_nature), 2)]

		pattern = [
			# 金霉素在2015年的抽检信息
			[r"(.*?)在(.*?)年的抽检信息", ],  # 0
			# 金霉素关于水产的抽检信息
			[r"(.*?)关于(.*?)的抽检信息", ],  # 1
			# 金霉素在北京地区的抽检信息
			[r"(.*?)在(.*?)地区的抽检信息", ],  # 2
			#金霉素在北京地区的抽检信息
			[r"^.\w+的抽检数据", ],  # 3
			#金霉素在北京地区的抽检信息
			[r"^.\w+的毒性和抽检数据",],  # 4
			#金霉素的毒性级别
			[r"(.*?)的毒性级别", ],  # 5
			#恩诺沙星关于兔的残留标准
			[r"(.*?)关于(.*?)的残留标准",],#6
			#金霉素关于水产的抽检和残留标准数据
			[r"(.*?)关于(.*?)的抽检和残留标准数据",],#7
			#金霉素是禁用兽药吗
			[r"(.*?)是禁用兽药吗"],#8


			#renlele
			[r"^.\w+相关的食品安全法律法规有哪些",],  # 9
			[r"^(.*?)关于(.*?)的(.*?)有哪些", ],  # 10


		]

		pos = -1
		#正则匹配问题编号
		classfication_num = -1
		for i in range(len(pattern)):
			for x in pattern[i]:
				index = re.search(x, question)
				if (index):
					pos = index.span()[0]
					classfication_num = i
					break
			if (pos != -1):
				break

		if classfication_num == 0:
			m = re.findall(pattern[0][0], question)
			name = m[0][0]
			year = m[0][1]
			ret_dict = neo4jconn.get_sample_year(name, int(year))
		elif classfication_num == 1:
			m = re.findall(pattern[1][0], question)
			name = m[0][0]
			type = m[0][1]
			ret_dict = neo4jconn.get_sample_type(name, type)
		elif classfication_num == 2:
			m = re.findall(pattern[2][0], question)
			name = m[0][0]
			area = m[0][1]
			ret_dict = neo4jconn.get_sample_area(name, area)
		elif classfication_num == 3:
			word = ''
			med =''
			cnt_time = 0
			cnt_type = 0
			for term in word_nature:
				if cnt_time == 0:
					if str(term[1]) == 'x' or str(term[1]) == 'n':
						med = term[0]
						cnt_time += 1
			if word == '':
				ret_dict = []


			ret_dict = neo4jconn.get_entity_info(med)
		elif classfication_num == 4:
			word = ''
			med = word_nature[0][0]
			if word == '':
				ret_dict = []
			ret_dict = neo4jconn.get_tox_info(med)
			if len(ret_dict) == 0:
				ret_dict = neo4jconn.get_tox_info_nong(med)
		elif classfication_num == 5:
			m = re.findall(pattern[5][0], question)
			name = m[0]

			ret_dict = neo4jconn.get_tox_level(name)
		elif classfication_num == 8:
			m = re.findall(pattern[8][0], question)
			name = m[0]

			ret_dict = neo4jconn.get_Disable(name)
		elif classfication_num == 6:
			m = re.findall(pattern[6][0], question)
			name = m[0][0]
			ani = m[0][1]

			ret_dict = neo4jconn.get_res(name,ani)
		elif classfication_num == 7:
			m = re.findall(pattern[7][0], question)
			name = m[0][0]
			type = m[0][1]

			ret_dict = neo4jconn.get_res_sample(name,type)
		elif classfication_num == 9:
			print('匹配问题9')
			med = word_nature[0][0]

			ret_dict = neo4jconn.get_law_R(med, 9)
		elif classfication_num == 10:
			print('匹配问题10')
			m = re.findall(pattern[10][0], question)
			area = m[0][0]
			hangye = m[0][1]
			leibie = m[0][2]
			ret_dict = neo4jconn.get_law_r(area, hangye, leibie)
			print(ret_dict)
		else:
			print('匹配问题11')
			ret_dict = neo4jconn.get_entity_q(question)

		# 去重解决名称重复的问题
		# temp = []
		# for i in ret_dict:
		# 	if i not in temp:
		# 		temp.append(i)
		# ret_dict = temp
		if (len(ret_dict) == 0):
			return render(request, 'index2.html', {'flag1': '暂未找到答案'})


		df = pd.DataFrame(ret_dict)
		df.to_csv("static/t.csv", index=False, header=None, encoding='utf-8-sig')

		#开始（lvqing）
		resul = []
		resul1 = []
		resulguanxi = []
		with open("static/t.csv", encoding=' UTF-8-sig') as f:
			reader = csv.reader(f)
			heads = [row[0] for row in reader]
		with open("static/t.csv", encoding=' UTF-8-sig') as f2:
			reader = csv.reader(f2)
			hcolors = [row[3] for row in reader]
		with open("static/t.csv", encoding=' UTF-8-sig') as f3:
			reader = csv.reader(f3)
			tcolors = [row[4] for row in reader]
		with open("static/t.csv", encoding=' UTF-8-sig') as f1:
			reader = csv.reader(f1)
			tails = [row[2] for row in reader]
		for i in range(len(heads)):
			resul.append(heads[i])
			resul.append(tails[i])
		for i in range(len(heads)):
			resul1.append(hcolors[i])
			resul1.append(tcolors[i])
		##########################################################
		String = resul
		guanxitu = defaultdict(list)
		k = 0
		f = 0
		for i in String:
			flag = False
			if (f % 2 == 0):
				flag = True
			d = {}
			d['id'] = str(String.index(i))
			d['label'] = i
			d['size'] = 66
			d['scale'] = random.uniform(1.6, 2.0)
			if resul1[String.index(i)] == '0':
				d['color'] = "rgb(104,189,246)"
			elif resul1[String.index(i)] == '1':
				d['color'] = "rgb(255,216,110)"
			elif resul1[String.index(i)] == '2':
				d['color'] = "rgb(251,149,175)"
			elif resul1[String.index(i)] == '3':
				d['color'] = "rgb(109,206,158)"
			elif resul1[String.index(i)] == '4':
				d['color'] = "rgb(222,155,249)"
			else:
				d['color'] = "rgb(200,100,249)"
			if (len(guanxitu['nodes']) == 0):
				guanxitu['nodes'].append(d)
			if (len(guanxitu['nodes']) != 0):
				neizhiflag = True
				for j in (guanxitu['nodes']):
					if (j['id'] == str(String.index(i))):
						neizhiflag = False
				if (neizhiflag):
					guanxitu['nodes'].append(d)
			f = f + 1
			b = {}
			if (flag == True):
				b['source'] = str(String.index(i))
				b['target'] = -1
				b['label'] = -1
				guanxitu['links'].append(b)
			if (flag == False):
				guanxitu['links'][k]['target'] = str(String.index(i))
				k = k + 1

		with open("static/t.csv", encoding='utf-8-sig') as f:
			reader = csv.reader(f)
			heads = [row[1] for row in reader]
		for i in range(len(heads)):
			resulguanxi.append(heads[i])

		String1 = resulguanxi
		for i in range(len(String1)):
			guanxitu['links'][i]['label'] = String1[i]


		print("lu")
		zhengti = '{'
		count = 0

		for k, v in guanxitu.items():
			temp = ''
			if count == 1:
				temp += ','
			temp += '"' + str(k) + '":' + str(v)
			print(temp)
			print(count)
			count += 1
			zhengti += temp
		# print(k, v)
		zhengti += '}'
		tou = "define(function (){return {data:"
		wei = "}});"

		zhengti = tou + zhengti + wei
		with open("static/foodKG/graphdata/geshi1.js", "w", encoding='utf-8') as f:
			f.write(zhengti)
    #结束（lvqing）

		if(len(ret_dict)!=0):
			return render(request,'index2.html')

		return render(request, 'index2.html', {'flag1':'暂未找到答案'})

	return render(request, 'index2.html')


# 分词，需要将电影名，演员名和评分数字转为nm，nnt，ng
def _sentence_segment(word_nature):
	sentence_words = []
	for term in word_nature:
		if str(term.nature) == 'nnt':
			sentence_words.append('nnt')
		elif str(term.nature) == 'nm':
			sentence_words.append('nm')
		elif str(term.nature) == 'ng':
			sentence_words.append('ng')
		elif str(term.nature) == 'm':
			sentence_words.append('x')
		else:
			sentence_words.append(term.word)
	return sentence_words


def _bow(word_nature, show_detail=True):
	sentence_words = _sentence_segment(word_nature)
	# 词袋
	bag = [0] * len(words)
	for s in sentence_words:
		for i, w in enumerate(words):
			if w == s:
				bag[i] = 1  # 词在词典中
			if show_detail:
				print("found in bag:{}".format(w))
	return [bag]




def _get_response(predict_result):
	tag = predict_result[0]['intent']
	return tag





def index(request):
    return render(request, 'index.html')


def demo_data(request):
    return render(request, 'demo_data.html')


def visualAnalyze(request):
    return render(request, 'visualAnalyze.html')


def list_analyze(request):
    return render(request, 'list_analyze.html')
