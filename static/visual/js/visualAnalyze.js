var graphDataCache=null;

autoSize();
function autoSize(){
   var height = window.innerHeight -25;
   $('.wrapper').css({height:height});
   $("#visual-area").css({height:height});
}

function setGraphData(graphData){
     graphDataCache=graphData;
     genreateWordCloud('degree');
}
window.setGraphData = setGraphData;

require.config({
    paths: {
        echarts: '../../foodKG/scripts/echarts/echarts'
    }
});

function genreateWordCloud(type){
    require(
        [
            '../../foodKG/scripts/echarts/echarts',
            '../../foodKG/scripts/echarts/chart/wordCloud'
        ],
        function (ec) {  
            var myChart = ec.init(document.getElementById('visual-area'));
            myChart.showLoading();
            var options = buildWorldCloudOptions(graphDataCache.nodes,type);
            myChart.setOption(options);
            myChart.hideLoading();
            window.onresize = myChart.resize;
        }
    );
}

function genreatBar(type){
    require(
        [
            '../../foodKG/scripts/echarts/echarts',
            '../../foodKG/scripts/echarts/chart/bar',
            '../../foodKG/scripts/echarts/chart/line',
            '../../foodKG/scripts/echarts/chart/scatter'
        ],
        function (ec) {  
            var myChart = ec.init(document.getElementById('visual-area'));
            myChart.showLoading();
            var options = buildBarOptions(graphDataCache.nodes,type);
            myChart.setOption(options);
            myChart.hideLoading();
            window.onresize = myChart.resize;
        }
    );
}

function genreatScater(){
    require(
        [
            '../../foodKG/scripts/echarts/echarts',
            '../../foodKG/scripts/echarts/chart/scatter'
        ],
        function (ec) {  
            var myChart = ec.init(document.getElementById('visual-area'));
            myChart.showLoading();
            var options = buildScaterOptions(graphDataCache.nodes);
            myChart.setOption(options);
            myChart.hideLoading();
            window.onresize = myChart.resize;
        }
    );
}

function buildWorldCloudOptions(nodes,type){
    sortNodes(nodes,type);
    var datas = [];
    nodes.forEach(function(node,i){
       if(i < 300){
           var degree=getDegree(node,type);
           datas.push({
                name: node.label,
                value: degree*10,
                itemStyle: createRandomItemStyle()
            }); 
       }
    });

    var option = {
        title : {
            text: '1'
        },
        toolbox: {
            show: true,
            feature: {
                restore: {title:'换一种', show: true},
                saveAsImage: {show: true}
            }
        },
        series: [{
            type: 'wordCloud',
            //sizeRange: [14, 80],
            size: ['95%', '95%'],
            //rotationRange: [-45, 0, 45, 90],
            textRotation : [0, 45, 90, -45],
            textPadding: 0,
            autoSize: {
                enable: true,
                minSize:14,
                maxSize:80
            },
            data:datas
        }]
    };

    function createRandomItemStyle() {
        return {
            normal: {
                fontFamily:'sans-serif',
                color: 'rgb(' + [
                    Math.round(Math.random() * 200),
                    Math.round(Math.random() * 200),
                    Math.round(Math.random() * 200)
                ].join(',') + ')'
            }
        };
    }

    function getDegree(node,type){
        if(type=='degree'){
            return (node.inLinks||[]).length+(node.outLinks||[]).length;
        }else if(type=='indegree'){
            return (node.inLinks||[]).length;
        }else{
            return (node.outLinks||[]).length;
        }
    }
    return option;
}

