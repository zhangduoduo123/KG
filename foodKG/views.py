import csv

from django.shortcuts import render

# Create your views here.
# -*- coding:utf-8 -*-
import re

import pandas as pd
import torch
import torch.nn.functional as F
from django.shortcuts import render
from util.pre_load import segment, neo4jconn


def test(request):
	context = {'ctx':''}
	if request.method == "POST":
		question = request.POST.get('q')
		#question = request.GET['q']
		#question = question[:300]
		# 移除空格
		question = question.strip()
		question = question.lower()

		word_nature = segment.seg(question)
		print('word_nature:{}'.format(word_nature))
		pattern = [
			[r"^.\w+兽药检出的频次是多少", ],
			[r"^.\w+兽药检出的种类个数", ],
			[r"^.\w+兽药检出毒性情况", ],
			[r"^.\w+兽药种类检出情况", ],
			[r"^.\w+兽药残留水平", ],
			[r"^.\w+的抽检数据", r"^.\w+的抽检信息"],
		]

		pos = -1
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
			word = ''
			cnt_time = 0
			cnt_type = 0
			for term in word_nature:
				if str(term.nature) == 'ns':
					city = term.word
				elif str(term.nature) == 'm':
					if cnt_time == 0:
						start = term.word
					elif cnt_time == 1:
						end = term.word
					cnt_time = cnt_time + 1
				elif str(term.nature) == 'n':
					if cnt_type == 0:
						type = term.word
					cnt_type = cnt_time + 1

			if word == '':
				ret_dict = []
			ret_dict = neo4jconn.veterinary_rate(city, start, end)

		elif classfication_num == 1:
			word = ''
			cnt_time = 0
			cnt_type = 0
			for term in word_nature:
				if str(term.nature) == 'ns':
					city = term.word
				elif str(term.nature) == 'm':
					if cnt_time == 0:
						start = term.word
					elif cnt_time == 1:
						end = term.word
					cnt_time = cnt_time + 1
				elif str(term.nature) == 'n':
					if cnt_type == 0:
						type = term.word
					cnt_type = cnt_time + 1
			if word == '':
				ret_dict = []

			ret_dict = neo4jconn.veterinary_kind(city, start, end)
		elif classfication_num == 2:
			word = ''
			cnt_time = 0
			cnt_type = 0
			city=''
			start = ''
			end = ''
			type = ''

			for term in word_nature:
				if str(term.nature) == 'ns':
					city = term.word
				elif str(term.nature) == 'm':
					if cnt_time == 0:
						start = term.word
					elif cnt_time == 1:
						end = term.word
					cnt_time = cnt_time + 1
				elif str(term.nature) == 'n':
					if cnt_type == 0:
						type = term.word
					cnt_type = cnt_time + 1
			if city == '':
				pass
			if start == '':
				start = '2013-1-1'
			if end == '':
				end = '2022-1-1'
			if type == '':
				pass
			if word == '':
				ret_dict = []
			ret_dict = neo4jconn.veterinary_tox2(city, start, end,type)


		elif classfication_num == 3:
			word = ''
			cnt_time = 0
			cnt_type = 0
			for term in word_nature:
				if str(term.nature) == 'ns':
					city = term.word
				elif str(term.nature) == 'm':
					if cnt_time == 0:
						start = term.word
					elif cnt_time == 1:
						end = term.word
					cnt_time = cnt_time + 1
				elif str(term.nature) == 'n':
					if cnt_type == 0:
						type = term.word
					cnt_type = cnt_time + 1
			if word == '':
				ret_dict = []

			ret_dict = neo4jconn.veterinary_tox(city, start, end,type)

		elif classfication_num == 4:
			word = ''
			cnt_time = 0
			cnt_type = 0
			for term in word_nature:
				if str(term.nature) == 'ns':
					city = term.word
				elif str(term.nature) == 'm':
					if cnt_time == 0:
						start = term.word
					elif cnt_time == 1:
						end = term.word
					cnt_time = cnt_time + 1
				elif str(term.nature) == 'n':
					if cnt_type == 0:
						type = term.word
					cnt_type = cnt_time + 1
			if word == '':
				ret_dict = []

			ret_dict = neo4jconn.veterinary_res(city, start, end,type)
		elif classfication_num == 5:
			word = ''
			cnt_time = 0
			cnt_type = 0
			for term in word_nature:
				if str(term.nature) == 'ns':
					city = term.word
				elif str(term.nature) == 'm':
					if cnt_time == 0:
						start = term.word
					elif cnt_time == 1:
						end = term.word
					cnt_time = cnt_time + 1
				elif str(term.nature) == 'n':
					if cnt_type == 0:
						type = term.word
					cnt_type = cnt_time + 1
			if word == '':
				ret_dict = []

			ret_dict = neo4jconn.get_entity_info('2,3,5,6-四氯苯胺')
			# with open('F:\kg和数据\KG\static\\test.csv', 'w', newline='',encoding='utf-8-sig') as csvfile:
			# 	writer = csv.writer(csvfile)
			# 	for row in ret_dict:
			#		writer.writerow(row)
			df = pd.DataFrame(ret_dict)
			# index=False表示不写入索引
			df.to_csv("F:\kg和数据\KG\static\\t.csv", index=False, header=None, encoding='utf-8-sig')









		if(len(ret_dict)!=0):
			return render(request,'test.html',{'ret':ret_dict})

		return render(request, 'test.html', {'ctx':'暂未找到答案'})

	return render(request, 'test.html', context)


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
