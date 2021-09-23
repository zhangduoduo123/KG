var visGraph = null;
var NodeRightMenu = {
	menuItems: [
		[{
			"id": "nodeDetail",
			"label": "编辑节点",
			"icon": "fa-edit"
		}, {
			"id": "nodeConnent",
			"label": "连线",
			"icon": "fa-long-arrow-right"
		}, {
			"id": "nodeopt",
			"label": "其他操作",
			"icon": "fa-gears",
			"childs": [{
				"id": "selRelate",
				"label": "选中关联",
				"icon": "fa-check-square-o"
			}, {
				"id": "deleteNode",
				"label": "删除",
				"icon": "fa-close"
			}, {
				"id": "contract",
				"label": "收起子节点",
				"icon": "fa-minus"
			}, {
				"id": "expanded",
				"label": "展开子节点",
				"icon": "fa-plus"
			}]
		}]
	],
	init: function(_graph) {
		var _self = this;
		if ($("#contextMenu").length == 0) {
			var menuHtml = '<menu id="contextMenu" class="menu show-menu" style="display:none;">';
			_self.menuItems.forEach(function(menuGroups, i) {
				if (i != 0) {
					menuHtml += '<li class="menu-separator"></li>'
				}
				menuGroups.forEach(function(menu) {
					var subMenus = menu['childs'];
					if (subMenus === undefined) {
						menuHtml += '<li class="menu-item"><button type="button" attrType="' + menu.id + '" class="menu-btn">'
					} else {
						menuHtml += '<li class="menu-item submenu"><button type="button" attrType="' + menu.id + '" class="menu-btn">'
					}
					menuHtml += '<i class="fa ' + menu.icon + '"></i>';
					menuHtml += '<span class="menu-text">' + menu.label + '</span>';
					menuHtml += '</button>';
					if (subMenus !== undefined) {
						menuHtml += '<menu class="menu">';
						subMenus.forEach(function(subMenu) {
							menuHtml += '<li class="menu-item"><button type="button" attrType="' + subMenu.id + '" class="menu-btn">';
							menuHtml += '<i class="fa ' + subMenu.icon + '"></i>';
							menuHtml += '<span class="menu-text">' + subMenu.label + '</span>';
							menuHtml += '</button></li>'
						});
						menuHtml += '</menu>'
					}
					menuHtml += '</li>'
				})
			});
			menuHtml += '</menu>';
			$("#graph-panel-wrapper").append(menuHtml);
			//<menu id="contextMenu" class="menu show-menu" style="display:none;"><li class="menu-item"><button type="button" attrType="nodeDetail" class="menu-btn"><i class="fa fa-edit"></i><span class="menu-text">编辑节点</span></button></li><li class="menu-item"><button type="button" attrType="nodeConnent" class="menu-btn"><i class="fa fa-long-arrow-right"></i><span class="menu-text">连线</span></button></li><li class="menu-item submenu"><button type="button" attrType="nodeopt" class="menu-btn"><i class="fa fa-gears"></i><span class="menu-text">其他操作</span></button><menu class="menu"><li class="menu-item"><button type="button" attrType="selRelate" class="menu-btn"><i class="fa fa-check-square-o"></i><span class="menu-text">选中关联</span></button></li><li class="menu-item"><button type="button" attrType="deleteNode" class="menu-btn"><i class="fa fa-close"></i><span class="menu-text">删除</span></button></li><li class="menu-item"><button type="button" attrType="contract" class="menu-btn"><i class="fa fa-minus"></i><span class="menu-text">收起子节点</span></button></li><li class="menu-item"><button type="button" attrType="expanded" class="menu-btn"><i class="fa fa-plus"></i><span class="menu-text">展开子节点</span></button></li></menu></li>
			$("#graph-panel-wrapper").on('click', '#contextMenu .menu-btn', function() {
				var type = $(this).attr('attrType');
				if (type == 'nodeDetail') {
					$('#seachKey').val(visGraph.currentNode.label + '');
					$('#searchBtn').trigger('click');
					showNodeInfo(visGraph.currentNode)
				} else {
					_graph.rightMenuOprate(type)
				}
				_self.hide()
			})
		}
	},
	show: function(e, graphClient) {
		this.init(graphClient);
		$("#contextMenu").css({
			top: e.pageY - 30,
			left: e.pageX
		}).show()
	},
	hide: function() {
		$("#contextMenu").hide()
	}
};

var LinkRightMenu = {
	menuItems: [
		[{
			"id": "editEdge",
			"label": "设置",
			"icon": "fa-edit"
		}, {
			"id": "delEdge",
			"label": "删除",
			"icon": "fa-close"
		}]
	],
	init: function(_graph, link) {
		var _self = this;
		if ($("#contextMenuLink").length == 0) {
			var menuHtml = '<menu id="contextMenuLink" class="menu show-menu" style="display:none;">';
			_self.menuItems.forEach(function(menuGroups, i) {
				if (i != 0) {
					menuHtml += '<li class="menu-separator"></li>'
				}
				menuGroups.forEach(function(menu) {
					var subMenus = menu['childs'];
					if (subMenus === undefined) {
						menuHtml += '<li class="menu-item"><button type="button" attrType="' + menu.id + '" class="menu-btn">'
					} else {
						menuHtml += '<li class="menu-item submenu"><button type="button" attrType="' + menu.id + '" class="menu-btn">'
					}
					menuHtml += '<i class="fa ' + menu.icon + '"></i>';
					menuHtml += '<span class="menu-text">' + menu.label + '</span>';
					menuHtml += '</button>';
					if (subMenus !== undefined) {
						menuHtml += '<menu class="menu">';
						subMenus.forEach(function(subMenu) {
							menuHtml += '<li class="menu-item"><button type="button" attrType="' + subMenu.id + '" class="menu-btn">';
							menuHtml += '<i class="fa ' + subMenu.icon + '"></i>';
							menuHtml += '<span class="menu-text">' + subMenu.label + '</span>';
							menuHtml += '</button></li>'
						});
						menuHtml += '</menu>'
					}
					menuHtml += '</li>'
				})
			});
			menuHtml += '</menu>';
			$("#graph-panel-wrapper").append(menuHtml);
			$("#graph-panel-wrapper").on('click', '#contextMenuLink .menu-btn', function() {
				var type = $(this).attr('attrType');
				if (type == 'editEdge') {
					showEdgeInfo(visGraph.currentLink);
					$('#edge-style-trrigle').trigger('click')
				} else {
					_graph.rightMenuOprate(type)
				}
				_self.hide()
			})
		}
	},
	show: function(e, graphClient, link) {
		this.init(graphClient, link);
		$("#contextMenuLink").css({
			top: e.pageY - 30,
			left: e.pageX
		}).show()
	},
	hide: function() {
		$("#contextMenuLink").hide()
	}
};

