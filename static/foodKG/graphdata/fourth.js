define(function (){
    return {
//		data:{"nodes":[{"id":0,"label":"Myriel","type":1,"x":3221,"y":861,"size":45,"color":"rgb(164,7,219)"},{"id":1,"label":"Napoleon","type":1,"x":3522,"y":1052,"size":45,"color":"rgb(164,7,219)"},{"id":2,"label":"Mlle.Baptistine","type":1,"x":2972,"y":702,"size":45,"color":"rgb(225,124,54)"},{"id":3,"label":"Mme.Magloire","type":1,"x":2938,"y":785,"size":45,"color":"rgb(225,124,54)"},{"id":4,"label":"CountessdeLo","type":1,"x":3521,"y":772,"size":45,"color":"rgb(164,7,219)"},{"id":5,"label":"Geborand","type":1,"x":3550,"y":858,"size":45,"color":"rgb(164,7,219)"},{"id":6,"label":"Champtercier","type":1,"x":3566,"y":951,"size":45,"color":"rgb(164,7,219)"},{"id":7,"label":"Cravatte","type":1,"x":3460,"y":968,"size":45,"color":"rgb(164,7,219)"},{"id":8,"label":"Count","type":1,"x":3444,"y":1106,"size":45,"color":"rgb(164,7,219)"},{"id":9,"label":"OldMan","type":1,"x":3358,"y":1141,"size":45,"color":"rgb(164,7,219)"},{"id":10,"label":"Labarre","type":2,"x":2684,"y":822,"size":45,"color":"rgb(225,124,54)"},{"id":11,"label":"Valjean","type":2,"x":2533,"y":557,"size":45,"color":"rgb(225,124,54)"},{"id":12,"label":"Marguerite","type":3,"x":2620,"y":206,"size":45,"color":"rgb(225,124,54)"},{"id":13,"label":"Mme.deR","type":2,"x":2578,"y":907,"size":45,"color":"rgb(225,124,54)"},{"id":14,"label":"Isabeau","type":2,"x":2802,"y":721,"size":45,"color":"rgb(225,124,54)"},{"id":15,"label":"Gervais","type":2,"x":2778,"y":831,"size":45,"color":"rgb(225,124,54)"},{"id":16,"label":"Tholomyes","type":3,"x":2267,"y":31,"size":45,"color":"rgb(75,154,102)"},{"id":17,"label":"Listargetlier","type":3,"x":2376,"y":-228,"size":45,"color":"rgb(75,154,102)"},{"id":18,"label":"Fameuil","type":3,"x":2298,"y":-113,"size":45,"color":"rgb(75,154,102)"},{"id":19,"label":"Blacheville","type":3,"x":2286,"y":-218,"size":45,"color":"rgb(75,154,102)"},{"id":20,"label":"Favourite","type":3,"x":2220,"y":-157,"size":45,"color":"rgb(75,154,102)"},{"id":21,"label":"Dahlia","type":3,"x":2388,"y":-118,"size":45,"color":"rgb(75,154,102)"},{"id":22,"label":"Zephine","type":3,"x":2452,"y":-181,"size":45,"color":"rgb(75,154,102)"},{"id":23,"label":"Fantine","type":3,"x":2410,"y":122,"size":45,"color":"rgb(75,154,102)"},{"id":24,"label":"Mme.Thenardier","type":4,"x":2265,"y":348,"size":45,"color":"rgb(25,140,94)"},{"id":25,"label":"Thenardier","type":4,"x":2217,"y":495,"size":45,"color":"rgb(25,140,94)"},{"id":26,"label":"Cosette","type":5,"x":2344,"y":390,"size":45,"color":"rgb(31,134,154)"},{"id":27,"label":"Javert","type":4,"x":2394,"y":465,"size":45,"color":"rgb(25,140,94)"},{"id":28,"label":"Fauchelevent","type":"default","x":2732,"y":267,"size":45,"color":"rgb(56,210,30)"},{"id":29,"label":"Bamatabois","type":2,"x":2669,"y":392,"size":45,"color":"rgb(249,183,92)"},{"id":30,"label":"Perpetue","type":3,"x":2603,"y":-55,"size":45,"color":"rgb(25,160,155)"},{"id":31,"label":"Simplice","type":2,"x":2530,"y":213,"size":45,"color":"rgb(25,160,155)"},{"id":32,"label":"Scaufflaire","type":2,"x":2678,"y":914,"size":45,"color":"rgb(225,124,54)"},{"id":33,"label":"Woman1","type":2,"x":2561,"y":669,"size":45,"color":"rgb(225,124,54)"},{"id":34,"label":"Judge","type":2,"x":2879,"y":435,"size":45,"color":"rgb(249,183,92)"},{"id":35,"label":"Champmathieu","type":2,"x":2796,"y":401,"size":45,"color":"rgb(249,183,92)"},{"id":36,"label":"Brevet","type":2,"x":2759,"y":483,"size":45,"color":"rgb(249,183,92)"},{"id":37,"label":"Chenildieu","type":2,"x":2864,"y":523,"size":45,"color":"rgb(249,183,92)"},{"id":38,"label":"Cochepaille","type":2,"x":2786,"y":569,"size":45,"color":"rgb(249,183,92)"},{"id":39,"label":"Pontmercy","type":4,"x":2085,"y":792,"size":45,"color":"rgb(190,238,84)"},{"id":40,"label":"Boulatruelle","type":6,"x":2262,"y":886,"size":45,"color":"rgb(25,140,94)"},{"id":41,"label":"Eponine","type":4,"x":2129,"y":514,"size":45,"color":"rgb(25,140,94)"},{"id":42,"label":"Anzelma","type":4,"x":2079,"y":307,"size":45,"color":"rgb(25,140,94)"},{"id":43,"label":"Woman2","type":5,"x":2486,"y":335,"size":45,"color":"rgb(31,134,154)"},{"id":44,"label":"MotherInnocent","type":"default","x":2839,"y":314,"size":45,"color":"rgb(56,210,30)"},{"id":45,"label":"Gribier","type":"default","x":3009,"y":32,"size":45,"color":"rgb(56,210,30)"},{"id":46,"label":"Jondrette","type":7,"x":1281,"y":1091,"size":45,"color":"rgb(76,197,25)"},{"id":47,"label":"Mme.Burgon","type":7,"x":1569,"y":928,"size":45,"color":"rgb(76,197,25)"},{"id":48,"label":"Gavroche","type":8,"x":2015,"y":706,"size":45,"color":"rgb(225,121,228)"},{"id":49,"label":"Gillenormand","type":5,"x":2178,"y":371,"size":45,"color":"rgb(31,134,154)"},{"id":50,"label":"Magnon","type":5,"x":2093,"y":144,"size":45,"color":"rgb(31,134,154)"},{"id":51,"label":"Mlle.Gillenormand","type":5,"x":2220,"y":711,"size":45,"color":"rgb(31,134,154)"},{"id":52,"label":"Mme.Pontmercy","type":5,"x":2095,"y":993,"size":45,"color":"rgb(190,238,84)"},{"id":53,"label":"Mlle.Vaubois","type":5,"x":2213,"y":1076,"size":45,"color":"rgb(31,134,154)"},{"id":54,"label":"Lt.Gillenormand","type":5,"x":2096,"y":409,"size":45,"color":"rgb(31,134,154)"},{"id":55,"label":"Marius","type":8,"x":2045,"y":484,"size":45,"color":"rgb(31,134,154)"},{"id":56,"label":"BaronessT","type":5,"x":1921,"y":245,"size":45,"color":"rgb(31,134,154)"},{"id":57,"label":"Mabeuf","type":8,"x":1805,"y":462,"size":45,"color":"rgb(225,121,228)"},{"id":58,"label":"Enjolras","type":8,"x":2079,"y":589,"size":45,"color":"rgb(225,121,228)"},{"id":59,"label":"Combeferre","type":8,"x":1780,"y":551,"size":45,"color":"rgb(225,121,228)"},{"id":60,"label":"Prouvaire","type":8,"x":1731,"y":634,"size":45,"color":"rgb(225,121,228)"},{"id":61,"label":"Feuilly","type":8,"x":1876,"y":517,"size":45,"color":"rgb(225,121,228)"},{"id":62,"label":"Courfeyrac","type":8,"x":1906,"y":602,"size":45,"color":"rgb(225,121,228)"},{"id":63,"label":"Bahorel","type":8,"x":1892,"y":694,"size":45,"color":"rgb(225,121,228)"},{"id":64,"label":"Bossuet","type":8,"x":1994,"y":618,"size":45,"color":"rgb(225,121,228)"},{"id":65,"label":"Joly","type":8,"x":1821,"y":631,"size":45,"color":"rgb(225,121,228)"},{"id":66,"label":"Grantaire","type":8,"x":1786,"y":714,"size":45,"color":"rgb(225,121,228)"},{"id":67,"label":"MotherPlutarch","type":9,"x":1459,"y":416,"size":45,"color":"rgb(225,121,228)"},{"id":68,"label":"Gueulemer","type":4,"x":2224,"y":596,"size":45,"color":"rgb(25,140,94)"},{"id":69,"label":"Babet","type":4,"x":2344,"y":588,"size":45,"color":"rgb(25,140,94)"},{"id":70,"label":"Claquesous","type":4,"x":2307,"y":506,"size":45,"color":"rgb(25,140,94)"},{"id":71,"label":"Montparnasse","type":4,"x":2297,"y":665,"size":45,"color":"rgb(25,140,94)"},{"id":72,"label":"targetussaint","type":5,"x":2526,"y":416,"size":45,"color":"rgb(225,124,54)"},{"id":73,"label":"Child1","type":10,"x":1803,"y":1006,"size":45,"color":"rgb(71,134,235)"},{"id":74,"label":"Child2","type":10,"x":1732,"y":949,"size":45,"color":"rgb(71,134,235)"},{"id":75,"label":"Brujon","type":4,"x":2149,"y":655,"size":45,"color":"rgb(25,140,94)"},{"id":76,"label":"Mme.Hucheloup","type":8,"x":1851,"y":776,"size":45,"color":"rgb(225,121,228)"}],"links":[{"source":1,"target":0},{"source":2,"target":0},{"source":3,"target":0},{"source":3,"target":2},{"source":4,"target":0},{"source":5,"target":0},{"source":6,"target":0},{"source":7,"target":0},{"source":8,"target":0},{"source":9,"target":0},{"source":11,"target":10},{"source":11,"target":3},{"source":11,"target":2},{"source":11,"target":0},{"source":12,"target":11},{"source":13,"target":11},{"source":14,"target":11},{"source":15,"target":11},{"source":17,"target":16},{"source":18,"target":16},{"source":18,"target":17},{"source":19,"target":16},{"source":19,"target":17},{"source":19,"target":18},{"source":20,"target":16},{"source":20,"target":17},{"source":20,"target":18},{"source":20,"target":19},{"source":21,"target":16},{"source":21,"target":17},{"source":21,"target":18},{"source":21,"target":19},{"source":21,"target":20},{"source":22,"target":16},{"source":22,"target":17},{"source":22,"target":18},{"source":22,"target":19},{"source":22,"target":20},{"source":22,"target":21},{"source":23,"target":16},{"source":23,"target":17},{"source":23,"target":18},{"source":23,"target":19},{"source":23,"target":20},{"source":23,"target":21},{"source":23,"target":22},{"source":23,"target":12},{"source":23,"target":11},{"source":24,"target":23},{"source":24,"target":11},{"source":25,"target":24},{"source":25,"target":23},{"source":25,"target":11},{"source":26,"target":24},{"source":26,"target":11},{"source":26,"target":16},{"source":26,"target":25},{"source":27,"target":11},{"source":27,"target":23},{"source":27,"target":25},{"source":27,"target":24},{"source":27,"target":26},{"source":28,"target":11},{"source":28,"target":27},{"source":29,"target":23},{"source":29,"target":27},{"source":29,"target":11},{"source":30,"target":23},{"source":31,"target":30},{"source":31,"target":11},{"source":31,"target":23},{"source":31,"target":27},{"source":32,"target":11},{"source":33,"target":11},{"source":33,"target":27},{"source":34,"target":11},{"source":34,"target":29},{"source":35,"target":11},{"source":35,"target":34},{"source":35,"target":29},{"source":36,"target":34},{"source":36,"target":35},{"source":36,"target":11},{"source":36,"target":29},{"source":37,"target":34},{"source":37,"target":35},{"source":37,"target":36},{"source":37,"target":11},{"source":37,"target":29},{"source":38,"target":34},{"source":38,"target":35},{"source":38,"target":36},{"source":38,"target":37},{"source":38,"target":11},{"source":38,"target":29},{"source":39,"target":25},{"source":40,"target":25},{"source":41,"target":24},{"source":41,"target":25},{"source":42,"target":41},{"source":42,"target":25},{"source":42,"target":24},{"source":43,"target":11},{"source":43,"target":26},{"source":43,"target":27},{"source":44,"target":28},{"source":44,"target":11},{"source":45,"target":28},{"source":47,"target":46},{"source":48,"target":47},{"source":48,"target":25},{"source":48,"target":27},{"source":48,"target":11},{"source":49,"target":26},{"source":49,"target":11},{"source":50,"target":49},{"source":50,"target":24},{"source":51,"target":49},{"source":51,"target":26},{"source":51,"target":11},{"source":52,"target":51},{"source":52,"target":39},{"source":53,"target":51},{"source":54,"target":51},{"source":54,"target":49},{"source":54,"target":26},{"source":55,"target":51},{"source":55,"target":49},{"source":55,"target":39},{"source":55,"target":54},{"source":55,"target":26},{"source":55,"target":11},{"source":55,"target":16},{"source":55,"target":25},{"source":55,"target":41},{"source":55,"target":48},{"source":56,"target":49},{"source":56,"target":55},{"source":57,"target":55},{"source":57,"target":41},{"source":57,"target":48},{"source":58,"target":55},{"source":58,"target":48},{"source":58,"target":27},{"source":58,"target":57},{"source":58,"target":11},{"source":59,"target":58},{"source":59,"target":55},{"source":59,"target":48},{"source":59,"target":57},{"source":60,"target":48},{"source":60,"target":58},{"source":60,"target":59},{"source":61,"target":48},{"source":61,"target":58},{"source":61,"target":60},{"source":61,"target":59},{"source":61,"target":57},{"source":61,"target":55},{"source":62,"target":55},{"source":62,"target":58},{"source":62,"target":59},{"source":62,"target":48},{"source":62,"target":57},{"source":62,"target":41},{"source":62,"target":61},{"source":62,"target":60},{"source":63,"target":59},{"source":63,"target":48},{"source":63,"target":62},{"source":63,"target":57},{"source":63,"target":58},{"source":63,"target":61},{"source":63,"target":60},{"source":63,"target":55},{"source":64,"target":55},{"source":64,"target":62},{"source":64,"target":48},{"source":64,"target":63},{"source":64,"target":58},{"source":64,"target":61},{"source":64,"target":60},{"source":64,"target":59},{"source":64,"target":57},{"source":64,"target":11},{"source":65,"target":63},{"source":65,"target":64},{"source":65,"target":48},{"source":65,"target":62},{"source":65,"target":58},{"source":65,"target":61},{"source":65,"target":60},{"source":65,"target":59},{"source":65,"target":57},{"source":65,"target":55},{"source":66,"target":64},{"source":66,"target":58},{"source":66,"target":59},{"source":66,"target":62},{"source":66,"target":65},{"source":66,"target":48},{"source":66,"target":63},{"source":66,"target":61},{"source":66,"target":60},{"source":67,"target":57},{"source":68,"target":25},{"source":68,"target":11},{"source":68,"target":24},{"source":68,"target":27},{"source":68,"target":48},{"source":68,"target":41},{"source":69,"target":25},{"source":69,"target":68},{"source":69,"target":11},{"source":69,"target":24},{"source":69,"target":27},{"source":69,"target":48},{"source":69,"target":41},{"source":70,"target":25},{"source":70,"target":69},{"source":70,"target":68},{"source":70,"target":11},{"source":70,"target":24},{"source":70,"target":27},{"source":70,"target":41},{"source":70,"target":58},{"source":71,"target":27},{"source":71,"target":69},{"source":71,"target":68},{"source":71,"target":70},{"source":71,"target":11},{"source":71,"target":48},{"source":71,"target":41},{"source":71,"target":25},{"source":72,"target":26},{"source":72,"target":27},{"source":72,"target":11},{"source":73,"target":48},{"source":74,"target":48},{"source":74,"target":73},{"source":75,"target":69},{"source":75,"target":68},{"source":75,"target":25},{"source":75,"target":48},{"source":75,"target":41},{"source":75,"target":70},{"source":75,"target":71},{"source":76,"target":64},{"source":76,"target":65},{"source":76,"target":66},{"source":76,"target":63},{"source":76,"target":62},{"source":76,"target":48},{"source":76,"target":58}]}
        data:{
            "nodes":[{
                "id": 1,
                "label": "农药残留毒理学",
                "size": 66,
                "scale": "2.0",
                "color": "rgb(85,133,205)"
            }
                ,
                {
                    "id": 2,
                    "label": "农药毒理学基本概念",
                    "size": 66,
                    "scale": "1.9",
                    "color": "rgb(183,1,124)"
                }
                ,
                {
                    "id": 3,
                    "label": "致死剂量",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 4,
                    "label": "绝对致死量",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 5,
                    "label": "半数致死量",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 6,
                    "label": "半数致死浓度",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 7,
                    "label": "半数效应剂量",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 8,
                    "label": "日允许摄入量",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 9,
                    "label": "损害作用和非损害作用",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 10,
                    "label": "急性毒性",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 11,
                    "label": "急性致死作用",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 12,
                    "label": "急性阈作用",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 13,
                    "label": "急性刺激阈作用",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 14,
                    "label": "亚急性毒性",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 15,
                    "label": "慢性毒性",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 16,
                    "label": "慢性毒性作用",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 17,
                    "label": "常规慢性毒性作用",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 18,
                    "label": "影响繁殖功能的慢性毒性作用",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 19,
                    "label": "致癌性毒性作用",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 20,
                    "label": "亚慢性毒性作用",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 21,
                    "label": "迟发性毒性作用",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 22,
                    "label": "远期毒性作用",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 23,
                    "label": "联合毒性作用",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 24,
                    "label": "独立毒性作用",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 25,
                    "label": "协同毒性作用",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 26,
                    "label": "拮抗毒性作用",
                    "size": 66,
                    "scale": "1.5",
                    "color": "rgb(159,190,65)"
                }
                ,
                {
                    "id": 27,
                    "label": "相加毒性作用",
                    "size": 66,
                    "scale": "1.5",
                    "color": "rgb(159,190,65)"
                }
                ,
                {
                    "id": 28,
                    "label": "相乘毒性作用",
                    "size": 66,
                    "scale": "1.5",
                    "color": "rgb(159,190,65)"
                }
                ,
                {
                    "id": 29,
                    "label": "联合作用",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 30,
                    "label": "竞争作用",
                    "size": 66,
                    "scale": "1.5",
                    "color": "rgb(159,190,65)"
                }
                ,
                {
                    "id": 31,
                    "label": "酸碱度（pH)的改变",
                    "size": 66,
                    "scale": "1.5",
                    "color": "rgb(159,190,65)"
                }
                ,
                {
                    "id": 32,
                    "label": "代谢酶的抑制",
                    "size": 66,
                    "scale": "1.5",
                    "color": "rgb(159,190,65)"
                }
                ,
                {
                    "id": 33,
                    "label": "毒物代谢酶的诱导作用",
                    "size": 66,
                    "scale": "1.5",
                    "color": "rgb(159,190,65)"
                }
                ,
                {
                    "id": 34,
                    "label": "拮抗作用",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 35,
                    "label": "竞争性拮抗",
                    "size": 66,
                    "scale": "1.5",
                    "color": "rgb(159,190,65)"
                }
                ,
                {
                    "id": 36,
                    "label": "化学性拮抗",
                    "size": 66,
                    "scale": "1.5",
                    "color": "rgb(159,190,65)"
                }
                ,
                {
                    "id": 37,
                    "label": "非竞争性拮抗",
                    "size": 66,
                    "scale": "1.5",
                    "color": "rgb(159,190,65)"
                }
                ,
                {
                    "id": 38,
                    "label": "功能性或生理性拮抗",
                    "size": 66,
                    "scale": "1.5",
                    "color": "rgb(159,190,65)"
                }
                ,
                {
                    "id": 39,
                    "label": "毒性作用发生的部位",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 40,
                    "label": "局部毒性作用",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 41,
                    "label": "全身毒性作用",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 42,
                    "label": "毒性作用机制",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 43,
                    "label": "形态毒性作用",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 44,
                    "label": "功能毒性作用",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 45,
                    "label": "—般毒性作用",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 46,
                    "label": "特殊毒性作用",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 47,
                    "label": "过敏性反应",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 48,
                    "label": "高敏感性",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 49,
                    "label": "特异体质反应",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 50,
                    "label": "致癌作用",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 51,
                    "label": "致畸作用",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 52,
                    "label": "致突变作用",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 53,
                    "label": "选择毒性作用",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 54,
                    "label": "物种和细胞学的差异",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 55,
                    "label": "不同生物或组织器官对化学物或其毒性代谢产物的蓄积能力不同",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 56,
                    "label": "不同生物或组织器官对化学物在体内生物转化过程的差异",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 57,
                    "label": "不同机体或组织器官对化学物所造成损害的修复能力存在差异",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 58,
                    "label": "影响农药毒性的主要因素",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 59,
                    "label": "毒物本身因素",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 60,
                    "label": "化学活性",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 61,
                    "label": "物理性质",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 62,
                    "label": "染毒条件",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 63,
                    "label": "给药途径",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 64,
                    "label": "浓度与稀释度",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 65,
                    "label": "容积",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 66,
                    "label": "助剂",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 67,
                    "label": "机体因素",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 68,
                    "label": "种属与品系敏感性差异",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 69,
                    "label": "生理上差异",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 70,
                    "label": "遗传的差异",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 71,
                    "label": "代谢差异",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 72,
                    "label": "排泄速度的差异",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 73,
                    "label": "个体差异",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 74,
                    "label": "年龄的差异",
                    "size": 66,
                    "scale": "1.5",
                    "color": "rgb(159,190,65)"
                }
                ,
                {
                    "id": 75,
                    "label": "性别差异",
                    "size": 66,
                    "scale": "1.5",
                    "color": "rgb(159,190,65)"
                }
                ,
                {
                    "id": 76,
                    "label": "生理状况",
                    "size": 66,
                    "scale": "1.5",
                    "color": "rgb(159,190,65)"
                }
                ,
                {
                    "id": 77,
                    "label": "昼夜的影响",
                    "size": 66,
                    "scale": "1.5",
                    "color": "rgb(159,190,65)"
                }
                ,
                {
                    "id": 78,
                    "label": "季节变化",
                    "size": 66,
                    "scale": "1.5",
                    "color": "rgb(159,190,65)"
                }
                ,
                {
                    "id": 79,
                    "label": "月经期、妊娠期、哺乳期",
                    "size": 66,
                    "scale": "1.5",
                    "color": "rgb(159,190,65)"
                }
                ,
                {
                    "id": 80,
                    "label": "健康状况",
                    "size": 66,
                    "scale": "1.5",
                    "color": "rgb(159,190,65)"
                }
                ,
                {
                    "id": 81,
                    "label": "机体活动情况",
                    "size": 66,
                    "scale": "1.5",
                    "color": "rgb(159,190,65)"
                }
                ,
                {
                    "id": 82,
                    "label": "农药的毒性作用和代谢",
                    "size": 66,
                    "scale": "1.9",
                    "color": "rgb(183,1,124)"
                }
                ,
                {
                    "id": 83,
                    "label": "农药中毒的人群分布特点",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 84,
                    "label": "年龄分布",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 85,
                    "label": "性别分布",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 86,
                    "label": "职业",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 87,
                    "label": "季节性变化",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 88,
                    "label": "地区分布特点",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 89,
                    "label": "农药对人体的慢性危害",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 90,
                    "label": "对酶系的影响",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 91,
                    "label": "组织病理改变",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 92,
                    "label": "“三致”作用",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 93,
                    "label": "农药对机体的毒性作用",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 94,
                    "label": "人体对农药的暴露途径",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 95,
                    "label": "作物中的农药残留作物中农药污染的来源主要有两个方面",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 96,
                    "label": "作物体内残留农药的分布",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 97,
                    "label": "畜禽产品、水产品中农药残留畜禽产品中农药残留主要来源",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 98,
                    "label": "农药的吸收",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 99,
                    "label": "经胃肠道吸收",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 100,
                    "label": "生理因素的影响",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 101,
                    "label": "毒物本身因素的影响",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 102,
                    "label": "添加物的影响",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 103,
                    "label": "化学物质的影响",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 104,
                    "label": "机体状况",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 105,
                    "label": "经呼吸道吸收",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 106,
                    "label": "气态毒物气态毒物的吸收",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 107,
                    "label": "气溶胶烟雾和粉尘气溶胶烟雾和粉尘",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 108,
                    "label": "经皮肤吸收",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 109,
                    "label": "表皮屏障毒物通过表皮屏障的过程",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 110,
                    "label": "绕过皮肤屏障的过程",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 111,
                    "label": "气态农药经皮肤吸收",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 112,
                    "label": "其他吸收途径",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 113,
                    "label": "农药对人体中毒的危害症状及救治方法",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 114,
                    "label": "有机磷农药中毒",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 115,
                    "label": "氨基甲酸酯类农药中毒",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 116,
                    "label": "有机氯农药中毒",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 117,
                    "label": "拟除虫菊酯类农药中毒",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 118,
                    "label": "含砷类农药中毒",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 119,
                    "label": "有机锡类农药中毒",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 120,
                    "label": "农药毒性及其研究方法",
                    "size": 66,
                    "scale": "1.9",
                    "color": "rgb(183,1,124)"
                }
                ,
                {
                    "id": 121,
                    "label": "急性经口毒性试验——霍恩氏法",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 122,
                    "label": "受试物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 123,
                    "label": "试验动物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 124,
                    "label": "试验步骤",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 125,
                    "label": " 预试验",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 126,
                    "label": " 正式试验",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 127,
                    "label": "临床观察",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 128,
                    "label": "组织病理学检查",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 129,
                    "label": "试验结果评价",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 130,
                    "label": "试验结果的解释",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 131,
                    "label": "急性经口毒性试验——序贯法",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 132,
                    "label": "受试物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 133,
                    "label": "试验动物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 134,
                    "label": "试验步骤",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 135,
                    "label": "限量试验",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 136,
                    "label": "正式试验",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 137,
                    "label": "临床观察",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 138,
                    "label": "组织病理学检查",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 139,
                    "label": "结果统计",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 140,
                    "label": "试验结果评价",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 141,
                    "label": "试验结果解释",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 142,
                    "label": "急性经口毒性试验——概率单位法",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 143,
                    "label": "受试物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 144,
                    "label": "试验动物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 145,
                    "label": "试验步骤",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 146,
                    "label": "预试验",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 147,
                    "label": "正式试验",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 148,
                    "label": "限量试验",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 149,
                    "label": "临床观察",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 150,
                    "label": "组织病理学检查",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 151,
                    "label": "试验结果评价",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 152,
                    "label": "试验结果解释",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 153,
                    "label": "急性经皮毒性试验",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 154,
                    "label": "受试物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 155,
                    "label": "试验动物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 156,
                    "label": "试验步骤",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 157,
                    "label": "剂量",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 158,
                    "label": "限量试验",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 159,
                    "label": "观察期限",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 160,
                    "label": "临床观察",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 161,
                    "label": "称重",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 162,
                    "label": "组织病理学检查",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 163,
                    "label": "结果处理",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 164,
                    "label": "结果评价",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 165,
                    "label": "试验结果的解释",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 166,
                    "label": "急性吸入毒性试验",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 167,
                    "label": "受试物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 168,
                    "label": "试验动物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 169,
                    "label": "试验步骤",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 170,
                    "label": "染毒法",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 171,
                    "label": "吸入剂量",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 172,
                    "label": "吸入染毒的实施",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 173,
                    "label": "染毒系统可靠性的研究",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 174,
                    "label": "临床观察",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 175,
                    "label": "体重记录",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 176,
                    "label": "病理学检查",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 177,
                    "label": "其他指标",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 178,
                    "label": "试验结果",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 179,
                    "label": "试验结果的评价",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 180,
                    "label": "试验结果的解释",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 181,
                    "label": "皮肤刺激性/腐蚀性试验",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 182,
                    "label": "受试物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 183,
                    "label": "试验动物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 184,
                    "label": "试验步骤",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 185,
                    "label": "(1)? 急性皮肤刺激性试验",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 186,
                    "label": "(1)? 多次皮肤刺激性试验步骤",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 187,
                    "label": "试验结果的评价",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 188,
                    "label": "试验结果的解释",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 189,
                    "label": "急性眼刺激性/腐蚀性试验",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 190,
                    "label": "受试物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 191,
                    "label": "试验动物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 192,
                    "label": "试验步骤",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 193,
                    "label": "预试验",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 194,
                    "label": "正式试验",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 195,
                    "label": "临床观察和检查",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 196,
                    "label": "试验结果",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 197,
                    "label": "试验结果的评价",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 198,
                    "label": "试验结果的解释",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 199,
                    "label": "短期重复经口染毒（28d)毒性试验",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 200,
                    "label": "受试物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 201,
                    "label": "试验动物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 202,
                    "label": "试验步骤",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 203,
                    "label": "剂量",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 204,
                    "label": "附加组",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 205,
                    "label": "限量试验",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 206,
                    "label": "染毒途径",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 207,
                    "label": "临床观察",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 208,
                    "label": "试验结果和评价",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 209,
                    "label": "试验结果的解释",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 210,
                    "label": "短期重复经皮染毒（28d)毒性试验",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 211,
                    "label": "受试物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 212,
                    "label": "试验动物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 213,
                    "label": "试验步骤",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 214,
                    "label": "剂量和分组",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 215,
                    "label": "限量试验",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 216,
                    "label": "正式试验",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 217,
                    "label": "临床观察",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 218,
                    "label": "组织病理学检查",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 219,
                    "label": "结果的评价",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 220,
                    "label": "结果的解释",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 221,
                    "label": "短期重复吸人染毒（28d)毒性试验",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 222,
                    "label": "受试物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 223,
                    "label": "试验动物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 224,
                    "label": "试验步骤",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 225,
                    "label": "染毒方法",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 226,
                    "label": "染毒系统",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 227,
                    "label": "吸入剂量的水平与动物分组",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 228,
                    "label": "吸入染毒的实施",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 229,
                    "label": "临床观察",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 230,
                    "label": "结果的综合分析与评价",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 231,
                    "label": "试验结果的解释",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 232,
                    "label": "亚慢性毒性试验",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 233,
                    "label": "受试样品",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 234,
                    "label": "试验动物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 235,
                    "label": "试验步骤",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 236,
                    "label": "剂量分组",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 237,
                    "label": "附加组",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 238,
                    "label": "限量试验",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 239,
                    "label": "染毒周期",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 240,
                    "label": "临床观察试验",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 241,
                    "label": "试验结果和评价",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 242,
                    "label": "试验结果的解释",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 243,
                    "label": "急性迟发性神经毒性试验",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 244,
                    "label": "受试物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 245,
                    "label": "试验动物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 246,
                    "label": "试验步骤",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 247,
                    "label": "剂量及分组",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 248,
                    "label": "染毒方式",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 249,
                    "label": "临床观察与检查",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 250,
                    "label": "结果统计与评价",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 251,
                    "label": "试验结果的解释",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 252,
                    "label": "慢性毒性试验",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 253,
                    "label": "受试物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 254,
                    "label": "试验动物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 255,
                    "label": "试验步骤",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 256,
                    "label": "剂量及分组",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 257,
                    "label": "染毒方式",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 258,
                    "label": "临床观察",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 259,
                    "label": "临床生化检查",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 260,
                    "label": "病理检查",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 261,
                    "label": "试验结果",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 262,
                    "label": "试验结果的评价",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 263,
                    "label": "试验结果的解释",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 264,
                    "label": "体内晡乳动物骨髓嗜多染红细胞微核试验",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 265,
                    "label": "受试物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 266,
                    "label": "仪器及其他试剂",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 267,
                    "label": "试验动物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 268,
                    "label": "试验步骤",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 269,
                    "label": "剂量",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 270,
                    "label": "限量试验",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 271,
                    "label": "对照组设定",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 272,
                    "label": "染毒方式",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 273,
                    "label": "试验结果",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 274,
                    "label": "试验结果的评价",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 275,
                    "label": "试验结果的解释",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 276,
                    "label": "体内哺乳动物骨髓细胞染色体畸变试验",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 277,
                    "label": "受试物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 278,
                    "label": "仪器及试剂",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 279,
                    "label": "试验动物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 280,
                    "label": "试验步骤",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 281,
                    "label": "剂量设计原则",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 282,
                    "label": "限量试验",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 283,
                    "label": "对照组设定",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 284,
                    "label": "染毒方式",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 285,
                    "label": " 染色体制备",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 286,
                    "label": "染色",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 287,
                    "label": "阅片",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 288,
                    "label": "观察项目",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 289,
                    "label": "试验结果",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 290,
                    "label": "试验结果的评价",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 291,
                    "label": "试验结果的解释",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 292,
                    "label": "哺乳动物精原细胞/精母细胞染色体畸变试验",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 293,
                    "label": "仪器与试剂",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 294,
                    "label": "受试物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 295,
                    "label": "试验动物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 296,
                    "label": "试验步骤",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 297,
                    "label": "剂量及分组",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 298,
                    "label": "操作步骤",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 299,
                    "label": "试验结果和评价",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 300,
                    "label": "结果解释",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 301,
                    "label": "啮齿类动物显性致死试验",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 302,
                    "label": "受试物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 303,
                    "label": "试验步骤",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 304,
                    "label": "染毒组",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 305,
                    "label": "对照组",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 306,
                    "label": "染毒方式",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 307,
                    "label": "交配",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 308,
                    "label": "剖检",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 309,
                    "label": "试验结果",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 310,
                    "label": "试验结果的评价判断阳性结果的标准",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 311,
                    "label": "试验结果的解释",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 312,
                    "label": "体外哺乳动物细胞染色体畸变试验",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 313,
                    "label": "受试物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 314,
                    "label": "细胞毒性的确定",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 315,
                    "label": "试验步骤",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 316,
                    "label": "剂量设置",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 317,
                    "label": "阳性对照物",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 318,
                    "label": "阴性对照物",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 319,
                    "label": "培养液",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 320,
                    "label": "活化系统",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 321,
                    "label": "试验操作",
                    "size": 66,
                    "scale": "1.6",
                    "color": "rgb(250,63,35)"
                }
                ,
                {
                    "id": 322,
                    "label": "结果评价",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 323,
                    "label": "结果解释",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 324,
                    "label": "体外哺乳动物细胞基因突变试验",
                    "size": 66,
                    "scale": "1.8",
                    "color": "rgb(0,206,209)"
                }
                ,
                {
                    "id": 325,
                    "label": "受试物",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 326,
                    "label": "细胞毒性的确定",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 327,
                    "label": "试验步骤",
                    "size": 66,
                    "scale": "1.7",
                    "color": "rgb(132,55,225)"
                }
                ,
                {
                    "id": 328,
                    "label": "一门关于农药与健康关系的科学",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 329,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 330,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 331,
                    "label": "引起一群机体全部死亡的最低剂量",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 332,
                    "label": "LD50，引起一个群体50%个体死亡所需的剂量",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 333,
                    "label": "LC50，引起一个群体50%个体死 亡所需的浓度",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 334,
                    "label": "在毒理学研究中，常常要研究机体接触化学物后 所产生的各种变化，如生理生化的改变、神经系统和免疫系统的变化等，这些都是 非致死性的，即机体并不发生死亡。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 335,
                    "label": "ADI，指人类终生每日随同食物、饮水和空气摄人的某 一化学物不致引起任何损害作用的剂量，是根据所研究化学物的无作用剂量 制定的，",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 336,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 337,
                    "label": "急性中毒是指机体（人或试验动物）一次或24h内多次接触（染毒）化学物之 后，在短期内所发生的毒性效应，包括致死效应。最严重后果就是致人死亡，由于许多农药毒性高、无特效的救治办法，往往由于救治不及时而引起中毒者死亡。引起人体各 器官系统的损害，不同的农药引起的器官系统损害是不同的，各有其特点。引起继发性综合征，如有机磷中毒除引起急性胆碱能危象以外，还能引起 “中间综合征”（IMS)和迟发性神经病（OPIDP)。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 338,
                    "label": "毒物经口、呼吸道或皮肤侵人机体内，引起某些功能抑制， 严重时引起死亡。例如，有机磷农药进人机体内后，抑制胆碱酯酶活性，影响神经 系统功能；有机氯进人机体内后，诱发某些功能兴奋，从而发生相应的中毒症状。 当这些抑制或兴奋状态严重时，甚至引起死亡",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 339,
                    "label": "一次最小剂量或浓度染毒条件下，引起机体较轻微的、某些 生理功能发生毒性反应。若剂量小于上述剂量，则机体不发生可观察到的异常现 象，称为“急性阈作用”",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 340,
                    "label": "一次最小剂量或浓度染毒下，引起试验动物发生呼吸 道、眼、口腔黏膜出现不同程度的刺激性作用，当低于这一剂量或浓度时，即不发 生刺激现象，该最小剂量浓度的作用，称为“急性刺激阈作用”",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 341,
                    "label": "亚急性毒性是在短期（1?6个月，有称为3?6个月）内多次反复染毒下，引 起试验动物发生较明显的中毒表现，或引起某些器官或系统出现较明显异常现象的 毒性作用，称为“亚急性毒性作用”。①? 一般的亚急性毒性作用是短期（1?6个月）内多次反复染毒条件下，诱发 机体某些器官或系统的功能性、甚至组织学改变的毒性作用。蓄积性毒性作用是短期内多次小剂量反复染毒条件下，引起机体发生超过 小剂量作用强度反应的毒性作用。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 342,
                    "label": "慢性毒性是在长期（6个月以上至两年或终生）内小剂量持续地反复染毒条件 下，引起机体某些器官或系统的损害，诱发某些功能或组织学改变的毒性作用，称 为“慢性中毒'",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 343,
                    "label": "以低剂量化学物长期给试验动物染毒后对试验动物机体 的毒性损伤效应。凡染毒时间超过90d的毒性实验一般均称为慢性毒性实验。职业 接触的化学物，常常表现慢性毒性作用。许多化学物在环境中的浓度不具有明显的 急性毒性，但长期慢性接触后，潜在的累积效应会逐渐显现。如急性接触二嗯英和 多氯联苯对内脏器官无明显毒性，只引发皮肤氯痤疮，但在体内积累到一定浓度 后，会损害肝脏。类似地，短时间内接触较低浓度的铅也不会引起明显的不良健康 效应，但长期接触却能引起血液、神经系统、生殖系统等的疾病。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 344,
                    "label": "长期（试验动物的一生大部分时 间，甚至整个生命期内）、在小剂量持续每天染毒的条件下，机体出现可观察到的 功能上、组织学上的改变，可较全面地了解毒物慢性毒性作用",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 345,
                    "label": "试验动物的生育期内，连续观察2?3 代，持续每天接受一定剂量毒物的染毒条件下，以观察母体生育繁殖能力有无受到 影响，子代的生长、发育、器官形态与功能及机体健康状况有无受到损害，以鉴定 某毒物对机体繁殖功能有什么毒性作用",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 346,
                    "label": "试验动物婴幼期至老年，甚至直至死亡，持续每天 接受一定剂量毒物的染毒条件下，以观察某一毒物有无诱发肿瘤的毒性作用",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 347,
                    "label": "较长期（6个月至1年）内小剂量反复地每天染毒 条件下，引起机体器官或系统功能或组织学上及健康上受到损害的作用",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 348,
                    "label": "经一定时间间隔才出现的毒性作用称为迟发作 用。例如，某些有机磷农药引起动物的急性中毒恢复后8?14d又出现肌肉疼痛、 后肢共济失调，严重者后肢麻痹等症状，过3周达到顶峰，其后存活个体能缓慢恢 复。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 349,
                    "label": "停止接触后，经过若干年发生的不同于中毒病理改变的 毒性作用。如致癌性化学物，人类一般要在初次接触后10?20年才会出现肿瘤",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 350,
                    "label": "在生产条件下或日常生活中，人们常可能同时接触几种毒物，或几种毒物先后 作用于机体，它们的毒性表现常常不是其中任何一种毒物的中毒表现，而是它们共 同作用的结果，这种诱发的毒性作用，称为“联合毒性作用”。具体表现视不同毒 物的配合，表现互异。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 351,
                    "label": "几种毒物各自对机体产生不同效应的作用，其作用方 法、途径与部位不同，它们对机体产生的影响不互相关联，最后动物的死亡，常由 于其中一种毒物的作用所引起，亦可能是两种毒物分别作用引起的",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 352,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 353,
                    "label": "时或短时间内先后作用于机体，他们的毒性作 用和毒性作用机制相互拮抗，而协同作用强度小于它们分别作用强度的总和",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 354,
                    "label": "几种农药同时或短时间内先后作用于机体时，它们诱发 的生物学作用强度，是它们分别产生作用的强度总和",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 355,
                    "label": "几种农药同时或几分钟内先后作用于机体时，它们的毒 性作用相互增强，因而作用强度大于它们分别作用时的作用强度的总和",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 356,
                    "label": "毒物被吸收、分布、生物转化和排泄过程中。化学物在体内呈现联合作用的机制 是多方面的，主要是一种化学物引起另一种化学物原有的络合作用、电离作用和与 蛋白质的结合作用，对酶的诱导或抑制，及化学物在体内代谢和排泄等发生改变",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 357,
                    "label": "两种化学物同时或先后作用于同一活性部位或同一酶系统",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 358,
                    "label": "一种毒物吸收后，可能使体内酸碱度发生改变（如 胃液或尿液的酸碱度改变），从而影响另一种毒物的吸收速度或排泄速度",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 359,
                    "label": "一种毒物能抑制另一种毒物的有关酶活性",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 360,
                    "label": "一种毒物可对肝混合功能氧化酶产生诱导作用， 使肝组织中酶含量增加，从而使另一种毒物的生物转化发生改变，从而使毒性 增强",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 361,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 362,
                    "label": "两种化学毒物作用于同一活性部位或受体，从而发生竞争性 拮抗，结果其中一种毒物抢先与活性部位或受体结合，显示它的毒性作用强度，而 另一种毒物由于未及时与活性部位或受体结合",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 363,
                    "label": "发生化学反应，使其中一种化学毒物失去原来 的生物学活性",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 364,
                    "label": "不与另一种化学毒物发生化学反应，也不进 行受体竞争，但可干扰另一种化学毒物对机体的生物效应",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 365,
                    "label": "两种化学毒物共同作用于同一细胞系统",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 366,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 367,
                    "label": "化学物在机体接触部位直接造成的损害作用",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 368,
                    "label": "化学物被机体吸收并分布至靶器官或全身后所产生的损 害作用",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 369,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 370,
                    "label": "机体组织形态发生的肉眼或镜下可见的病理变化。如微 生物农药苏云金杆菌内外毒素混合原粉，大剂量经口给予大鼠后，主要损害其肝、 肾和小肠，病理变化表现为肝细胞颗粒性变性或水泡变性，肾近曲小管上皮细胞变 性或坏死，小肠黏膜上皮细胞肿胀、变性和脱落。化学物引起的形态学改变有许多 是不可逆的，例如组织坏死、神经元损伤等",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 371,
                    "label": "指化学物引起靶器官功能的可逆性变化，例如一定条件下 肝、肾功能发生的变化",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 372,
                    "label": "指化学物在一定剂量范围内经过一定接触时间，按照一定 的接触方式均可能产生的某些毒性作用。例如急性毒性作用、亚急性毒性作用、慢 性毒性作用等。一般毒性作用又称基础毒性作用",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 373,
                    "label": "指接触化学物后引起的不同于一般毒作用定律的或出现特 殊病理改变的毒性作用",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 374,
                    "label": "机体对化学物产生的一种病理性免疫反 应。引起过敏性反应的化学物称为过敏原。过敏原可以是完全抗原，也可以是半抗 原。许多化学物作为一种半抗原进人机体后，首先与内源性蛋白质结合形成抗原， 然后再进一步激发抗体的产生。当再次与该化学物接触后，即可引发抗原抗体反 应，产生典型的变态反应症状。过敏性反应在低剂量下即可发生，较难观察到剂 量-效应关系，对机体的损害表现多种多样，轻者仅有皮肤症状，重者可致休克甚 至死亡。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 375,
                    "label": "少数个体对化学物具有高反应性或高感受性。此时只要机体接 触一次小剂量的化学物即可产生毒性作用，而不需要预先接触，也不产生抗原抗体 反应。如果以人群作为研究对象，这部分个体就称为易感人群。与此相对应的是接 触化学物的人群中，有少数个体对某种化学物特别不敏感，能够耐受远远高于大多 数个体所能耐受的剂量（可达2?5倍），称为高耐受性",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 376,
                    "label": "某些有先天性遗传缺陷的动物个体，对于某些化学物表现 出异常的反应性。例如，肌肉松弛剂丁二酰胆碱一般情况下所引起的肌肉松弛时间 较短，因为它能很快被血清胆碱酯酶分解。但有些病人缺乏这种酶，在接受一个标 准治疗剂量的丁二酰胆碱后，可出现较长时间的肌肉松弛甚至呼吸暂停。又如，体 内缺乏NADH-高铁血红蛋白还原酶的人对亚硝酸盐等能引起高铁血红蛋白症的毒 物表现异常敏感。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 377,
                    "label": "①? 化学物能够引发动物和人类恶性肿瘤，增加肿瘤发病率和死亡 率的作用。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 378,
                    "label": "化学物作用于胚胎，影响器官分化和发育，使出现永久性的结 构或功能异常，导致胎儿畸形的作用",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 379,
                    "label": "化学物使遗传物质（DNA)发生可遗传的改变。如DNA分 子上单个碱基的改变、染色体畸形等",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 380,
                    "label": "在一定条件下，一种化学物可能只对某一种生物有损害，而对 其他生物无损害，或者只对生物体内某一组织器官有毒性，而对其他组织器官无毒 性，这种毒性方式称为选择毒性。受到损害的生物或组织器官称为靶生物或靶器 官，未受损害的即为非靶生物或非靶器官",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 381,
                    "label": "各物种间的解剖、生理、遗传、代谢过程等均有不 同，导致化学物的毒性也表现种属差异性。如植物没有动物所具有的神经系统、有 效的循环系统和肌肉组织，但却具有动物所没有的光合作用和细胞壁。青霉素和先 锋霉素等能够有效杀灭细菌而对人体细胞相对无害的原因就在于其靶标是人体细胞 所没有的细胞壁。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 382,
                    "label": "① 除草剂 百草枯主要蓄积在动物肺内，导致肺组织损伤，继而纤维化，丧失通气功能，而其 他器官组织的蓄积能力较弱，因而受到损伤较小。用放射性碘治疗甲状腺机能亢 进，也是利用了甲状腺能够选择性蓄积碘的功能。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 383,
                    "label": "① 例如细菌不能 直接吸收叶酸，要利用对氨基苯甲酸、谷氨酸和蝶陡作为原料合成，而人类却只能 从食物中吸收叶酸而不能自身合成。磺胺与对氨基苯甲酸的分子结构和大小相似， 可拮抗对氨基苯甲酸参与合成叶酸的过程。因此磺胺类药物对细菌有毒，但对人安 全。小鼠体内含有一种谷胱甘肽转移酶的同功异构酶，该酶能与黄曲霉毒素艮的 致癌性环氧化物高度亲和，发挥解毒作用，因而小鼠能抵抗黄曲霉毒素氏的致肝 癌作用。而大鼠的这种解毒作用较弱，故即使大鼠摄人很少黄曲霉毒素氏也可诱 发肝脏肿瘤。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 384,
                    "label": "① 阳性致癌 物N-甲基-N-硝基脲（MNU)对大鼠诱发的肿瘤主要在脑部，肝脏中从未发现 过，是因为肝脏能有效地酶解RNA和DNA分子中形成的Os-烷基鸟嘌呤，而脑 组织不能。在动植物方面的差异，还取决于光合作用的有无，如西玛津在玉米地是高选择 性除草剂，对动物无毒。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 385,
                    "label": "毒物对机体的毒性作用是毒物与机体相互作用的结果，因此，常受毒物本身和 机体的内外环境因素的复杂性综合影响.如能找出它们的影响规律，则可能针对性 地、有效地进行防治工作，制订防治措施。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 386,
                    "label": "毒物毒性的大小取决于它的生物活性，即在体内作用的活跃程度，活性高低改 变，毒性亦随之增减。毒物生物活性的强弱，和它的化学活性与物理特性有关，而 后两者则与毒物的化学结构有密切关系。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 387,
                    "label": "化学纯度，化学结构:(1) 同分异构体(2) 旋光异构体(3) 结构中某些基团的变动(4) 饱和度(5) 碳原子的增减(6) 离子或基团被取代(7) 芳香族化合物的“氢”被取代后，毒性减弱(8) 芳香族化合物增添羧基后，毒性减弱(9) 脂肪族引人羟基后，毒性增高",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 388,
                    "label": "溶解度:(1)  毒物在水中溶解度越大，毒性越大。如AS203的溶解度只有As2S的 1/30000，毒性亦小。(2) 作用部位的影响，如氰化氢、氨等主要作用于上呼吸道，而二氧化氮深人 肺泡。(3) 脂溶性物质易溶解和蓄积于脂肪，易侵犯神经系统，分散度粉尘、烟和雾状等化学物质污染空气，其毒性与分散度有关。粒子越小，分散 度越大，表面积比也越大，而生物活性也越强。其次，毒物颗粒的大小（表2-4) 可影响它进人呼吸道深度和溶解度，从而影响它的毒性。，挥发性:蒸气压大的毒物，挥发性与蒸气压愈大，危险性愈大，解离度:对于弱酸性或弱碱性的有机化合物，只有在pH 条件适宜，使其最大限度的成为非离子型时才易于吸收，尤其是经胃肠道吸收和具 挥发毒作用的物质。化合物呈离子型的比例越高，则越不易吸收，且易于经肾 排出",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 389,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 390,
                    "label": "\"给药途径染毒途径不同，机体对毒物的吸收速度、吸 收数量、代谢过程将有所不同，从而对毒性影响较大。例如，敌百虫、对硫磷经不 同途径染毒，其毒性差异较大，一般经皮毒性较经口毒性为小，因经皮吸收量小于经口吸收量，但亦有例外， 如氨基氰经皮给予大鼠的LDM为84mg/kg",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 391,
                    "label": "由于稀释度不同，也可造成毒性差异。例如， 用蒸馏水将几种毒物稀释成5%、2.5%、1.25%三种浓度，按同等剂量给小鼠灌 胃，而高浓度者死亡多，低浓度者死亡少，表现为死亡率随浓度增加而升高",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 392,
                    "label": "毒物的动物实验时，若给予的水溶液的容积过大，可引起动物体内 水分过量及损害肾脏对毒物的廓清功能。当用植物油作溶剂时，过大的灌胃容积可 使动物发生腹泻，减少毒物的吸收。因此，灌胃容积应不超过不同体重的动物最大 耐受量。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 393,
                    "label": "几种农药用不同助剂稀释，其毒性有差异",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 394,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 395,
                    "label": "各种动物对同一毒物的反应不一致。有人统计 154种毒物的敏感实验结果，小鼠敏感的38种，家兔敏感的28种，狗敏感的44 种，可见动物对不同毒物的敏感性有明显的差异。人对毒物的作用，一般比动物敏感。据260种化合物对人与动物的致死量比 较，大多数动物的致死量较人高1?10倍，其中约3%高25?450倍，8%左右的 人致死量较动物高，说明大多数情况下，人对毒物的敏感性比动物高，少数情况 下，动物的敏感性高于人。例如，狗和兔能耐受比人致死剂量高1〇〇多倍的阿托 品，但狗对氰氢酸的敏感性，则比人高得多。人与动物及各种属动物之间对毒物反应的差异，除在量方面的差异外，尚存在 质的差异。例如，苯可引起兔的白细胞数减少，但对狗仅可使白细胞数升高；吗啡 对狗产生麻醉作用，而使猫出现剧烈不安和痉挛；2-乙酰氨基芴能引起大鼠肝癌， 但对猴、豚鼠不敏感。各种动物对同一毒物的反应不一致。有人统计 154种毒物的敏感实验结果，小鼠敏感的38种，家兔敏感的28种，狗敏感的44 种，可见动物对不同毒物的敏感性有明显的差异。人对毒物的作用，一般比动物敏感。据260种化合物对人与动物的致死量比 较，大多数动物的致死量较人高1?10倍，其中约3%高25?450倍，8%左右的 人致死量较动物高，说明大多数情况下，人对毒物的敏感性比动物高，少数情况 下，动物的敏感性高于人。例如，狗和兔能耐受比人致死剂量高1〇〇多倍的阿托 品，但狗对氰氢酸的敏感性，则比人高得多。人与动物及各种属动物之间对毒物反应的差异，除在量方面的差异外，尚存在 质的差异。例如，苯可引起兔的白细胞数减少，但对狗仅可使白细胞数升高；吗啡 对狗产生麻醉作用，而使猫出现剧烈不安和痉挛；2-乙酰氨基芴能引起大鼠肝癌， 但对猴、豚鼠不敏感。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 396,
                    "label": "\"(1)? 在脉率（次/min)上随体重增加而减少，例如，小鼠为600 次/min，大鼠为352次/min，豚鼠为290次/min",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 397,
                    "label": "(1) 近年随着对人类遗传病和染色体异常研究的进展，发现其中 有些遗传变异可加重某些外来化合物对机体的不利影响。例如，镰刀形细胞症患者 的正常血红蛋白为一种不正常血红蛋白所代替，从而患者接触一氧化碳、二氯甲烷 等时，均引起对造血功能的不利影响，主要是血浆中氧分压下降时，红细胞即变成 细长镰刀形而易积聚、易破坏、寿命缩短，从而发生贫血。另一种遗传性疾病是6-磷酸葡萄糖脱氢酶减少或完全缺乏，以致引起红细胞 中还原型辅酶n和还原型谷胱甘肽生化合成过程障碍，含量降低。而此两种物质对 维持红细胞的完整性极为重要。因此，6-憐酸葡萄糖脱氢酶缺乏者接触苯、苯胺、 四氯化碳、羟胺、亚硝酸盐和三硝基甲苯等有机溶剂、染料中间体、氨基及硝基化 合物等时，其红细胞对溶血的敏感性较正常人高。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 398,
                    "label": "\"代谢酶量与质不同，代谢途径、代谢速率等方面不同，可成为 影响毒物毒性差异的主要原因。例如肝组织内细胞色素氧化酶活性，若以每千克体 重计，则小鼠为141，大鼠为80",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 399,
                    "label": "\"这也是引起差异的重要原因，表现在以下两个方面。 ①同一毒物在不同种属动物的生物半衰期不同，一般人对外源性毒物的代谢 较试验动物慢。例如，保泰松在人体内的生物半衰期为3d (72h)，但在狗为6h， 兔仅3h。又如苯胺在小鼠代谢半衰期（即生物半衰期）为35min，但在狗为 167min。② 肝将血浆中毒物排至胆汁的能力不同，例如，兔将铅排至胆汁速度为大鼠 的1/2",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 400,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 401,
                    "label": "\"①? 初出生和未成年的动物对外来毒物的代谢酶系尚未发育完全， 细胞色素P-450",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 402,
                    "label": "\"①???? 毒物对机体的毒性作用常存在性别差异，但各种化学物并不一 致。例如，马拉硫磷与甲基对硫磷对雄性动物的毒性较高，而对硫磷和乙拌磷则相 反，但总的来说，至少一般常用的有机氯、有机磷和氨基甲酸酯等杀虫剂，雌性较 雄性敏感。这种雌雄性别差异的不一致性，可能是由于经肝微粒体酶代谢后可以解 毒的化学物，对雄性的毒性作用较低。性别差异可能主要与性激素功能有关，因一般雌雄性别差异在成年动物较为明 显。例如，雄鼠将DDT转化为DDE",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 403,
                    "label": "节律活动是生命的基本特征之一，因此，生活活动条件的改变， 常可影响毒物对机体的毒性作用。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 404,
                    "label": "实验证明，将小鼠置于恒定光照周期下生活（早6时至晚6 时光照，其余时间黑暗），每4h腹腔注射相同剂量乙醇，结果发现每日下午4时和 晚上8时，动物死亡率最高。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 405,
                    "label": "① 季节也同样影响毒物毒性。例如，在一年内不同季节分别向10 只同品系大鼠注射人一定剂量巴比妥钠，其人睡时间都表现出差别。在药物学研究所，近年已将药物毒力时间的改变，称为“时间性毒性”，这个 概念对毒理来说也同样重要。这种时间性毒性变化的时间规律是生物周期（生物 钟）的基础，现已证明动物体内存在所谓“时间结构”，它不仅影响毒物的昼夜毒 性变化，而且有季节变化。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 406,
                    "label": "①? 妇女在“三期”一月经期、妊娠期、哺乳期中常 表现对毒物的耐受性降低。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 407,
                    "label": "有病或病后恢复期及身体衰弱者常对毒物的敏感性提高。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 408,
                    "label": "机体不同劳动情况，对毒物反应各异，实验证明体力活动 与机体对毒物的敏感性有关",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 409,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 410,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 411,
                    "label": "中毒者平均年龄为36. 83岁，最小不满1岁，最大99岁。生 产性中毒者的平均年龄（40. 24岁）大于生活性中毒者（35. 67岁），生产性及生活 性中毒者的平均年龄都是男性大于女性（生产性：41.32岁>38. 42岁；生活性： 38.86岁>34.91岁）。在几个年龄段中，15?59岁青壮年中毒者占绝对多数，为 84. 11%。生产性中毒病例中，35?59岁组占55.41%;生活性中毒病例中，15? 34岁组占46.72%。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 412,
                    "label": "总中毒例数的性别比由于受生活性中毒女性患者多于男性患者 的影响，所以女性多于男性。生产性中毒以男性为主，生活性中毒以女性为主。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 413,
                    "label": "(2) 不管是生产性中毒，还是生活性中毒，中毒人员的职业分布主要是 农民。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 414,
                    "label": "(2) 无论是生产性中毒还是生活性中毒，病例都是从5月份开始 明显增多，且相对集中发生于7?9月，尤以生产性中毒为主（3季度是1季度的 33.45倍）；10月份开始减少；12月份为低谷。一至四季度疾病控制部门报告农药 中毒例数分别占医院各季度接诊的总中毒例数的百分数分别为11.45%、28. 11%、46.21%、11.20%。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 415,
                    "label": "农药中毒与地区种植农作物的种类有密切 的关系，农药中毒主要发生在粮棉产区，尤其是棉产区。无论是生产性或生活性的 农药中毒病例，主要来自山东、江苏、浙江、江西和湖北5省的报告，其例数之和 超过总中毒例数的66%。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 416,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 417,
                    "label": "肝微粒体多功能氧化酶是哺乳动物体内一组具有多功能的 代谢酶系。一般认为多功能氧化酶是一种解毒酶，它能把农药氧化或羟基化成极性 更高的物质，易于排泄。但也可以增毒，如涕灭威、对硫磷等。有机氯农药滴滴涕、有机磷农药杀虫畏和氨基甲酸酯农药叶蝉散等都对肝微粒 体酶具有诱导作用。这种结果有助于对有毒化合物的解毒作用，但同时由于诱导使 肝细胞光滑内质网增生，哺乳动物肝脏重量增加，会对肝功能带来不利影响。有机磷农药对胆碱酯酶有抑制作用，从而对神经系统功能产生影响。滴滴涕作 用于肾上腺皮质，减少血浆胆红素的含量，提高胆红素-葡萄糖醛酸转移酶的活性。 有机磷、氨基甲酸酯杀虫剂对血清中葡萄糖酸苷酶有显著影响，在极低用量时，不 影响胆碱酯酶，但可以引起葡萄糖酸苷酶活性的明显增加。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 418,
                    "label": "有机氯杀虫剂引起肝脏病变，某些有机磷农药引起皮炎及 皮肤刺激，也有的引起眼睛受损等。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 419,
                    "label": "(1) 如果使用的农药 对脱氧核糖核酸（DNA)能产生损害作用的话，就可能干扰遗传信息的传递，引 起子细胞突变。当致突变物质作用于生殖细胞，使生殖细胞发生变化时就会致畸， 若引起体细胞突变便可能致癌。有些农药在动物体内已经被证实具有致癌作用，有 机氯农药常被认为有“三致”作用。有机磷农药大部分是弱烷化剂，如敌敌畏、敌 百虫、乐果、甲基对硫磷、甲基内吸磷等都能与DNA的鸟嘌呤起甲基化作用，因 而有可能引起癌症，其中敌敌畏的作用最强。敌百虫和乐果对小白鼠体内骨髓细胞 有致突变作用。一些氨基甲酸酯杀虫剂能产生亚硝胺类化合物，亚硝胺具有致癌作 用。除草醚和杀虫脒被认为有“三致”作用，已停止使用。当然，“三致”作用试验大多是在高剂量情况下在动物（小白鼠）身上做的试 验，因此，不能机械、简单地类推到人体中，只是一种可能性。然而，这是值得注 意和研究的问题，因为一旦人体上发现其现象时已为时已晚。如美国在越南战争期 间，使用化学落叶剂造成战后出现许多畸形儿就是一个典型的例子。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 420,
                    "label": "农药对机体的毒性作用，取决于其固有毒性以及农药或活性代谢产物到达作用 部位的数量，而后者与化学毒物在体内的吸收、分布、代谢和排泄过程有关。农药 从机体的外表面或内表面（如皮肤、消化道黏膜和肺泡）吸收进人血循环，进入血 液后，随血液分布到全身各组织。在某些特定的组织，如肝可以通过代谢从机体内 被有效地清除，而在另一些组织，如肾和肺，则通过排泄清除。吸收、分布、代谢 和排泄过程共同影响农药在靶器官中的浓度和持续时间。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 421,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 422,
                    "label": "一是作物对 土壤中农药的吸收；二是通过作物表面的吸收。种植在受农药污染的土壤上的作物 可以从土壤中吸收农药。研究表明，作物吸收农药的能力与农药的品种和作物的种 类有关。一般来说，水溶性的农药要比脂溶性的农药容易被作物吸收，根菜类和薯 类作物吸收土壤中农药的能力要比叶菜类、果菜类强。通常最容易吸收农药的作物 是胡萝卜、草莓、菠菜、萝卜、马铃薯等，而像番茄、圆椒、卷心菜、白菜等则吸 收土壤中农药的能力较弱，但黄瓜则是例外，对土壤中农药的吸收能力较强。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 423,
                    "label": "残留农药在可食部位不同组分间的分布也因农药性质和作物种类而 有差异。例如，在有机氯杀虫剂中，在水中溶解度较高的y-六六六（7.9mg/kg， 25X：)易于在植物组织内渗透和转移，它在糠中和白米中的比例为4: 6，即残留 物中约有60%渗透残留于白米部分。而/>，/>'-DDT的水溶解度较低，其渗透移动 性也较弱，而脂溶性较高.所以残留物约有70%分布在糠中。同样，有机磷杀虫 剂中的马拉硫磷、倍硫磷，其残留物有80%以上存在于米糠中。对水果类而言， 果皮和果肉中残留农药的分布比例也因水果种类而有差异，即使是同一种水果，也 依成熟程度不同而有差异。但一般来说，80%?90%的农药残留存在于果皮中。残留于食物、蔬菜和水果中的农药对人体的影响也与人们的饮食习惯和生活习 惯有关。例如，用水清洗可以去除表面的残留农药。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 424,
                    "label": "畜禽产品、水产品中农药残留畜禽产品中农药残留主要来源于含有农药 残留的饲料，食用野外在农药残留污染的土壤中生殖的蚯蚓、昆虫等。水产品中农 药残留还与水体污染有关。据有关调查监测资料表明，总的来看，我国的畜禽产品 污染比较普遍，个别地区较为严重。就农药品种来说，主要是六六六、滴滴涕。我 国出现六六六、滴滴涕残留高峰在20世纪70年代。据我国1982年16省市部分地 区的调查显示，鸡蛋中六六六、滴滴涕平均含量分别为〇.22mg/kg和0.175 mg/kg。在我国1983年禁用有机氯农药后的10多年中，六六六和滴滴涕的残留水 平有所下降，普遍下降了1个数量级。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 425,
                    "label": "吸收是指化学毒物从接触部位，通常是机体的生物膜转运至血液循环的过程。 除了经动脉和静脉注射给药外，其他暴露途径均存在吸收过程。农药主要经皮肤、 呼吸道和消化道吸收。职业性暴露途径多为吸人与经皮吸收，未成年人多为经口或 经皮吸收，幼儿、儿童存在从手到口的暴露途径。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 426,
                    "label": "经胃肠道吸收的农药多为食物的农药残留，儿童也可能误服农药或被农药污染 的物体。口腔黏膜可吸收少量农药。农药经口暴露的吸收率取决于该农药穿过胃肠道内生物膜的能力。农药经口暴露的吸收率取决于该农药穿过胃肠道内生物膜的能力。胃肠道壁的 吸收方式主要为简单扩散，仅极少数通过主动输送（转运），这常是利用哺乳动物 胃肠道吸收营养素的专用运输系统整个胃肠道壁（从口到肛门）都有吸收能力，但主要由小肠吸收。吸收难易与 毒物的电离度、是否属于脂溶性有关。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 427,
                    "label": "\"① 消化液如pH值的改变。弱的有机酸在胃液（PH = 2)中非电离型较多， 易于吸收，而在肠内（pH值为7)则电离型的比重大，吸收较差。② 胃肠胃肠运动全面降低，可使吸收增加；反之，胃肠运动加速，则吸收 减少；胃排空加速，则胃吸收减少；肠道蠕动增加，也抑制肠道吸收。③ 消化道内容食物可与毒物形成较易吸收的复合物，或改变胃肠道pH值",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 428,
                    "label": "①? 溶解度是重要因素，溶解度大者吸收快。②? 脂溶性脂/水分配系数愈大，扩散速率也愈大。③? 离子化程度离解度强，扩散速率降低。④? 与蛋白质等大分子物质的亲和力。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 429,
                    "label": "(1) 视其对胃肠道内容物的pH值、胃排空、消化道活动的影 响而异。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 430,
                    "label": "视几种化学物质的相互作用而异，如EDTA (乙二胺 四乙酸）可增强物质的吸收，这一作用是非特异性的，既增加强酸、强碱的吸收， 也增强中性物质的吸收。这一作用似乎是由于EDTA除去膜上的钙，而增大其通 透性所致的。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 431,
                    "label": "①? 半饥饿状态能增加吸收。缺血性贫血时，可增加锰、钴、铊经胃肠吸收",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 432,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 433,
                    "label": "主要取决于空气中毒物的浓度（即该种物质的 分压，或称张力）、血气分配系数[即气体在血液中的浓度（mg/L)与在肺泡气中 的浓度（mg/L)之比，这是一个常数，例如，二硫化碳为5、苯为6.85、乙醚为 15、甲醇为1700，由此可见甲醇、乙醚、苯、二硫化碳均易被吸收]。毒物通过肺 泡上皮细胞是以被动扩散的方式进行的，因此，毒物在空气中的分压越高，吸收率 亦高，此时肺动脉血内的毒物浓度逐渐升高，并与所吸人空气中毒物的分压越趋接 近，最后达到平衡（亦称饱和）。平衡是相对的，因血中毒物浓度不断变化，其中 一部分由血中转移到组织中，从而血中浓度又趋于不平衡。血液又可重新吸收一定 数量的毒物。达到平衡所需的时间，视毒物血气分配系数（血浆水中的分压与吸入 气中分压平衡时，血液中毒物的浓度/肺泡中毒物的浓度）而异。血气分配系数高 的毒物，须大量与蛋白质结合，或溶于脂肪，才能提高它在血浆中的分压，与血气 分配系数较低的毒物相比，需要更长的时间，才能达到平衡状态，因此吸收量亦较 大。气态毒物水溶性高低，对于它在呼吸道中被哪一部分吸收，具有决定性意义。 水溶性高的毒物在路经上呼吸道时，即为潮湿的黏膜所吸附，故多属上呼吸道刺激 物，而水溶性低的毒物，则在进人深部呼吸道后，才慢慢被吸收",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 434,
                    "label": "(1) 以气溶胶状态悬浮于空气中，其进 人呼吸道的情况较气态毒物为复杂。气溶胶在呼吸道的吸收，首先要和表面接触， 并附着在那里，然后溶解于呼吸道分泌物（主要是水）中才能被吸收，否则不能被 吸收，且随呼气排出。黏附分3种：沉降、惯性冲击及扩散。概言之，影响毒物进人呼吸道的量和在其中吸收速度的因素，一方面是毒物本 身的状态（以何种方式存在于空气中，粒子大小、相对密度、溶解度等）及数量， 另一方面是接触者所处的状态。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 435,
                    "label": "经皮肤吸收是指外来化学物质透过完整皮肤的表面结构，而进人血液的过程， 这主要取决于皮肤结构。皮肤可分表皮与真皮两大部分。化学毒物通过表皮到达真 皮层后，由于真皮毛细血管壁细胞膜有较大的膜孔，因此毒物以滤过方式进人毛细 血管，水溶性对其在组织液中的扩散速度起重要作用，而脂溶性不起决定性作用。 因此脂水都溶的物质（如苯胺）可为皮肤迅速吸收，只脂溶而水难溶的物质（如 苯）经皮吸收率相对较低。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 436,
                    "label": "第一阶段，亦称“渗透相”，毒物以“渗透”方式通过表皮细胞，或通过开 口于表皮细胞之间的皮脂腺、汗腺或毛囊。角化表皮质对吸收速度有限速作用，故 称“限速屏障”。几乎所有外来化合物均通过简单扩散而透过表皮的角质层。极性 物质的扩散是通过含水的角质蛋白纤维丝的外表面的过程，而非极性物质的扩散是 通过蛋白纤维丝之间的脂质的过程。由于蛋白纤维丝外表面所能提供的“通道”极 为有限，因此，极性分子比非极性分子难以通过。非极性分子的扩散速率（弥散 率）和它的脂溶性呈正比，和分子量大小呈反比，相对分子质量大于300就难以通过。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 437,
                    "label": "(1) 是指物质不经表皮层吸收的过程，因汗腺、皮脂腺 和毛囊的基部均在真皮内，汗腺和毛囊（皮脂腺）管的下1/3左右没有角质层和其 他表皮层，因此，到达此部的物质就不需要渗透表皮屏障，可以没有渗透相，脂溶 性不起决定作用。脂腺管腔内部是脂，需要脂溶性，这是例外。虽然皮肤通过其“限速屏障”阻止了多种农药的人侵，但由于经皮肤吸收直接 进人血液循环，不经肝脏解毒作用，即直接输送至全身。因此，经皮肤吸收仍然是 一个比较危险的吸收途径，加之某些农药对皮肤无刺激性，从而在出现全身症状之 前，已局部吸收不易觉察，对此点应予重视。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 438,
                    "label": "(1) 除液态外来化合物接触皮肤后，有可能经皮吸收， 而产生毒效应外，有的农药物质虽呈气态，但也可能经皮肤吸收进入血液。影响气 态农药经皮肤吸收的因素有以下几点。① 不同部位皮肤的解剖学差异。人体皮肤的通透性大小依次为阴囊>腹部> 额部>手掌>足底。不同物种动物皮肤通透性也不一样，其顺序为：兔>啮齿类> 豚鼠、猴子 > 人。②? 农药本身的理化性质。③? 某些溶剂可改变皮肤结构，增加农药的吸收量。外界环境的影响。如外界环境温度升高，表皮角质层脂质流动性增加，促 进了农药在角质层的渗透，从而促进吸收。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 439,
                    "label": "(1) 毒物污染的其他吸收途径具有实际意义。一滴四乙基焦磷 酸酯滴人眼中能致大鼠死亡，也很易使人死亡。虽然眼、泪管和鼻腔分泌物的pH 与胃肠道不同，但吸收情况实际上相差无几。差别之一是在眼内的浓度可比进人全 身的浓度大，局部作用（例如瞳孔缩小）可在全身作用之前出现。此外，在动物实验中，可经静脉、腹腔、皮下、肌肉等途径将毒物注人体内。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 440,
                    "label": "进入人体的农药是否长期累积在人体内，取决于农药的脂溶性和农药在人体内 的代谢情况。从目前来看，在人体内易累积的农药仍以有机氯农药为主，其他农药 在人体内累积量很小，不易测出。研究表明，进人人体的有机氯农药主要积存于脂 肪组织里。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 441,
                    "label": "有机磷农药很容易因呼吸、吞服和经皮肤接触而吸收， 有机磷农药对人体的最初毒性作用是使神经末梢的乙酰胆碱酯酶（AChE)磷酸 化。该酶是正常控制神经脉冲从神经纤维传递到肌肉和腺体细胞的关键酶，并控制 从神经纤维到位于自主神经节和大脑内的另一些神经细胞的神经脉冲传递。组织内 有一定量的酶被磷酸化而失活后，早期将出现头痛、恶心、眩晕、焦躁不安等中毒 症状和体征。中毒较深时会出现无力、呕吐、出汗、肌肉抽搐、流涎、流泪、鼻和 气管分泌物增多、视力模糊、瞳孔缩小、意识丧失、失禁、惊厥和呼吸困难等症 状。呼吸功能衰退和肺水肿常常是导致有机磷农药中毒死亡的原因。有机磷农药中毒后，对中毒病人首先要清除污染（衣服、皮肤等），清胃与洗 肠，确保呼吸道洁净（严重时维持人工呼吸），然后静脉注射硫酸阿托品，应用解 磷定和双复磷。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 442,
                    "label": "N-甲基氨基甲酸酯类杀虫剂的中毒作用是引起 AChE的可逆性氨基甲酰化，其中毒症状为不适、肌无力、眩晕、出汗、头痛、流 涎、恶心、呕吐、腹痛、腹泻、呼吸困难、支气管痉挛和胸闷。对中毒人员要清除 污染，确保呼吸道洁净，静脉注射硫酸阿托品，禁用吗啡、安茶碱和利血平，只有 在特殊体征时如明显低血压时，才能给肾上腺素能的胺类药物。对中毒人员要清除 污染，确保呼吸道洁净，静脉注射硫酸阿托品，禁用吗啡、安茶碱和利血平，只有 在特殊体征时如明显低血压时，才能给肾上腺素能的胺类药物。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 443,
                    "label": "有机氯类杀虫剂可以不同程度地经肠道吸收，也可经皮 肤和肺部吸收。经皮肤的吸收率随品种不同而异，六六六、林丹、环戊二烯类（艾 氏剂、狄氏剂、异狄氏剂、氯丹、七氯）和硫丹能有效地经皮吸收，而滴滴涕、三 氯杀螨醇、甲氧滴滴涕、灭蚁灵和开蓬的经皮吸收率则明显较低。脂肪和脂肪溶剂 能加强有机氯农药的吸收。有机氯农药的主要毒性表现为对神经系统的作用。中毒 早期出现感觉性紊乱、脸和四肢感觉过敏或异常、头痛、眩晕、恶心、呕吐、运动 失调、发抖以及精神错乱等症状，较严重时肌肉阵发性抽搐，阵发性惊厥，发作时 可出现昏迷和呼吸困难等症状。对中毒人员应清除污染（吞服者应清洗肠胃或服用 活性炭和催吐剂），如发生惊厥，则应使病人保持侧身俯卧。如口部运动剧烈，应 在牙间插人牙板以保护舌头。控制惊厥，可用安定、氯羟安定、巴比妥酸盐类和肌 肉松弛剂（琥珀酰胆碱）。禁忌经口给动物油、植物油或脂肪，以免增进亲脂性的 有机氯在胃肠内的吸收；禁忌给肾上腺素、其他类肾上腺素的胺类或阿托品，以免 增强氯化烃类引发的中毒者心肌性兴奋性而可能导致出现心室纤颤的危险症状。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 444,
                    "label": "拟除虫菊酯类农药是一种神经轴突毒剂，可导致 神经传导完全阻断，也可引起神经系统以外的其他细胞产生组织病变而导致死亡。 然而大多数拟除虫菊酯类农药对哺乳类动物的毒性较低，并且在哺乳类动物肝脏酶 的作用下能迅速生物降解（酯类水解和氧化）而排出体外，一般吸人和经皮接触时 发生全身性毒性的可能性不大。因而该类农药被广泛应用于农业、家庭和花园。拟除虫菊酯类农药误服的中毒症状，在消化道方面表现为呕吐、恶心、打喷嚏、呼吸急促、困难；在心血管方面表现为先血压过低、脉搏迟缓，接着出现高血 压和心搏过快；在神经方面表现为短时间反应迟钝、乏力、运动失调、心悸，然后 全身兴奋、惊厥等；皮肤接触的中毒症状多为局部性过敏，出现红疹，眼、鼻、口 周围及接触部位有刺痛感，少数也可出现神经中毒症状。对拟除虫菊酯类农药中毒，目前尚无特效治疗药物。发生中毒后，应立即撤离 现场，清洗药剂接触部位，避免强阳光照射，用护肤剂局部涂抹，或用止痒药，切 勿使病人散热，而应处于暖和的环境中。误服者应立即催吐，失去知觉者要洗胃。 出现严重神经系统中毒症状时可注射异戊巴比妥。若心血管症状明显，可注射氢化 可的松。若与有机磷混合中毒，则应先解决有机磷中毒，肌注阿托品，直至口感发 干为止。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 445,
                    "label": "含砷类农药包括无机砷类农药与有机胂类农药两类。无 机砷类农药一旦被吸收后，对神经系统、血管、肝、肾和其他组织的细胞均有毒性 作用。急性砷中毒的症状一般在吞服lh内出现，但也可延至几小时后出现，以胃 肠道症状为主。严重中毒病人的呼吸气味和粪便中有蒜味可帮助确诊。胃肠道中毒 反应包括口腔、咽部和食道炎症，腹部烧灼性疼痛，口渴，呕吐，甚至出现米汤样 或血性腹泻。肾脏中毒表现为蛋白尿、血尿、葡萄糖尿、少尿、管型尿.严重时出 现急性肾小管坏死。中枢神经系统中毒症状为头痛、眩晕、肌无力和肌痉挛、低体 温、体僵、妄想、昏迷和惊厥。心血管受损表现为休克、发绀和心律失调。肝脏受 损可导致血液内循环的各种肝细胞酶浓度增高，并导致黄疸。造血组织受损可引起 贫血，白细胞和血小板减少。无机砷农药中毒后，会导致猛烈腹泻，因此禁用泻 药。用肥皂或水清洗接触处（皮肤、眼睛），吞服者应插胃管抽吸和灌洗清胃，口 服活性炭，静脉输液恢复体内水量以保持尿量和电解质平衡。如出现肾衰竭，则应 监视液体的进、出量以避免体内过度液体负荷。休克时应输血和面罩给氧。砷为强溶血剂，这是其他砷化合物所没有的毒性作用。中毒症状在接触后1? 24h出现，表现为头痛、不适、无力、眩晕、呼吸困难、恶心、腹痛、呕吐、暗红 色尿、黄疽，严重时体弱无力、腹痛和肝大症状明显。溶血性贫血一般能帮助确 诊，血涂片上可见到红细胞碱性点彩，血浆中游离胆红素含量增高，出现高铁血红 蛋白血症和高铁血红蛋白尿。胂的直接毒作用和溶血产物引起的肾衰竭是胂农药中 毒致死的主要原因。有机胂农药中毒后，应将病人移至新鲜空气环境中，静脉内输 液尽量稀释尿液，以利于砷和溶血产物的排出，给足够的碳酸氢钠使尿保持碱性， 如肾功能衰竭则要小心监视液体平衡以免过量负载。严重中毒还应考虑交换性 输血。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 446,
                    "label": "有机锡类农药中毒有机锡类农药对眼睛、皮肤和呼吸道均有一定的剌激 作用，其毒性作用主要表现在大脑上。中毒原理是抑制脑细胞的氧化磷酸化作用， 造成脑和脊髓间质水肿，肝脏和造血系统损害。其中毒症状为头痛、恶心、呕吐、 头昏，有时抽搐、失去知觉，并出现畏光和精神紊乱、排尿困难。中毒严重时出现 脑水肿，病情变化迅速是有机锡农药重度中毒的特征之一。皮肤接触会局部发痒， 出现淡红色斑状小点，严重时将造成大面积皮肤糜烂。有机锡类农药皮肤接触污染后，用肥皂和水清洗皮肤上沾附的农药，继之用高 锰酸钾或漂白粉溶液擦洗，再用1%氧化可的松软膏涂抹。眼睛接触后，用清水或 (生理）盐水冲洗。有机锡类农药中毒后，巯基类药物治疗无效，应将患者放在安 静环境下卧床休息，同时大量补充B族维生素和维生素C。出现脑水肿应绝对避免 静脉大量输液，同时控制进水量，或用20%甘露糖醇200?500mL静脉注射， 10?30min注完，以进行脱水疗法，同时供给三磷酸腺苷（ATP)、半胱氨酸等以 帮助恢复体质。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 447,
                    "label": "农药毒性实验包括急性经口毒性（LD50）实验、急性经皮毒性实验、急性吸 人毒性实验（适用于挥发性液体或可升华固体化学物质）、眼刺激实验、皮肤剌激 实验及皮肤致敏实验。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 448,
                    "label": "亦称改良维氏法或简化概 率单位法，是评估受试物毒性的第一步，通过短时间经口染毒初步了解受试物的毒 性特征和剂量-反应关系，为急性毒性分级、标签管理和其他毒理学试验剂量选择 提供依据。本方法计算方便，简单易行。缺点是LD50估计值不够精确，可信限 范围较大。但可初步了解受试物的毒性特点。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 449,
                    "label": "受试物通常配制成水溶液、食用油（如玉米油）溶液、悬浮液或乳化剂。也可采用羧甲基纤维素、明胶和淀粉将受试物配制成混悬液或糊剂。除水以外的溶剂， 用前应了解其毒理学特性，必要时设立溶剂对照组。不同浓度受试物现用现配制。 一次染毒容量不宜超过lmL/100g体重，水溶液可达到2mL/100g体重。通过调整 受试物溶液的浓度，使各剂量组经口染毒的容量一致。如果一次染毒容量太大，也 可在24h内分2?3次给予。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 450,
                    "label": "试验动物种属和性别啮齿类动物中可选用SD或Wistar大鼠，单一性 别（雌性应为未妊娠和未经产的）或两种性别皆可。健康成年大鼠鼠龄在8?12周 内，体重变异不超过平均体重的士20%。按随机原则逐只进人试验。(2)? 饲养环境和条件饲养环境和条件应符合国家有关规定。饲喂常规动物饲 料，饮水量不限。试验前动物应在饲养环境中检疫、适应至少3d。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 451,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 452,
                    "label": "①? 一般采用l0mg/kg、100mg/kg和1000mg/kg三个剂量，每个剂量经口染 毒2?3只动物。染毒后24h内，10mg/kg和100mg/kg剂量组动物未出现死亡， 而1000mg/kg剂量组动物全部死亡，可终止试验。确定正式试验的剂量系列为 100mg/kg、215mg/kg、464mg/kg 和 1000mg/kg。②? 也可采用215mg/kg —个剂量，一次染毒5只动物（单一性别），如24h内 动物出现严重中毒症状，并有多个动物死亡，则推荐低于215mg/kg的剂量系列进 人正式试验；如24h内染毒动物未出现异常，可采用高于215mg/kg的剂量系列进入正式试验。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 453,
                    "label": "\"①? 剂量系列可按预试验结果或根据相似结构化学物质获取有关毒理学资料来 确定。②? 将动物随机分为4组，每组5只动物。染毒后严密观察和详细记录动物出 现的任何异常表现，每组动物的死亡数和死亡时间。所有染毒动物的观察期为 14d。必要时可延长观察期。③? 根据各组动物的死亡数（n，r2，r3，r4)和所采用的剂量系列（Eh， D2",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 454,
                    "label": "(1) 在染毒后24h和14d的观察期内，每天定时观察并详细记录每 只动物的中毒反应。特别在染毒后30min和第一个4h内应关注。临床观察至少包 括以下内容。①?? 中枢神经系统和神经肌肉系统体位异常、叫声异常、不安、呆滞、痉挛、 抽搐、麻痹、运动失调、对外反应过敏或迟钝，奇特的行为如过度反复抓挠口周、梳理、转圈，甚至自残、倒退行走等。②? 植物神经系统瞳孔扩大或缩小，流涎和流泪。③? 呼吸系统鼻孔流液，鼻翼扇动，呼吸深缓，呼吸过速，峰腰。④? 泌尿生殖系统会阴部污秽，有分泌物，阴道肿胀。⑤? 皮肤和被毛皮肤充血、紫绀，被毛蓬松、污秽。⑥? 眼眼球突出，结膜充血，角膜混浊。⑦ 消化系统流涎、腹泻、厌食。记录出现震颤、惊厥、流涎、腹泻、嗜睡 和昏迷的时间，严重程度，死亡时间或恢复时间；记录存活动物的体重，至少每周 称量一次。死亡、濒临死亡和剧烈痛苦的动物以及试验结束尚存活的动物，应给予 人道处死。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 455,
                    "label": "在试验期内中毒死亡的和人道处死的动物应做大体解 剖，记录每只动物的大体病理改变；染毒后存活时间>24h的动物其器官显示有大 体病理改变，则需进行组织病理学检查，可获取有关毒作用的信息。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 456,
                    "label": "评价试验结果时，应将LD50与观察到的毒性效应和尸检所见相结合考虑。 LD50值是受试物毒性分级和标签标识以及判定受试物经消化道摄人后引起动物死 亡可能性大小的依据。引用值时一定要注明所用试验动物的种属、性别、染 毒途径、观察期限等。评价应包括动物接触受试物与动物异常表现（包括行为和临 床改变、大体损伤、体重变化、致死效应及其他毒性作用）的发生率和严重程度之 间的关系。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 457,
                    "label": "急性经口毒性试验是评价化学物急性毒性的重要参数之一。可评估急性经口吸 收的毒作用特点和小致死量的估计值。LD50值用于急性毒性分级。由于受试物的 LD5C值随不同实验室和动物种属之间或同种动物间的差别有所不同，因此不应视 作鉴定受试物毒性的一个绝对值。从动物实验结果外推到人的可靠性很有限。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 458,
                    "label": "序贯法（UDP)也称剂量上下法，是一个阶梯式的染毒程序。使用单一性别 的动物，一次染毒一只。第一只动物的染毒剂量最好低于LD50的估计值。后续动 物染毒剂量的增减，取决于前一只动物的染毒结果（存活或死亡）；在不能获得受 试物LD5Q的初步估计值及剂量-反应曲线斜率资料时，计算机模拟结果提示起始剂 量可选择175mg/kg，采用0.5的反对数[对应于一个默认的剂量级数因子3.2 (3.2是斜率为2时的级数因子）]计算剂量间距。以大似然法计算LD50的点估计 值和95%可信区间。剂量级数因子由剂量-反应曲线斜率的倒数的反对数决定。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 459,
                    "label": "受试物可配制成水溶液、油溶液、悬浮液或乳化剂。尽可能选用水或食用油 (如玉米油），其他溶剂如羧甲基纤维素、明胶和淀粉可将受试物配制成混悬液或糊 剂。除水以外的溶剂，用前应了解其毒理学特性，必要时设立溶剂对照组。染毒 时，不同浓度受试物现用现配制。一次染毒容量不超过lmL/100g体重，水溶液可 达到2mL/100g体重，通过调整受试物溶液的浓度，使各剂量组经口染毒的容量一 致。如果一次染毒容量太大，也可在24h内分2?3次给予。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 460,
                    "label": "试验动物种属和性别啮齿类动物中首选SD或Wistar大鼠。雌性大鼠 (应为未妊娠和未经产的）比较敏感。如有相关结构的化学物在毒理学和毒代动力 学研究报道证明雄性大鼠更敏感可选择后者。健康成年大鼠鼠龄在8?12周内，体 重变异不超过平均体重的士20%。按随机原则逐只进人试验。(2)? 词养环境和条件饲养环境和条件应符合国家有关规定。饲喂常规动物饲 料，饮水量不限。试验前，人选动物在饲养环境中至少检疫、适应3d。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 461,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 462,
                    "label": "\"受试物的一次染毒剂量为5000mg/kg。先给一只动物染毒， 可出现以下两种情况。①? 染毒48h内动物存活，再给2只动物相同的剂量，观察14d，如动物依然存 活可终止试验；或在给相同剂量的2只动物中，1只存活1只死亡，再追加2只动 物，染毒的5只动物有>3只动物存活，表明该受试物的LD5Q>5000rng/kg",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 463,
                    "label": " 试验前，大鼠禁食过夜，饮水不限。①?? 起始剂量和剂量级数因子的选择。在无法得到受试物致死剂量的估计值时， 默认的起始剂量为175mg/kg;对应于剂量-反应斜率为2的级数因子3. 2所设定的 剂量序列为：1.75mg/kg、5_5mg/kg、17.5mg/kg、55mg/kg、175mg/kg、 555mg/kg、2000mg/kg 或 1. 75mg/kg、5. 5mg/kg、17. 5mg/kg、55mg/kg、 175mg/kg、555mg/kg、1750mg/kg、5000mg/kg。如已知受试物的剂量-反应曲线 斜率比较陡峭或较平坦，剂量级数因子可以缩小或加大。② 试验开始，称量禁食后动物的体重，使用灌胃针头经口染毒，一次一只动 物，每只动物的染毒间隔时间为48h。第二只动物染毒剂量取决于第一只动物的染 毒结果，如动物死亡或呈濒死状态，剂量按级数因子下调一级；如动物存活，剂量 上调一级。当后续剂量出现与起始剂量相反或相同的染毒结果时，再追加4只动物 序贯染毒后结束试验，或当达到任一终止试验的规定时，可结束试验。染毒后大鼠 应继续禁食3?4h。整个试验观察期为14d。③ 如染毒48h内动物存活，而在后续观察期内出现延迟死亡，表明剂量选择 不合适，可考虑再给2只动物低于引起死亡的剂量，重新开始试验，延长观察期。④?? 试验结果以大似然法计算该受试物的LD5。和95%可信区间。⑤?? 终止试验的规定。符合下述任一条件即可结束试验。a.? 在上限剂量范围的序贯染毒中有3只动物存活时。b.? 在任取的6只序贯染毒动物中出现5次相反结果时。c.? 在第一次出现相反结果后，至少应追加4只动物的序贯染毒结果，给定的 似然比计算超过标准值时。在某些情况下，受试物的剂量-反应曲线斜率平坦，可 能需要追加动物达到15只。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 464,
                    "label": " 在染毒后24h和14d的观察期内，每天定时并详细记录每只动 物的中毒反应。特别在染毒后30min内和第一个4h内应关注。临床观察至少包括 以下内容。① 中枢神经系统和神经肌肉系统体位异常、叫声异常、不安、呆滞、痉挛、 抽搐、麻痹、运动失调、对外反应过敏或迟钝，奇特的行为如过度反复抓挠口周、 梳理、转圈，甚至自残、倒退行走等。②? 植物神经系统瞳孔扩大或缩小，流涎和流泪。③? 呼吸系统鼻孔流液，鼻翼扇动，呼吸深缓，呼吸过速，峰腰。④? 泌尿生殖系统会阴部污秽，有分泌物，阴道肿胀。⑤? 皮肤和被毛皮肤充血、紫绀，被毛蓬松、污秽。⑥? 眼眼球突出，结膜充血，角膜混浊。⑦ 消化系统流涎、腹泻、厌食。记录出现震颤、惊厥、流涎、腹泻、嗜睡 和昏迷的时间，严重程度，死亡时间或恢复时间；记录存活动物的体重，至少每周 称量一次。死亡、濒临死亡和剧烈痛苦的动物以及试验结束尚存活的动物，应给予 人道处死。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 465,
                    "label": "在试验期内中毒死亡的和人道处死的动物应做大体解 剖，记录每只动物的大体病理改变；染毒后存活时间>24h的动物其器官显示有大 体病理改变，则需进行组织病理学检查，可获取有关毒作用的信息。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 466,
                    "label": "①? 最大似然比应用软件包（AOT425StatPgm)可直接计算正式试验LD50的 点估计值和95%可信区间。②? 将试验数据以表格形式列出，包括染毒剂量序列，使用动物数，每只动物 的中毒症状，出现中毒症状时间、死亡动物数和时间、恢复时间以及大体解剖检查 结果。③? 软件包将根据上述表格列出的内容自动完成统计分析过程。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 467,
                    "label": "评价试验结果时，应将LD50与观察到的毒性效应和尸检所见相结合考虑。 LD50值是受试物毒性分级和标签标识以及判定受试物经消化道摄入后引起动物死 亡可能性大小的依据。引用LD50值时一定要注明所用试验动物的种属、性别、染 毒途径、观察期限等。评价应包括动物接触受试物与动物异常表现（包括行为和临 床改变、大体损伤、体重变化、致死效应及其他毒性作用）的发生率和严重程度之 间的关系。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 468,
                    "label": "急性经口毒性试验是评价化学物急性毒性的重要参数之一，可评估急性经口吸 收的毒作用特点和小致死量的估计值。LDM值可用于急性毒性分级。由于受试物 的LD50值随着不同实验室和动物种属之间或同种动物间的差别有所不同，因此不 应视作鉴定受试物毒性的一个绝对数。从动物实验结果外推到人的可靠性很有限。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 469,
                    "label": "概率单位法亦称目测法或对数概率单位绘图法，以管伺法经口给各试验组动物 不同剂量的受试物，染毒剂量的选择可通过预试验确定。染毒后观察动物的毒性反 应和死亡情况，试验期间死亡动物要进行尸检，试验结束时仍存活的动物应人道处 死并进行大体解剖。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 470,
                    "label": "受试物一般配制成水溶液、油溶液、悬浮液或乳化剂。尽可能选用水或食用油 (如玉米油），其他如羧甲基纤维素、明胶和淀粉可将受试物配制成混悬液或糊剂。 除水以外的溶剂，用前应了解其毒理学特性，必要时设立溶剂对照组。不同浓度受 试物现用现配制。一次染毒容量不超过lmL/100g体重，水溶液可达到2mL/100g 体重。通过调整受试物溶液的浓度，使各剂量组经口染毒的容量一致。如果一次染 毒容量太大，也可在24h内分2?3次给予。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 471,
                    "label": "(1)? 试验动物种属和性别一般选用SD或Wistar大鼠。两种性别，雌性动 物应是未妊娠和未经产的。(2)? 体重开始试验时大鼠体重为180?150g，体重变异不超过平均体重的 ±20%。按随机原则分组。(3)? 分组和剂量水平根据所选方法的要求，原则上应设4?6个剂量组，每 组动物10只，雌雄各半。各剂量的组间距一般以〇.65?0.85mg/kg为宜。可采用 较大组距和较少量动物进行预试验。如果受试物毒性很低，也可采用一次限量 5000mg/kg染毒方法。饲养环境和条件饲养环境和条件应符合国家有关规定。饲喂常规动物饲 料，饮水量不限。试验前动物应在饲养环境中至少检疫、适应3d。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 472,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 473,
                    "label": "采用能导致动物全部死亡和全部存活的3个剂量，即10mg/kg， 100mg/kg和1000mg/kg，每个剂量经口染毒2?3只动物。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 474,
                    "label": "(1)? 试验前，称量动物体重，随机分为4?5个组，各组动物数不 一定要求相等，但不少于10只。① 在预试验中得到的两个剂量之间设计4?5个等比剂量。尽管本方法不要求 剂量组间呈等比关系，但等比剂量可使各点距离相等，有利于作图。②? 以灌胃方式给各组动物一次染毒不同剂量的受试物，若容积太大，也可在 24h内分2?3次染毒给予。染毒后继续禁食3?4h。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 475,
                    "label": "\"一次限量5000mg/kg",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 476,
                    "label": "(1)? 在染毒后24h和14d的观察期内，每天定时并详细记录每只动 物的中毒反应。特别在染毒后30min内和第一个4h内应关注。临床观察至少包括 以下内容。①? 中枢神经系统和神经肌肉系统体位异常、叫声异常、不安、呆滞、痉挛、 抽搐、麻痹、运动失调、对外反应过敏或迟钝，奇特的行为如过度反复抓挠口周、 梳理、转圈，甚至自残、倒退行走等。②? 植物神经系统瞳孔扩大或缩小，流涎和流泪。③? 呼吸系统鼻孔流液，鼻翼扇动，呼吸深缓，呼吸过速，峰腰。④? 泌尿生殖系统会阴部污秽，有分泌物，阴道肿胀。⑤? 皮肤和被毛皮肤充血、紫绀，被毛蓬松、污秽。⑥? 眼眼球突出，结膜充血，角膜混浊。⑦? 消化系统流涎、腹泻、厌食。记录出现震颤，惊厥，流涎，腹泻，嗜睡 和昏迷的时间，严重程度，死亡时间或恢复时间；记录存活动物的体重，至少每周 称量一次。死亡、濒临死亡和剧烈痛苦的动物以及试验结束尚存活的动物，应给予人道处死。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 477,
                    "label": "在试验期内中毒死亡的和人道处死的动物应做大体解 剖，记录每只动物的大体病理改变；染毒后存活时间>24h的动物其器官显示有大 体病理改变，则需进行组织病理学检查，可获取有关毒作用的信息",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 478,
                    "label": "评价试验结果时，应将LD50与观察到的毒性效应和尸检所见相结合考虑。 LD50值是受试物毒性分级和标签标识以及判定受试物经消化道摄人后引起动物死 亡可能性大小的依据。引用LD50值时一定要注明所用试验动物的种属、性别、染 毒途径、观察期限等。评价应包括动物接触受试物与动物异常表现（包括行为和临 床改变、大体损伤、体重变化、致死效应及其他毒性作用）的发生率和严重程度之 间的关系。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 479,
                    "label": "急性经口毒性试验是评价化学物急性毒性的重要参数之一。可评估急性经口吸 收的毒作用特点和小致死量的估计值。LD50值可用于急性毒性分级。由于受试物 的LD50值随着不同实验室和动物种属之间或同种动物间的差别有所不同，因此不 应视作鉴定受试物毒性的一个绝对数。从动物实验结果外推到人的可靠性很有限。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 480,
                    "label": "本试验的目的是通过短时间内经完整皮肤染毒受试物，观察试验动物所产生的 毒性作用特征，为判定该化学物可否经皮肤吸收、毒作用模式、急性毒性分级、标 签管理及其他毒理学试验剂量的选择提供依据。在试验前去除试验动物受试部位的 被毛，将试验动物分成若干剂量组（至少3个组），每组涂布不同剂量的受试农药， 而后观察试验动物中毒反应和死亡情况，对试验中死亡和试验结束时处死的动物也 应做大体解剖，计算LD50。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 481,
                    "label": "液态受试物一般使用原液。若受试物为固体，应将其研磨成粉状并用水或其他 无毒、无刺激性、不影响皮肤通透性、也不与受试物反应的介质充分湿润，以保证 受试物与皮肤有良好的接触。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 482,
                    "label": "\"(1)? 试验动物种属和性别首选大鼠，某些情况下也可选白色家兔、白化豚鼠 或非啮齿类动物。选用大鼠以外的其他试验动物应说明理由。试验动物体重要求范 围分别为：大鼠200?300g，家兔2?3kg",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 483,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 484,
                    "label": "(1) 至少应设3个剂量组，组间距应根据受试物毒作用特征决定，但应 能保证动物出现毒性作用和死亡率的一定梯度，以满足计算半数致死剂量的需要。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 485,
                    "label": "(1) 一般情况下，使用啮齿类动物时，一次染毒两种性别各5只动 物2000mg/kg剂量，如果没有死亡发生，就可结束试验，不需要做多组试验。特 殊情况下，限量试验可采用更高的剂量。如果出现与染毒有关的死亡需要按照传统 试验方法完成试验。①? 备皮试验前24h，在动物背部正中线两侧剪毛或剃毛，仔细检查皮肤， 要求完整无损，以免改变皮肤的通透性。染毒面积不应少于试验动物体表面积的 10%。应通过对动物体重的测定确定染毒部位的面积。②? 动物的固定染毒时应采用必要的措施对动物进行适当固定，并需要一定 程度的松动，不推荐完全限制动物活动的方法。③? 染毒操作将受试物均匀涂布于试验动物的去毛区，面积略小于剪毛区， 记录染毒面积。覆盖一层不渗透材料后再以8层左右的多孔纱布覆盖，并用无刺激 性胶布或绷带加以固定，以保证受试物和皮肤的密切接触，防止受试物挥发、脱落 和被动物舔食。接触24h后取下固定物和覆盖物，用温水或适当的方法清除皮肤上 残留的受试物。若受试物毒性较大，在保证检测农药与皮肤充分接触的条件下，可 相对减小染毒区域的面积。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 486,
                    "label": "\"(1) 每日观察一次，一般连续14d (染毒当日为0d)",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 487,
                    "label": "(1) 观察至少包括皮肤、被毛、眼、黏膜的改变和呼吸系统、循环 系统、神经系统、肢体活动、行为方式等变化发生的时间、程度和持续时间。观察 包括以下内容。①? 中枢神经系统和神经肌肉系统体位异常、叫声异常、不安、呆滞、痉挛、 抽搐、麻痹、运动失调、对外反应过敏或迟钝，奇特的行为如过度反复抓挠口周、 梳理、转圈，甚至自残、倒退行走等。②? 植物神经系统瞳孔扩大或缩小，流涎或流泪。③? 呼吸系统鼻孔流液，鼻翼扇动，呼吸深缓，呼吸过速，蜂腰。④? 泌尿生殖系统会阴部污秽，有分泌物，阴道肿胀。⑤? 皮肤和被毛皮肤充血、紫绀，被毛蓬松、污秽。⑥? 眼眼球突出，结膜充血，角膜混浊。⑦? 消化系统流涎、腹泻、厌食。特别注意染毒区皮肤的反应。如发现动物 死亡或处于体弱、濒死，应及时与其他动物分离，称量体重，并记录发生的时间， 解剖检查，以减少动物同类互残及死后组织自溶，动物信息的丢失。如果死亡动物 不能立即进行大体解剖检查，应保存在能够减少自溶的低温环境中（冷藏，不能冷 冻），并在1?2d内进行解剖检查。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 488,
                    "label": "应分别在染毒前、染毒后每周7d和处死前称量体重并记录。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 489,
                    "label": "(1)? 试验观察期内死亡和结束时人道处死的动物均应做大体 解剖检查和记录。存活24h以上的动物用肉眼观察到的病变组织、器官也可考虑做 组织病理学检查。必要时对染毒区和临近非染毒区皮肤做组织学检查。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 490,
                    "label": "①? 用表格列出试验中获得的各组（包括对照组）两种性别（或单性别）动物 的全部原始数据，内容应包括：动物编号、性别、染毒剂量、体重、各种体征的有 无及程度、死亡或存活状况、大体解剖及组织病理学检查时各病变的有无及程度。②? 分别统计各组及不同性别动物的数目，体征发生、死亡、存活及大体解剖 和组织病理学检查的各类病变发生的频数，计算不同组、不同性别动物上述各项的 发生率及不同时间的体重均值。③? 用适宜的统计学方法对上述数据进行统计学分析。④? 在可能的情况下计算剂量-反应关系。用适宜方法计算经皮LD50值。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 491,
                    "label": "(1)? 对受试物能否经皮吸收及毒作用特点做出初步评价。(2)? 受试物的毒作用水平，如能得到剂量-反应关系曲线时，对急性经皮毒作 用阈值做出初步评价。(3)? 明确是以何种性别的动物、接触时间和得到的毒性参数。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 492,
                    "label": "急性经皮LD5〇是评价化学物急性毒性的重要参数之一，也是急性毒性分级的 依据。但LD5Q仅表示受试物经皮吸收引起试验动物死亡概率为0.5的剂量，并不 能全面反映受试物经皮吸收的所有急性毒性特征，因此，评价受试物经皮急性毒性 既要考虑其对某一品系试验动物的经皮LD5。值，又要考虑其中毒症状表现及反应 出现的早晚和持续时间的长短，并结合体重变化与病理学检查结果等，经综合分析 才能得出经皮急性毒性较为全面的评价。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 493,
                    "label": "本试验的目的是通过短时间吸人染毒可初步了解受试农药对试验动物的急性毒 性特征和剂量-反应关系，为急性吸人毒性分级、标签管理和其他有关的毒理学研 究提供科学的参考资料，也能够为制定生产和应用过程中的防护措施提供依据。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 494,
                    "label": "受试物应采用制备工艺稳定、符合质量标准规定的样品，注明名称、来源、批 号、含量（或规格）、保存条件及配制方法等，并附有研制单位的自检报告。所用 赋形剂、溶剂或其他介质等均应标明批号、规格和生产厂家。(1)? 气态受试物经流量计与空气混合成一定浓度之后，直接输人染毒柜。(2)? 沸点较低易挥发的液态受试物通过空气鼓泡或适当加热促使其挥发后， 再与空气混合，通人染毒柜中。(3)高沸点不易挥发液态受试物根据受试物的理化特性，可以选取喷雾方 法，或者利用气溶胶发生装置，制备符合试验要求的液态气溶胶再与一定量的空气 混合输人至染毒柜中。(1)? 粉状或固体受试物利用气溶胶发生装置，将受试物制备成固体气溶胶， 再与一定量的空气混合，通人染毒柜中。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 495,
                    "label": "(1)? 试验动物的品系动物应符合国家有关规定的等级要求，来源、品系、遗 传背景清楚，并具有试验动物质量合格证。首选健康8?12周大鼠，同性别试验动 物个体体重相差不得超过平均体重的20%。选用其他动物需适当说明理由。(2)? 饲养条件正式试验之前，动物必须在试验环境中至少检疫、适应3?5d 时间。动物饲养条件应符合国家有关规定。每个浓度组的动物按性别分笼伺养，每 笼动物数量以不干扰动物个体活动及观察反应为度。动物房应具备良好的采光、通 风设施，如果采用的是人工光源，则光线控制应保持12h光明与12h黑暗交替的模 式。除了在正式试验前一天的晚上开始禁食之外，动物食用常规饲料，自由饮水。数量和性别每个试验组均应至少包含两种性别的大鼠各5只，雌性动物 应为未妊娠和未经产的。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 496,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 497,
                    "label": "\"①?? 动式吸人染毒法动式染毒采用机械通风装置，连续不断地将含有一定浓 度受试物的空气均匀地送人染毒柜，换气量为12?15次/h，维持相对稳定的染毒 浓度。采用全身暴露或头/鼻部暴露方式对动物进行持续4h的急性吸人性染毒。染 毒时，染毒柜内染毒气体的分配保持均衡，02含量不低于19%，C02含量不高于 3%，温度在（26士2)1",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 498,
                    "label": "(2)? 与分组每一试验动物均需有一个专属辨认号码或标记，并按照 随机的原则分配至对照组和不同受试剂量组别之中。急性毒性试验的重点在于观察 动物出现的毒性反应。总体上，吸入剂量应从未见毒性剂量到出现严重毒性（危及 生命的）剂量，同时设空白和/或相应赋形剂、溶剂或其他介质对照组。一般应至 少设置3个不同浓度的染毒组，组间浓度距离适当，以便能够在各浓度组的试验动 物中发生一定程度的毒性效应和死亡。如果受试物的毒性很低，也可以采用20只 大鼠（雌、雄各半），进行单一剂量的急性吸人毒性试验。单一急性吸人染毒浓度 应为5000mg/m3 (气体受试物）、20mg/m3 (液体受试物蒸气）、5mg/m3 (固体 受试物气溶胶），如果因受试物理化性质所限，不能达到该浓度要求，也应以受试 物所能达到最高浓度进行试验。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 499,
                    "label": "\"(2)? 染毒浓度的平衡与控制采用试验准备阶段的各种适宜条 件，对染毒浓度、可吸人颗粒直径等进行控制。染毒动物的体重测定与染毒期间的 观察试验开始前，必须对每只动物的体重进行称量。动物持续吸人受试物的时间是 4h",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 500,
                    "label": "吸入毒性试验研究中，应产生稳定浓度的气态、 蒸气态或气溶胶状态的受试物浓度。其浓度必须通过间断（至少每30min采样一 次）或连续采样，并通过适当的分析仪器，采用可靠的检测方法进行监控。对于气 溶胶染毒方式进行的吸人毒性研究，除了分析染毒柜中的浓度之外，还必须测定气 溶胶颗粒的大小及其分散度。在对染毒柜浓度进行的动态检测过程中，如果连续两 次测定的结果能够证明染毒柜内受试物的浓度相对恒定，液态或气态农药及其制剂 在选定吸人浓度的士 10%，固态或干粉制剂制备的气溶胶在拟采用吸人中毒浓度 士20%的范围之内波动，则认为染毒系统对浓度的平衡和控制是成功的。否则，需 要继续进行调试。如果是固态或干粉制剂制备的气溶胶，还需对其粒径进行连续测 定和监控。通常要求所制备气溶胶的MMAD值在1?4fxm，且必须达到连续两次 测定的MMAD值的波动范围在10%之内，GSD应在1.5?3.0之间。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 501,
                    "label": "(2)? 期限吸人染毒结束之后，试验动物应该至少观察Ud，但不做 硬性规定，可依据毒性反应、症状和体征的发生速度，以及恢复期的长短调整，如有必要，可以适当延长观察期限。至少每天一次对染毒动物的临床表现和体征进行详细观察并记录，重点注意毒 性反应的出现时间及其恢复时间、动物死亡时间等。观察包括以下内容。①?? 中枢神经系统和神经肌肉系统体位异常、叫声异常、不安、呆滞、痉挛、 抽搐、麻痹、运动失调、对外反应过敏或迟钝，奇特的行为如过度反复抓挠口周、 梳理、转圈，甚至自残、倒退行走等。②?? 植物神经系统瞳孔扩大或缩小，流涎或流泪。③?? 呼吸系统鼻孔流液，鼻翼扇动，呼吸深缓，呼吸过速，蜂腰。④?? 泌尿生殖系统会阴部污秽，有分泌物，阴道肿胀。⑤?? 皮肤和被毛皮肤充血、紫绀，被毛蓬松、污秽。⑥?? 眼眼球突出、结膜充血、角膜混浊。⑦?? 消化系统流涎、腹泻、厌食。中毒体征的出现和消失时间以及死亡时间 的记录十分重要，特别是有死亡延迟趋势时，更应认真观察和记录。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 502,
                    "label": "应分别在染毒前、染毒后（至少每周一次）和动物处死之前称 量并详细记录体重。观察期间应该采取必要措施避免动物意外死亡，如果发现动物 死亡应及时解剖或冰冻，衰弱或濒死动物应迅速隔离处理。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 503,
                    "label": "所有的试验动物均应进行大体解剖，包括试验过程中死亡的 动物以及试验结束时仍存活的动物。应该特别注意呼吸系统的任何改变，对于任何 组织器官出现体积、颜色、质地等改变时，均应记录并进行组织病理学检查。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 504,
                    "label": "(2)?? 检查必要时，根据受试物的性质及所观察的毒性反应，增加其 他敏感指标的检查。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 505,
                    "label": "①?? 用表格列出试验中获得的各染毒组及对照组两种性别动物的全部原始数据， 具体内容包括动物编号、性别、染毒剂量、体重、各种体征及程度、死亡或存活情 况、大体解剖及组织病理学检查结果。②?? 分别统计各组及不同性别动物的数目，体征发生、死亡、存活、大体解剖 及病理组织检查的各类病变发生的频数；计算不同组、不同性别动物上述各项的发 生率及不同时间的体重平均值。③?? 用适宜的统计学方法对上述数据进行统计学分析。④?? 在可能的情况下，计算出剂量-效应或剂量-反应关系。⑤?? 选用合适的方法计算吸人染毒的LC5Q值。⑥?? 说明所使用的计算方法和统计学方法，提供所选用方法合理性的依据。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 506,
                    "label": "根据各种反应在不同剂量下出现的时间、发生率、剂量-反应关系、不同种属 动物及实验室的历史背景数据、病理学检查的结果以及同类受试物的毒理学资料 等，对受试物经呼吸道吸人染毒的毒理学作用特点做出初步评价；根据毒性可能涉 及的部位，综合大体解剖和组织病理学检查的结果，初步判断毒性作用靶器官；如 果能够得出比较明确的剂量-效应、剂量-反应曲线时，可以对受试物经呼吸道吸人 染毒作用的阈值做出初步评价；如果可以求出LC5。值，应该对受试农药的急性吸 人毒性级别做出初步评价；总结受试农药的安全范围、出现毒性的严重程度及可恢 复性。急性吸人毒性试验的结果可作为相关的后续毒理学研究剂量的选择提供参考， 也可提示一些后续毒性研究需要重点观察的指标。在参考或引用这些试验结果时， 应注意各种数据和资料之间的有机联系。例如，lc5。值应当被看作一个相对粗糙 的毒理学指标，主要用于标识某一受试农药吸入毒性效能及作为对其进行毒性分级 的依据，在引用或参考LC5Q值时，除了必须结合受试物的毒性效应、病理学检查 等结果之外，还应始终注意动物的种属、染毒时间的长短和计算lc5。的方法等具体问题。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 507,
                    "label": "急性吸人毒性试验及其LC5。值的测定可提供受试农药的有关毒性资料，但将 通过试验动物获得的上述结果外推至人则仅具有限的可靠性。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 508,
                    "label": "本试验的目的是确定和评价农药对哺乳动物皮肤局部是否有刺激作用或腐蚀作 用及其程度。将受试物一次涂敷于受试动物的皮肤上，在规定的时间间隔内，观察 动物皮肤局部刺激作用的程度并进行评分。采用自身对照，以评价受试物对皮肤的 刺激作用。急性皮肤刺激性试验观察期限应能足以评价该作用的可逆性或不可 逆性。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 509,
                    "label": "\"液体受试物一般不需稀释，可直接使用原液。若受试物为固体，应将其研磨成 细粉状，并用水或其他无刺激性溶剂充分湿润（应使用尽可能少量的水或溶剂，能 使固体受试物湿润即可），以保证受试物与皮肤有良好的接触。使用溶剂时，应考 虑到该溶剂对受试物皮肤刺激性的影响。受试物pH值<2或>11. 5",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 510,
                    "label": "(1)? 试验动物性别和数量白色兔为首选试验动物，如果需要选用其他种属试 验动物，则需要说明合理的特殊理由。应使用成年、健康、皮肤无异常和无损伤的 动物，雌性和雄性均可，但雌性动物应是未孕和未经产的。一般要用4只动物，如 要澄清某些可疑的反应则需增加试验动物数。(2)? 饲养环境试验动物应单笼饲养，试验前动物要在试验动物房环境中至少 检疫、适应3d。试验动物及试验动物房应符合国家相应规定。选用常规饲料和 饮水。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 511,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 512,
                    "label": "①? 试验前约24h，将试验动物背部脊柱两侧毛剪掉，不可损伤表皮，去毛范 围左、右各约6cm2。②? 取受试物约〇.5mL (g)直接涂在一侧去毛皮肤上，然后用两层纱布和一层 玻璃纸或类似物覆盖，再用无刺激性胶布和绷带加以固定。另一侧皮肤作为对照， 除不加受试物外，其他处理和试验侧相同。采用封闭试验，敷用时间为4h。如怀 疑受试物可能引起严重刺激/腐蚀作用，可采用分阶段试验方法，首先将第一块涂 布受试物的纱布块敷贴在一只家兔背部脱毛区皮肤上，于涂敷后3min观察皮肤反 应，出现腐蚀作用，即可停止试验。如果无严重皮肤反应，则把第二块涂布受试物 的纱布块敷贴在同一只家兔背部另一块脱毛区皮肤上，于涂敷后60min观察皮肤 反应。依照相同方法可继续进行涂敷后4h观察皮肤反应的试验。皮肤涂敷部位在 任一时间点出现腐蚀作用，即可停止试验。如果均未出现腐蚀作用，或仅表现刺激 作用，则需另选用3只家兔进行敷用时间为4h的试验。③? 于清除受试物后的lh、24h、48h、72h观察涂抹部位皮肤反应，一旦皮肤 反应完全恢复，即可停止观察。在皮肤反应未恢复之前，应每天继续观察，观察时 间的确定应足以观察到可逆或不可逆刺激作用的全过程，一般不超过14d。按表 5-1进行皮肤反应评分，以受试动物积分的平均值进行综合评价，根据24h、48h和 72h各观察时点高积分均值，按表5-2判定皮肤剌激强度。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 513,
                    "label": "①? 试验前将试验动物背部脊柱两侧被毛剪掉，去毛范围左右各约为6cm2。②? 取受试物约〇.5mL (g)涂抹在一侧去毛皮肤上，当受试物使用无刺激性溶 剂配制时，另一侧涂溶剂作为对照，每天涂抹1次，连续涂抹14d。从第二天开 始，每次涂抹受试物前应剪毛，用水或无剌激性溶剂清除残留受试物。lh后观察 结果，按表5-1评分，对照区和试验区同样处理。结果评价按下列公式计算每天每只动物平均积分",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 514,
                    "label": "根据试验结果，做出皮肤刺激反应的明确结论和评价",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 515,
                    "label": "急性皮肤刺激试验结果从动物外推到人的可靠性很有限。白色家兔在大多数情 况下对有刺激性或腐蚀性的物质较人类敏感。若用其他品系动物进行试验时也得到 类似结果，则会增加从动物外推到人的可靠性。试验中使用封闭式接触是一种超常 的实验室条件下的试验，在人类实际使用农药过程中很少存在这种接触方式。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 516,
                    "label": "本试验的目的是确定和评价农药对哺乳动物的眼睛是否有刺激作用或腐蚀作用及其程度。受试物以一次剂量滴人每只试验动物的一侧眼睛结膜囊内，以未做处理 的另一侧眼睛作为自身对照。在规定的时间间隔内，观察对动物眼睛的刺激和腐蚀 作用程度并评分，以此评价受试物对眼睛的刺激作用。观察期限应能足以评价刺激 效应的可逆性或不可逆性。动物如出现角膜穿孔、角膜溃疡、眼前房出血、角膜混 浊4分超过48h、缺乏光反射（虹膜反应2分）超过72h、结膜溃疡、坏死等情况， 通常为不可逆损伤的症状，也应该给予人道处死。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 517,
                    "label": "\"液体受试物一般不需稀释，可直接使用原液，染毒量为O.lmL。若受试物为 固体或颗粒状，应将其研磨成细粉状，染毒量应为体积O.lmL或重量不大于 lOOmg (染毒量应进行记录）。气溶胶产品需喷至容器中，收集其液体再使用。受试物pH值<2或>11. 5",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 518,
                    "label": "(1) 试验动物选择首选健康成年白色家兔。如果需要选用其他种属试验动 物，则需要说明合理的特殊理由。至少使用3只家兔。在试验开始前的24h内要对 试验动物的两只眼晴进行检查（包括使用荧光素钠检查）。眼睛有红肿、炎症，眼 睛缺陷和角膜损伤的动物不能用于试验。(2) 饲养环境试验动物应单笼饲养，试验前动物要在试验动物房环境中至少 检疫、适应3d。试验动物及试验动物房应符合国家相应规定。选用常规饲料和 饮水。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 519,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 520,
                    "label": "(1) 轻轻拉开家兔一侧眼睛的下眼睑，将受试物0.lmL (l00mg)滴人（或 涂人）结膜囊中，使上、下眼睑被动闭合1s，以防止受试物丢失。另一侧眼睛不 处理作自身对照。滴入受试物后24h内不冲洗眼睛。若认为必要，在24h时可进行 冲洗。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 521,
                    "label": "(2) 若上述试验结果显示受试物有刺激性，需另选用3只家兔进行冲洗效果试 验，即给家兔眼滴人受试物后30s，用足量、流速较快但又不会引起动物眼损伤的 水流冲洗至少30s。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 522,
                    "label": "\"(3) 在滴入受试物后lh、24h、48h、72h以及第4天和第7 天对动物眼睛进行检查。如果72h未出现剌激反应，即可终止试验。如果发现累及 角膜或有其他眼刺激作用，7d内不恢复者，为确定该损害的可逆性或不可逆性需 延长观察时间，一般不超过21d",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 523,
                    "label": "(4) 试验结果以表5-3的评分标准记录眼刺激反应积分，以表5-4判定眼剌 激性反应分级。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 524,
                    "label": "根据试验结果，做出眼刺激强度的明确结论和评价。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 525,
                    "label": "急性眼刺激性试验结果从动物外推到人的可靠性很有限。白色家兔在大多数情 况下对有刺激性或腐蚀性的物质较人类敏感。若用其他品系动物进行试验时也得到 类似结果，则会增加从动物外推到人的可靠性。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 526,
                    "label": "本试验的目的是通过短期重复经口 28d染毒试验，确定在较短时间内经口重复 接触受试农药后引起的毒性效应，初步了解受试物的毒作用特征、剂量-反应关系 和靶器官，获得未观察到有害作用剂量水平，为亚慢性和慢性毒性试验剂量和观察 指标的选择等提供依据。试验动物在短期内反复经口给予染毒，观察动物的中毒症 状，定期称量体重和计算摄食量，并进行生化指标、血液指标、尿液指标、组织病 理学检查等指标测定，以评价受试农药的短期重复摄人毒性，初步确定受试物引起 动物有害效应的剂量和靶器官。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 527,
                    "label": "如果灌胃染毒时，根据不同受试物的特性选择合适的溶剂和介质，将受试物溶 解或悬浮在合适的介质中，通常首选溶剂为水，不溶于水的受试物可使用食用油 (如橄榄油、玉米油等），不溶于水或油的受试物可使用羧甲基纤维素、淀粉等配成 混悬液。将受试物掺人饲料或饮水给予时，要将受试物与水或饲料混勻并保证该受 试物配制的稳定性，必要时应进行稳定性、含量和均一性的测定，浓度应在理论浓 度的±15%以内。受试物掺入饲料或水时，应不影响饲料营养质量和水的平衡，一 般在饲料中的掺人量不超过饲料浓度的5%。如果受试物加人词料或水中会影响动 物的适口性，则应灌胃给予受试物。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 528,
                    "label": "\"首选健康成年大鼠，常用品系有SD、Wistar、F344",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 529,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 530,
                    "label": "(1) 分组至少应设三个剂量组和一个对照组。原则上高剂量组的动物在 喂饲受试物期间应当出现明显中毒表现但不引起动物死亡，低剂量组应不引起毒性 作用并应髙于人的实际接触水平，中剂量组可产生轻微的毒性，以求出未观察到有 害作用剂量水平和观察到有害作用低剂量水平。对照组为溶剂对照组或介质对照 组，除不给予受试物外，其余均与剂量组处理相同。当掺入饲料染毒时，如果食物 摄人量和利用率降低，则需考虑增设配对饲养对照组。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 531,
                    "label": "如果需要可增设附加处理组和附加对照组，每组为1〇只动物 (雌雄各半），附加处理组给予高剂量染毒，附加对照组为溶剂对照组或介质对照 组，除不给予受试物外，其余均与处理组相同。在染毒结束后继续观察14d，进行 相关指标测定，以观察受试物毒性的可逆性、持续性和迟发效应。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 532,
                    "label": "如果预期在l000mg/kg体重剂量不可能产生任何毒性影响， 或根据结构可预测到其潜在的毒性时，可不必设定三个剂量。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 533,
                    "label": "可将受试样品混人饲料或饮水，或采用灌胃法染毒。动物应每 周7d，每天染毒一次；如采用灌胃法，每日灌胃一次，时间地点应相同，并定期 按体重调整灌胃量（应每周称两次体重进行调整），以维持染毒剂量不变。灌胃量 一般不超过l〇mL/kg体重，如为水溶液时，大灌胃量可达20mL/kg体重，各组灌 胃体积一致。染毒时间为28d，附加组动物恢复期观察至少14d。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 534,
                    "label": "试验期间至少每天观察一次动物的一般临床表现，并记录动物 出现中毒的体征、程度和持续时间及死亡情况。观察至少包括以下内容：皮肤、被 毛、眼、黏膜、呼吸系统、循环系统、神经系统、肢体活动、行为方式等改变。对 死亡动物应及时解剖，对濒死动物应及时处理。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 535,
                    "label": "应将所有的结果以表格形式列出，包括试验开始前动物数、动物体重、进食 量、血液学指标、血生化指标、尿液指标、脏器重量和脏体比、病理检查结果等。 对每项指标用合适的统计方法进行统计学检验。应将临床表现、生长发育情况、血液学指标、血生化指标、尿液指标、脏器重 量和脏体比、病理检查结果结合统计结果进行综合分析，评价受试物是否引起毒性 反应，及引起毒性反应的程度、作用的靶器官以及是否存在剂量-反应关系等。在 综合分析的基础上初步确定受试物对动物引起有害效应的剂量和靶器官，获得未观 察到有害作用剂量水平。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 536,
                    "label": "应根据现代的毒理学知识，对实验所得阳性结果是否与受试物有关做出肯定和 否定的意见，虽然其试验结果外推倒人有局限性，但也能为确定人群的允许接触水 平提供有价值的信息。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 537,
                    "label": "本试验的目的是通过重复经皮毒性试验，提供在规定的试验期内，经皮重复接 触受试物后可能引起的健康危害资料。进一步了解受试物经皮的渗透性、毒性特 征、作用靶器官等，从剂量-效应和剂量-反应关系方面资料获得未观察到有害作用 剂量水平或观察到有害作用低剂量水平的信息，可为亚慢性和慢性经皮染毒毒性试 验剂量、观察指标的选择提供依据。该试验以不同剂量受试物每日分别涂布于各染 毒组试验动物皮肤上，连续28d。染毒期间每日观察动物的毒性反应。对染毒期间 死亡的动物进行尸检。染毒结束后处死所有存活的动物，并进行尸检以及适当的组 织病理学检查。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 538,
                    "label": "液态受试物一般使用原液。若受试物为固体，应将其粉碎成粉状并用水或其他 无毒、无剌激性、不影响皮肤通透性、也不与受试物反应的介质充分湿润，以保证 受试物与皮肤有良好的接触。若受试物需稀释、配制，应在临染毒前进行，除非能 证明配制物是稳定的，否则需进行化学分析来证实。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 539,
                    "label": "(1) 试验动物品系的选择可采用成年大鼠、家兔或豚鼠进行试验，也可使用 其他动物，但需说明理由。当短期重复染毒毒性试验作为长期毒性试验的预备试验 时，则在两项试验中所使用的动物品系应当相同。试验开始时动物体重范围为：大 鼠200?300g;家兔2.0?3. Okg;豚鼠350?450g。同性别试验动物个体间体重相 差不得超过平均体重的20%。(2)  动物性别和数量每一剂量组至少应有10只（雌雄各半）皮肤健康的动 物。雌性动物应为未妊娠和未经产的动物。若计划在试验过程中处死动物，则应增 加计划处死的动物数。此外，可另设一附加组，10只动物（雌雄各半），给予高剂 量受试物，染毒28d，全程染毒结束后继续观察不少于Ud，以了解毒性作用的持 续性、可逆性或迟发毒作用。(3) 饲养环境动物最好单笼饲养。动物饲养环境应符合国家有关规定。人工 照明时，光照和黑暗时间分别为12h。选用常规饲料，饮水量不限。试验前动物应 在饲养环境中至少检疫、适应3?5d，再随机分配到各试验剂量组、对照组和附加 组中。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 540,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 541,
                    "label": "至少要设三个染毒剂量组和一个对照组，对照组除不接触受 试物外，其他条件均与试验组相同。高染毒剂量的设计应在引起明显中毒效应的前 提下不致造成动物死亡。低剂量组应不出现毒性效应?若已知人群可能的接触水 平，则低染毒剂量应高于人群的实际接触水平。中间剂量应引起较轻的可观察到的 毒性效应。若设多个中间剂量组，则各组的染毒剂量应有适当的间隔，以保证引起 不同程度毒性效应。若受试物引起严重的皮肤损伤效应，则应降低受试物的使用浓 度，尽管这样可导致原来在较高浓度下出现的其他毒性作用减弱或消失。若在试验 初期动物的皮肤受到严重损伤，则有必要终止试验，并使用较低的浓度重新开始试 验。必要时可增设附加组，该组试验动物数与其他组相同，接受高剂量染毒。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 542,
                    "label": "本项试验中，如果接触水平>100mg/kg时仍未产生可观测到 的毒性效应，而且根据相关结构化合物的资料，预期受试物不会产生毒性时，可以 考虑不必进行三个剂量水平的全面试验。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 543,
                    "label": "(1) 染毒前24h，将动物躯干背部染毒区的被毛去除，而且在整个 染毒期内根据需要要经常对染毒部位去毛。去毛时应特别小心，以防损伤动物的皮 肤从而引起皮肤通透性的改变。染毒部位的面积不应小于动物体表面积的10%， 应通过对动物体重的测定确定染毒部位的面积。若受试物毒性较高，则可相对减小 染毒区域的面积，但受试物应尽可能薄而均匀地涂布于整个染毒区域。应记录受试 物的染毒剂量、浓度、容量、染毒面积和染毒密度，即每平方厘米面积皮肤上涂布 受试物的重量或容积。同时记录染毒环境的微小气候，如温度、湿度、风速。染毒 后先用玻璃纸或食品保鲜膜覆盖，再以无刺激的胶带固定，以保证受试物与皮肤有 良好的接触，并防止动物舔食、脱落，必要时可应用制动器，但不提倡使动物处于 完全不能活动的状态。在28d染毒期间，试验动物每周7d，每天染毒一次，封闭接触受试物6h。但 考虑到实际工作情况，每周染毒5d也是可以接受的。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 544,
                    "label": "(1)? 试验中每天至少应进行一次仔细的临床检查。观察期间对动物的任何毒性表现均应记录，记录内容包括发生时间、程度和持 续时间。笼边观察应至少包括如下内容：皮肤和被毛的改变、眼和黏膜变化，呼 吸、循环、植物神经和中枢神经系统、肢体活动和行为方式等变化。必要时进行眼 科学检查。应计算每周饲料消耗量，记录每周体重变化。对死亡动物应及时尸检， 对濒死动物应及时隔离、处理。附加组则于染毒结朿后继续观察14d，以了解毒性作用的持续性、可逆性及迟 发毒作用。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 545,
                    "label": "①? 大体解剖检查对染毒期间死亡的和试验结束及追踪观察结束处死的所有 动物进行大体解剖检查，包括体表、颅腔、胸腔、腹腔及其脏器。剖取脑、脑垂 体、心脏/主动脉、甲状腺和甲状旁腺、食道、肺/气管、胸腺、胃、十二指肠、小 肠、大肠、肝、肾、脾、胰、肾上腺、卵巢、睾丸、附睾、有代表性的淋巴结、脊 髓（颈、胸和腰段）、子宫、前列腺、膀胱、坐骨神经、胸骨、染毒部位的皮肤进 行固定。如果观察到有大体病变时，剖取乳腺、骨骼肌、股骨、泪腺、唾液腺和眼 睛进行固定。剖得脑、心脏、胸腺、肾上腺、肝、肾、脾、睾丸、卵巢后应尽快称 重以防水分丢失，以便准确计算脏器系数。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 546,
                    "label": "根据临床观察、临床检查、大体尸检和组织病理学检查的所见进行综合评价， 分析受试物染毒剂量与是否出现毒性反应、毒性反应的发生率及其程度之间的关 系。这些反应包括行为和临床体征、肉眼可见的损伤、靶器官、体重变化情况、死 亡效应以及其他一般或特殊的毒性作用。据此判断受试物的毒性作用特征，初步提出受损靶器官、蓄积毒性高低等的评 价意见。提出是否需要进行更长期的毒性试验，并对其剂量、观察指标等的选择提 出合理建议。尽可能得出剂量-效应或剂量-反应关系，提出未观察到有害作用剂量水平或观 察到有害作用低剂量水平。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 547,
                    "label": "短期重复经皮染毒毒性试验能够提供受试物在经皮反复接触时经皮吸收的程 度、蓄积毒性、毒作用特征等有用资料。其试验结果外推到人的正确性有限。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 548,
                    "label": "本试验的目的是通过短期（28d)重复吸人染毒，进一步了解受试物的吸人毒 性特征和剂量-反应关系，获得毒性作用靶器官、受试物是否具有蓄积毒性、未观 察到有害作用剂量水平、观察到有害作用低剂量水平等信息，为亚慢性和慢性毒性 试验剂量的选择，设定观察、研究的内容，以及试验设计提供依据。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 549,
                    "label": "\"根据受试物的理化性质，选择适宜的方法，将其制备成特定浓度的气态、蒸气 态、气溶胶态或者颗粒状物混悬态，输人至动式染毒系统；将随机分配在对照及不 同染毒剂量组的试验动物分别放置于染毒系统中，每天实施6h染毒，连续进行 28d (考虑实际工作情况，也可每周安排5d)。每日密切观察动物的毒性反应，如 有死亡动物则需要冻存或立即进行解剖。必要时，尚需设立附加对照组和附试验 组。在染毒结束后，附加试验组动物并不处死，继续饲养和观察14d",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 550,
                    "label": "(1) 品系动物应符合国家有关规定的等级要求，来源、品系、遗传背景清 楚，并具有试验动物质量合格证。首选年轻、健康大鼠，同性别试验动物个体体重相差不得超过平均体重的20%。选用其他动物需适当说明理由。(2) 饲养条件正式试验之前，动物必须在试验环境中至少检疫、适应3?5d 时间，且年龄不得超过9周龄。动物饲养条件应符合国家有关规定。每个浓度组的 动物按性别分笼饲养，每笼动物数量以不干扰动物个体活动及观察反应为度。动物 房应具备良好的采光、通风设施，如果采用的是人工光源，则光线控制应保持12h 光明与12h黑暗交替的模式。除了在正式试验前一天的晚上开始禁食之外，动物食 用常规饲料，自由饮水。(3) 数量和性别每个试验组均应至少包含两种性别的大鼠各5只，雌性动物 应为未妊娠和未经产的。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 551,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 552,
                    "label": "\"短期重复吸人染毒毒性试验必须采用动式染毒方法。动式染毒 采用机械通风装置，连续不断地将含有一定浓度受试物的空气均匀地送人染毒柜， 换气量为12?15次/h",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 553,
                    "label": "可靠性的研究吸人毒性试验研究中，应产生稳定浓度的气态、 蒸气态或气溶胶状态的受试物浓度。其浓度必须通过间断（至少每30min采样一 次）或连续采样，并通过适当的分析仪器，采用可靠的检测方法进行监控。对于气 溶胶染毒方式进行的吸人毒性研究，除了分析染毒柜中的浓度之外，还必须测定气 溶胶颗粒的大小及其分散度。在对染毒柜浓度进行的动态检测过程中，如果连续两 次测定的结果能够证明染毒柜内受试物的浓度相对恒定，液态或气态农药及其制剂 在选定吸人浓度的±10%，固态或干粉制剂制备的气溶胶在拟采用吸人中毒浓度 ±20%的范围之内波动，则认为染毒系统对浓度的平衡和控制是成功的。否则，需 要继续进行调试。如果是固态或干粉制剂制备的气溶胶，还需对其粒径进行连续测 定和监控。通常要求所制备气溶胶的MMAD值在1?4Mm，且必须达到连续两次 测定的MMAD值的波动范围在10%之内，GSD应在1. 5?3. 0之间。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 554,
                    "label": "(1) 每一试验动物均需有一个专属辨认号码或标 记，并按照随机的原则分配至对照组和不同受试剂量组别之中。短期重复吸人染毒 毒性试验应至少设三个剂量组和一个对照组，高吸人染毒剂量的设计应以引起动物 明显毒性但不造成死亡为宜，中间剂量应引起较轻的可观察到的毒性效应，低剂量 应不出现任何毒性反应。剂量组的剂量间距在2?4倍的范围之内。对照组除不接 触受试物之外，其他条件应与染毒组完全相同。如果受试物具有爆炸性，高剂量吸 人染毒浓度必须低于其爆炸限度。必要时，应该专门设立相应溶剂、赋形剂或其他介质的附加对照组，以考察赋 形剂、溶剂或其他介质对动物的影响，所采用溶剂、赋形剂或其他介质的染毒暴露 浓度应与高剂量试验组动物接受的量相同。也可以设立附加试验组或卫星试验组， 该组的试验动物数量与其他组相同，吸人染毒的剂量和时间与高剂量组相同。如果 染毒后动物出现严重的呼吸道刺激症状，则应降低受试物的浓度，尽管在这种情况 下，由于高剂量组染毒浓度的降低，会导致其他毒性反应的明显下降或消失。如试 验初期就出现严重的呼吸道刺激症状，应立即停止试验并以较低浓度进行新的 试验。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 555,
                    "label": "① 染毒浓度的平衡与控制采用试验准备阶段的各种适宜条件，对染毒浓度、 可吸人颗粒直径等进行控制。②? 反复吸人染毒暴露的实施取已经在试验环境适应至少3?5d的试验动物 称重，然后放人染毒柜中开始染毒。除有特殊要求之外，一般应每日吸人染毒6h， 每周7d，连续染毒28d。考虑到实际工作情况，也可每周染毒5d。在吸人染毒的 实施过程中，应注意观察受试物对试验动物呼吸系统的影响，如呼吸道刺激反应、 呼吸节律的变化，以及吸气和呼气模式的改变等。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 556,
                    "label": "观察期限为28d，每天至少观察一次。必要时，还要增加观察 次数。每只动物要有单独的观察记录，中毒表现和体征的记录应尽可能地详细，包 括出现的时间、程度、持续时间和终止时间等。笼旁观察应包括但不限于以下内 容：皮肤、被毛、眼和黏膜的改变，呼吸系统、循环系统、神经系统、肢体活动和 行为方式等的变化。对死亡动物应该及时进行解剖，对于濒死动物应及时处理。附 加试验组在停止吸人染毒之后需继续观察14d，以研究毒性作用的可逆性、持续性 以及是否存在迟发效应等。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 557,
                    "label": "综合临床观察、临床检查、大体解剖、组织病理学检查的结果，对受试样品吸 人28d染毒有无毒作用及其毒作用特点，包括受试物的靶器官、蓄积毒性等做出初 步评价；对是否需要进行更长时间的毒理学试验及其剂量和观察指标提出建议。如 发现试验组与对照组有显著性差异或能得出剂量-效应或剂量-反应曲线时，应对未 观察到有害作用剂量水平（NOAEL)和观察到有害作用低剂量水平（LOAEL) 做出初步评价。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 558,
                    "label": "本项试验结果可提供短期重复吸人（28d)染毒的毒性作用资料。其结果外推 至人的有效性有限。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 559,
                    "label": "本试验的目的是通过亚慢性毒性试验，确定在一定时间内反复接触农药引起的 毒性效应，了解受试物的毒作用靶器官和剂量反应关系，求出受试物的未观察到有 害作用剂量水平，为慢性毒性实验剂量选择和初步制定人群安全接触限量标准提供 科学依据。试验动物在较长时间内反复经口、经皮或经呼吸道给予染毒，观察动物 的中毒症状、定期称量体重和计算摄食量，并进行生化指标、血液指标、尿液指 标、组织病理学检查等指标测定，以提出较长期给予不同剂量的受试物对动物引起 有害效应的剂量、毒作用性质和靶器官，估计亚慢性摄人的危害性。90d或180d 喂养试验所确定的未观察到有害作用剂量水平可为慢性试验的剂量选择和观察指标 提供依据。当未观察到有害作用剂量水平达到人体可能摄人量的一定倍数时，则可 以此为依据外推到人，为确定人食用的安全剂量提供依据。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 560,
                    "label": "如果灌胃染毒时，根据不同受试物的特性选择合适的溶剂和载体，将受试物溶 解或悬浮在合适的介质中，通常首选溶剂为水，不溶于水的受试物可使用食用油 (如橄榄油、玉米油等），不溶于水或油的受试物可使用羧甲基纤维素、淀粉等配成 混悬液。将受试物掺人饲料或饮水给予时，要将受试物与水或饲料混匀并保证该受 试物配制的稳定性，必要时应进行稳定性、含量和均一性的测定，浓度应在理论浓 度的±15%以内。受试物掺人饲料或水时，应不影响饲料营养质量和水的平衡，一 般在饲料中的掺人量不超过饲料浓度的5%。如果受试物加人饲料或水中会影响动 物的适口性，则应灌胃给予受试物。经皮和呼吸道吸入途径染毒，常以原药形式染 毒或溶解在合适的介质中。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 561,
                    "label": "试验动物种属和性别啮齿类动物首选大鼠，常用品系有SD、Wistar、 F344。雌、雄两种性别，大鼠一般应为6?8周龄大鼠。非啮齿类动物首选为狗， 常用的品系为beagle狗。应选用雌、雄两种性別，动物的月龄一般为4?6个月。 每个动物起始体重的差异应不超过平均体重的20%。(2) 饲养环境和条件每组大鼠应至少选用20只动物，每组狗至少选用8只 动物，雌雄各半，必要时应增加动物数以便实验结束时保留一些动物做恢复期的观 察。动物购买后于试验前至少适应环境5?7d，适应期应进行检疫观察。试验动物 房应符合国家有关规定。实验期间自由饮水和摄食，大鼠按性别分笼饲养，可单饲 或群饲，其每笼的动物数应以不影响动物自由活动或观察动物的症状为宜。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 562,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 563,
                    "label": "至少应设三个剂量组和一个对照组。原则上高剂量组的动物在 喂饲受试物期间应当出现明显中毒表现但不引起动物死亡，低剂量组应不引起毒性 作用并应高于人的实际接触水平，中剂量可产生轻度的毒性，以求出未观察到有害 作用剂量水平和观察到有害作用低剂量水平。对照组为溶剂对照组或介质对照组， 除不给予受试物外，其余均与剂量组处理相同。当掺入饲料染毒时，如果食物摄人 量和利用率降低，则需考虑增设配对饲养对照组。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 564,
                    "label": "如果需要可增设附加处理组和附加对照组，大、小鼠试验动物数 每组为20只动物（雌雄各半），非啮齿类动物狗动物数每组为8只动物（雌雄各 半），试验处理组给予高剂量染毒，附加对照组为溶剂对照组或介质对照组，除不 给予受试物外，其余均与处理组相同。在染毒结束后继续观察28d，进行相关指标 测定，以观察受试物毒性的可逆性、持续性和迟发效应。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 565,
                    "label": "\"①? 经口染毒可将受试样品混人饲料或饮水中，或采用灌胃法染毒。如果为 非啮齿类动物狗时，还可以胶囊给予。每周应7d染毒；如采用灌胃法，每日灌胃 一次，时间地点应相同，并定期按体重调整灌胃量（动物快速生长期，应每周称两 次体重进行调整，之后可每周按体重进行灌胃量调整），以维持染毒剂量不变。灌 胃量一般不超过10mL/kg体重，如为水溶液时，大灌胃量可达20mL/kg体重。各 组灌胃体积一致。②? 经皮染毒每天染毒一次，染6h，染毒后用适宜的清洁剂清洗，每周可染 毒5d",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 566,
                    "label": "染毒时间为90d或180d，附加组动物恢复期观察至少28Ds",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 567,
                    "label": "期间至少每天观察一次动物的一般临床表现，并记录动物 出现中毒的体征、程度和持续时间及死亡情况。观察至少包括以下内容：皮肤、被 毛、眼、黏膜、呼吸系统、循环系统、神经系统、肢体活动、行为方式等改变。对 死亡动物应及时解剖，对濒死动物应及时处理。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 568,
                    "label": "(1)? 应将所有的结果以表格形式列出，包括试验开始前动物数、动物体重、进 食量、血液学指标、血液生化学指标、尿液指标、脏器重量和脏体比、病理检查结 果等。对每项指标用合适的统计方法进行统计学检验。(2)? 应将临床表现、生长发育情况、血液学指标、血液生化学指标、尿液指 标、脏器重量和脏体比、病理检查结果结合统计结果进行综合分析，评价受试物是 否引起毒性反应，及引起毒性反应的程度、作用的靶器官以及是否存在剂量-反应 关系等。在综合分析的基础上应求出未观察到有害作用剂量水平。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 569,
                    "label": "应根据现代的毒理学知识，对实验所得阳性结果是否与受试物有关做出肯定和否定的意见，求出未观察到有害作用剂量水平，虽然其试验结果外推到人有局限 性，但也能为确定人群的允许接触水平提供有价值的信息。 ",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 570,
                    "label": "\"本试验要求了解试验农药的急性迟发性神经毒性，求出迟发性毒性无作用剂 量。将受试物一次较大剂量给予已做过胆碱能效应保护的母鸡经口染毒。观察染毒 的母鸡是否有行为异常、共济运动失调及瘫痪，连续观察21d。在染毒后24h和 48h，每组随机选取动物进行生化检查，特别是测定神经病靶酯酶（neuropathy target esterase",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 571,
                    "label": "受试物染毒如果不能使用原液时，应采用水溶液、混悬液或油溶液。溶剂本身 应无毒、不与受试物产生化学反应和不影响受试物的吸收。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 572,
                    "label": "(1)? 动物选择选用8?14个月健康初成年，无步态异常，体重1.5?2. Okg 的母鸡。受试物组和赋形剂对照组每组至少12只，阳性对照组至少6只。(2)? 动物词养条件在正常条件下饲养母鸡，单笼饲养；鸡笼应足够大，以使 动物能够自由活动，并易于观察；试验开始前，将动物置于试验环境中观察、驯化 至少5d。正常饲喂，不限制饮水。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 573,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 574,
                    "label": "\"急性迟发性祌经毒性试验剂量设计原则如下。①? 高剂量组原则上，根据LD5Q和预试验确定，一般采用LDSQ剂量至1/2 LDM;受试物应引起动物出现明显毒性效应，但不引起动物死亡。②? 低剂量组根据预试验确定，不应出现毒性效应，剂量一般为高剂量的 1/20?1/10。③? 中剂量组在髙、低剂量之间，可出现轻度毒性效应。④? 溶剂对照组溶剂毒性已知，可仅设溶剂对照组；溶剂毒性未知，应增设 空白对照组。⑤??  阳性对照组保证至少有6只母鸡（3只用于生化检验，3只用于病理解 剖〉给予迟发性祌经毒性阳性物三邻甲苯磷酸酯（tri-o-cresylphosphate，T0CP)",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 575,
                    "label": "通常采用经口途径，包括灌胃、胶囊吞咽或咽峡部滴注等方法 染毒，隔夜禁食。为对抗急性胆碱能效应所致的动物死亡，给予受试物前10? 15min，可以肌肉注射已知不干扰迟发性神经毒性反应的硫酸阿托品做保护处理， 用量为10mg/kg体重。灌胃量可根据各组不同剂量按5tnL/kg体重给予。如采用 注射染毒，一般按lmL/kg体重给予。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 576,
                    "label": "(2) 染毒后立即开始观察，并于染毒后每半小时观察一次， 两天后每天观察一次，直至试验结朿。将母鸡出现的全部中毒症状、时间、类型、 轻重程度以及发现行为异常的时间详尽记录。将母鸡置于笼外观察，强迫母鸡活动 以便有利于观察到最轻微的毒效应。取出濒死的母鸡进行处死和大体解剖。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 577,
                    "label": "评价内容包括临床神经毒性症状、生化检验和病理检査结果及可观察到的其他 毒性效应，对发生率、严重程度及相关性做出评价。(1) 将受试物组与阳性对照组、赋形剂对照组做比较，进行统计分析，以确认 是否有迟发性神经毒作用。(2) 阳性对照组应出现共济失调障碍，组织病理学证实有脱髓鞘改变，赋形剂 对照组无上述改变。(3) 出现阳性时，需求得无作用剂量，进一步评价受试物与神经毒性的反应关 系、发生率和严重程度。(4)? 评价要列出以下简表简表内容包括一般毒性症状、神经毒性症状、死亡率、体重变化、生化检验结果、组织病理学检查结果及照片。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 578,
                    "label": "对受试物试验结果进行判定是否具有迟发性神经毒性。急性迟发性神经毒性试验，能够提供受试物在急性染毒的迟发性神经毒性作用 资料。虽然其试验结果仅能有限地外推到人，但它可为确定人群暴露的无作用水平 和允许暴露水平提供有价值的信息。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 579,
                    "label": "本试验的目的是通过一定途径长期反复给予试验动物不同剂量的受试农药，观 察试验动物的慢性毒性效应、严重程度、靶器官和损害的可逆性，确定未观察到有 害作用剂量水平（NOAEL)，为拟定人类接触该农药的每日容许摄人量（ADI)和 制定农药最大残留量（MRL)提供依据。为确保试验结果的真实性、科学性和可 靠性，应按“良好实验室规范（GLP) ”（农业部NY/T718)要求进行。染毒期 间每天观察动物各种体征，定期称量体重和耗食，并进行眼科学、生化指标、血液 学指标、组织病理学等检查，以阐明此农药的慢性毒性。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 580,
                    "label": "开始试验前应有足够数量的受试样品，应使用同一批生产的受试样品。如不能 提供足够量的受试样品，每一批受试样品的含量要一致。经皮和吸人途径染毒，常 以原药形式染毒，如制备困难可加人赋形剂，但应考虑其毒性和刺激性，对经皮染 毒还应考虑赋形剂对受试样品皮肤通透性的影响。如果受试样品掺在饲料或饮水中 染毒，应测定受试样品在饲料或饮水中的浓度、稳定性和均勻性。浓度应在理论浓 度的士 15%以内。在试验开始前应根据稳定性试验结果制定制备受试样品饲料或饮 水周期。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 581,
                    "label": "(1)? 试验动物种属、品系和等级慢性毒性试验应选用大鼠（S.D或F344)、 小鼠CI>1 (ICR)等。试验动物等级：选用无特定病原体动物（specific pathogen- free animal， SPF)。(2)? 性别、年龄、数量和试验周期实验使用两种性别的动物。离乳后的健康 动物，啮齿类动物检疫驯化至少5d之后开始试验。啮齿类动物4?6周龄。大鼠慢 性毒性试验周期为104周，每组动物不少于100只，雌雄各半，应在26周、52周 和78周计划解剖各20只。小鼠慢性毒性试验进行78周，每组动物不少于80只， 雌雄各半，应在26周、52周计划解剖各20只。每组同性别体重差异不超过平均 体重的20%。试验结束时各剂量组每种性别的动物能满足统计学要求（啮齿类动 物每组每性别动物应不少于10只）。应设立附加组，高剂量组增加40只，雌雄各 半。对照组增加40只，雌雄各半。慢性毒性试验附加组动物应该至少染毒52周， 恢复期观察不少于28d。(3) 伺养环境设施条件本试验应在屏障系统内（barrier system)进行。动 物实验的环境设施应符合国家标准《实验动物环境及设施》（GB 14925)的相应等 级动物的规定，必须有合理的动物管理措施并严格控制环境条件。每一房间只能饲 养一种动物；每一房间只供一种受试样品试验用（除非有证据表明不同受试样品对 动物无影响），也应考虑受试样品对对照组动物的影响。笼具等物品应便于消毒和 清洁，应避免使用消毒剂和农药等，特别是与动物有密切接触的部位更应注意。饲 料应满足动物营养需要，应定期分析饲料营养成分。如果受试样品的毒性较低，则 加入饲料的受试样品比例较大，应注意混人饲料中的受试样品不应超过5%，否则 会对动物正常营养产生影响。饮水应不含对试验有影响的污染物，应该对饮用水的 水质进行检测。食盒、笼具应定期清洗、消毒，约每两周更换一次。动物自由饮 水。饮水系统应定期消毒。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 582,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 583,
                    "label": "(1) 至少要设三个剂量组及一个相应的对照组。剂量选择可参考 急性毒性、短期重复染毒毒性、亚慢性毒性和代谢研究等资料确定。剂量设计原则 如下。① 高剂量组高剂量组可以出现某些较轻或较明显的毒性反应，个别动物可 能死亡；高剂量组剂量设计不大于l000mg/kg体重。②? 低剂量组不应出现毒性效应，但应高于人的实际接触水平。③? 中剂量组可出现轻度毒性效应。④ 溶剂对照组溶剂毒性已知，可仅设溶剂对照组；溶剂毒性未知，应增设 空白对照组。⑤? 附加组和附加对照组设高剂量附加组和对照附加组。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 584,
                    "label": "\"(1) 经口、经皮和经呼吸道吸人是三种主要染毒途径。选择何种途 径要根据受试样品的理化特性和对人有代表性的接触方式。① 经口染毒可将受试样品混人饲料或饮水中，或采用灌胃法染毒。受试样 品混在饲料或饮水中应每周7d染毒；如采用灌胃法，每周染毒5d或7d，染毒的 第一个月每周按体重调整一次染毒量，以后每4周调整一次染毒量，半年以后每 13周调整一次。② 经皮染毒首次染毒开始前24h，将动物躯千背部染毒区的被毛去除，去 毛时应小心不可损伤动物皮肤，以免引起皮肤通透性的改变。此后视动物被毛生长 情况，大约每周要对染毒部位去毛，各组的去毛时间和去毛面积应相近?受试样品 应尽可能薄而均匀地涂敷于整个染毒区域，染毒部位的面积约相当于动物体表面积 的10%，应通过对动物体重的测定确定染毒部位的面积，若受试样品毒性较大， 可相对减小染毒区域的面积。应使用玻璃纸和无刺激的胶带将受试样品固定，以保 证受试样品与皮肤有良好的接触和防止受试样品脱落。每天染毒6h，每周染毒5d 或7d。每周对染毒部位剪毛一次。染毒的第一个月每周按体重调整一次染毒量， 以后每月调整一次染毒量，半年以后每三个月调整一次。③?? 经呼吸道吸人染毒慢性吸人试验采用动式染毒系统进行试验。采用口鼻 式方法进行。间歇暴露方式染毒时间每天6h",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 585,
                    "label": "(1) 应每天进行一次一般症状观察，定期进行一次详细的症状观 察。观察至少包括皮肤、被毛、眼、黏膜的改变和呼吸系统、循环系统、神经系 统、肢体活动、行为方式等变化发生的时间、程度和持续时间。对出现毒性症状的 动物进行连续详细观察。试验期内应每天观察动物的死亡和濒死情况，必要时还应 增加观察次数并采取适当的措施尽量减少动物损失，对死亡动物应及时解剖，对濒 死动物应及时处理。附加组动物在高剂量组停止染毒后需继续观察28d，以研究毒 作用的可逆性、持续性和迟发效应。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 586,
                    "label": "(1) 试验每隔6个月和试验结束时进行临床生化检査。试验中 期大鼠每组每性别可检查1〇只。测定指标至少应包括丙氨酸氨基转移酶（ALT)、 天门冬氨酸氨基转移酶（AST)、碱性磷酸酶（ALP)、尿素氮（BUN)、肌酐 (Cr)、血糖（Glu)、白蛋白（Alb)、总蛋白（TP)、总胆固醇（TCH)、钾、钠 等，必要时测定y-谷氨酰转肽酶（GGT)、鸟氨酸脱羧酶（ODC)、甘油三酯、胆 酸、胆碱酯酶、激素、钙和磷等指标。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 587,
                    "label": "(1) 病理检查，包括肉眼大体解剖检查和镜检。应详细描述和 记录。① 大体解剖检查在试验过程中死亡或濒死而被处死的动物均应进行大体解 剖。濒死动物解剖时应收集其血样进行血液及生化检查。试验解剖时应对所有动物 进行大体检查，包括体表、颅腔、胸腔、腹腔及其脏器。剖取脑、脑垂体、心脏/ 主动脉、甲状腺和甲状旁腺、食道、肺/气管、胸腺、胃、十二指肠、小肠、大肠、 肝、肾、脾、胰、肾上腺、卵巢、睾丸、附睾、有代表性的淋巴结、脊髓（颈、胸 和腰段）、子宫、前列腺、膀胱、坐骨神经、胸骨进行固定。必要时（如果大体观 察有病变）剖取乳腺、肌肉、股骨、泪腺、唾液腺、皮肤和眼睛进行固定。并称取 脑、心脏、胸腺、肾上腺、肝、肾、脾、睾丸、卵巢的重量，计算脏器系数。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 588,
                    "label": "可通过表格形式总结试验结果，显示试验开始时各组动物数、 出现毒性反应的动物数、毒性反应和动物出现毒性反应的百分比。对所有数据应采 用适当的统计学方法进行评价，统计学方法应在试验设计时确定。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 589,
                    "label": "慢性毒性试验结果应结合前期试验结果，并考虑到毒性效应指标和解剖及组织 病理学检查结果进行综合评价。毒性评价应包括受试样品染毒剂量与是否出现毒性 反应、毒性反应的发生率及其程度之间的关系。这些反应包括行为或临床异常，肉眼可见的损伤，靶器官、体重变化情况，死亡效应以及其他一般或特殊的毒性作 用。慢性试验尽可能提出统计学上有意义的未观察到有害作用剂量水平（NOA- EL)。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 590,
                    "label": "慢性毒性试验应结合试验过程中发现的毒性效应、解剖及组织病理学改变进行 总体评价。慢性毒性试验能够提供受试样品在长期接触该受试样品时的毒性作用资 料，为拟定人类接触该农药的每日容许摄人量（ADI)和制定农药最大残留量 (MRL)提供依据。但由于本试验并不主要研究受试样品致癌性，确定受试样品致 癌性仍有限。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 591,
                    "label": "\"本试验的目的是检测农药是否引起哺乳动物骨髄嗜多染红细胞染色体或有丝分 裂器损伤而诱导微核细胞发生率增高，以评价受试物致突变的可能性。微核是指细 胞中主核之外的小核，染色与细胞核一致，相当于细胞直径的1/20?1/5",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 592,
                    "label": "首选水作溶剂，如受试物不溶于水，可用食用油、食用淀粉、0.5%羧甲基纤 维素（CMC)配成乳浊液或悬浊液，受试物应于灌胃前新鲜配制，除非有资料表 明以溶液（或乳浊液或悬浊液）保存具有稳定性。如非常用溶剂，应有参考资料并 说明其成分及选作溶剂的原因。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 593,
                    "label": "(1) 仪器生物显微镜、恒温水浴箱。(2) 小牛血清小牛血清（灭活）滤菌后置于56T：恒温水浴保温30min进行 灭活。灭活的小牛血清通常储存4C冰箱里。亦可用大鼠、小鼠血清代替。(3) 姬姆萨染液配制将姬姆萨（Giemsa)染料和少量甲醇置于研鉢里仔细研磨，再加人甲醇到375mL，待完全溶解后，再加人125mL甘油，混合均勻，见 表5-5。置37°C恒温箱中保温48h。保温期间振摇数次，促使染料的充分溶解。取出过滤，两周后使用。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 594,
                    "label": "(1) 试验动物选择微核试验推荐使用小鼠，也可选用大鼠。通常用7?12周 龄，体重25?30g的小鼠或体重150?200g的大鼠。动物随机分组，每组用两种性 别的动物至少各5只。在试验开始时，同性别动物体重变异应不超过平均体重的士 20%。(2) 饲养环境试验前，动物应在饲养环境中检疫、适应3?5d。试验动物的 饲养环境应符合国家有关规定。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 595,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 596,
                    "label": "(1) 设计原则髙剂量组动物应出现严重中毒效应和/或个别出现死亡， 低剂量组动物应不出现毒性效应，即覆盖高毒性至几乎无毒。一般髙剂量取1/2 LD5()，中、低剂量分别取1/4LD5。、1/8LD5Q。第一个采样时间点应设3个剂量， 第二个采样时间点仅需设高剂量。对有特异生物学活性的物质（如激素和促细胞分裂剂）可应用其他剂量设计原 则，高剂量可采用能在骨骼中产生明显毒性的剂量（如在骨髓细胞中嗜多染红细胞 比例降低）。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 597,
                    "label": "(1) 如果单次染毒（或同一天2次染毒）剂量在2000mg/kg以上， 仍不产生可观察到的毒性效应，并且根据结构相关化合物的资料预期无遗传毒性， 则不需要进行3个剂量水平的试验，仅进行限量试验。对于限量试验，染毒时间在 14d内的，剂量设为2000mg/kg;染毒时间长于14d的，剂量设为1000mg/kg。如 果人类的可能（期望）暴露量过大，限量试验应以5000mg/kg剂量水平进行或选 择更高的剂量。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 598,
                    "label": "① 每次试验每一性别都应设置相应的阳性和阴性对照（溶剂/载体），除了不 给予受试物染毒外，对照组动物应与染毒组动物以相同方式进行操作。② 阳性对照组应预期可检测到超过本底值的有微核的红细胞频率增加，以证 实试验系统敏感性。阳性对照的染毒途径可不同于受试物染毒途径，并且仅于单个 时间点采样。最好使用与受试物化学结构相关的阳性对照。③ 阴性对照为溶剂对照。依据动物间的变异和染色体畸变细胞频率的本底 对照资料，判断是否在每个采样时间点均设置阴性对照组，并用与染毒组同样的 方式处置。如果阴性对照采用单次采样，则适宜采样时间为首次采样时间。如果 没有历史对照资料证明所用溶剂无细胞毒性或致突变作用，则应该设有未处理 对照。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 599,
                    "label": "\"① 常采用经口灌胃或腹腔注射染毒。其他合理的染毒途径也可接受。一次灌 胃或注射染毒的最大液体容积应不超过2mL/100g体重。利用更高容积，必须说明 理由。一般推荐等量染毒。② 以受试物1次染毒动物，于24?48h之间采集骨髓样品至少2次，早于24h 采样应说明理由。③ 每天1次染毒，共2次或多次（间隔24h)染毒，可在末次染毒后18?24h 之间采集骨髓一次。④ 制片，颈椎脱臼方法处死动物，取胸骨，然后用小止血钳挤出骨髓液，与 载物片一端的胎牛血清液混匀，按常规涂片；或取出股骨用小牛血清冲洗股骨骨髓 腔制成细胞悬液涂片，涂片在空气中晾干后放人甲醇溶液固定5?lOmin",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 600,
                    "label": "(1) 以直接计数1000个嗜多染红细胞（PCE)中含有微核的PCE 的多少而定。每一动物为一观察单位，每组雌雄动物分别计算微核PCE的均值。 试验结果可采用泊松分布P检验统计，也可采用卡方检验、双侧〖检验等统计方法 进行数据处理。如动物连续染毒4周或更长时间，也应给出正染红细胞的数据。雌 雄之间无明显的性别差异时可合并计算，否则必须分别计算。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 601,
                    "label": "试验组与对照组相比，试验结果微核率增加有统计学意义，并有剂量-反应关 系时，即可确认为阳性结果。若统计学上差异有显著性，但无剂量-反应关系时， 则须进行重复试验。(1)? 结果能重复者可确定为阳性。应有本实验室所用试验动物的自发微核率作 参考。(2)? 结果不符合上述标准的受试物认为在本试验为阴性结果。(3)? 微核试验阳性结果表明在试验条件下，受试物可引起试验动物嗜多染红细 胞染色体损害或有丝分裂器损害产生微核率增加；阴性结果表明在试验条件下，受 试物不引起试验动物嗜多染红细胞微核率增加。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 602,
                    "label": "(1)? 由于嗜多染红细胞在骨髓形成，本试验常规使用啮齿类动物骨髓。如果已 经证实脾脏不清除有微核的嗜多染红细胞，或已表明对可引起染色体结构或数目畸 变的化学物有足够的敏感性，则周围血中有微核的嗜多染红细胞检测也可接受。微 核可以用很多标准来鉴别，包括在微核中是否存在着丝粒和着丝粒DNA的鉴定。 有微核的嗜多染红细胞频率是主要的终点。周围血中有微核的嗜正染红细胞频率也 可用作本试验的终点。当动物连续染毒4周或更长时间时，哺乳物体内微核试验特 别适用于评价涉及体内代谢、动力学和DNA修复过程的致突变损伤。并且，体内 试验对于进一步研究在体外系统检测到致突变作用也是有用的。(2)? 如有证据表明受试物或活性代谢物质不能到达靶组织，则该受试物不适用 于本试验。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 603,
                    "label": "本试验的目的是检测农药是否引起哺乳动物骨髓细胞染色体畸变，以评价受试 物致突变的可能性。染色体是细胞核中具有特殊结构和遗传功能的小体，当化学物 质作用于细胞周期G1期和S期时，诱发染色体型畸变，而作用于G2期时则诱发 染色体单体型畸变。给试验的大鼠、小鼠腹腔注人秋水仙素，抑制细胞分裂时纺锤 丝的形成，以增加中期分裂相细胞的比例，并使染色体丝缩短、分散，轮廓清晰。 在显微镜下观察染色体数目和形态。本方法特别适用于需考虑体内代谢活化后的染色体畸变分析。若有证据表明待 测物或其代谢产物不能到达骨髄，则不使用本方法。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 604,
                    "label": "首选用水作溶剂，如受试物不溶于水，可用食用油、食用淀粉、0.5%羧甲基 纤维素（CMC)配成乳浊液或悬浊液。受试物应于灌胃前新鲜配制，除非有资料 表明以溶液（或乳浊液或悬浊液）保存具有稳定性。如不是常用溶剂，应有参考资 料并说明其成分及选作溶剂的原因。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 605,
                    "label": "(1)??? 仪器生物显微镜、恒温水浴箱。(2)??? 0.1%秋水仙素置于棕色瓶中，4°C冰箱保存。(3)?? 姬姆萨染液配制将姬姆萨（Giemsa)染料和少量甲醇置于研体里仔细 研磨，再加人甲醇至375mL，待完全溶解后，再加人125mL甘油，混合均匀。置 37°C恒温箱中保温48h。保温期间振摇数次，促使染料充分溶解。取出过滤，两周 后使用。(4)?? 姬姆萨应用液取1份姬姆萨（Giemsa)染液与9份磷酸盐缓冲液 (pH7. 4)混合而成，临用时配制。(5)?? 磷酸盐缓冲液（PH7.4) l/15mol/L磷酸氢二钠溶液：称取Na2HP04 9.47g溶于1000mL蒸馏水中；l/15mol/L磷酸二氢钾溶液：称取KH2PO49.07g 溶于lOOOmL蒸馏水中；将磷酸氢二钠溶液80mL与磷酸二氢钾溶液20mL混合， 用pH计测定并调节至pH7. 4。(6)??  固定液甲醇（分析纯）与冰醋酸（分析纯）以3 : 1混合，临用时现配。(7)??? 2. 2%柠檬酸钠或0.9%生理盐水。0.075mo丨/L氯化钾溶液。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 606,
                    "label": "(1)? 试验动物选择推荐使用大鼠、小鼠和中国仓鼠，其他合适的哺乳动物也 可选用。应使用健康刚成年动物，如使用小鼠，周龄7?12周为好。在试验开始 时，动物体重变异应不超过每种性别平均体重的±20%。动物要随机分配到对照组 和样品处理组，每个剂量组、每个性别、每个采样时间点至少5只动物能用于分 析。如果有资料证明两性别间毒性作用无差别，则可只用一种性别的动物做试验。(2)? 饲养环境试验前，动物应在饲养环境中检疫、适应3?5d。试验动物的 饲养环境应符合国家有关规定。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 607,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 608,
                    "label": "(1) 如果没有适当的资料，必须进行预试验来确定剂量范围。预试验所在的实验室、所用动物种属、品系、性别以及染毒方式应与正式试验的相 同。如果受试物存在毒性，应在第一个采样时间点设3个剂量，剂量范围应包括从 大毒性至小毒性或无毒性剂量。第二次采样时间点仅需设置高剂量。高剂量是能使 受试动物出现严重中毒反应的剂量，高于此剂量将会引起动物死亡。低剂量不应出 现毒性反应。中、低剂量按等比级数设置，一般高、中、低剂量可分别采用 1/2LD5。、1/4LDS。、1/8LD5。。对有特异生物学活性的物质（如激素和促细胞分 裂剂）可应用其他剂量设置原则。髙剂量也可采用能在骨骼中产生明显毒性的剂量 (如抑制骨髓细胞有丝分裂指数达50%以上>。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 609,
                    "label": "如果单次染毒（或同一天2次染毒）剂量在2000mg/kg以上， 仍不产生可观察到的毒性效应，并且根据结构相关化合物的资料预期无遗传毒性， 则不需要进行3个剂量水平的试验。染毒时间在14cl内的，剂量设为2000mg/kg; 染毒时间长于14d的，剂量设为1000mg/kg。如果人类的可能（期望）暴露量过 大，限量试验应以5000mg/kg剂量水平进行或选择更高的剂量。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 610,
                    "label": "① 每次试验每一性别都应设置相应的阳性和阴性对照（溶剂/载体），除不用 受试物染毒之外，对照组动物应与染毒组动物以相同方式进行操作。② 阳性对照组应预期可检测到超过本底值的体内染色体结构畸变的增加，以 证实试验系统敏感性。阳性对照的染毒途径可不同于受试物染毒途径，并且仅于单 个时间点采样。最好使用与受试物化学结构相关的阳性对照。③ 阴性对照为溶剂对照。依据动物间的变异和染色体畸变细胞频率的本底对 照资料，判断是否在每个采样时间点均设置阴性对照组，并用与染毒组同样的方式 处置。如果阴性对照采用单次采样，则适宜采样时间为首次采样时间。如果没有历 史对照资料证明所用溶剂无细胞毒性或致突变作用，则应该设有空白对照。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 611,
                    "label": "推荐受试物1次染毒。给样量较大的受试物，也可分次染毒， 如在同一天中间隔不超过6h，2次染毒。其他的染毒方式应说明理由。首次采集样 品时间推荐在末次染毒后12?18h (正常细胞周期的1.5倍），第二次采集样品时 间推荐为第一次采样时间后24h。如果染毒超过一天，可采取末次染毒后12?18h (正常细胞周期的1.5倍）一次采样。高剂量必须进行二次采样，中、低剂量可一 次采样。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 612,
                    "label": "\"(2)??? 大鼠在处死前4h，腹腔注射秋水仙素（4mg/kg体重）。小 鼠间隔3?5h，中国仓鼠间隔4?5h。① 处死动物、迅速取出股骨，剔去肌肉，去除血污，剪去两端的骨骺，用带 针头的注射器吸取生理盐水或2.2%柠檬酸钠，插人骨髄腔内，将骨髓冲洗人 10mL离心管，然后用吸管吹打骨髓团块使其均匀，以1000 r/min速度离心 lOmin",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 613,
                    "label": "用新鲜配制的Giemsa应用液染色10?15min，立即用磷酸缓冲液 冲洗，晾干，写好标签，阴凉干燥处保存。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 614,
                    "label": "确定有丝分裂指数，包括所有染毒组、阴性对照组和阳性对照组 (每只动物分析1000个细胞），以确定细胞毒性。每个动物应至少分析100个分散 良好的中期分裂相细胞，如畸变率很高，观察细胞数可减少。由于制片方法常导致 染色体丢失的中期相的比例改变，所计数的细胞含染色体数应控制在2n 士2。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 615,
                    "label": "①? 染色体数目的改变：非整倍体、多倍体、内复制。②? 染色体结构的改变：断裂、微小体、有着丝点环、无着丝点环、单体互换、 双微小体、非特定性型变化（如粉碎化、着丝点细长化、黏着）等。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 616,
                    "label": "(2)??? 以表格表示各个动物的资料。试验单位是每只动物，对每只动 物应评价计数的细胞数，每个细胞的畸变数和有染色体结构畸变的细胞百分率。应 列表给出在染毒组和对照组不同类型的染色体结构畸变数目和频率。应另外计数并 报告裂隙，但一般不计人总畸变频率。如果没有性别差异的证据，雌雄动物的数据 可合并进行统计学分析。统计学处理可采用卡方检验，也可采用Fish检验等统计 方法。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 617,
                    "label": "判断阳性结果的标准。染毒组与阴性对照组相比，染色体畸变率增加有统 计学意义并有明显的剂量-反应关系时，即可确认为阳性结果。若统计学差异有显 著性，但无剂量-反应关系时，则应进行重复试验，差异能重复者可确定为阳性。 评价时应从生物学意义与统计学意义两方面进行分析。(2) 结果不符合上述标准的受试物可认为在本系统为阴性结果。(3)??? 多倍体增加可以表明受试物可诱导染色体数目畸变。内复制增加可表明受 试物可抑制细胞周期进展。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 618,
                    "label": "本试验常规利用啮齿类动物。骨髓是本试验的靶组织，因为骨髓是富含血 管的组织，并含有细胞周期短的细胞群，易于分离和处理。本方法不涉及其他物种 和靶组织。(2)染色体畸变试验与评价致突变危害有关，本试验考虑到样品在体内代谢、 动力学和DNA修复过程，虽然这些因素在不同的动物种属和品系、组织之间是变 异的。体内试验也用于进一步研究在体外试验检测到的致突变作用。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 619,
                    "label": "本试验的目的是检测试验农药引起哺乳动物生殖细胞染色体畸变的效应，以评 价引起生殖细胞遗传突变的可能性。以适当的染毒途径给动物染毒，并在染毒后适 当的时间处死，在动物处死前，动物用中期相阻断剂（如秋水仙素）处理，制备睾 丸细胞染色体并染色，对中期相细胞进行染色体畸变分析。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 620,
                    "label": "全部试剂除注明外，均为分析纯，试验用水为蒸馏水。(1)??? 实验室常用设备。(2)??? 1%柠檬酸三钠取lg柠檬酸三钠（分析纯），加蒸馏水至lOOmL。(3)?? 60%冰醋酸取60mL冰醋酸（分析纯），加蒸馏水至lOOmL。均宜新鲜 配制。(4)??? 固定液甲醇：冰醋酸=3 : 1，新鲜配制。(5)?? 磷酸盐缓冲液（pH6.8) l/15mol/L磷酸氢二钠溶液：磷酸氢二钠 (Na2HP04) 9. 47g溶于lOOOmL蒸馏水中。Vl5mol/L磷酸二氢钾溶液：磷酸二 氢钾（KH2P04) 9.07g溶于lOOOmL蒸馏水中。取l/15mol/L磷酸氢二钠溶液 50mL与l/15mol/L磷酸二氢钾溶液50mL混合，用pH计测定并调节至pH6. 8。(6)?? Giemsa应用液取1份Giemsa染液与9份l/15mol/L鱗酸盐缓冲液混 合而成，临用时现配。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 621,
                    "label": "受试物应新鲜配制，固体受试物应溶于或悬浮于适当的溶剂或介质中，液体受 试物可直接使用或稀释后使用。溶剂和介质在所用剂量下不应产生毒性，也不应与 受试物发生反应。通常首选溶剂为水，不溶于水的受试物可使用食用油（如橄榄 油、玉米油等），不溶于水或油的受试物可使用羧甲基纤维素、淀粉等配成混悬液。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 622,
                    "label": "\"首选用健康成年雄性小鼠，周龄为7?12周，体重25?30g，所用动物起始体 重不能超过平均体重的20%",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 623,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 624,
                    "label": "① 如果没有合适的参考资料，应在同一实验室利用同一品系、性别和染毒方 式进行预试验来确定剂量范围。如果有毒性，正式试验的第一个时间采样点应设三 个剂量组，高剂量组原则上为动物出现严重中毒症状的剂量，即最大耐受剂量，低 剂量组应不表现出毒性，在第二个采样点可仅设高剂量。但对较低的无毒剂量水平 就有生物活性的物质（如激素）剂量设计可另循其他标准。髙剂量也可选急性经口 毒性1^>5()的50%?80%作为高剂量，按等比级数2向下设置中、低剂量。② 如果单次染毒剂量或同一天2次染毒剂量为2000mg/kg体重，没有产生可 观察到的毒性效应，并且根据结构等相关资料推断其无遗传毒性，则可不必进行3 个剂量水平的完整实验。如果受试物的毒性较低，根据人群预期的接触水平在试验 中可设计5000mg/kg体重或更高剂量进行限量试验。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 625,
                    "label": "(1) 试验动物的处理和采样时间点。染毒途径可选用经口灌胃或腹 腔注射给予，一般为一次染毒给予受试物。受试样品溶液一次给予的大容量不应超 过2mL/100g。如果给予的剂量较大，也可将剂量在一天内分两次给予。精原细 胞：高剂量组应于末次给予受试物后的第24天和第48天处死动物采样，中低剂量 组的动物均在末次给予受试物后24h处死动物采样。精母细胞：于第一次染毒后 12?14d采集样品。动物处死前3?6h腹腔注射秋水仙素4?6mg/kg体重（注射 体积：0. 1?0.2mL/10g体重）。秋水仙素宜当天新鲜配制。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 626,
                    "label": "对每个动物记录含染色体结构畸变的细胞数和每个细胞的染色体畸变数，并列 表给出各组不同类型的染色体结构畸变数目和频率。实验组与阴性对照组的断片、 易位、畸变细胞率、常染色体单价体、性染色体单价体等分别按Kastenbaum和 Bowman所述方法进行统计处理，染色体裂隙应分别记录和报告，一般不计人畸变率。受试剂量组染色体畸变率或畸变细胞率与阴性对照组相比，统计学上有显著性 差异，并有明显的剂量-反应关系或在一个受试剂量组中出现染色体畸变率或畸变 细胞率明显增高时即可认为染色体畸变阳性。若统计学上差异有显著性，但无剂 量-反应关系，则需进行重复实验，结果可重复者定为阳性。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 627,
                    "label": "阳性结果表明受试物在试验动物的性细胞诱发染色体畸变，阴性结果表明在该 试验条件下受试物对试验动物细胞不诱发染色体畸变。该试验能够提供受试样品对 雄性生殖细胞毒性作用的资料，其试验结果仅能有限地外推到人。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 628,
                    "label": "本试验是一项生殖细胞致突变试验，用来检测受试物对整体哺乳动物生殖细胞 的遗传损伤，进一步确证体外试验或其他试验系统获得的阳性结果，以评价受试物 能否到达性腺组织产生遗传损害。哺乳动物发育中的精子在物理或化学因素作用 下，发生染色体损伤，从而使受精卵在发育中死亡。引起显性致死的染色体损伤主 要为染色体断裂。显性致死的主要表现是受精卵着床前丢失或着床后胚胎早期死 亡。通过适当的途径使雄性动物接触受试物，然后与未经染毒且未交配过的雌性动 物交配，交配结束后，取出雌性动物。雌性动物于妊娠后半期处死，剖开腹腔，取 出子宫，检查两侧子宫内的植人数（着床数）、早死胎数、晚死胎数和活胎数。雄 性动物每间隔一定时间再与另一批未经染毒且未交配过的雌性动物交配，如此共进 行数批，以保证覆盖一个精子周期。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 629,
                    "label": "受试物酋选蒸馏水作溶剂，如受试物不溶于水，可用食用油（如玉米油、橄榄 油等）、食用淀粉、0.5%羧甲基纤维素（CMC)配成乳浊液或悬浊液。受试物应 于灌胃前新鲜配制，除非有资料表明以溶液（或乳浊液或悬浊液）保存具有稳定 性。如非常用溶剂，应有参考资料并说明其成分及选作溶剂的原因。(1) 试验动物种属和性别应选用低背景的显性致死率、高妊娠率和高植人 数、健康、性成熟的动物品系，推荐用大鼠或小鼠为试验动物，动物品系一般选用 两个近交系的杂交一代或远交系动物，所有动物均应性成熟，一般小鼠体重30g以 上或大鼠体重200g以上；大鼠雄性为50只，雌性需800只（交配8周）；小鼠雄 性为75只，雌性需900只；按体重随机分成染毒组和对照组，共五组。雄性动物 给予受试物后每只动物分笼词养。为避免同一群体动物中保留的劣性致死遗传因子 的影响，雌雄鼠不能来自同一杂交群。(2)? 词养环境①? 检疫、适应时间：检疫、适应3?5d。②? 饲养环境：应符合国家有关规定。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 630,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 631,
                    "label": "一般设三个染毒剂量组。剂量水平的确定应参照先前的毒性试验 和预试验结果。如已知受试物的LD5。，高剂量的设计为1/3LDS。?1/10LD5Q，高 剂量应能使试验动物出现毒性症状或繁殖能力轻微降低。然后以高剂量组的1/3和 1/10作为中剂量和低剂量。若受试物LD5。不能测出时，可用5g/kg或5mL/kg的 剂量作为大剂量。染毒途径一般采用经口染毒。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 632,
                    "label": "①? 每次试验每一样品都应设置相应的阳性和阴性对照（溶剂），除不给予受试 物染毒之外，对照组动物应与染毒组动物以相同方式进行操作。②? 阳性对照的染毒途径可不同于受试物染毒途径，以出现预期的阳性结果， 以证实试验系统敏感性。③? 阴性对照为溶剂对照。如果没有历史对照资料证明所用溶剂/载体无细胞毒 性或致突变作用，则应该设有空白对照。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 633,
                    "label": "\"将雄性动物以设计好的剂量和途径染毒，连续染毒5d",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 634,
                    "label": "\"在最后一次染毒后的当天，将每只雄鼠单放在一只笼内，与2?3 只未交配过的雌鼠同笼5d，5d后移走雌鼠（一般同笼5d",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 635,
                    "label": "(1) 把同笼的第3天作为第1天，在第13天?第14天时用颈椎脱臼法 处死动物，取出卵巢和子宫内容物。检查项目包括黄体数、总着床数、早死胎数、晚死胎数和活胎数。胚胎鉴别如下。①?? 活胎完整成形，色鲜红，有自然运动，机械刺激后有运动反应。②? 早死胎胚胎形体较小，外形不完整，胎盘较小或不明显。早期死亡胚胎 会在子宫内膜上隆起如一小瘤。如已完全被吸收，仅在子宫内膜上留一隆起暗褐色 点状物。③?? 晚死胎成形，色泽暗淡，无自然运动，机械刺激后无运动反应。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 636,
                    "label": "①? 用表格列出试验中获得的各试验组及对照组动物的全部原始数据，内容应 包括雄性动物、与之交配的雌性动物编号、染毒剂量、交配时间、体重、各雌性动 物的总着床数、活胎数、死胎数、吸收胎数及黄体数。计算各组雌鼠的受孕率、着床前死亡率、着床体死亡率、平均活胎数、死 胎数、吸收胎数、有1个以上死胎的孕鼠率及致突变指数",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 637,
                    "label": "(1)? 平均活胎数显著降低。(2)? 平均死胎数、吸收胎数明显地增加。(3)? 有一个或多个死胎的雌鼠率增加；一种受试物的染毒组与对照组比较，上 述指标随剂量增高而增加且具有统计学意义，或至少显示有一种指标明显增加并具 有统计学意义时，即可判为阳性。如果受试物不引起上述指标与剂量有关的有统计 学意义的增加，或者在任何剂量水平上均没有可重复的并有统计学意义的增加，则 可认为该受试物在本试验系统中的试验结果为阴性。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 638,
                    "label": "(1)? 啮齿动物显性致死试验的阳性结果表明，受试物在该试验条件下对该试验 动物品系的雄性的生殖细胞具有遗传毒性。(2)? 啮齿动物显性致死试验的阴性结果表明，受试物在该试验条件下对该试验 动物品系的雄性的生殖细胞无遗传毒性。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 639,
                    "label": "本试验的目的是检测农药是否引起培养的哺乳动物细胞染色体畸变，以评价受 试物致突变的可能性。在加入和不加人代谢活化系统的条件下，使培养的哺乳动物 细胞暴露于受试物中。用中期分裂相阻断剂（如秋水仙素或秋水仙胺）处理，使细 胞停止在中期分裂相，随后收获细胞，制片，染色，分析染色体畸变。大部分的致 突变剂导致染色单体型畸变，偶有染色体型畸变发生。虽然多倍体的增加可能预示 着有染色体数目畸变的可能，但本方法并不适合用于测定染色体的数目畸变。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 640,
                    "label": "固体受试物需溶解或悬浮于溶剂中，用前稀释至适合浓度；液体受试物可以直 接加人试验系统和/或用前稀释至适合浓度。受试物应在使用前新鲜配制，否则就 必须证实储存不影响其稳定性。(1)? 溶剂的选择溶剂必须是非致突变物，不与受试物发生化学反应，不影响 细胞存活和S9活性。首选溶剂是培养液（不含血清）或水。二甲基亚砜（DMSO) 也是常用溶剂，使用时浓度不应大于0.5%。(2)? 受试物浓度设置最高浓度的选择，决定最高浓度的因素是细胞毒性、受 试物在试验系统中的溶解度以及pH或渗克分子浓度（osmolality)的改变。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 641,
                    "label": "应使用指示细胞完整性和生长情况的指标，在活化系统存在或不存在的两种条 件下确定细胞毒性，例如细胞覆盖程度、存活细胞计数或有丝分裂指数。应在预试 验中确定细胞毒性和溶解度。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 642,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 643,
                    "label": "①? 至少应设置3个可供分析的浓度。当有细胞毒性时，其浓度范围应包括从 最大毒性至几乎无毒性；通常浓度间隔系数不大于2?②? 在收获细胞时，最高浓度应能明显降低细胞覆盖程度、细胞计数或有丝分 裂指数（均应大于50%)。③ 对于那些相对无细胞毒性的化合物，最高浓度应是5ML/mL，5mg/mL或 0? Olmol/L。④ 对于相对不溶解的物质，当浓度低于不溶解浓度时仍无毒性，则最高剂量 应是，当处理期结束时，在最终培养液中溶解度限值以上的一个浓度。在某些情况 下（即仅当高于最低不溶解浓度时才发生细胞毒性），应使用一个以上可看见沉淀 的浓度。最好在试验处理开始和结束时均评价溶解度，因为由于细胞、S9等的存 在，试验系统内在暴露过程中溶解度可能变化。不溶解性可用肉眼鉴别，但沉淀不 能影响观察。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 644,
                    "label": "可根据受试物的性质和结构选择适宜的阳性对照物，阳性对 照物应是已知的断裂剂，能引起可检出的、并可重复的阳性结果。当外源性活化系 统不存在吋，可使用甲磺酸甲酯（MMS)、甲磺酸乙酯（EMS)、乙基亚硝基脲、 丝裂霉素C、4-硝基喹啉氧化物。当外源性活化系统存在时，可使用苯并U) 芘、环磷酰胺。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 645,
                    "label": "(2) 阴性对照，即仅含和受试物组相同的溶剂，不含受试物，其 他处理和受试物组完全相同。此外，如未能证实所选溶剂不具有致突变性，溶剂对 照与本实验室空白对照背景资料有明显差异，还应设空白对照。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 646,
                    "label": "\"(2) 采用MEM (Eagle)",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 647,
                    "label": "\"(2) 通常使用的是^混合物（S9mix)。89是从经酶诱导剂（Aro- clor 1254或苯巴比妥钠和/?-萘黄酮联合使用）处理的啮齿动物肝脏获得的。S9的 制备同Ames试验。S9的使用浓度为1%?10% (终浓度）。S9miX中所加辅助因 子的量由各实验室自行决定，但需对S9mix的活性进行鉴定，必须能明显活化阳 性对照物。也可使用下述 S9 0. 125mL，MgCl2 (0.4mol/L) 0.02mL，KC1 (1.65mol/L) 0.02mL",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 648,
                    "label": "① 细胞可使用已建立的细胞株或细胞系，也可使用原代培养细胞。所使用 的细胞应该在生长性能、染色体数目和核型、自发的染色体畸变率等方面有一定的 稳定性。推荐使用中国地鼠卵巢（CHO)细胞株、中国地鼠肺（CHL)细胞株、 人或其他哺乳动物外周血淋巴细胞。② 对照试验时，应同时设阳性对照物、阴性对照物和至少3个可供分析的 受试物浓度组。③ 内培养试验前一天，将一定数量的细胞接种于培养皿（瓶）中，放C02 培养箱内培养。④? S9mix的条件试验需在加人和不加人S9 mix的条件下进行。试验时，吸 去培养皿（瓶）中的培养液，加入一定浓度的受试物、s9 mix (不加S9 mix时， 需用培养液补足），以及一定量不含血清的培养液，放培养箱中处理3?6h。结束 后，吸去含受试物的培养液，用Hanks液洗细胞3次，加人含10%胎牛血清的培 养液，放回培养箱，于24h内收获细胞。于收获前2?4h，加人细胞分裂中期阻断 剂（如用秋水仙素，作用时间为4h，终浓度为lHg/mL)。当难以得出明确结论时， 应更换试验条件，如改变代谢活化条件、受试物与试验系统接触时间等重复试验。⑤ 染色收获细胞时，用0.25%胰蛋白酶溶液消化细胞，待细胞脱落后，加 人含10%胎牛或小牛血清的培养液终止胰蛋白酶的作用，混匀，放人离心管以 1000?1200r/min的速度离心5?7min，弃去上清液，加入0.075mol/LKCl溶液 低渗处理，继而以新配制的甲醇和冰醋酸液（容积比为3 : 1)进行固定。空气干 燥或火焰干燥法制片常规制片，用姬姆萨染液染色。⑥ 染色体分析做染色体分析时，每一处理组选200个（阳性对照可选100 个）分散良好的中期分裂相（染色体数2?±2)进行染色体畸变分析。在分析时应 记录每一观察细胞的染色体数目，对于畸变细胞还应记录显微镜视野的坐标位置及 畸变类型。结果均以百分比表示。⑦? 结果处理对染色体畸变细胞率用X2检验，以评价受试物的致突变性。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 649,
                    "label": "受试物在任何一个剂量条件下，引起具有统计学意义的增加，并有可重复 性。在评价时应把生物学和统计学意义结合考虑，统计学意义不能作为阳性反应唯 一的决定因素。在下列两种情况下可判定受试物在本试验系统中具有致突变性。(1)? 受试物引起染色体结构畸变数具有统计学意义，并有剂量相关性。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 650,
                    "label": "阳性结果表明受试物引起培养的哺乳动物体细胞染色体结构畸变。阴性结果表 明在本试验条件下，受试物不引起培养的哺乳动物体细胞染色体结构畸变。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 651,
                    "label": "该测试系统用于检测农药引起的突变，包括碱基对突变、移码突变和缺失等， 从而评价受试物引起突变的可能性。在加人和不加人代谢活化系统的条件下，使细 胞暴露于受试物一定时间，然后将细胞再传代培养。胸苷激酶正常水平的细胞对 三氟胸苷（TFT)等敏感，因而在培养液中不能生长分裂，突变细胞则不敏感， 在含有6-硫代鸟嘌呤（6-TG)、8-azaguanine (AG)或TFT的选择性培养液中能 继续分裂并形成集落。基于突变集落数，计算突变频率以评价受试物的致突变性。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 652,
                    "label": "固体受试物需溶解或悬浮于溶剂中，用前稀释至适合浓度；液体受试物可以直 接加人试验系统，或用前稀释至适合浓度。受试物应在使用前新鲜配制，否则就必 须证实储存不影响其稳定性。溶剂必须是非致突变物，不与受试物发生化学反应，不影响细胞存活和59活 性。首选溶剂是水或水溶性溶剂。二甲基亚砜（DMSO)也是常用溶剂，但使用时 浓度不应大于0.5%。①? 最高浓度的选择。决定最高浓度的因素是细胞毒性、受试物在试验系统中 的溶解度以及pH或渗克分子浓度（osmolality)的改变。②? 剂量设置。至少应设置4个可供分析的浓度。当有细胞毒性时，其浓度范围应包括从最大毒性至几乎无毒性。通常浓度间隔系数在2?#之间。③? 如最高浓度是基于细胞毒性的，那么该浓度组的细胞相对存活率（相对集 落形成率）或相对细胞总生长情况应为10%?20% (不低于10%)。对于那些细胞 毒性很低的化合物，最高浓度应是5；xL/mL，5mg/mL或0. 01mol/L。④? 对于相对不溶解的物质，其最高浓度应达到或超过在细胞培养状态下的溶 解度限值。最好在试验处理开始和结束时均评价溶解度，因为由于S9等的存在， 试验系统内在暴露过程中溶解度可能发生变化。不溶解性可用肉眼鉴别，但沉淀不 应影响观察。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 653,
                    "label": "应使用指示细胞完整性和生长情况的指标，在活化系统存在或不存在两种条件 下确定细胞毒性，例如相对集落形成率或相对细胞总生长情况。应在预试验中确定 细胞毒性和溶解度。",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 654,
                    "label": "暂无数据",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                }
                ,
                {
                    "id": 655,
                    "label": "农药毒理学来自书本",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                },

                {
                    "id": 656,
                    "label": "农药残留",
                    "size": 66,
                    "scale": "1.2",
                    "color": "rgb(141,190,52)"
                },
            ],
            "links":[{
                "source": 1,
                "target": 328,
                "label": "概念"
            }
                ,
                {
                    "source": 1,
                    "target": 655,
                    "label": "说明"
                }
                ,
                {
                    "source": 1,
                    "target": 656,
                    "label": "领域"
                }
                ,
                {
                    "source": 2,
                    "target": 329,
                    "label": "概念"
                }
                ,
                {
                    "source": 3,
                    "target": 330,
                    "label": "概念"
                }
                ,
                {
                    "source": 4,
                    "target": 331,
                    "label": "概念"
                }
                ,
                {
                    "source": 5,
                    "target": 332,
                    "label": "概念"
                }
                ,
                {
                    "source": 6,
                    "target": 333,
                    "label": "概念"
                }
                ,
                {
                    "source": 7,
                    "target": 334,
                    "label": "概念"
                }
                ,
                {
                    "source": 8,
                    "target": 335,
                    "label": "概念"
                }
                ,
                {
                    "source": 9,
                    "target": 336,
                    "label": "概念"
                }
                ,
                {
                    "source": 10,
                    "target": 337,
                    "label": "概念"
                }
                ,
                {
                    "source": 11,
                    "target": 338,
                    "label": "概念"
                }
                ,
                {
                    "source": 12,
                    "target": 339,
                    "label": "概念"
                }
                ,
                {
                    "source": 13,
                    "target": 340,
                    "label": "概念"
                }
                ,
                {
                    "source": 14,
                    "target": 341,
                    "label": "概念"
                }
                ,
                {
                    "source": 15,
                    "target": 342,
                    "label": "概念"
                }
                ,
                {
                    "source": 16,
                    "target": 343,
                    "label": "概念"
                }
                ,
                {
                    "source": 17,
                    "target": 344,
                    "label": "概念"
                }
                ,
                {
                    "source": 18,
                    "target": 345,
                    "label": "概念"
                }
                ,
                {
                    "source": 19,
                    "target": 346,
                    "label": "概念"
                }
                ,
                {
                    "source": 20,
                    "target": 347,
                    "label": "概念"
                }
                ,
                {
                    "source": 21,
                    "target": 348,
                    "label": "概念"
                }
                ,
                {
                    "source": 22,
                    "target": 349,
                    "label": "概念"
                }
                ,
                {
                    "source": 23,
                    "target": 350,
                    "label": "概念"
                }
                ,
                {
                    "source": 24,
                    "target": 351,
                    "label": "概念"
                }
                ,
                {
                    "source": 25,
                    "target": 352,
                    "label": "概念"
                }
                ,
                {
                    "source": 26,
                    "target": 353,
                    "label": "概念"
                }
                ,
                {
                    "source": 27,
                    "target": 354,
                    "label": "概念"
                }
                ,
                {
                    "source": 28,
                    "target": 355,
                    "label": "概念"
                }
                ,
                {
                    "source": 29,
                    "target": 356,
                    "label": "概念"
                }
                ,
                {
                    "source": 30,
                    "target": 357,
                    "label": "概念"
                }
                ,
                {
                    "source": 31,
                    "target": 358,
                    "label": "概念"
                }
                ,
                {
                    "source": 32,
                    "target": 359,
                    "label": "概念"
                }
                ,
                {
                    "source": 33,
                    "target": 360,
                    "label": "概念"
                }
                ,
                {
                    "source": 34,
                    "target": 361,
                    "label": "概念"
                }
                ,
                {
                    "source": 35,
                    "target": 362,
                    "label": "概念"
                }
                ,
                {
                    "source": 36,
                    "target": 363,
                    "label": "概念"
                }
                ,
                {
                    "source": 37,
                    "target": 364,
                    "label": "概念"
                }
                ,
                {
                    "source": 38,
                    "target": 365,
                    "label": "概念"
                }
                ,
                {
                    "source": 39,
                    "target": 366,
                    "label": "概念"
                }
                ,
                {
                    "source": 40,
                    "target": 367,
                    "label": "概念"
                }
                ,
                {
                    "source": 41,
                    "target": 368,
                    "label": "概念"
                }
                ,
                {
                    "source": 42,
                    "target": 369,
                    "label": "概念"
                }
                ,
                {
                    "source": 43,
                    "target": 370,
                    "label": "概念"
                }
                ,
                {
                    "source": 44,
                    "target": 371,
                    "label": "概念"
                }
                ,
                {
                    "source": 45,
                    "target": 372,
                    "label": "概念"
                }
                ,
                {
                    "source": 46,
                    "target": 373,
                    "label": "概念"
                }
                ,
                {
                    "source": 47,
                    "target": 374,
                    "label": "概念"
                }
                ,
                {
                    "source": 48,
                    "target": 375,
                    "label": "概念"
                }
                ,
                {
                    "source": 49,
                    "target": 376,
                    "label": "概念"
                }
                ,
                {
                    "source": 50,
                    "target": 377,
                    "label": "概念"
                }
                ,
                {
                    "source": 51,
                    "target": 378,
                    "label": "概念"
                }
                ,
                {
                    "source": 52,
                    "target": 379,
                    "label": "概念"
                }
                ,
                {
                    "source": 53,
                    "target": 380,
                    "label": "概念"
                }
                ,
                {
                    "source": 54,
                    "target": 381,
                    "label": "概念"
                }
                ,
                {
                    "source": 55,
                    "target": 382,
                    "label": "概念"
                }
                ,
                {
                    "source": 56,
                    "target": 383,
                    "label": "概念"
                }
                ,
                {
                    "source": 57,
                    "target": 384,
                    "label": "概念"
                }
                ,
                {
                    "source": 58,
                    "target": 385,
                    "label": "概念"
                }
                ,
                {
                    "source": 59,
                    "target": 386,
                    "label": "概念"
                }
                ,
                {
                    "source": 60,
                    "target": 387,
                    "label": "概念"
                }
                ,
                {
                    "source": 61,
                    "target": 388,
                    "label": "概念"
                }
                ,
                {
                    "source": 62,
                    "target": 389,
                    "label": "概念"
                }
                ,
                {
                    "source": 63,
                    "target": 390,
                    "label": "概念"
                }
                ,
                {
                    "source": 64,
                    "target": 391,
                    "label": "概念"
                }
                ,
                {
                    "source": 65,
                    "target": 392,
                    "label": "概念"
                }
                ,
                {
                    "source": 66,
                    "target": 393,
                    "label": "概念"
                }
                ,
                {
                    "source": 67,
                    "target": 394,
                    "label": "概念"
                }
                ,
                {
                    "source": 68,
                    "target": 395,
                    "label": "概念"
                }
                ,
                {
                    "source": 69,
                    "target": 396,
                    "label": "概念"
                }
                ,
                {
                    "source": 70,
                    "target": 397,
                    "label": "概念"
                }
                ,
                {
                    "source": 71,
                    "target": 398,
                    "label": "概念"
                }
                ,
                {
                    "source": 72,
                    "target": 399,
                    "label": "概念"
                }
                ,
                {
                    "source": 73,
                    "target": 400,
                    "label": "概念"
                }
                ,
                {
                    "source": 74,
                    "target": 401,
                    "label": "概念"
                }
                ,
                {
                    "source": 75,
                    "target": 402,
                    "label": "概念"
                }
                ,
                {
                    "source": 76,
                    "target": 403,
                    "label": "概念"
                }
                ,
                {
                    "source": 77,
                    "target": 404,
                    "label": "概念"
                }
                ,
                {
                    "source": 78,
                    "target": 405,
                    "label": "概念"
                }
                ,
                {
                    "source": 79,
                    "target": 406,
                    "label": "概念"
                }
                ,
                {
                    "source": 80,
                    "target": 407,
                    "label": "概念"
                }
                ,
                {
                    "source": 81,
                    "target": 408,
                    "label": "概念"
                }
                ,
                {
                    "source": 82,
                    "target": 409,
                    "label": "概念"
                }
                ,
                {
                    "source": 83,
                    "target": 410,
                    "label": "概念"
                }
                ,
                {
                    "source": 84,
                    "target": 411,
                    "label": "概念"
                }
                ,
                {
                    "source": 85,
                    "target": 412,
                    "label": "概念"
                }
                ,
                {
                    "source": 86,
                    "target": 413,
                    "label": "概念"
                }
                ,
                {
                    "source": 87,
                    "target": 414,
                    "label": "概念"
                }
                ,
                {
                    "source": 88,
                    "target": 415,
                    "label": "概念"
                }
                ,
                {
                    "source": 89,
                    "target": 416,
                    "label": "概念"
                }
                ,
                {
                    "source": 90,
                    "target": 417,
                    "label": "概念"
                }
                ,
                {
                    "source": 91,
                    "target": 418,
                    "label": "概念"
                }
                ,
                {
                    "source": 92,
                    "target": 419,
                    "label": "概念"
                }
                ,
                {
                    "source": 93,
                    "target": 420,
                    "label": "概念"
                }
                ,
                {
                    "source": 94,
                    "target": 421,
                    "label": "概念"
                }
                ,
                {
                    "source": 95,
                    "target": 422,
                    "label": "概念"
                }
                ,
                {
                    "source": 96,
                    "target": 423,
                    "label": "概念"
                }
                ,
                {
                    "source": 97,
                    "target": 424,
                    "label": "概念"
                }
                ,
                {
                    "source": 98,
                    "target": 425,
                    "label": "概念"
                }
                ,
                {
                    "source": 99,
                    "target": 426,
                    "label": "概念"
                }
                ,
                {
                    "source": 100,
                    "target": 427,
                    "label": "概念"
                }
                ,
                {
                    "source": 101,
                    "target": 428,
                    "label": "概念"
                }
                ,
                {
                    "source": 102,
                    "target": 429,
                    "label": "概念"
                }
                ,
                {
                    "source": 103,
                    "target": 430,
                    "label": "概念"
                }
                ,
                {
                    "source": 104,
                    "target": 431,
                    "label": "概念"
                }
                ,
                {
                    "source": 105,
                    "target": 432,
                    "label": "概念"
                }
                ,
                {
                    "source": 106,
                    "target": 433,
                    "label": "概念"
                }
                ,
                {
                    "source": 107,
                    "target": 434,
                    "label": "概念"
                }
                ,
                {
                    "source": 108,
                    "target": 435,
                    "label": "概念"
                }
                ,
                {
                    "source": 109,
                    "target": 436,
                    "label": "概念"
                }
                ,
                {
                    "source": 110,
                    "target": 437,
                    "label": "概念"
                }
                ,
                {
                    "source": 111,
                    "target": 438,
                    "label": "概念"
                }
                ,
                {
                    "source": 112,
                    "target": 439,
                    "label": "概念"
                }
                ,
                {
                    "source": 113,
                    "target": 440,
                    "label": "概念"
                }
                ,
                {
                    "source": 114,
                    "target": 441,
                    "label": "概念"
                }
                ,
                {
                    "source": 115,
                    "target": 442,
                    "label": "概念"
                }
                ,
                {
                    "source": 116,
                    "target": 443,
                    "label": "概念"
                }
                ,
                {
                    "source": 117,
                    "target": 444,
                    "label": "概念"
                }
                ,
                {
                    "source": 118,
                    "target": 445,
                    "label": "概念"
                }
                ,
                {
                    "source": 119,
                    "target": 446,
                    "label": "概念"
                }
                ,
                {
                    "source": 120,
                    "target": 447,
                    "label": "概念"
                }
                ,
                {
                    "source": 121,
                    "target": 448,
                    "label": "概念"
                }
                ,
                {
                    "source": 122,
                    "target": 449,
                    "label": "概念"
                }
                ,
                {
                    "source": 123,
                    "target": 450,
                    "label": "概念"
                }
                ,
                {
                    "source": 124,
                    "target": 451,
                    "label": "概念"
                }
                ,
                {
                    "source": 125,
                    "target": 452,
                    "label": "概念"
                }
                ,
                {
                    "source": 126,
                    "target": 453,
                    "label": "概念"
                }
                ,
                {
                    "source": 127,
                    "target": 454,
                    "label": "概念"
                }
                ,
                {
                    "source": 128,
                    "target": 455,
                    "label": "概念"
                }
                ,
                {
                    "source": 129,
                    "target": 456,
                    "label": "概念"
                }
                ,
                {
                    "source": 130,
                    "target": 457,
                    "label": "概念"
                }
                ,
                {
                    "source": 131,
                    "target": 458,
                    "label": "概念"
                }
                ,
                {
                    "source": 132,
                    "target": 459,
                    "label": "概念"
                }
                ,
                {
                    "source": 133,
                    "target": 460,
                    "label": "概念"
                }
                ,
                {
                    "source": 134,
                    "target": 461,
                    "label": "概念"
                }
                ,
                {
                    "source": 135,
                    "target": 462,
                    "label": "概念"
                }
                ,
                {
                    "source": 136,
                    "target": 463,
                    "label": "概念"
                }
                ,
                {
                    "source": 137,
                    "target": 464,
                    "label": "概念"
                }
                ,
                {
                    "source": 138,
                    "target": 465,
                    "label": "概念"
                }
                ,
                {
                    "source": 139,
                    "target": 466,
                    "label": "概念"
                }
                ,
                {
                    "source": 140,
                    "target": 467,
                    "label": "概念"
                }
                ,
                {
                    "source": 141,
                    "target": 468,
                    "label": "概念"
                }
                ,
                {
                    "source": 142,
                    "target": 469,
                    "label": "概念"
                }
                ,
                {
                    "source": 143,
                    "target": 470,
                    "label": "概念"
                }
                ,
                {
                    "source": 144,
                    "target": 471,
                    "label": "概念"
                }
                ,
                {
                    "source": 145,
                    "target": 472,
                    "label": "概念"
                }
                ,
                {
                    "source": 146,
                    "target": 473,
                    "label": "概念"
                }
                ,
                {
                    "source": 147,
                    "target": 474,
                    "label": "概念"
                }
                ,
                {
                    "source": 148,
                    "target": 475,
                    "label": "概念"
                }
                ,
                {
                    "source": 149,
                    "target": 476,
                    "label": "概念"
                }
                ,
                {
                    "source": 150,
                    "target": 477,
                    "label": "概念"
                }
                ,
                {
                    "source": 151,
                    "target": 478,
                    "label": "概念"
                }
                ,
                {
                    "source": 152,
                    "target": 479,
                    "label": "概念"
                }
                ,
                {
                    "source": 153,
                    "target": 480,
                    "label": "概念"
                }
                ,
                {
                    "source": 154,
                    "target": 481,
                    "label": "概念"
                }
                ,
                {
                    "source": 155,
                    "target": 482,
                    "label": "概念"
                }
                ,
                {
                    "source": 156,
                    "target": 483,
                    "label": "概念"
                }
                ,
                {
                    "source": 157,
                    "target": 484,
                    "label": "概念"
                }
                ,
                {
                    "source": 158,
                    "target": 485,
                    "label": "概念"
                }
                ,
                {
                    "source": 159,
                    "target": 486,
                    "label": "概念"
                }
                ,
                {
                    "source": 160,
                    "target": 487,
                    "label": "概念"
                }
                ,
                {
                    "source": 161,
                    "target": 488,
                    "label": "概念"
                }
                ,
                {
                    "source": 162,
                    "target": 489,
                    "label": "概念"
                }
                ,
                {
                    "source": 163,
                    "target": 490,
                    "label": "概念"
                }
                ,
                {
                    "source": 164,
                    "target": 491,
                    "label": "概念"
                }
                ,
                {
                    "source": 165,
                    "target": 492,
                    "label": "概念"
                }
                ,
                {
                    "source": 166,
                    "target": 493,
                    "label": "概念"
                }
                ,
                {
                    "source": 167,
                    "target": 494,
                    "label": "概念"
                }
                ,
                {
                    "source": 168,
                    "target": 495,
                    "label": "概念"
                }
                ,
                {
                    "source": 169,
                    "target": 496,
                    "label": "概念"
                }
                ,
                {
                    "source": 170,
                    "target": 497,
                    "label": "概念"
                }
                ,
                {
                    "source": 171,
                    "target": 498,
                    "label": "概念"
                }
                ,
                {
                    "source": 172,
                    "target": 499,
                    "label": "概念"
                }
                ,
                {
                    "source": 173,
                    "target": 500,
                    "label": "概念"
                }
                ,
                {
                    "source": 174,
                    "target": 501,
                    "label": "概念"
                }
                ,
                {
                    "source": 175,
                    "target": 502,
                    "label": "概念"
                }
                ,
                {
                    "source": 176,
                    "target": 503,
                    "label": "概念"
                }
                ,
                {
                    "source": 177,
                    "target": 504,
                    "label": "概念"
                }
                ,
                {
                    "source": 178,
                    "target": 505,
                    "label": "概念"
                }
                ,
                {
                    "source": 179,
                    "target": 506,
                    "label": "概念"
                }
                ,
                {
                    "source": 180,
                    "target": 507,
                    "label": "概念"
                }
                ,
                {
                    "source": 181,
                    "target": 508,
                    "label": "概念"
                }
                ,
                {
                    "source": 182,
                    "target": 509,
                    "label": "概念"
                }
                ,
                {
                    "source": 183,
                    "target": 510,
                    "label": "概念"
                }
                ,
                {
                    "source": 184,
                    "target": 511,
                    "label": "概念"
                }
                ,
                {
                    "source": 185,
                    "target": 512,
                    "label": "概念"
                }
                ,
                {
                    "source": 186,
                    "target": 513,
                    "label": "概念"
                }
                ,
                {
                    "source": 187,
                    "target": 514,
                    "label": "概念"
                }
                ,
                {
                    "source": 188,
                    "target": 515,
                    "label": "概念"
                }
                ,
                {
                    "source": 189,
                    "target": 516,
                    "label": "概念"
                }
                ,
                {
                    "source": 190,
                    "target": 517,
                    "label": "概念"
                }
                ,
                {
                    "source": 191,
                    "target": 518,
                    "label": "概念"
                }
                ,
                {
                    "source": 192,
                    "target": 519,
                    "label": "概念"
                }
                ,
                {
                    "source": 193,
                    "target": 520,
                    "label": "概念"
                }
                ,
                {
                    "source": 194,
                    "target": 521,
                    "label": "概念"
                }
                ,
                {
                    "source": 195,
                    "target": 522,
                    "label": "概念"
                }
                ,
                {
                    "source": 196,
                    "target": 523,
                    "label": "概念"
                }
                ,
                {
                    "source": 197,
                    "target": 524,
                    "label": "概念"
                }
                ,
                {
                    "source": 198,
                    "target": 525,
                    "label": "概念"
                }
                ,
                {
                    "source": 199,
                    "target": 526,
                    "label": "概念"
                }
                ,
                {
                    "source": 200,
                    "target": 527,
                    "label": "概念"
                }
                ,
                {
                    "source": 201,
                    "target": 528,
                    "label": "概念"
                }
                ,
                {
                    "source": 202,
                    "target": 529,
                    "label": "概念"
                }
                ,
                {
                    "source": 203,
                    "target": 530,
                    "label": "概念"
                }
                ,
                {
                    "source": 204,
                    "target": 531,
                    "label": "概念"
                }
                ,
                {
                    "source": 205,
                    "target": 532,
                    "label": "概念"
                }
                ,
                {
                    "source": 206,
                    "target": 533,
                    "label": "概念"
                }
                ,
                {
                    "source": 207,
                    "target": 534,
                    "label": "概念"
                }
                ,
                {
                    "source": 208,
                    "target": 535,
                    "label": "概念"
                }
                ,
                {
                    "source": 209,
                    "target": 536,
                    "label": "概念"
                }
                ,
                {
                    "source": 210,
                    "target": 537,
                    "label": "概念"
                }
                ,
                {
                    "source": 211,
                    "target": 538,
                    "label": "概念"
                }
                ,
                {
                    "source": 212,
                    "target": 539,
                    "label": "概念"
                }
                ,
                {
                    "source": 213,
                    "target": 540,
                    "label": "概念"
                }
                ,
                {
                    "source": 214,
                    "target": 541,
                    "label": "概念"
                }
                ,
                {
                    "source": 215,
                    "target": 542,
                    "label": "概念"
                }
                ,
                {
                    "source": 216,
                    "target": 543,
                    "label": "概念"
                }
                ,
                {
                    "source": 217,
                    "target": 544,
                    "label": "概念"
                }
                ,
                {
                    "source": 218,
                    "target": 545,
                    "label": "概念"
                }
                ,
                {
                    "source": 219,
                    "target": 546,
                    "label": "概念"
                }
                ,
                {
                    "source": 220,
                    "target": 547,
                    "label": "概念"
                }
                ,
                {
                    "source": 221,
                    "target": 548,
                    "label": "概念"
                }
                ,
                {
                    "source": 222,
                    "target": 549,
                    "label": "概念"
                }
                ,
                {
                    "source": 223,
                    "target": 550,
                    "label": "概念"
                }
                ,
                {
                    "source": 224,
                    "target": 551,
                    "label": "概念"
                }
                ,
                {
                    "source": 225,
                    "target": 552,
                    "label": "概念"
                }
                ,
                {
                    "source": 226,
                    "target": 553,
                    "label": "概念"
                }
                ,
                {
                    "source": 227,
                    "target": 554,
                    "label": "概念"
                }
                ,
                {
                    "source": 228,
                    "target": 555,
                    "label": "概念"
                }
                ,
                {
                    "source": 229,
                    "target": 556,
                    "label": "概念"
                }
                ,
                {
                    "source": 230,
                    "target": 557,
                    "label": "概念"
                }
                ,
                {
                    "source": 231,
                    "target": 558,
                    "label": "概念"
                }
                ,
                {
                    "source": 232,
                    "target": 559,
                    "label": "概念"
                }
                ,
                {
                    "source": 233,
                    "target": 560,
                    "label": "概念"
                }
                ,
                {
                    "source": 234,
                    "target": 561,
                    "label": "概念"
                }
                ,
                {
                    "source": 235,
                    "target": 562,
                    "label": "概念"
                }
                ,
                {
                    "source": 236,
                    "target": 563,
                    "label": "概念"
                }
                ,
                {
                    "source": 237,
                    "target": 564,
                    "label": "概念"
                }
                ,
                {
                    "source": 238,
                    "target": 565,
                    "label": "概念"
                }
                ,
                {
                    "source": 239,
                    "target": 566,
                    "label": "概念"
                }
                ,
                {
                    "source": 240,
                    "target": 567,
                    "label": "概念"
                }
                ,
                {
                    "source": 241,
                    "target": 568,
                    "label": "概念"
                }
                ,
                {
                    "source": 242,
                    "target": 569,
                    "label": "概念"
                }
                ,
                {
                    "source": 243,
                    "target": 570,
                    "label": "概念"
                }
                ,
                {
                    "source": 244,
                    "target": 571,
                    "label": "概念"
                }
                ,
                {
                    "source": 245,
                    "target": 572,
                    "label": "概念"
                }
                ,
                {
                    "source": 246,
                    "target": 573,
                    "label": "概念"
                }
                ,
                {
                    "source": 247,
                    "target": 574,
                    "label": "概念"
                }
                ,
                {
                    "source": 248,
                    "target": 575,
                    "label": "概念"
                }
                ,
                {
                    "source": 249,
                    "target": 576,
                    "label": "概念"
                }
                ,
                {
                    "source": 250,
                    "target": 577,
                    "label": "概念"
                }
                ,
                {
                    "source": 251,
                    "target": 578,
                    "label": "概念"
                }
                ,
                {
                    "source": 252,
                    "target": 579,
                    "label": "概念"
                }
                ,
                {
                    "source": 253,
                    "target": 580,
                    "label": "概念"
                }
                ,
                {
                    "source": 254,
                    "target": 581,
                    "label": "概念"
                }
                ,
                {
                    "source": 255,
                    "target": 582,
                    "label": "概念"
                }
                ,
                {
                    "source": 256,
                    "target": 583,
                    "label": "概念"
                }
                ,
                {
                    "source": 257,
                    "target": 584,
                    "label": "概念"
                }
                ,
                {
                    "source": 258,
                    "target": 585,
                    "label": "概念"
                }
                ,
                {
                    "source": 259,
                    "target": 586,
                    "label": "概念"
                }
                ,
                {
                    "source": 260,
                    "target": 587,
                    "label": "概念"
                }
                ,
                {
                    "source": 261,
                    "target": 588,
                    "label": "概念"
                }
                ,
                {
                    "source": 262,
                    "target": 589,
                    "label": "概念"
                }
                ,
                {
                    "source": 263,
                    "target": 590,
                    "label": "概念"
                }
                ,
                {
                    "source": 264,
                    "target": 591,
                    "label": "概念"
                }
                ,
                {
                    "source": 265,
                    "target": 592,
                    "label": "概念"
                }
                ,
                {
                    "source": 266,
                    "target": 593,
                    "label": "概念"
                }
                ,
                {
                    "source": 267,
                    "target": 594,
                    "label": "概念"
                }
                ,
                {
                    "source": 268,
                    "target": 595,
                    "label": "概念"
                }
                ,
                {
                    "source": 269,
                    "target": 596,
                    "label": "概念"
                }
                ,
                {
                    "source": 270,
                    "target": 597,
                    "label": "概念"
                }
                ,
                {
                    "source": 271,
                    "target": 598,
                    "label": "概念"
                }
                ,
                {
                    "source": 272,
                    "target": 599,
                    "label": "概念"
                }
                ,
                {
                    "source": 273,
                    "target": 600,
                    "label": "概念"
                }
                ,
                {
                    "source": 274,
                    "target": 601,
                    "label": "概念"
                }
                ,
                {
                    "source": 275,
                    "target": 602,
                    "label": "概念"
                }
                ,
                {
                    "source": 276,
                    "target": 603,
                    "label": "概念"
                }
                ,
                {
                    "source": 277,
                    "target": 604,
                    "label": "概念"
                }
                ,
                {
                    "source": 278,
                    "target": 605,
                    "label": "概念"
                }
                ,
                {
                    "source": 279,
                    "target": 606,
                    "label": "概念"
                }
                ,
                {
                    "source": 280,
                    "target": 607,
                    "label": "概念"
                }
                ,
                {
                    "source": 281,
                    "target": 608,
                    "label": "概念"
                }
                ,
                {
                    "source": 282,
                    "target": 609,
                    "label": "概念"
                }
                ,
                {
                    "source": 283,
                    "target": 610,
                    "label": "概念"
                }
                ,
                {
                    "source": 284,
                    "target": 611,
                    "label": "概念"
                }
                ,
                {
                    "source": 285,
                    "target": 612,
                    "label": "概念"
                }
                ,
                {
                    "source": 286,
                    "target": 613,
                    "label": "概念"
                }
                ,
                {
                    "source": 287,
                    "target": 614,
                    "label": "概念"
                }
                ,
                {
                    "source": 288,
                    "target": 615,
                    "label": "概念"
                }
                ,
                {
                    "source": 289,
                    "target": 616,
                    "label": "概念"
                }
                ,
                {
                    "source": 290,
                    "target": 617,
                    "label": "概念"
                }
                ,
                {
                    "source": 291,
                    "target": 618,
                    "label": "概念"
                }
                ,
                {
                    "source": 292,
                    "target": 619,
                    "label": "概念"
                }
                ,
                {
                    "source": 293,
                    "target": 620,
                    "label": "概念"
                }
                ,
                {
                    "source": 294,
                    "target": 621,
                    "label": "概念"
                }
                ,
                {
                    "source": 295,
                    "target": 622,
                    "label": "概念"
                }
                ,
                {
                    "source": 296,
                    "target": 623,
                    "label": "概念"
                }
                ,
                {
                    "source": 297,
                    "target": 624,
                    "label": "概念"
                }
                ,
                {
                    "source": 298,
                    "target": 625,
                    "label": "概念"
                }
                ,
                {
                    "source": 299,
                    "target": 626,
                    "label": "概念"
                }
                ,
                {
                    "source": 300,
                    "target": 627,
                    "label": "概念"
                }
                ,
                {
                    "source": 301,
                    "target": 628,
                    "label": "概念"
                }
                ,
                {
                    "source": 302,
                    "target": 629,
                    "label": "概念"
                }
                ,
                {
                    "source": 303,
                    "target": 630,
                    "label": "概念"
                }
                ,
                {
                    "source": 304,
                    "target": 631,
                    "label": "概念"
                }
                ,
                {
                    "source": 305,
                    "target": 632,
                    "label": "概念"
                }
                ,
                {
                    "source": 306,
                    "target": 633,
                    "label": "概念"
                }
                ,
                {
                    "source": 307,
                    "target": 634,
                    "label": "概念"
                }
                ,
                {
                    "source": 308,
                    "target": 635,
                    "label": "概念"
                }
                ,
                {
                    "source": 309,
                    "target": 636,
                    "label": "概念"
                }
                ,
                {
                    "source": 310,
                    "target": 637,
                    "label": "概念"
                }
                ,
                {
                    "source": 311,
                    "target": 638,
                    "label": "概念"
                }
                ,
                {
                    "source": 312,
                    "target": 639,
                    "label": "概念"
                }
                ,
                {
                    "source": 313,
                    "target": 640,
                    "label": "概念"
                }
                ,
                {
                    "source": 314,
                    "target": 641,
                    "label": "概念"
                }
                ,
                {
                    "source": 315,
                    "target": 642,
                    "label": "概念"
                }
                ,
                {
                    "source": 316,
                    "target": 643,
                    "label": "概念"
                }
                ,
                {
                    "source": 317,
                    "target": 644,
                    "label": "概念"
                }
                ,
                {
                    "source": 318,
                    "target": 645,
                    "label": "概念"
                }
                ,
                {
                    "source": 319,
                    "target": 646,
                    "label": "概念"
                }
                ,
                {
                    "source": 320,
                    "target": 647,
                    "label": "概念"
                }
                ,
                {
                    "source": 321,
                    "target": 648,
                    "label": "概念"
                }
                ,
                {
                    "source": 322,
                    "target": 649,
                    "label": "概念"
                }
                ,
                {
                    "source": 323,
                    "target": 650,
                    "label": "概念"
                }
                ,
                {
                    "source": 324,
                    "target": 651,
                    "label": "概念"
                }
                ,
                {
                    "source": 325,
                    "target": 652,
                    "label": "概念"
                }
                ,
                {
                    "source": 326,
                    "target": 653,
                    "label": "概念"
                }
                ,
                {
                    "source": 327,
                    "target": 654,
                    "label": "概念"
                }
                ,
                {
                    "source": 1,
                    "target": 2,
                    "label": "包括"
                }
                ,
                {
                    "source": 2,
                    "target": 3,
                    "label": "包括"
                }
                ,
                {
                    "source": 3,
                    "target": 4,
                    "label": "包括"
                }
                ,
                {
                    "source": 3,
                    "target": 5,
                    "label": "包括"
                }
                ,
                {
                    "source": 3,
                    "target": 6,
                    "label": "包括"
                }
                ,
                {
                    "source": 3,
                    "target": 7,
                    "label": "包括"
                }
                ,
                {
                    "source": 3,
                    "target": 8,
                    "label": "包括"
                }
                ,
                {
                    "source": 2,
                    "target": 9,
                    "label": "包括"
                }
                ,
                {
                    "source": 9,
                    "target": 10,
                    "label": "包括"
                }
                ,
                {
                    "source": 10,
                    "target": 11,
                    "label": "包括"
                }
                ,
                {
                    "source": 10,
                    "target": 12,
                    "label": "包括"
                }
                ,
                {
                    "source": 10,
                    "target": 13,
                    "label": "包括"
                }
                ,
                {
                    "source": 9,
                    "target": 14,
                    "label": "包括"
                }
                ,
                {
                    "source": 9,
                    "target": 15,
                    "label": "包括"
                }
                ,
                {
                    "source": 15,
                    "target": 16,
                    "label": "包括"
                }
                ,
                {
                    "source": 15,
                    "target": 17,
                    "label": "包括"
                }
                ,
                {
                    "source": 15,
                    "target": 18,
                    "label": "包括"
                }
                ,
                {
                    "source": 15,
                    "target": 19,
                    "label": "包括"
                }
                ,
                {
                    "source": 15,
                    "target": 20,
                    "label": "包括"
                }
                ,
                {
                    "source": 9,
                    "target": 21,
                    "label": "包括"
                }
                ,
                {
                    "source": 9,
                    "target": 22,
                    "label": "包括"
                }
                ,
                {
                    "source": 9,
                    "target": 23,
                    "label": "包括"
                }
                ,
                {
                    "source": 23,
                    "target": 24,
                    "label": "包括"
                }
                ,
                {
                    "source": 23,
                    "target": 25,
                    "label": "包括"
                }
                ,
                {
                    "source": 25,
                    "target": 26,
                    "label": "包括"
                }
                ,
                {
                    "source": 25,
                    "target": 27,
                    "label": "包括"
                }
                ,
                {
                    "source": 25,
                    "target": 28,
                    "label": "包括"
                }
                ,
                {
                    "source": 23,
                    "target": 29,
                    "label": "包括"
                }
                ,
                {
                    "source": 29,
                    "target": 30,
                    "label": "包括"
                }
                ,
                {
                    "source": 29,
                    "target": 31,
                    "label": "包括"
                }
                ,
                {
                    "source": 29,
                    "target": 32,
                    "label": "包括"
                }
                ,
                {
                    "source": 29,
                    "target": 33,
                    "label": "包括"
                }
                ,
                {
                    "source": 23,
                    "target": 34,
                    "label": "包括"
                }
                ,
                {
                    "source": 34,
                    "target": 35,
                    "label": "包括"
                }
                ,
                {
                    "source": 34,
                    "target": 36,
                    "label": "包括"
                }
                ,
                {
                    "source": 34,
                    "target": 37,
                    "label": "包括"
                }
                ,
                {
                    "source": 34,
                    "target": 38,
                    "label": "包括"
                }
                ,
                {
                    "source": 9,
                    "target": 39,
                    "label": "包括"
                }
                ,
                {
                    "source": 39,
                    "target": 40,
                    "label": "包括"
                }
                ,
                {
                    "source": 39,
                    "target": 41,
                    "label": "包括"
                }
                ,
                {
                    "source": 2,
                    "target": 42,
                    "label": "包括"
                }
                ,
                {
                    "source": 42,
                    "target": 43,
                    "label": "包括"
                }
                ,
                {
                    "source": 42,
                    "target": 44,
                    "label": "包括"
                }
                ,
                {
                    "source": 42,
                    "target": 45,
                    "label": "包括"
                }
                ,
                {
                    "source": 42,
                    "target": 46,
                    "label": "包括"
                }
                ,
                {
                    "source": 46,
                    "target": 47,
                    "label": "包括"
                }
                ,
                {
                    "source": 46,
                    "target": 48,
                    "label": "包括"
                }
                ,
                {
                    "source": 46,
                    "target": 49,
                    "label": "包括"
                }
                ,
                {
                    "source": 46,
                    "target": 50,
                    "label": "包括"
                }
                ,
                {
                    "source": 46,
                    "target": 51,
                    "label": "包括"
                }
                ,
                {
                    "source": 46,
                    "target": 52,
                    "label": "包括"
                }
                ,
                {
                    "source": 42,
                    "target": 53,
                    "label": "包括"
                }
                ,
                {
                    "source": 53,
                    "target": 54,
                    "label": "包括"
                }
                ,
                {
                    "source": 53,
                    "target": 55,
                    "label": "包括"
                }
                ,
                {
                    "source": 53,
                    "target": 56,
                    "label": "包括"
                }
                ,
                {
                    "source": 53,
                    "target": 57,
                    "label": "包括"
                }
                ,
                {
                    "source": 2,
                    "target": 58,
                    "label": "包括"
                }
                ,
                {
                    "source": 58,
                    "target": 59,
                    "label": "包括"
                }
                ,
                {
                    "source": 59,
                    "target": 60,
                    "label": "包括"
                }
                ,
                {
                    "source": 59,
                    "target": 61,
                    "label": "包括"
                }
                ,
                {
                    "source": 58,
                    "target": 62,
                    "label": "包括"
                }
                ,
                {
                    "source": 62,
                    "target": 63,
                    "label": "包括"
                }
                ,
                {
                    "source": 62,
                    "target": 64,
                    "label": "包括"
                }
                ,
                {
                    "source": 62,
                    "target": 65,
                    "label": "包括"
                }
                ,
                {
                    "source": 62,
                    "target": 66,
                    "label": "包括"
                }
                ,
                {
                    "source": 58,
                    "target": 67,
                    "label": "包括"
                }
                ,
                {
                    "source": 67,
                    "target": 68,
                    "label": "包括"
                }
                ,
                {
                    "source": 67,
                    "target": 69,
                    "label": "包括"
                }
                ,
                {
                    "source": 67,
                    "target": 70,
                    "label": "包括"
                }
                ,
                {
                    "source": 67,
                    "target": 71,
                    "label": "包括"
                }
                ,
                {
                    "source": 67,
                    "target": 72,
                    "label": "包括"
                }
                ,
                {
                    "source": 67,
                    "target": 73,
                    "label": "包括"
                }
                ,
                {
                    "source": 73,
                    "target": 74,
                    "label": "包括"
                }
                ,
                {
                    "source": 73,
                    "target": 75,
                    "label": "包括"
                }
                ,
                {
                    "source": 73,
                    "target": 76,
                    "label": "包括"
                }
                ,
                {
                    "source": 73,
                    "target": 77,
                    "label": "包括"
                }
                ,
                {
                    "source": 73,
                    "target": 78,
                    "label": "包括"
                }
                ,
                {
                    "source": 73,
                    "target": 79,
                    "label": "包括"
                }
                ,
                {
                    "source": 73,
                    "target": 80,
                    "label": "包括"
                }
                ,
                {
                    "source": 73,
                    "target": 81,
                    "label": "包括"
                }
                ,
                {
                    "source": 1,
                    "target": 82,
                    "label": "包括"
                }
                ,
                {
                    "source": 82,
                    "target": 83,
                    "label": "包括"
                }
                ,
                {
                    "source": 83,
                    "target": 84,
                    "label": "包括"
                }
                ,
                {
                    "source": 83,
                    "target": 85,
                    "label": "包括"
                }
                ,
                {
                    "source": 83,
                    "target": 86,
                    "label": "包括"
                }
                ,
                {
                    "source": 83,
                    "target": 87,
                    "label": "包括"
                }
                ,
                {
                    "source": 83,
                    "target": 88,
                    "label": "包括"
                }
                ,
                {
                    "source": 82,
                    "target": 89,
                    "label": "包括"
                }
                ,
                {
                    "source": 89,
                    "target": 90,
                    "label": "包括"
                }
                ,
                {
                    "source": 89,
                    "target": 91,
                    "label": "包括"
                }
                ,
                {
                    "source": 89,
                    "target": 92,
                    "label": "包括"
                }
                ,
                {
                    "source": 89,
                    "target": 93,
                    "label": "包括"
                }
                ,
                {
                    "source": 82,
                    "target": 94,
                    "label": "包括"
                }
                ,
                {
                    "source": 94,
                    "target": 95,
                    "label": "包括"
                }
                ,
                {
                    "source": 94,
                    "target": 96,
                    "label": "包括"
                }
                ,
                {
                    "source": 94,
                    "target": 97,
                    "label": "包括"
                }
                ,
                {
                    "source": 82,
                    "target": 98,
                    "label": "包括"
                }
                ,
                {
                    "source": 98,
                    "target": 99,
                    "label": "包括"
                }
                ,
                {
                    "source": 99,
                    "target": 100,
                    "label": "包括"
                }
                ,
                {
                    "source": 99,
                    "target": 101,
                    "label": "包括"
                }
                ,
                {
                    "source": 99,
                    "target": 102,
                    "label": "包括"
                }
                ,
                {
                    "source": 99,
                    "target": 103,
                    "label": "包括"
                }
                ,
                {
                    "source": 99,
                    "target": 104,
                    "label": "包括"
                }
                ,
                {
                    "source": 98,
                    "target": 105,
                    "label": "包括"
                }
                ,
                {
                    "source": 105,
                    "target": 106,
                    "label": "包括"
                }
                ,
                {
                    "source": 105,
                    "target": 107,
                    "label": "包括"
                }
                ,
                {
                    "source": 98,
                    "target": 108,
                    "label": "包括"
                }
                ,
                {
                    "source": 108,
                    "target": 109,
                    "label": "包括"
                }
                ,
                {
                    "source": 108,
                    "target": 110,
                    "label": "包括"
                }
                ,
                {
                    "source": 108,
                    "target": 111,
                    "label": "包括"
                }
                ,
                {
                    "source": 108,
                    "target": 112,
                    "label": "包括"
                }
                ,
                {
                    "source": 82,
                    "target": 113,
                    "label": "包括"
                }
                ,
                {
                    "source": 113,
                    "target": 114,
                    "label": "包括"
                }
                ,
                {
                    "source": 113,
                    "target": 115,
                    "label": "包括"
                }
                ,
                {
                    "source": 113,
                    "target": 116,
                    "label": "包括"
                }
                ,
                {
                    "source": 113,
                    "target": 117,
                    "label": "包括"
                }
                ,
                {
                    "source": 113,
                    "target": 118,
                    "label": "包括"
                }
                ,
                {
                    "source": 113,
                    "target": 119,
                    "label": "包括"
                }
                ,
                {
                    "source": 1,
                    "target": 120,
                    "label": "包括"
                }
                ,
                {
                    "source": 120,
                    "target": 121,
                    "label": "包括"
                }
                ,
                {
                    "source": 121,
                    "target": 122,
                    "label": "包括"
                }
                ,
                {
                    "source": 121,
                    "target": 123,
                    "label": "包括"
                }
                ,
                {
                    "source": 121,
                    "target": 124,
                    "label": "包括"
                }
                ,
                {
                    "source": 124,
                    "target": 125,
                    "label": "包括"
                }
                ,
                {
                    "source": 124,
                    "target": 126,
                    "label": "包括"
                }
                ,
                {
                    "source": 124,
                    "target": 127,
                    "label": "包括"
                }
                ,
                {
                    "source": 124,
                    "target": 128,
                    "label": "包括"
                }
                ,
                {
                    "source": 121,
                    "target": 129,
                    "label": "包括"
                }
                ,
                {
                    "source": 121,
                    "target": 130,
                    "label": "包括"
                }
                ,
                {
                    "source": 120,
                    "target": 131,
                    "label": "包括"
                }
                ,
                {
                    "source": 131,
                    "target": 132,
                    "label": "包括"
                }
                ,
                {
                    "source": 131,
                    "target": 133,
                    "label": "包括"
                }
                ,
                {
                    "source": 131,
                    "target": 134,
                    "label": "包括"
                }
                ,
                {
                    "source": 134,
                    "target": 135,
                    "label": "包括"
                }
                ,
                {
                    "source": 134,
                    "target": 136,
                    "label": "包括"
                }
                ,
                {
                    "source": 134,
                    "target": 137,
                    "label": "包括"
                }
                ,
                {
                    "source": 134,
                    "target": 138,
                    "label": "包括"
                }
                ,
                {
                    "source": 134,
                    "target": 139,
                    "label": "包括"
                }
                ,
                {
                    "source": 131,
                    "target": 140,
                    "label": "包括"
                }
                ,
                {
                    "source": 131,
                    "target": 141,
                    "label": "包括"
                }
                ,
                {
                    "source": 120,
                    "target": 142,
                    "label": "包括"
                }
                ,
                {
                    "source": 142,
                    "target": 143,
                    "label": "包括"
                }
                ,
                {
                    "source": 142,
                    "target": 144,
                    "label": "包括"
                }
                ,
                {
                    "source": 142,
                    "target": 145,
                    "label": "包括"
                }
                ,
                {
                    "source": 145,
                    "target": 146,
                    "label": "包括"
                }
                ,
                {
                    "source": 145,
                    "target": 147,
                    "label": "包括"
                }
                ,
                {
                    "source": 145,
                    "target": 148,
                    "label": "包括"
                }
                ,
                {
                    "source": 145,
                    "target": 149,
                    "label": "包括"
                }
                ,
                {
                    "source": 145,
                    "target": 150,
                    "label": "包括"
                }
                ,
                {
                    "source": 142,
                    "target": 151,
                    "label": "包括"
                }
                ,
                {
                    "source": 142,
                    "target": 152,
                    "label": "包括"
                }
                ,
                {
                    "source": 120,
                    "target": 153,
                    "label": "包括"
                }
                ,
                {
                    "source": 153,
                    "target": 154,
                    "label": "包括"
                }
                ,
                {
                    "source": 153,
                    "target": 155,
                    "label": "包括"
                }
                ,
                {
                    "source": 153,
                    "target": 156,
                    "label": "包括"
                }
                ,
                {
                    "source": 156,
                    "target": 157,
                    "label": "包括"
                }
                ,
                {
                    "source": 156,
                    "target": 158,
                    "label": "包括"
                }
                ,
                {
                    "source": 156,
                    "target": 159,
                    "label": "包括"
                }
                ,
                {
                    "source": 156,
                    "target": 160,
                    "label": "包括"
                }
                ,
                {
                    "source": 156,
                    "target": 161,
                    "label": "包括"
                }
                ,
                {
                    "source": 156,
                    "target": 162,
                    "label": "包括"
                }
                ,
                {
                    "source": 156,
                    "target": 163,
                    "label": "包括"
                }
                ,
                {
                    "source": 153,
                    "target": 164,
                    "label": "包括"
                }
                ,
                {
                    "source": 153,
                    "target": 165,
                    "label": "包括"
                }
                ,
                {
                    "source": 120,
                    "target": 166,
                    "label": "包括"
                }
                ,
                {
                    "source": 166,
                    "target": 167,
                    "label": "包括"
                }
                ,
                {
                    "source": 166,
                    "target": 168,
                    "label": "包括"
                }
                ,
                {
                    "source": 166,
                    "target": 169,
                    "label": "包括"
                }
                ,
                {
                    "source": 169,
                    "target": 170,
                    "label": "包括"
                }
                ,
                {
                    "source": 169,
                    "target": 171,
                    "label": "包括"
                }
                ,
                {
                    "source": 169,
                    "target": 172,
                    "label": "包括"
                }
                ,
                {
                    "source": 169,
                    "target": 173,
                    "label": "包括"
                }
                ,
                {
                    "source": 169,
                    "target": 174,
                    "label": "包括"
                }
                ,
                {
                    "source": 169,
                    "target": 175,
                    "label": "包括"
                }
                ,
                {
                    "source": 169,
                    "target": 176,
                    "label": "包括"
                }
                ,
                {
                    "source": 169,
                    "target": 177,
                    "label": "包括"
                }
                ,
                {
                    "source": 169,
                    "target": 178,
                    "label": "包括"
                }
                ,
                {
                    "source": 166,
                    "target": 179,
                    "label": "包括"
                }
                ,
                {
                    "source": 166,
                    "target": 180,
                    "label": "包括"
                }
                ,
                {
                    "source": 120,
                    "target": 181,
                    "label": "包括"
                }
                ,
                {
                    "source": 181,
                    "target": 182,
                    "label": "包括"
                }
                ,
                {
                    "source": 181,
                    "target": 183,
                    "label": "包括"
                }
                ,
                {
                    "source": 181,
                    "target": 184,
                    "label": "包括"
                }
                ,
                {
                    "source": 184,
                    "target": 185,
                    "label": "包括"
                }
                ,
                {
                    "source": 184,
                    "target": 186,
                    "label": "包括"
                }
                ,
                {
                    "source": 181,
                    "target": 187,
                    "label": "包括"
                }
                ,
                {
                    "source": 181,
                    "target": 188,
                    "label": "包括"
                }
                ,
                {
                    "source": 120,
                    "target": 189,
                    "label": "包括"
                }
                ,
                {
                    "source": 189,
                    "target": 190,
                    "label": "包括"
                }
                ,
                {
                    "source": 189,
                    "target": 191,
                    "label": "包括"
                }
                ,
                {
                    "source": 189,
                    "target": 192,
                    "label": "包括"
                }
                ,
                {
                    "source": 192,
                    "target": 193,
                    "label": "包括"
                }
                ,
                {
                    "source": 192,
                    "target": 194,
                    "label": "包括"
                }
                ,
                {
                    "source": 192,
                    "target": 195,
                    "label": "包括"
                }
                ,
                {
                    "source": 192,
                    "target": 196,
                    "label": "包括"
                }
                ,
                {
                    "source": 189,
                    "target": 197,
                    "label": "包括"
                }
                ,
                {
                    "source": 189,
                    "target": 198,
                    "label": "包括"
                }
                ,
                {
                    "source": 120,
                    "target": 199,
                    "label": "包括"
                }
                ,
                {
                    "source": 199,
                    "target": 200,
                    "label": "包括"
                }
                ,
                {
                    "source": 199,
                    "target": 201,
                    "label": "包括"
                }
                ,
                {
                    "source": 199,
                    "target": 202,
                    "label": "包括"
                }
                ,
                {
                    "source": 202,
                    "target": 203,
                    "label": "包括"
                }
                ,
                {
                    "source": 202,
                    "target": 204,
                    "label": "包括"
                }
                ,
                {
                    "source": 202,
                    "target": 205,
                    "label": "包括"
                }
                ,
                {
                    "source": 202,
                    "target": 206,
                    "label": "包括"
                }
                ,
                {
                    "source": 202,
                    "target": 207,
                    "label": "包括"
                }
                ,
                {
                    "source": 202,
                    "target": 208,
                    "label": "包括"
                }
                ,
                {
                    "source": 202,
                    "target": 209,
                    "label": "包括"
                }
                ,
                {
                    "source": 120,
                    "target": 210,
                    "label": "包括"
                }
                ,
                {
                    "source": 210,
                    "target": 211,
                    "label": "包括"
                }
                ,
                {
                    "source": 210,
                    "target": 212,
                    "label": "包括"
                }
                ,
                {
                    "source": 210,
                    "target": 213,
                    "label": "包括"
                }
                ,
                {
                    "source": 213,
                    "target": 214,
                    "label": "包括"
                }
                ,
                {
                    "source": 213,
                    "target": 215,
                    "label": "包括"
                }
                ,
                {
                    "source": 213,
                    "target": 216,
                    "label": "包括"
                }
                ,
                {
                    "source": 213,
                    "target": 217,
                    "label": "包括"
                }
                ,
                {
                    "source": 213,
                    "target": 218,
                    "label": "包括"
                }
                ,
                {
                    "source": 210,
                    "target": 219,
                    "label": "包括"
                }
                ,
                {
                    "source": 210,
                    "target": 220,
                    "label": "包括"
                }
                ,
                {
                    "source": 120,
                    "target": 221,
                    "label": "包括"
                }
                ,
                {
                    "source": 221,
                    "target": 222,
                    "label": "包括"
                }
                ,
                {
                    "source": 221,
                    "target": 223,
                    "label": "包括"
                }
                ,
                {
                    "source": 221,
                    "target": 224,
                    "label": "包括"
                }
                ,
                {
                    "source": 224,
                    "target": 225,
                    "label": "包括"
                }
                ,
                {
                    "source": 224,
                    "target": 226,
                    "label": "包括"
                }
                ,
                {
                    "source": 224,
                    "target": 227,
                    "label": "包括"
                }
                ,
                {
                    "source": 224,
                    "target": 228,
                    "label": "包括"
                }
                ,
                {
                    "source": 224,
                    "target": 229,
                    "label": "包括"
                }
                ,
                {
                    "source": 221,
                    "target": 230,
                    "label": "包括"
                }
                ,
                {
                    "source": 221,
                    "target": 231,
                    "label": "包括"
                }
                ,
                {
                    "source": 120,
                    "target": 232,
                    "label": "包括"
                }
                ,
                {
                    "source": 232,
                    "target": 233,
                    "label": "包括"
                }
                ,
                {
                    "source": 232,
                    "target": 234,
                    "label": "包括"
                }
                ,
                {
                    "source": 232,
                    "target": 235,
                    "label": "包括"
                }
                ,
                {
                    "source": 235,
                    "target": 236,
                    "label": "包括"
                }
                ,
                {
                    "source": 235,
                    "target": 237,
                    "label": "包括"
                }
                ,
                {
                    "source": 235,
                    "target": 238,
                    "label": "包括"
                }
                ,
                {
                    "source": 235,
                    "target": 239,
                    "label": "包括"
                }
                ,
                {
                    "source": 235,
                    "target": 240,
                    "label": "包括"
                }
                ,
                {
                    "source": 232,
                    "target": 241,
                    "label": "包括"
                }
                ,
                {
                    "source": 232,
                    "target": 242,
                    "label": "包括"
                }
                ,
                {
                    "source": 120,
                    "target": 243,
                    "label": "包括"
                }
                ,
                {
                    "source": 243,
                    "target": 244,
                    "label": "包括"
                }
                ,
                {
                    "source": 243,
                    "target": 245,
                    "label": "包括"
                }
                ,
                {
                    "source": 243,
                    "target": 246,
                    "label": "包括"
                }
                ,
                {
                    "source": 246,
                    "target": 247,
                    "label": "包括"
                }
                ,
                {
                    "source": 246,
                    "target": 248,
                    "label": "包括"
                }
                ,
                {
                    "source": 246,
                    "target": 249,
                    "label": "包括"
                }
                ,
                {
                    "source": 243,
                    "target": 250,
                    "label": "包括"
                }
                ,
                {
                    "source": 243,
                    "target": 251,
                    "label": "包括"
                }
                ,
                {
                    "source": 120,
                    "target": 252,
                    "label": "包括"
                }
                ,
                {
                    "source": 252,
                    "target": 253,
                    "label": "包括"
                }
                ,
                {
                    "source": 252,
                    "target": 254,
                    "label": "包括"
                }
                ,
                {
                    "source": 252,
                    "target": 255,
                    "label": "包括"
                }
                ,
                {
                    "source": 255,
                    "target": 256,
                    "label": "包括"
                }
                ,
                {
                    "source": 255,
                    "target": 257,
                    "label": "包括"
                }
                ,
                {
                    "source": 255,
                    "target": 258,
                    "label": "包括"
                }
                ,
                {
                    "source": 255,
                    "target": 259,
                    "label": "包括"
                }
                ,
                {
                    "source": 255,
                    "target": 260,
                    "label": "包括"
                }
                ,
                {
                    "source": 255,
                    "target": 261,
                    "label": "包括"
                }
                ,
                {
                    "source": 252,
                    "target": 262,
                    "label": "包括"
                }
                ,
                {
                    "source": 252,
                    "target": 263,
                    "label": "包括"
                }
                ,
                {
                    "source": 120,
                    "target": 264,
                    "label": "包括"
                }
                ,
                {
                    "source": 264,
                    "target": 265,
                    "label": "包括"
                }
                ,
                {
                    "source": 264,
                    "target": 266,
                    "label": "包括"
                }
                ,
                {
                    "source": 264,
                    "target": 267,
                    "label": "包括"
                }
                ,
                {
                    "source": 264,
                    "target": 268,
                    "label": "包括"
                }
                ,
                {
                    "source": 268,
                    "target": 269,
                    "label": "包括"
                }
                ,
                {
                    "source": 268,
                    "target": 270,
                    "label": "包括"
                }
                ,
                {
                    "source": 268,
                    "target": 271,
                    "label": "包括"
                }
                ,
                {
                    "source": 268,
                    "target": 272,
                    "label": "包括"
                }
                ,
                {
                    "source": 268,
                    "target": 273,
                    "label": "包括"
                }
                ,
                {
                    "source": 264,
                    "target": 274,
                    "label": "包括"
                }
                ,
                {
                    "source": 264,
                    "target": 275,
                    "label": "包括"
                }
                ,
                {
                    "source": 120,
                    "target": 276,
                    "label": "包括"
                }
                ,
                {
                    "source": 276,
                    "target": 277,
                    "label": "包括"
                }
                ,
                {
                    "source": 276,
                    "target": 278,
                    "label": "包括"
                }
                ,
                {
                    "source": 276,
                    "target": 279,
                    "label": "包括"
                }
                ,
                {
                    "source": 276,
                    "target": 280,
                    "label": "包括"
                }
                ,
                {
                    "source": 280,
                    "target": 281,
                    "label": "包括"
                }
                ,
                {
                    "source": 280,
                    "target": 282,
                    "label": "包括"
                }
                ,
                {
                    "source": 280,
                    "target": 283,
                    "label": "包括"
                }
                ,
                {
                    "source": 280,
                    "target": 284,
                    "label": "包括"
                }
                ,
                {
                    "source": 280,
                    "target": 285,
                    "label": "包括"
                }
                ,
                {
                    "source": 280,
                    "target": 286,
                    "label": "包括"
                }
                ,
                {
                    "source": 280,
                    "target": 287,
                    "label": "包括"
                }
                ,
                {
                    "source": 280,
                    "target": 288,
                    "label": "包括"
                }
                ,
                {
                    "source": 280,
                    "target": 289,
                    "label": "包括"
                }
                ,
                {
                    "source": 276,
                    "target": 290,
                    "label": "包括"
                }
                ,
                {
                    "source": 276,
                    "target": 291,
                    "label": "包括"
                }
                ,
                {
                    "source": 120,
                    "target": 292,
                    "label": "包括"
                }
                ,
                {
                    "source": 292,
                    "target": 293,
                    "label": "包括"
                }
                ,
                {
                    "source": 292,
                    "target": 294,
                    "label": "包括"
                }
                ,
                {
                    "source": 292,
                    "target": 295,
                    "label": "包括"
                }
                ,
                {
                    "source": 292,
                    "target": 296,
                    "label": "包括"
                }
                ,
                {
                    "source": 296,
                    "target": 297,
                    "label": "包括"
                }
                ,
                {
                    "source": 296,
                    "target": 298,
                    "label": "包括"
                }
                ,
                {
                    "source": 292,
                    "target": 299,
                    "label": "包括"
                }
                ,
                {
                    "source": 292,
                    "target": 300,
                    "label": "包括"
                }
                ,
                {
                    "source": 120,
                    "target": 301,
                    "label": "包括"
                }
                ,
                {
                    "source": 301,
                    "target": 302,
                    "label": "包括"
                }
                ,
                {
                    "source": 301,
                    "target": 303,
                    "label": "包括"
                }
                ,
                {
                    "source": 303,
                    "target": 304,
                    "label": "包括"
                }
                ,
                {
                    "source": 303,
                    "target": 305,
                    "label": "包括"
                }
                ,
                {
                    "source": 303,
                    "target": 306,
                    "label": "包括"
                }
                ,
                {
                    "source": 303,
                    "target": 307,
                    "label": "包括"
                }
                ,
                {
                    "source": 303,
                    "target": 308,
                    "label": "包括"
                }
                ,
                {
                    "source": 303,
                    "target": 309,
                    "label": "包括"
                }
                ,
                {
                    "source": 301,
                    "target": 310,
                    "label": "包括"
                }
                ,
                {
                    "source": 301,
                    "target": 311,
                    "label": "包括"
                }
                ,
                {
                    "source": 120,
                    "target": 312,
                    "label": "包括"
                }
                ,
                {
                    "source": 312,
                    "target": 313,
                    "label": "包括"
                }
                ,
                {
                    "source": 312,
                    "target": 314,
                    "label": "包括"
                }
                ,
                {
                    "source": 312,
                    "target": 315,
                    "label": "包括"
                }
                ,
                {
                    "source": 315,
                    "target": 316,
                    "label": "包括"
                }
                ,
                {
                    "source": 315,
                    "target": 317,
                    "label": "包括"
                }
                ,
                {
                    "source": 315,
                    "target": 318,
                    "label": "包括"
                }
                ,
                {
                    "source": 315,
                    "target": 319,
                    "label": "包括"
                }
                ,
                {
                    "source": 315,
                    "target": 320,
                    "label": "包括"
                }
                ,
                {
                    "source": 315,
                    "target": 321,
                    "label": "包括"
                }
                ,
                {
                    "source": 312,
                    "target": 322,
                    "label": "包括"
                }
                ,
                {
                    "source": 312,
                    "target": 323,
                    "label": "包括"
                }
                ,
                {
                    "source": 120,
                    "target": 324,
                    "label": "包括"
                }
                ,
                {
                    "source": 324,
                    "target": 325,
                    "label": "包括"
                }
                ,
                {
                    "source": 324,
                    "target": 326,
                    "label": "包括"
                }
                ,
                {
                    "source": 324,
                    "target": 327,
                    "label": "包括"
                }]
        }
    };
});