function buildBarOptions(nodes,type){
    var degreeDatas = {};
    nodes.forEach(function(node,i){
       var indegree = (node.inLinks||[]).length;
       var outdegree = (node.outLinks||[]).length;
       var degree = indegree+outdegree;
       if(type=='degree'){
            degree = indegree+outdegree;
       }else if(type=='indegree'){
            degree = indegree;
       }else if(type=='outdegree'){
            degree = indegree;
       }indegree
       degreeDatas[degree+'']=(degreeDatas[degree+'']||0)+1;
    });
    var cname="度";
    if(type=='indegree'){
        cname="入度";
    }else if(type=='outdegree'){
        cname="出度";
    }

    var xData = [];
    var degreeData = [];
    for(var degree in degreeDatas){
        xData.push(degree);
    }
    xData.sort(function (a, b) {
      return a-b;
    });
    var degreeCatory=[];
    xData.forEach(function(degree){
        degreeCatory.push(degree);
        degreeData.push(degreeDatas[degree]);
    });
    var option = {
        title : {
            text: '网络中度变化趋势图',
        },
        tooltip : {
            trigger: 'axis',
            formatter : function (params) {
                var param=params[0];
                return param.seriesName+"="+param.name+" 时有 "+param.value+" 个实体";
            }
        },
        legend: {data:[cname]},
        toolbox: {
            show : true,
            feature : {
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        xAxis : [
            {
                name:'值',
                type : 'category',
                data : degreeCatory,
                splitLine:{show:false},
                splitArea : {show : true}
            }
        ],
        yAxis : [
            {
                name:'实体数',
                type : 'value',
                splitLine:{show:false},
                splitArea : {show : true}
            }
        ],
        series : [
            {
                name:cname,
                type:'bar',
                data:degreeData
            }
        ]
    };

    return option;
}

function buildScaterOptions(nodes){
    var degreeDatas = {},indegreeDatas={},outdegreeDatas={};
    nodes.forEach(function(node,i){
       var indegree = (node.inLinks||[]).length;
       var outdegree = (node.outLinks||[]).length;
       var degree = indegree+outdegree;

       degreeDatas[degree+'']=(degreeDatas[degree+'']||0)+1;
       indegreeDatas[indegree+'']=(indegreeDatas[indegree+'']||0)+1;
       outdegreeDatas[outdegree+'']=(outdegreeDatas[outdegree+'']||0)+1;
    });

    var degreeData = [];
    for(var degree in degreeDatas){
        degreeData.push([Number(degree),degreeDatas[degree+'']]);
    }

    var inDegreeData = [];
    for(var degree in indegreeDatas){
        inDegreeData.push([Number(degree),indegreeDatas[degree+'']]);
    }

    var outDegreeData = [];
    for(var degree in outdegreeDatas){
        outDegreeData.push([Number(degree),outdegreeDatas[degree+'']]);
    }
    var option = {
        title : {
            text: '网络中度的分布'
        },
        tooltip : {
            trigger: 'axis',
            showDelay : 0,
            formatter : function (params) {
                if (params.value.length > 1) {
                    return params.seriesName + "："+params.value[0] +" <br/>" 
                       + "实体数："+params.value[1] ;
                }
                else {
                    return params.seriesName + ':<br/>'
                       + params.name + ' : '
                       + params.value ;
                }
            }
        },
        legend: {
            data:['度','出度','入度']
        },
        toolbox: {
            show : true,
            feature : {
                dataZoom : {show: true},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        xAxis : [
            {
                name:'值',
                type : 'value',
                splitLine:{show:false},
                splitArea : {show : true}
            }
        ],
        yAxis : [
            {
                name:'实体数',
                type : 'value',
                splitLine:{show:false},
                splitArea : {show : true}
            }
        ],
        series : [
            {
                name:'度',
                type:'scatter',
                data: degreeData
            },
            {
                name:'出度',
                type:'scatter',
                data: outDegreeData
            },
            {
                name:'入度',
                type:'scatter',
                data: inDegreeData
            }
        ]
    };
    return option;
}


function sortNodes(nodes,type){
    nodes = nodes.sort(function(n1,n2){
        var n1Indegree=(n1.inLinks||[]).length;
        var n1Outdegree=(n1.outLinks||[]).length;
        var n2Indegree=(n2.inLinks||[]).length;
        var n2Outdegree=(n2.outLinks||[]).length;
        var n1de,n2de;
        if(type == 'degree'){
            n1de=n1Indegree+n1Outdegree;
            n2de=n2Indegree+n2Outdegree;
        }else if(type == 'indegree'){
            n1de=n1Indegree;
            n2de=n2Indegree;
        }else{
            n1de=n1Outdegree;
            n2de=n2Outdegree;
        }
        if (n1de > n2de) {
            return -1;
        } else if (n1de < n2de) {
            return 1;
        } else {
            return 0;
        }
    });
}