var BoxRightMenu = {
	menuItems: [
		[{
			"id": "removeCluster",
			"label": "删除区域",
			"icon": "fa-close"
		}, {
			"id": "layoutSetter",
			"label": "布局设置",
			"icon": "fa-asterisk",
			"childs": [{
				"id": "circle",
				"label": "圆形布局",
				"icon": "fa-bullseye"
			}, {
				"id": "grid",
				"label": "矩形布局",
				"icon": "fa-table"
			}]
		}]
	],
	init: function(_graph) {
		var _self = this;
		if ($("#clusterMenu").length == 0) {
			var menuHtml = '<menu id="clusterMenu" class="menu show-menu" style="display:none;">';
			_self.menuItems.forEach(function(menuGroups, i) {
				if (i != 0) {
					menuHtml += '<li class="menu-separator"></li>'
				}
				menuGroups.forEach(function(menu) {
					var subMenus = menu['childs'];
					if (subMenus === undefined) {
						menuHtml += '<li class="menu-item"><button type="button" attrType="' + menu.id + '" class="menu-btn">'
					} else {
						menuHtml += '<li class="menu-item submenu"><button type="button" attrType="' + menu.id + '" class="menu-btn">'
					}
					menuHtml += '<i class="fa ' + menu.icon + '"></i>';
					menuHtml += '<span class="menu-text">' + menu.label + '</span>';
					menuHtml += '</button>';
					if (subMenus !== undefined) {
						menuHtml += '<menu class="menu">';
						subMenus.forEach(function(subMenu) {
							menuHtml += '<li class="menu-item"><button type="button" attrType="' + subMenu.id + '" class="menu-btn">';
							menuHtml += '<i class="fa ' + subMenu.icon + '"></i>';
							menuHtml += '<span class="menu-text">' + subMenu.label + '</span>';
							menuHtml += '</button></li>'
						});
						menuHtml += '</menu>'
					}
					menuHtml += '</li>'
				})
			});
			menuHtml += '</menu>';
			var graphWrapEle = $("#graph-panel-wrapper");
			graphWrapEle.append(menuHtml);
			graphWrapEle.on('click', '#clusterMenu .menu-btn', function() {
				var type = $(this).attr('attrType');
				if (type == 'removeCluster') {
					_graph.removeCluster()
				} else {
					_graph.setClusterLayout(type)
				}
				_self.hide()
			})
		}
	},
	show: function(e, graphClient) {
		this.init(graphClient);
		$("#clusterMenu").css({
			top: e.pageY - 30,
			left: e.pageX
		}).show()
	},
	hide: function() {
		$("#clusterMenu").hide()
	}
};

function showNodeInfo(node) {//TODO 设置节点信息

	if (!node) {
		return false
	}
	var self = this;
	$('#node-label').val(node.label);
	$('#node-size').val(Math.round(node.radius));
	$('#node-color').val('#1f6ce9');
	$('#node-color').siblings('span.input-group-addon').css('background-color', '#1f6ce9');
	$('#node-scale').val(node.scaleX || 1);
	$('#node-shape').val(node.shape || 'circle');
	$('#show-label').val(node.showlabel ? 'true' : 'false');
	$('#node-image').val(node.imageUrl);
	$('#outdegree-num').text((node.outLinks || []).length);
	$('#indegree-num').text((node.inLinks || []).length);
	var outNodeHtml = '';
	(node.outLinks || []).forEach(function(l) {
		outNodeHtml += "<div><a class='nodelabel' style='color:rgb( " + l.target.fillColor + ")'>" + l.target.label + "</a></div>"
	});
	$('#outdegree-nodes').html(outNodeHtml);
	var inNodeHtml = '';
	(node.inLinks || []).forEach(function(l) {
		inNodeHtml += '<div><a class="nodelabel" style="color:rgb( ' + l.source.fillColor + ')">' + l.source.label + '</a></div>'
	});
	$('#indegree-nodes').html(inNodeHtml);
	$('.nodelabel').on("click", function() {
		visGraph.findNode($(this).text(), true);
		showNodeInfo(visGraph.currentNode)
	})
}

function showEdgeInfo(line) {   //todo 设置边的信息
	if (line) {
		$('#edge-label').val(line.label || line.type);
		$('#edge-width').val(line.lineWidth);
		$('#edge-type').val(line.lineType);
		$('#edge-color').val('#1f6ce9');
		$('#edge-color').siblings('span.input-group-addon').css('background-color', '#1f6ce9')
	}
}

