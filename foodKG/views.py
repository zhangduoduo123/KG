import csv

import jieba
import jieba.analyse
import jieba.posseg
jieba.load_userdict("F:\kg和数据\KG\\foodKG\med.txt")
from django.shortcuts import render
from collections import defaultdict
import json
import random
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
	context = {'flag1':''}
	if request.method == "POST":
		question = request.POST.get('q')
		#question = request.GET['q']
		#question = question[:300]
		# 移除空格
		med_dict = ["多菌灵",
"嘧霉胺",
"咪鲜胺",
"涕灭威",
"甲霜灵",
"抑霉唑",
"腈菌唑",
"苯醚甲环唑",
"莠去津",
"噻虫嗪",
"啶虫脒",
"嘧菌酯",
"吡虫啉",
"烯啶虫胺",
"噻嗪酮",
"烯酰吗啉",
"二嗪磷",
"戊唑醇",
"肟菌酯",
"甲胺磷",
"多效唑",
"哒螨灵",
"噁霜灵",
"己唑醇",
"丙溴磷",
"鱼藤酮",
"嘧菌环胺",
"三唑酮",
"三唑醇",
"霜霉威",
"吡唑醚菌酯",
"乙嘧酚",
"双苯基脲",
"氧乐果",
"氟硅唑",
"炔螨特",
"甲基硫菌灵",
"灭蝇胺",
"稻瘟灵",
"甲拌磷",
"噻虫胺",
"乐果",
"福美双",
"醚菌酯",
"增效醚",
"三唑磷",
"灭多威",
"虫酰肼",
"乙霉威",
"克百威",
"烯唑醇",
"毒死蜱",
"特丁硫磷",
"马拉硫磷",
"吡丙醚",
"治螟磷",
"莠去通",
"缬霉威",
"甲氨基阿维菌素",
"非草隆",
"氟环唑",
"异丙净",
"莠灭净",
"丙环唑",
"残杀威",
"甲哌",
"联苯肼酯",
"氟菌唑",
"粉唑醇",
"四氟醚唑",
"亚砜磷",
"乙嘧酚磺酸酯",
"灭线磷",
"异丙威",
"戊菌唑",
"氟甲喹",
"抗蚜威",
"丙草胺",
"毒草胺",
"噻菌灵",
"三环唑",
"十三吗啉",
"枯莠隆",
"异丙隆",
"环酰菌胺",
"乙螨唑",
"噻虫啉",
"久效威亚砜",
"喹氧灵",
"甲醚菊酯",
"硫丹",
"腐霉利",
"五氯苯甲腈",
"烯虫酯",
"虫螨腈",
"去乙基阿特拉津",
"敌敌畏",
"啶酰菌胺",
"新燕灵",
"邻苯基苯酚",
"威杀灵",
"二甲戊灵",
"邻苯二甲酰亚胺",
"吡蚜酮",
"三氟甲吡醚",
"氟胺氰菊酯",
"特丁净",
"五氯苯胺",
"灭草环",
"兹克威",
"6-苄氨基嘌呤",
"异噁唑草酮",
"甲萘威",
"去甲基-甲酰氨基-抗蚜威",
"氟氯氢菊脂",
"戊草丹",
"氟虫腈",
"甲氧丙净",
"五氯苯",
"氟乐灵",
"甲基嘧啶磷",
"辛酰溴苯腈",
"水胺硫磷",
"解草腈",
"扑草净",
"仲丁威",
"3,4,5-混杀威",
"双甲脒",
"炔丙菊酯",
"联苯菊酯",
"喹螨醚",
"稻瘟酰胺",
"吡喃灵",
"甲氧虫酰肼",
"扑灭津",
"茚虫威",
"避蚊胺",
"多杀霉素",
"氰草津",
"乙草胺",
"4,4-二溴二苯甲酮",
"环丙腈津",
"二苯胺",
"γ-氟氯氰菌酯",
"七氯",
"甲草胺",
"溴丁酰草胺",
"异丙草胺",
"甲呋酰胺",
"杀螺吗啉",
"克草敌",
"六六六",
"哌草磷",
"糠菌唑",
"茵草敌",
"氟丙菊酯",
"氯氰菊酯",
"氯菊酯",
"禾草灵",
"杀螨特",
"杀铃脲",
"烯丙菊酯",
"苯线磷",
"噻唑磷",
"西草净",
"苯噻酰草胺",
"螺螨酯",
"五氯硝基苯",
"硫菌灵",
"氰戊菊酯",
"二甲嘧酚",
"氧化萎锈灵",
"腈苯唑",
"嘧啶磷",
"蝇毒磷",
"氟吡禾灵",
"棉铃威",
"仲丁灵",
"氟咯草酮",
"仲草丹",
"胺菊酯",
"磷酸三苯酯",
"四氯硝基苯",
"野麦畏",
"甲基对氧磷",
"甲氰菊酯",
"氟草敏",
"萘乙酸",
"吡螨胺",
"氟氯氰菊酯",
"增效胺",
"异丙甲草胺",
"杀虫威",
"吡唑草胺",
"仲丁通",
"拌种胺",
"2,4-滴丁酸",
"环丙津",
"十二环吗啉",
"禾草丹",
"四氟苯菊酯",
"2,3,5,6-四氯苯胺",
"2,6-二氯苯甲酰胺",
"氟啶虫酰胺",
"敌百虫",
"氯吡脲",
"辛硫磷",
"唑螨酯",
"莎稗磷",
"4-硝基氯苯",
"3,5-二氯苯胺",
"苯嗪草酮",
"异稻瘟净",
"马拉氧磷",
"丁酰肼",
"2,6-二硝基-3-甲氧基-4-叔丁基甲苯",
"灭害威",
"4,4-二氯二苯甲酮",
"啶斑肟",
"草完隆",
"萎锈灵",
"对硫磷",
"o,p'-滴滴滴",
"滴滴涕",
"螺甲螨酯",
"氟硅菊酯",
"清菌噻唑",
"八氯二丙醚",
"啶氧菌酯",
"百菌清",
"倍硫磷",
"氯杀螨砜",
"溴氰菊酯",
"三氯杀螨醇",
"扑灭通",
"喹硫磷",
"麦穗宁",
"呋虫胺",
"甲基立枯磷",
"噁草酮",
"三硫磷",
"唑虫酰胺",
"苯氧威",
"环莠隆",
"烯丙苯噻唑",
"咪草酸",
"反式九氯",
"氯丹",
"间羟基联苯",
"速灭威",
"螺环菌胺",
"环丙唑醇",
"杀线威",
"甲基对硫磷",
"4-十二烷基-2,6-二甲基吗啉",
"双苯酰草胺",
"异噁隆",
"丁草胺",
"环嗪酮",
"去甲基抗蚜威",
"四螨嗪",
"环丙嘧啶醇",
"杀扑磷",
"烯效唑",
"乙基杀扑磷",
"氧环唑",
"丁苯吗啉",
"特草灵",
"氯磺隆",
"胺丙畏",
"异艾氏剂",
"丁噻隆",
"麦锈灵",
"抗螨唑",
"丙炔氟草胺",
"呋霜灵",
"咯喹酮",
"敌草胺",
"氟丙嘧草酯",
"异噁草酮",
"二甲草胺",
"灭菌磷",
"氟酰胺",
"苯草醚",
"苄嘧磺隆",
"乙虫腈",
"萘乙酰胺",
"抑芽唑",
"杀虫环",
"敌瘟磷",
"安硫磷",
"苄氯三唑醇",
"五氯甲氧基苯",
"o,p'-滴滴伊",
"氯苯嘧啶醇",
"艾氏剂",
"氯氟吡氧乙酸",
"生物苄呋菊酯",
"溴螨酯",
"氟啶脲",
"苯硫威",
"吡咪唑",
"环氟菌胺",
"吡氟禾草灵",
"苯霜灵",
"丁二酸二丁酯",
"异戊乙净",
"噁唑隆",
"乙基溴硫磷",
"乙硫磷",
"乙氧呋草黄",
"三氯杀螨砜",
"甲基毒死蜱",
"西玛通",
"异狄氏剂",
"嘧菌胺",
"燕麦酯",
"特乐酚",
"氟铃脲",
"灭除威",
"外环氧七氯",
"氯唑灵",
"拌种咯",
"乙拌磷",
"氯唑磷",
"苄呋菊酯",
"克菌丹",
"狄氏剂",
"久效威",
"醚菊酯",
"绿麦隆",
"除虫菊酯",
"乙丁氟灵",
"避蚊酯",
"丁硫克百威",
"氨氟灵",
"呋草黄",
"利谷隆",
"解草嗪",
"咪唑菌酮",
"地虫硫磷",
"敌草腈",
"乙羧氟草醚",
"甲基苯噻隆",
"氯硫酰草胺",
"苯腈磷",
"炔苯酰草胺",
"杀螨醚",
"呋线威",
"氟唑菌酰胺",
"四氢吩胺",
"环酯草醚",
"茚草酮",
"整形醇",
"氟吡菌酰胺",
"喹禾灵",
"苯胺灵",
"林丹",
"八氯苯乙烯",
"猛杀威",
"嗪草酮",
"二甲吩草胺",
"乙菌利",
"联苯三唑醇",
"西玛津",
"除线磷",
"灭锈胺",
"芬螨酯",
"烯虫炔酯",
"叠氮津",
"氯苯氧乙酸",
"乙酯杀螨醇",
"二丙烯草胺",
"杀螨酯",
"禾草敌",
"呋酰胺",
"除草醚",
"苯醚氰菊酯",
"呋菌胺",
"吡喃草酮",
"敌稗",
"2甲4氯丁氧乙基酯",
"灭蚁灵",
"氧异柳磷",
"氯酞酸甲酯",
"丙虫磷",
"氟硫草定",
"特丁通",
"碳氯灵",
"草达津",
"杀螟腈",
"氯草敏",
"乙滴滴",
"菲",
"异丙乐灵",
"苄草丹",
"氯苯甲醚",
"2,4-滴丙酸",
"叶菌唑",
"消螨通",
"氯虫苯甲酰胺",
"N-去甲基啶虫脒",
"吡菌磷",
"乙基多杀菌素",
"氟吗啉",
"氟吡菌胺",
"吡虫啉脲",
"乙酰甲胺磷",
"甲氟磷",
"氟噻草胺",
"丁醚脲",
"除虫菊素Ⅰ",
"苯虫醚",
"庚烯磷",
"甲苯氟磺胺",
"灭藻醌",
"乙烯菌核利",
"丁羟茴香醚",
"矮壮素",
"阿维菌素",
"苯氧菌胺-(E)",
"灭草烟",
"丁咪酰胺",
"双炔酰菌胺",
"丙酯杀螨醇",
"乙环唑",
"唑嘧菌胺",
"牧草胺",
"速灭磷",
"硫线磷",
"苯菌酮",
"螺虫乙酯",
"苯噻菌胺",
"氯硝胺",
"甲氧咪草烟",
"烯丙酰草胺",
"磷酸三丁酯",
"嗪草酸甲酯",
"三甲苯草酮",
"杀虫脒",
"氟草隆",
"氟苯嘧啶醇",
"灭菌唑",
"异柳磷",
"环庚草醚",
"内吸磷-S",
"敌线酯",
"氟丁酰草胺",
"庚酰草胺",
"胺苯磺隆",
"蚜灭磷",
"咪唑喹啉酸",
"百治磷",
"甲咪唑烟酸",
"酯菌胺",
"甲氧隆",
"呋草酮",
"丁酮威",
"甲硫威",
"磷胺",
"特丁津",
"敌草隆",
"丁嗪草酮",
"噁唑磷",
"乙氧喹啉",
"苯锈啶",
"戊菌隆",
"阿苯达唑",
"氟虫脲",
"除草定",
"噁虫威",
"砜拌磷",
"氟吡酰草胺",
"久效磷",
"地胺磷",
"嘧螨醚",
"噻螨酮",
"嘧草醚-Z",
"噻苯咪唑-5-羟基",
"呋嘧醇",
"唑啉草酯",
"双氯氰菌胺",
"二氯吡啶酸",
"埃卡瑞丁",
"稻丰散",
"苯嘧磺草胺",
"杀螟硫磷",
"丙硫磷",
"甲氧滴滴涕",
"甲基吡噁磷",
"双苯恶唑酸",
"异噁酰草胺",
"异氯磷",
"苯氧菌胺-(Z)",
"麦草氟异丙酯",
"联苯",
"高效氯氟氰菊酯",
"环草敌",
"甲磺草胺",
"烯禾啶",
"咪唑乙烟酸",
"氟蚁腙",
"亚胺硫磷",
"胺唑草酮",
"环虫酰肼",
"噻酮磺隆",
"乙拌磷砜",
"噻吩磺隆",
"巴毒磷",
"氟嘧菌酯",
"敌蝇威",
"驱蚊叮",
"丙硫克百威",
"二氧威",
"益棉磷",
"氟喹唑",
"磺噻隆",
"绿谷隆",
"双酰草胺",
"磺草唑胺",
"磺草灵",
"甲基异柳磷",
"唑草胺",
"噁霉灵",
"醚菌胺",
"环氧七氯",
"吡唑解草酯",
"坪草丹",
"丁基嘧啶磷",
"噁唑禾草灵",
"灭草敌",
"伏杀硫磷",
]
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
			[r"^.\w+兽药检出的频次是多少", ],
			[r"^.\w+兽药检出的种类个数", ],
			[r"^.\w+兽药检出毒性情况", ],
			[r"^.\w+兽药种类检出情况", ],
			[r"^.\w+兽药残留水平", ],
			[r"^.\w+的抽检数据", r"^.\w+的抽检信息"],
			[r"^.\w+的毒性数据", r"^.\w+的毒性信息",r"^.\w+的毒理数据", r"^.\w+的毒理信息"],
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
		elif classfication_num == 6:
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
			ret_dict = neo4jconn.get_tox_info(med)


		df = pd.DataFrame(ret_dict)
		df.to_csv("F:\kg和数据\KG\static\\t.csv", index=False, header=None, encoding='utf-8-sig')

		#开始（lvqing）
		resul = []
		resulguanxi = []
		with open("F:\kg和数据\KG\static\\t.csv", encoding='utf-8') as f:
			reader = csv.reader(f)
			heads = [row[0] for row in reader]
		with open("F:\kg和数据\KG\static\\t.csv", encoding='utf-8') as f1:
			reader = csv.reader(f1)
			tails = [row[2] for row in reader]
		for i in range(len(heads)):
			resul.append(heads[i])
			resul.append(tails[i])
		print(resul)
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
			d['color'] = "rgb(1, 255, 136)"
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

		with open("F:\kg和数据\KG\static\\t.csv", encoding='utf-8') as f:
			reader = csv.reader(f)
			heads = [row[1] for row in reader]
		for i in range(len(heads)):
			resulguanxi.append(heads[i])

		String1 = resulguanxi
		for i in range(len(String1)):
			if (i == 0):
				print(i)
				guanxitu['links'][i]['label'] = String1[i]
			if (i > 0):
				labelflag = True
				labelnum = 0
				for j in range(0, i):
					if (guanxitu['links'][j]['source'] == guanxitu['links'][i]['source'] and guanxitu['links'][j][
						'target'] == guanxitu['links'][i]['target']):
						labelflag = False
						labelnum = j
				if (labelflag == True):
					guanxitu['links'][i]['label'] = String1[i]
				if (labelflag == False):
					guanxitu['links'][i]['label'] = str(guanxitu['links'][labelnum]['label']) + "," + str(String1[i])
					guanxitu['links'][labelnum]['label'] = ''

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
		with open("F:/kg和数据/KG/static/foodKG/graphdata/geshi1.js", "w", encoding='utf-8') as f:
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