$(function() {
	initLayoutMenu();
	var sliders = [{
		'ele': '#layoutNavMenu li .layoutitem',
		'target': '#layoutWrapper'
	}, {
		'ele': '#definedSetBtn',
		'target': '#definedSetterWrapper'
	}, {
		'ele': '#searchBtn',
		'target': '#nodeInfoWrapper'
	}, {
		'ele': '#scanHistory',
		'target': '#historyWrapper'
	}, {
		'ele': '#statistic-nav',
		'target': '#statisticWrapper'
	}, {
		'ele': '#rank-nav',
		'target': '#nodeRankWrapper'
	}, {
		'ele': '#analyze-nav',
		'target': '#analyzeWrapper'
	}, {
		'ele': '#filter-nav',
		'target': '#filterWrapper'
	}, {
		'ele': '#edge-style-trrigle',
		'target': '#edgeInfoWrapper'
	}];

	sliders.forEach(function(_slider, i) {
		$(_slider['ele']).sideToggle({
			moving: _slider['target'],
			direction: 'right'
		});
		var targetEle = sliders.filter(function(silder, j) {
			return i != j
		});
		$(_slider['ele']).click(function(evt) {
			$(_slider['target']).css({
				'z-index': '1'
			});
			targetEle.forEach(function(targt) {
				$(targt['target']).css({
					'z-index': '0'
				})
			})
		})
	});

	$('.slideCloseBtn').on('click', function(e) {
		var $target = $(e.target);
		$target.closest('.sideMenuContainer').animate({
			'right': '-250px'
		}, 300);
		$('#outdegree-nodes,#indegree-nodes').empty()
	});

	$('#navbox-trigger,#closeTopNavBtn').click(function() {
		$('#top-bar').toggleClass('navbox-open')
	});

	$('#nodeInfoRestBtn').click(function() {
		var name = $('#node-label').val();
		var radius = $('#node-size').val();
		var scale = $('#node-scale').val();
		var fillColor = $('#node-color').val();
		var showlabel = $('#show-label').val();
		var shape = $('#node-shape').val();
		var nodeImage = $.trim($('#node-image').val());
		if (radius > 0) {
			visGraph.resetNodeInfo({
				'name': name,
				'radius': radius,
				'scale': scale,
				'fillColor': fillColor,
				'shape': shape,
				'image': nodeImage,
				'showlabel': showlabel
			})
		}
	});

	$('#edgeStyleRestBtn').click(function() {
		var label = $('#edge-label').val();
		var lineWidth = $('#edge-width').val();
		var edgeColor = $('#edge-color').val();
		var lineType = $('#edge-type').val();
		var lineStyle = $('#edge-style').val();
		visGraph.resetEdgeStyle({
			'label': label,
			'lineWidth': lineWidth,
			'edgeColor': edgeColor,
			'lineType': lineType,
			'lineDash': lineStyle
		})
	});

	$('#left-tool-btns li').on('click', function(e) {
		var target = $(this);
		var type = target.attr('type');
		var method = target.attr('method');
		if (type == 'zoom') {
			visGraph.setZoom(method)
		} else if (type == 'mode') {
			target.addClass('active').siblings('li[type="mode"]').removeClass('active');
			visGraph.setMouseModel(method)
		} else if (type == 'coordi') {
			if (method == 'east') {
				visGraph.rotateGraph(15)
			} else if (method == 'west') {
				visGraph.rotateGraph(-15)
			} else {
				visGraph.translateOrZoom(method, 100)
			}
		} else if (type == 'label') {
			if (target.hasClass("active")) {
				target.removeClass("active");
				visGraph.showNodeLabel(false)
			} else {
				target.addClass("active");
				visGraph.showNodeLabel(true)
			}
		} else if (type == 'warptext') {
			if (target.hasClass("active")) {
				target.removeClass("active");
				visGraph.nodeWrapText(false)
			} else {
				target.addClass("active");
				visGraph.nodeWrapText(true)
			}
		} else if (type == 'edit' && method == 'addNode') {
			var node = {
				'id': (new Date()).getTime() + '',
				'label': '新增节点',
				'size': 60,
				'x': Math.round(Math.random() * 1000),
				'y': Math.round(Math.random() * 600),
				'shape': 'circle'
			};
			visGraph.addNode(node)
		}
	});

	$(".animenu__nav__child li").on("click", function() {
		var method = $(this).attr('method');
		var type = $(this).closest('ul').attr("type");
		if (type == 'file') {
			fileOperate(method)
		} else if (type == 'layout') {} else if (type == 'cluster') {
			applyCluster(method)
		} else if (type == 'dataset') {
			dataOperate(method)
		} else if (type == 'analyze') {
			analyzeOperate(method)
		}
	});

	$('#layoutNavMenu li .layoutitem').on("click", function() {
		var layoutType = $(this).data('type');
		$('#layout-type').val(layoutType);
		$('#layout-name').text('【' + $(this).text() + '】参数设置');
		initLayoutParams(layoutType)
	});

	$('#bottom-tools-bar > li').on('click', function() {
		var liEle = $(this);
		var type = liEle.attr('type');
		var attr = liEle.attr('attr');
		if (type == 'eyeview') {
			if (attr == 1) {
				liEle.attr('attr', 0);
				liEle.find("i").addClass('fa-eye-slash').removeClass("fa-eye");
				visGraph.showOverView(false)
			} else {
				liEle.attr('attr', 1);
				liEle.find("i").addClass('fa-eye').removeClass("fa-eye-slash");
				visGraph.showOverView(true)
			}
		} else if (type == 'sencebg') {
			liEle.addClass('active').siblings('li[type="sencebg"]').removeClass('active');
			if (attr == 1) {
				$('#graph-panel-wrapper').css({
					'background': '#efefef'
				});
				visGraph.setBackGroundType('png')
			} else {
				$('#graph-panel-wrapper').css({
					'background': ''
				});
				visGraph.setBackGroundType('jpeg')
			}
		}
	});

	$('#bg-style > ul .bgType').on('click', function() {
		var type = $(this).attr('type');
		$('#bg-name').text($(this).find('a').text());
		if (type == 'white') {
			$('#graph-panel-wrapper').css({
				// 'background': 'rgb(240,240,240)'
				'background': 'rgb(255,255,255)'
			});
			visGraph.setBackGroundType('png')
		} else {
			var $panel = $('.vis-network');
			$panel.removeClass('bg1');
			$panel.addClass(type);
			$('#graph-panel-wrapper').css({
				'background': ''
			});
			visGraph.setBackGroundType('jpeg')
		}
	});

	$('#entity-shape > ul .shape').on('click', function() {
		var type = $(this).attr('type');
		$('#node-shape').text($(this).find('a').text());
		visGraph.setNodeShape(type)
	});

	$('#line-type > ul .lineType').on('click', function() {
		var type = $(this).attr('type');
		$('#line-name').text($(this).find('a').text());
		visGraph.setLineType(type)
	});

	$('#searchBtn').on('click', function() {
		var value = $.trim($('#seachKey').val());
		if (value.length > 0) {
			visGraph.findNode(value);
			showNodeInfo(visGraph.currentNode)
		}
	});

	$('#bottom-tools-bar > .btnwrap li').on('click', function() {
		var method = $(this).attr('method');
		visGraph.rightMenuOprate(method)
	});

	$('#layout-type').on('change', function() {
		var layoutType = $(this).val();
		if (layoutType) {
			initLayoutParams(layoutType)
		}
	});

	$('#layoutParam-reset').on('click', function() {
		var config = {};
		$('#layout-params .param').each(function() {
			config[$(this).attr('name')] = $(this).val()
		});
		resetLayoutConfig(config)
	});

	$('#demo-nav').on('click', function() {
		demoDataSelector()
	});

	$('#three-sence').on('click', function() {
		showThreeSence()
	});

	$('#runLayotBtn').on('click', function() {  //todo 快速弹性布局模型

		var btn = $(this);
		var layoutType = $('#layout-type').val();

		if (!layoutType) {
			return false
		}
		if (visGraph.getGraphData().nodes.length == 0) {
			return false
		}
		if (btn.hasClass('btn-primary')) {
			btn.removeClass('btn-primary').addClass('btn-danger').html('<i class="fa fa-pause"></i>停止布局');
			var layoutType = $('#layout-type').val();
			if (layoutType && layoutType.length > 0) {
				runLayout(layoutType)
			}
		} else {
			btn.removeClass('btn-danger').addClass('btn-primary').html('<i class="fa fa-play"></i>开始布局');
			stopLayout()
		}
	});

	$('#labelshowBtn').on('click', function() {
		var btn = $(this).find('.fa');
		if (btn.hasClass('fa-toggle-off')) {
			btn.removeClass('fa-toggle-off').addClass('fa-toggle-on');
			visGraph.switchNodeTips(1)
		} else {
			btn.removeClass('fa-toggle-on').addClass('fa-toggle-off');
			visGraph.switchNodeTips(0)
		}
	});

	$('#node-color-rank-apply').on('click', function() {
		var type = $('#node-prop-type').val();
		var nodeColorStart = $('#node-color-start').val();
		var nodeColorEnd = $('#node-color-end').val();
		visGraph.nodeMapColorsByDegree(type, [nodeColorStart, nodeColorEnd])
	});

	$('#node-size-rank-apply').on('click', function() {
		var type = $('#node-size-type').val();
		var nodeMinSize = parseInt($('#node-size-min').val());
		var nodeMaxSize = parseInt($('#node-size-max').val());
		visGraph.nodeMapSizeByDegree(type, [nodeMinSize, nodeMaxSize])
	});

	$('#fullscreen').on('click', function() {
		var ele = $(this);
		var isfull = ele.attr("isfull");
		if (isfull == 'false') {
			fullScreen();
			ele.attr("isfull", "true").attr('title', '退出全屏');
			ele.find('i').removeClass('fa-arrows-alt').addClass('fa-compress')
		} else {
			exitfullscreen();
			ele.attr("isfull", "false").attr('title', '全屏');
			ele.find('i').removeClass('fa-compress').addClass('fa-arrows-alt')
		}
	});

	$('.colorpicker-component').colorpicker({
		useAlpha: false
	});

	$('#linkColorType').on('change', function() {
		var type = parseInt($(this).val());
		if (type == 2) {
			$('#linkColorWrapper').show()
		} else {
			$('#linkColorWrapper').hide();
			visGraph.setLinkColorType(type)
		}
	});

	$('#linkArrowShow').on('change', function() {
		var type = $(this).val();
		type = type == 'true' ? true : false;
		visGraph.setLinkArrowShow(type)
	});

	$('#linkLabelShow').on('change', function() {
		var type = $(this).val();
		type = type == 'true' ? true : false;
		visGraph.showLinkLabel(type)
	});

	$('.input-group a.col2').on('click', function() {
		var target = $(this).attr('tarele');
		var method = $(this).attr('method');
		var value = $('#' + target).val();
		if (value.length == 0) {
			return
		}
		debugger
		if (method == 'setNodeLabelWithDegree') {
			visGraph.setNodeLabelWithDegree(parseInt(value))
		} else if (method == 'setNodeColor') {
			visGraph.setNodeColor(value)
		} else if (method == 'setLabelColor') {
			visGraph.setLabelColor(value)
		} else if (method == 'setLinkColor') {
			visGraph.setLinkColor(value)
		} else if (method == 'setNodeFont') {
			visGraph.setNodeFont(value)
		} else if (method == 'setTextPosition') {
			visGraph.setTextPosition(value)
		} else if (method == 'setLinkFont') {
			visGraph.setLinkFont(value)
		} else if (method == 'setLinkLabelColor') {
			visGraph.setLinkLabelColor(value)
		} else if (method == 'setArrowRadius') {
			visGraph.setArrowRadius(value)
		}
	});

	$('#find-node-nlevel').on('click', function() { //todo 查找n层关系
		var nodelabel = $('#l-node').val();
		var layer = parseInt($('#l-layer').val());
		visGraph.nLayerRelates(nodelabel, layer)
	});

	$('#path-analyze-btn').on('click', function() {
		var snode = $.trim($('#p-s-node').val());
		var tnode = $.trim($('#p-t-node').val());
		visGraph.pathAnalyze(snode, tnode)
	});

	$('#spath-analyze-btn').on('click', function() {
		var snode = $.trim($('#sp-s-node').val());
		var tnode = $.trim($('#sp-t-node').val());
		visGraph.findShortPath(snode, tnode)
	});

	$('#node-filter-btn').on('click', function() {
		var type = $('#node-filter-type').val();
		var condition = parseInt($('#node-filter-con').val());
		var value = parseInt($('#node-filter-value').val());
		visGraph.filterNodes(type, condition, value)  //todo 过滤节点visgraph
	});

	$('#node2-filter-btn').on('click', function() {
		var type = $('#node2-filter-type').val();
		var condition = parseInt($('#node2-filter-con').val());
		var value = parseInt($('#node2-filter-value').val());
		visGraph.filterSizes(type, condition, value)  //todo 过滤节点daxiaovisgraph
	});

	$('#link-filter-btn').on('click', function() {
		var condition = parseInt($('#link-filter-con').val());
		var value = parseInt($('#link-filter-value').val());
		visGraph.filterLinks(condition, value)
	});

	$('#statistic-nav').on('click', function() {  //on() 方法在被选元素及子元素上添加一个或多个事件处理程序。
		var statistic = visGraph.getGraphStatistic();//todo 返回静态数据
		if (statistic) {
			$('#g-nodes').text(statistic['nodesCount']);
			$('#g-links').text(statistic['linksCount']);
			$('#g-density').text(statistic['density']);
			$('#g-avgdegree').text(statistic['avgDegree']);
			$('#g-avgindegree').text(statistic['avgInDegree']);
			$('#g-avgoutdegree').text(statistic['avgOutDegree']);
			$('#g-avgwdegree').text(statistic['avgWeightDegree'])  //设置或返回被选元素的文本内容
		}
	});
	
	require.config({
		paths: {
			"nongyao":["../../static/foodKG/graphdata/nongyao"],
			"shouyao":["../../static/foodKG/graphdata/shouyao"],
			"tianjiaji":["../../static/foodKG/graphdata/tianjiaji"],
			"law":["../../static/foodKG/graphdata/law"],
			"food_anquan":["../../static/foodKG/graphdata/food_anquan"],
			"first":["../../static/foodKG/graphdata/first"],
			"second":["../../static/foodKG/graphdata/second"],
			"third":["../../static/foodKG/graphdata/third"],
			"fourth":["../../static/foodKG/graphdata/fourth"],
			"fifth":["../../static/foodKG/graphdata/fifth"],
			"sixth":["../../static/foodKG/graphdata/sixth"],
			"seventh":["../../static/foodKG/graphdata/seventh"],
			"eighth":["../../static/foodKG/graphdata/eighth"],
			"ninth":["../../static/foodKG/graphdata/ninth"],
			"tenth":["../../static/foodKG/graphdata/tenth"],
			"tree": ["../../static/foodKG/graphdata/tree"],
			"data1": ["../../static/foodKG/graphdata/data1"],
			"data2": ["../../static/foodKG/graphdata/data2"],
			"data3": ["../../static/foodKG/graphdata/data3"],
			"data5": ["../../static/foodKG/graphdata/data5"],
			"data6": ["../../static/foodKG/graphdata/data6"],
			"data7": ["../../static/foodKG/graphdata/data7"],
			"data8": ["../../static/foodKG/graphdata/data8"],
			"data9": ["../../static/foodKG/graphdata/data9"],
			"data11": ["../../static/foodKG/graphdata/data11"],
			"data12": ["../../static/foodKG/graphdata/data12"],
			"data13": ["../../static/foodKG/graphdata/data13"],
			"dolphins": ["../../static/foodKG/graphdata/dolphins"],
			"karate": ["../../static/foodKG/graphdata/karate"],
			"karate-color": ["../../static/foodKG/graphdata/karate-color"],
			"football": ["../../static/foodKG/graphdata/football"],
			"tree_data": ["../../static/foodKG/graphdata/tree_data"],
			"dna": ["../../static/foodKG/graphdata/dna"],
			"honglou": ["../../static/foodKG/graphdata/honglou"],
			"xiyouji": ["../../static/foodKG/graphdata/xiyouji"],
			"shuihu": ["../../static/foodKG/graphdata/shuihu"],
			// "sanguo": ["../graphdata/sanguo"],
			"sanguo": ["../../static/foodKG/graphdata/sanguo"],
			"guzhishusong": ["../../static/foodKG/graphdata/guzhishusong"],
			"gaoxueya": ["../../static/foodKG/graphdata/gaoxueya"],
			"guanxinbing": ["../../static/foodKG/graphdata/guanxinbing"],
			"tangniaobing": ["../../static/foodKG/graphdata/tangniaobing"],
			"yingyangxue": ["../../static/foodKG/graphdata/yingyangxue"],
			"geshi1": ["../../static/foodKG/graphdata/geshi1"],


		}
	});

	var container = document.getElementById("graph-panel-wrapper");
	visGraph = new VisGraph(container, {
		'apikey': 'dbp',
		'rightMenu': {
			nodeMenu: NodeRightMenu,
			linkMenu: LinkRightMenu,
			clusterMenu: BoxRightMenu
		},
		highLightNeiber: true,
		wheelZoom: 1,
		marginLeft: -200,
		marginTop: -20
	});
	debugger
	visGraph.setLabelColor('#edece7')
	drawDemoData("sanguo");
	var layoutType = "fastFR";
	runLayout(layoutType);
	setTimeout(()=>{
	stopLayout();
	},3000)
    visGraph.setLabelColor('#edece7')
	// drawDemoData('sanguo');
	initSlider()
	visGraph.setLabelColor('#edece7')

});

function initSlider() {
	var sliderConfigs = [{
		eleId: '#nodeSize',
		start: 1,
		end: 100,
		value: 20,
		step: 1,
		drag: function(obj) {
			var nodeSize = parseInt(obj.values.toString());
			visGraph.setNodeSize(nodeSize)
		}
	}, {
		eleId: '#nodeRange',
		start: 0,
		end: 20,
		value: [1, 3],
		step: 1,
		drag: function(obj) {
			var rangeNum = obj.values.toString().split(',');
			var minSize = rangeNum[0],
				maxSize = rangeNum[1];
			visGraph.applyNodeSize([parseInt(minSize), parseInt(maxSize)])
		}
	}, {
		eleId: '#linkAlpha',
		start: 0,
		end: 1,
		value: 0.8,
		step: 0.1,
		drag: function(obj) {
			var alpha = obj.values.toString();
			visGraph.setLinkAlpha(alpha)
		}
	}, {
		eleId: '#linkRange',
		start: 0,
		end: 100,
		value: [5, 15],
		step: 1,
		drag: function(obj) {
			var rangeNum = obj.values.toString().split(',');
			var minSize = rangeNum[0],
				maxSize = rangeNum[1];
			visGraph.applyLinkWeight([parseInt(minSize), parseInt(maxSize)])
		}
	}, ];
	sliderConfigs.forEach(function(sliderConf) {
		new slider({
			container: sliderConf.eleId,
			start: sliderConf.start,
			end: sliderConf.end,
			step: sliderConf.step,
			value: sliderConf.value,
			showValue: true,
			fixValue: true,
			ondrag: sliderConf.drag
		})
	})
}

function applyCluster(clusterType) {
	layer.open({
		type: 1,
		title: "设置聚类效果",
		content: '<div style="width:200px;margin:20px 50px;"><label><input type="radio" name="effectType" value="0" checked/>仅颜色区分</label>' + '</br><label><input type="radio" name="effectType" value="1"/>颜色+区域</label></div>',
		area: ['300px', '200px'],
		shade: 0,
		btn: ['确定', '关闭'],
		yes: function(index, layero) {
			var effectType = $('input[type="radio"][name="effectType"]:checked').val();
			visGraph.clearClusters();
			cluster(effectType);
			layer.close(index)
		}
	});

	function cluster(effectType) {
		if (clusterType == 'kmeans') {
			layer.open({
				type: 1,
				title: "设置计算次数",
				content: '<div style="width:250px;margin:10px auto;color:#333;"><div class="input-group">' + '<span class="input-group-addon">计算次数</span>' + '<input id="clusterNum" type="number" value="5" class="form-control" placeholder="划分群组数量" style="background-color:#fff;color:#333!important;">' + '</div></div>',
				area: ['300px', '200px'],
				shade: 0,
				btn: ['确定', '关闭'],
				yes: function(index, layero) {
					var clusterNum = $.trim($('#clusterNum').val());
					var graph = visGraph.getVisibleData();
					var cluster = new ClusterFactory(graph).createClutser(clusterType);
					if (cluster) {
						var clusters = cluster.applay({
							'numClusters': clusterNum
						});
						if (effectType == 1) {
							visGraph.addClusterContainer(clusters)
						}
					}
					layer.close(index)
				}
			})
		} else {
			var graph = visGraph.getVisibleData();

			var cluster = new ClusterFactory(graph).createClutser(clusterType);
			if (cluster) {
				var clusters = cluster.applay();
				if (effectType == 1) {
					visGraph.addClusterContainer(clusters)
				}
			}
		}
	}
}

function fullScreen() {
	var element = $('body')[0];
	var method = "RequestFullScreen";
	var usablePrefixMethod;
	["webkit", "moz", "ms", "o", ""].forEach(function(prefix) {
		if (usablePrefixMethod) return;
		if (prefix === "") {
			method = method.slice(0, 1).toLowerCase() + method.slice(1)
		}
		var typePrefixMethod = typeof element[prefix + method];
		if (typePrefixMethod + "" !== "undefined") {
			if (typePrefixMethod === "function") {
				usablePrefixMethod = element[prefix + method]()
			} else {
				usablePrefixMethod = element[prefix + method]
			}
		}
	});
	return usablePrefixMethod
}

function exitfullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen()
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen()
	} else if (document.webkitCancelFullScreen) {
		document.webkitCancelFullScreen()
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen()
	}
}

function initLayoutParams(layoutType) {
	var gdata = {
		nodes: [],
		links: []
	};
	console.log(layoutType);
	var layout = new LayoutFactory(gdata, {
		'apikey': 'dbp'
	}).createLayout(layoutType);
	var configs = layout.getConfig();
	var html = '';
	configs.forEach(function(config) {
		html += '<tr>';
		for (var param in config) {
			if (param == 'label') {
				html += '<td>' + config['label'] + '</td>'
			} else {
				var paramValue = config[param];
				if (paramValue instanceof Array) {
					html += '<td>';
					html += '<select name="' + param + '" class="small-selector param">';
					paramValue.forEach(function(option) {
						html += '<option value="' + option['value'] + '">' + option['label'] + '</option>'
					});
					html += '</select></td>'
				} else {
					html += '<td><input class="param" type="number" name="' + param + '" value="' + paramValue + '"></td>'
				}
			}
		}
		html += '</tr>'
	});
	$('#layout-params').html(html)
}

var currentLayout = null,
	loopName = null;

function runLayout(layoutType) {

	var _graph = visGraph.getVisibleData();
	console.log(_graph)
	currentLayout = new LayoutFactory(_graph, {
		'apikey': 'dbp'
	}).createLayout(layoutType);
	if (currentLayout) {
		visGraph.hideAllLink();
		var config = {};
		$('#layout-params .param').each(function() {   //为每个匹配元素规定要运行的函数
			config[$(this).attr('name')] = $(this).val()  // attr 是设置属性或者返回属性
		});
		console.log(config)
		currentLayout.resetConfig(config);

		function loop() {
			cancelAnimationFrame(loopName);
			currentLayout.runLayout();
			loopName = requestAnimationFrame(loop)
		};
		loopName = requestAnimationFrame(loop)
	}
}

function stopLayout(layoutType) {
	cancelAnimationFrame(this.loopName);
	visGraph.translateToCenter();
	visGraph.showAllLink()
}

function resetLayoutConfig(config) {
	if (currentLayout) {
		currentLayout.resetConfig(config)
	}
}

function fileOperate(method) {
	if (method == 'saveimg') {
		visGraph.saveImage(2000, 2000)
	} else if (method == 'saveLocal') {
		saveToLocal()
	} else if (method == 'history') {
		getSaveHistory()
	} else if (method == 'exportJson') {
		visGraph.exportJsonFile()
	}
}

function analyzeOperate(type) {

	if (type == 'typeMapSet') {
		nodeTypeSetter(visGraph.getTypeMap())
	} else if (type == 'listAnalyze') {
		showDataTable()
	} else if (type == 'visual-any') {
		visualAnalyze()
	} else if (type == 'lineTypeMapSet') {
		lineTypeSetter(visGraph.getLineTypeMap())
	}
}

function saveToLocal() {
	var graphData = visGraph.serialized();
	if (graphData.nodes.length == 0) {
		layer.msg("没有图数据信息哦~~");
		return
	}
	var graphCache = localStorage.getItem("graphCache");
	graphCache = JSON.parse(graphCache);
	if (graphCache && graphCache.length > 5) {
		layer.msg("历史记录过多，删除部分后再保存吧");
		return
	}
	layer.open({
		type: 1,
		title: "保存记录",
		content: '<div style="width:250px;margin:10px auto;color:#333;"><div class="input-group">' + '<span class="input-group-addon">名称</span>' + '<input id="graphName" type="text" class="form-control" placeholder="据该名称从历史记录中选择" style="background-color:#fff;color:#333!important;">' + '</div></div>',
		area: ['300px', '200px'],
		shade: 0,
		btn: ['保存', '关闭'],
		yes: function(index, layero) {
			var graphName = $.trim($('#graphName').val()); //去除字符串两端的空白字符
			if (graphName.length > 1 && graphName.length <= 10) {
				var graphCache = localStorage.getItem("graphCache");
				if (graphCache == null) {
					graphCache = []
				} else {
					graphCache = JSON.parse(graphCache)
				}
				graphCache.push({
					'id': new Date().getTime(),
					'name': graphName,
					'graph': graphData
				});
				localStorage.setItem("graphCache", JSON.stringify(graphCache));
				layer.close(index);
				layer.msg("数据已保存完成")
			} else {
				layer.msg("名称不合法~")
			}
		}
	})
}

function getSaveHistory() {
	var graphCache = localStorage.getItem("graphCache");
	graphCache = JSON.parse(graphCache);
	if (graphCache == null) {
		$('#history-list').html('<div style="text-align:center;color:#ddd;margin-top:10px;">暂无历史记录</div>');
		return
	}
	var historyList = '';
	for (var i = graphCache.length - 1; i >= 0; i--) {
		var dateTime = graphCache[i]['id'];
		historyList += '<div class="listItem" data-index="' + dateTime + '"><a class="delBtn" href="javascript:;"><i class="fa fa-close"></i></a><div class="listItemContent">';
		historyList += '<div class="listItemContent-date">' + getCurrentDate(2, dateTime) + '</div>';
		historyList += '<div class="listItemContent-content">' + graphCache[i]['name'] + '</div></div></div>'
	}
	$('#history-list').html(historyList);
	$('#history-list .listItemContent-content').on('click', function() {
		var dataIndex = $(this).closest('.listItem').attr('data-index');
		graphCache.forEach(function(graphItem) {
			if (graphItem['id'] == dataIndex) {
				renderGraph(graphItem.graph)
			}
		})
	});
	$('.listItem .delBtn').on('click', function() {
		var dataIndex = $(this).closest('.listItem').attr('data-index');
		var newGraphCache = [];
		graphCache.forEach(function(graphItem) {
			if (graphItem['id'] != dataIndex) {
				newGraphCache.push(graphItem)
			}
		});
		graphCache = newGraphCache;
		localStorage.setItem("graphCache", JSON.stringify(graphCache));
		$(this).closest('.listItem').remove()
	})
}

function getCurrentDate(format, dateTime) {
	var now = new Date(dateTime);
	var year = now.getFullYear();
	var month = now.getMonth();
	var date = now.getDate();
	var day = now.getDay();
	var hour = now.getHours();
	var minu = now.getMinutes();
	var sec = now.getSeconds();
	month = month + 1;
	if (month < 10) {
		month = "0" + month
	}
	if (date < 10) {
		date = "0" + date
	}
	if (hour < 10) {
		hour = "0" + hour
	}
	if (minu < 10) {
		minu = "0" + minu
	}
	if (sec < 10) {
		sec = "0" + sec
	}
	var time = "";
	if (format == 1) {
		time = year + "-" + month + "-" + date
	} else if (format == 2) {
		time = year + "-" + month + "-" + date + " " + hour + ":" + minu + ":" + sec
	}
	return time
}

function showDataTable() {
	debugger
	var graphData = visGraph.getGraphData();
	layer.open({
		type: 2,
		title: "图数据列表",
		content: "list_analyze",
		area: ['1000px', '600px'],
		maxmin: true,
		shade: false,
		success: function(layero, index) {
			var iframeWin = window[layero.find('iframe')[0]['name']];
			iframeWin.setGraphData(graphData)
		}
	})
}

function visualAnalyze() {

	var graphData = visGraph.getGraphData();
	layer.open({
		type: 2,
		title: "1",
		content: "visualAnalyze",    // 和django配置的Url对应   path('index/visualAnalyze/', views.visualAnalyze, name="visualAnalyze"), 中的visualAnalyze
		area: ['1000px', '600px'],
		maxmin: true,
		shade: false,
		success: function(layero, index) {
			var iframeWin = window[layero.find('iframe')[0]['name']];
			iframeWin.setGraphData(graphData)
		}
	})
}

function uploadFileData() {
	layer.open({
		type: 2,
		title: "三元组设置",
		content: "uploadfile/rdf.html",
		maxmin: true,
		area: ['900px', '80%'],
		btn: ['绘制可视化图', '取消'],
		yes: function(index, layero) {
			var iframeWin = window[layero.find('iframe')[0]['name']];
			var _graphData = iframeWin.getGraphData();
			renderGraph(_graphData)
		}
	})
}

function importData() {
	layer.open({
		type: 2,
		title: "点边数据导入",
		content: "uploadfile/graph_data.html",
		area: ['900px', '80%'],
		maxmin: true,
		btn: ['绘制可视化图', '取消'],
		yes: function(index, layero) {
			var iframeWin = window[layero.find('iframe')[0]['name']];
			var graphData = iframeWin.getGraphData();
			renderGraph(graphData)
		}
	});
	$('#top-bar').removeClass('navbox-open')
}

function importGefx() {
	layer.open({
		type: 2,
		title: "gefx文件导入",
		content: "uploadfile/uploadgefx.html",
		area: ['600px', '350px'],
		btn: ['确定上传', '关闭'],
		yes: function(index, layero) {
			var iframeWin = window[layero.find('iframe')[0]['name']];
			iframeWin.uploadFile()
		}
	})
}

function resetGraphData() {
	layer.open({
		type: 2,
		title: "设置图数据",
		content: "dataSetter.html",
		area: ['1000px', '600px'],
		btn: ['应用绘图', '格式化校验', '关闭'],
		yes: function(index, layero) {
			var iframeWin = window[layero.find('iframe')[0]['name']];
			var graphData = iframeWin.getJsonData();
			if (graphData == null) {
				layer.msg('JSON数据为空或不合法', {
					icon: 5
				});
				return false
			}
			if (graphData['nodes'] == null) {
				layer.msg('JSON数据中未设置节点集合', {
					icon: 5
				});
				return false
			}
			renderGraph(graphData);
			layer.close(index)
		},
		btn2: function(index, layero) {
			var indexLoad = layer.load(1, {
				time: 2 * 1000
			});
			var iframeWin = window[layero.find('iframe')[0]['name']];
			if (!iframeWin.fomaterJson()) {
				layer.msg('JSON数据为空或不合法', {
					icon: 5
				})
			};
			layer.close(indexLoad);
			return false
		},
		btn3: function(index, layero) {
			layer.close(index)
		}
	})
}

function dataOperate(type) {
	if (type == 'uploadfile') {
		uploadFileData()
	} else if (type == 'importData') {
		importData()
	} else if (type == 'setdata') {
		resetGraphData()
	} else if (type == 'gefxfile') {
		importGefx()
	}
}

function initLayoutMenu() {     //todo 初始化布局模型
	var layoutTypes = [{
		type: 'force',
		label: '力学模型类',
		icon: 'fa fa-share-alt',
		childTypes: [{
			type: 'fastFR',
			label: '快速弹性布局'
		}, {
			type: 'frDirect',
			label: '弹簧力学布局'
		}
		// , {
		// 	type: 'fruchtermanReingold',
		// 	label: 'FruchReingold'
		// }, {
		// 	type: 'spring2',
		// 	label: 'SpringLayout'
		// }
		]
	}
	, {
		type: 'circle',
		label: '圆形类',
		icon: 'fa fa-circle-o',
		childTypes: [{
			type: 'concentric',
			label: '中心圆形布局'
		},
		// 	{
		// 	type: 'singleCirlce',
		// 	label: '圆形布局'
		// },
			{
			type: 'dualCirlce',
			label: '双圆环布局'
		}
		// , {
		// 	type: 'layerCircle',
		// 	label: '多层圆环布局'
		// }, {
		// 	type: 'sphere',
		// 	label: '球体布局'
		// }
		]
	},
		 {
		type: 'other',
		label: '其他布局',
		icon: 'fa fa-code-fork',
		childTypes: [{
			type: 'hive',
			label: '放射形布局'
		}
		// , {
		// 	type: 'layered',
		// 	label: '分层布局'
		// }, {
		// 	type: 'grid',
		// 	label: '矩形布局'
		// }, {
		// 	type: 'noverlap',
		// 	label: '节点不重叠'
		// }
		]
	}];
	var htmlTemplates = [];
	layoutTypes.forEach(function(layoutType) {
		htmlTemplates.push('<li>');
		htmlTemplates.push('<a method="' + layoutType.type + '" href="javascript:;"><i class="' + layoutType.icon + '"></i>' + layoutType.label + '<i class="fa fa-sort-desc"></i></a>');
		htmlTemplates.push('<ul class="list1">');
		layoutType.childTypes.forEach(function(childType) {
			htmlTemplates.push('<li class="layoutitem" data-type="' + childType.type + '">' + childType.label + '</li>')
		});
		htmlTemplates.push('</ul>');
		htmlTemplates.push('</li>')
	});
	$('#layoutNavMenu').html(htmlTemplates.join(''))
}

function nodeTypeSetter(nodeTypeMap) {
	var data = [];
	for (var nodeType in nodeTypeMap) {
		data.push({
			'type': nodeType,
			'value': nodeTypeMap[nodeType]
		})
	}
	layer.open({
		type: 2,
		title: "点类型显示设置",
		content: "nodeTypeSetter.html",
		area: ['750px', '500px'],
		btn: ['应用', '关闭'],
		success: function(layero, index) {
			var iframeWin = window[layero.find('iframe')[0]['name']];
			iframeWin.initTypeTable(data)
		},
		yes: function(index, layero) {
			var iframeWin = window[layero.find('iframe')[0]['name']];
			var typeMapStyle = iframeWin.getNodeSetter();
			visGraph.renderNodeStyle(typeMapStyle);
			layer.close(index)
		},
		btn2: function(index, layero) {
			layer.close(index)
		}
	})
}

function lineTypeSetter(lineTypeMap) {

	var data = [];
	for (var lineType in lineTypeMap) {
		data.push({
			'type': lineType,
			'value': lineTypeMap[lineType]
		})
	}
	layer.open({
		type: 2,
		title: "边类型显示设置",
		content: "lineTypeSetter.html",
		area: ['750px', '500px'],
		btn: ['应用', '关闭'],
		success: function(layero, index) {
			var iframeWin = window[layero.find('iframe')[0]['name']];
			iframeWin.initTypeTable(data)
		},
		yes: function(index, layero) {
			var iframeWin = window[layero.find('iframe')[0]['name']];
			var typeMapStyle = iframeWin.getLineSetter();
			visGraph.renderLineStyle(typeMapStyle);
			layer.close(index)
		},
		btn2: function(index, layero) {
			layer.close(index)
		}
	})
}

function demoDataSelector() {  //todo 展示数据
	layer.open({
		type: 2,
		title: "图谱选择",
		// content: "demo_data.html",
		content: "demo_data",
		area: ['700px', '500px']
	})
}

function showThreeSence() {
	const width = $(window).width(), height = $(window).height();
	layer.open({
		type: 2,
		title: "三维场景",
		content: "../3d/graph3d.html?showdemo=1",
		area: [width + 'px', height + 'px'],
		maxmin: true,
		shade: false,
		success: function(layero, index) {
			var iframeWin = window[layero.find('iframe')[0]['name']];
			iframeWin.renderGraph(visGraph.serialized())
		}
	})
}

function setAndFindNode(lable) {
	$('#seachKey').val(lable);
	$('#searchBtn').trigger("click")
}

function drawDemoData(dataNo, type) {
	$('#loading').show();
	layer.load(2);
	require([dataNo], function(d) {
		renderGraph(d.data, type)
	})
}

function loadGraph(gexfFile) {

	$('#loading').show();
	$.ajax({
		url: (document.location.hash.length > 1 ? document.location.hash.substr(1) : gexfFile),
		dataType: "xml",
		success: function(data) {
			var gnodes = [],
				glinks = [];
			var _g = $(data).find("graph"),
				_nodes = _g.children().filter("nodes").children();
			$(_nodes).each(function() {
				var _n = $(this),
					_id = _n.attr("id"),
					_label = _n.attr("label") || _id,
					_pos = _n.find("viz\\:position,position"),
					_size = _n.find("viz\\:size,size").attr("value") || 0.5,
					_col = _n.find("viz\\:color,color");
				gnodes.push({
					id: _id,
					label: _label,
					x: Math.round(_pos.attr("x")),
					y: Math.round(_pos.attr("y")),
					color: 'rgb(' + _col.attr("r") + ',' + _col.attr("g") + ',' + _col.attr("b") + ')',
					size: Math.round(10 * _size)
				})
			});
			_edges = _g.children().filter("edges").children();
			$(_edges).each(function() {
				var _e = $(this),
					_w = _e.find('attvalue[for="weight"]').attr('value') || _e.attr('weight');
				glinks.push({
					source: _e.attr("source"),
					target: _e.attr("target"),
					weight: _w
				})
			});
			renderGraph({
				nodes: gnodes,
				links: glinks
			})
		}
	})
}

function renderGraph(graphData, icontype) {
    debugger
	$('#loading').show();
    if(graphData==undefined ||graphData ==""){
    	$('#loading').hide()
    	return false;
	}
	var nodeColor = $.trim($('#nodeColor').val());
	var labelColor = '#ebe9e2';
	var linkColorType = $('#linkColorType').val();
	var linkColor = $.trim($('#linkColor').val());
	var nodeCount = graphData.nodes.length;
	var showlabel = true;

	var config = {
		'nodeColor': nodeColor,
		'nodeSize': 20,
		'linkColorType': linkColorType,
		'linkColor': linkColor,
		'labelColor': '#ebe9e2',
		'showlabel': showlabel
	};
	visGraph.drawData(graphData, config, icontype);
	visGraph.setZoom('auto');
	$("#nodeNum").text(nodeCount);
	$("#linkNum").text(visGraph.links.length);
	layer.closeAll();
	$('#loading').hide()
	//自动触发弹性布局
	visGraph.setLabelColor('#edece7')
	var layoutType = "fastFR";
	runLayout(layoutType);
	setTimeout(()=>{
	stopLayout();
	},3000)
	visGraph.setLabelColor('#edece7')
}

window.renderGraph = renderGraph;
window.loadGraph = loadGraph;
layui.config({
	// base: '../../vip/assets/module/'
	base: '../../static/foodKG/vip/assets/module/'
}).use(['layer', 'config'], function() {
	var $ = layui.jquery;
	debugger
	var layer = layui.layer;
	var config = layui.config;
	getCurrentUser();

	function getCurrentUser() {
		var currentUser = config.getToken();
		if (currentUser == null || typeof(currentUser) == undefined) {
			layer.alert('~您还没有登录~', {
				title: '提示',
				icon: 5,
				closeBtn: 0,
				btns: null,
				anim: 2,
				shadeClose: false
			}, function() {
				toLogin()
			})
		}
	};


	function toLogin() {
		var currentUser = config.getToken();
		if (currentUser == null || typeof(currentUser) == undefined) {
			layer.open({
				type: 2,
				title: false,
				shadeClose: false,
				shade: 0.8,
				area: ['800px', '500px'],
				content: '../vip/login.html',
				// content: '../../vip/login.html',
			})
		}
	};

	function loginSuccess(loginuser) {
		layer.closeAll()
	};
	window.loginSuccess = loginSuccess
});