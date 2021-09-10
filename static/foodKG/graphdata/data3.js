define(function (){
    return {
        //data:{"nodes":[{"id":1,"label":"1","x":650,"y":80,"size":29,"scale":1,"color":"rgb(162,247,155)"},{"id":2,"label":"2","x":425,"y":160,"size":29,"scale":1,"color":"rgb(162,247,155)"},{"id":3,"label":"3","x":1050,"y":160,"size":29,"scale":1,"color":"rgb(162,247,155)"},{"id":4,"label":"4","x":225,"y":240,"size":29,"scale":1,"color":"rgb(133,130,66)"},{"id":5,"label":"5","x":625,"y":240,"size":29,"scale":1,"color":"rgb(29,61,156)"},{"id":6,"label":"6","x":950,"y":240,"size":29,"scale":1,"color":"rgb(162,247,155)"},{"id":7,"label":"7","x":1175,"y":240,"size":29,"scale":1,"color":"rgb(203,180,102)"},{"id":8,"label":"8","x":125,"y":320,"size":29,"scale":1,"color":"rgb(133,130,66)"},{"id":9,"label":"9","x":325,"y":320,"size":29,"scale":1,"color":"rgb(32,208,34)"},{"id":10,"label":"10","x":525,"y":320,"size":29,"scale":1,"color":"rgb(29,61,156)"},{"id":11,"label":"11","x":725,"y":320,"size":29,"scale":1,"color":"rgb(81,212,162)"},{"id":12,"label":"12","x":900,"y":320,"size":29,"scale":1,"color":"rgb(187,39,142)"},{"id":13,"label":"13","x":1025,"y":320,"size":29,"scale":1,"color":"rgb(162,247,155)"},{"id":14,"label":"14","x":1125,"y":320,"size":29,"scale":1,"color":"rgb(203,180,102)"},{"id":15,"label":"15","x":1225,"y":320,"size":29,"scale":1,"color":"rgb(203,180,102)"},{"id":16,"label":"16","x":75,"y":400,"size":29,"scale":1,"color":"rgb(133,130,66)"},{"id":17,"label":"17","x":175,"y":400,"size":29,"scale":1,"color":"rgb(133,130,66)"},{"id":18,"label":"18","x":275,"y":400,"size":29,"scale":1,"color":"rgb(32,208,34)"},{"id":19,"label":"19","x":375,"y":400,"size":29,"scale":1,"color":"rgb(32,208,34)"},{"id":20,"label":"20","x":475,"y":400,"size":29,"scale":1,"color":"rgb(29,61,156)"},{"id":21,"label":"21","x":575,"y":400,"size":29,"scale":1,"color":"rgb(29,61,156)"},{"id":22,"label":"22","x":675,"y":400,"size":29,"scale":1,"color":"rgb(81,212,162)"},{"id":23,"label":"23","x":775,"y":400,"size":29,"scale":1,"color":"rgb(81,212,162)"},{"id":24,"label":"24","x":875,"y":400,"size":29,"scale":1,"color":"rgb(187,39,142)"},{"id":25,"label":"25","x":950,"y":400,"size":29,"scale":1,"color":"rgb(187,39,142)"},{"id":26,"label":"26","x":1000,"y":400,"size":29,"scale":1,"color":"rgb(162,247,155)"},{"id":27,"label":"27","x":1050,"y":400,"size":29,"scale":1,"color":"rgb(162,247,155)"},{"id":28,"label":"28","x":1100,"y":400,"size":29,"scale":1,"color":"rgb(203,180,102)"},{"id":29,"label":"29","x":1150,"y":400,"size":29,"scale":1,"color":"rgb(203,180,102)"},{"id":30,"label":"30","x":1200,"y":400,"size":29,"scale":1,"color":"rgb(203,180,102)"},{"id":31,"label":"31","x":1250,"y":400,"size":29,"scale":1,"color":"rgb(203,180,102)"},{"id":32,"label":"32","x":50,"y":480,"size":29,"scale":1,"color":"rgb(133,130,66)"},{"id":33,"label":"33","x":100,"y":480,"size":29,"scale":1,"color":"rgb(133,130,66)"},{"id":34,"label":"34","x":150,"y":480,"size":29,"scale":1,"color":"rgb(133,130,66)"},{"id":35,"label":"35","x":200,"y":480,"size":29,"scale":1,"color":"rgb(133,130,66)"},{"id":36,"label":"36","x":250,"y":480,"size":29,"scale":1,"color":"rgb(32,208,34)"},{"id":37,"label":"37","x":300,"y":480,"size":29,"scale":1,"color":"rgb(32,208,34)"},{"id":38,"label":"38","x":350,"y":480,"size":29,"scale":1,"color":"rgb(32,208,34)"},{"id":39,"label":"39","x":400,"y":480,"size":29,"scale":1,"color":"rgb(32,208,34)"},{"id":40,"label":"40","x":450,"y":480,"size":29,"scale":1,"color":"rgb(29,61,156)"},{"id":41,"label":"41","x":500,"y":480,"size":29,"scale":1,"color":"rgb(29,61,156)"},{"id":42,"label":"42","x":550,"y":480,"size":29,"scale":1,"color":"rgb(29,61,156)"},{"id":43,"label":"43","x":600,"y":480,"size":29,"scale":1,"color":"rgb(29,61,156)"},{"id":44,"label":"44","x":650,"y":480,"size":29,"scale":1,"color":"rgb(81,212,162)"},{"id":45,"label":"45","x":700,"y":480,"size":29,"scale":1,"color":"rgb(81,212,162)"},{"id":46,"label":"46","x":750,"y":480,"size":29,"scale":1,"color":"rgb(81,212,162)"},{"id":47,"label":"47","x":800,"y":480,"size":29,"scale":1,"color":"rgb(81,212,162)"},{"id":48,"label":"48","x":850,"y":480,"size":29,"scale":1,"color":"rgb(187,39,142)"},{"id":49,"label":"49","x":900,"y":480,"size":29,"scale":1,"color":"rgb(187,39,142)"},{"id":50,"label":"50","x":950,"y":480,"size":29,"scale":1,"color":"rgb(187,39,142)"}],"links":[{"source":1,"target":2},{"source":1,"target":3},{"source":2,"target":4},{"source":2,"target":5},{"source":3,"target":6},{"source":3,"target":7},{"source":4,"target":8},{"source":4,"target":9},{"source":5,"target":10},{"source":5,"target":11},{"source":6,"target":12},{"source":6,"target":13},{"source":7,"target":14},{"source":7,"target":15},{"source":8,"target":16},{"source":8,"target":17},{"source":9,"target":18},{"source":9,"target":19},{"source":10,"target":20},{"source":10,"target":21},{"source":11,"target":22},{"source":11,"target":23},{"source":12,"target":24},{"source":12,"target":25},{"source":13,"target":26},{"source":13,"target":27},{"source":14,"target":28},{"source":14,"target":29},{"source":15,"target":30},{"source":15,"target":31},{"source":16,"target":32},{"source":16,"target":33},{"source":17,"target":34},{"source":17,"target":35},{"source":18,"target":36},{"source":18,"target":37},{"source":19,"target":38},{"source":19,"target":39},{"source":20,"target":40},{"source":20,"target":41},{"source":21,"target":42},{"source":21,"target":43},{"source":22,"target":44},{"source":22,"target":45},{"source":23,"target":46},{"source":23,"target":47},{"source":24,"target":48},{"source":24,"target":49},{"source":25,"target":50}]}
    data:{
        "nodes":[{
            "id": 1,
            "label": "egg",
            "size": 66,
            "scale": "1.0",
            "color": "rgb(183,1,124)"
        }
            ,
            {
                "id": 2,
                "label": "shrimp",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 3,
                "label": "black chicken",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 4,
                "label": "pork",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 5,
                "label": "mullet",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 6,
                "label": "chicken",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 7,
                "label": "crucian",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 8,
                "label": "carp",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 9,
                "label": "2020/3/18",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 10,
                "label": "2020/3/17",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 11,
                "label": "2020/3/12",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 12,
                "label": "2020/3/11",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 13,
                "label": "2020/3/10",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 14,
                "label": "2020/3/9",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 15,
                "label": "2020/3/8",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 16,
                "label": "2020/3/7",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 17,
                "label": "2020/3/5",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 18,
                "label": "2020/3/4",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 19,
                "label": "2020/3/3",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 20,
                "label": "2020/3/2",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 21,
                "label": "2020/3/1",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 22,
                "label": "2020/2/4",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 23,
                "label": "2020/2/3",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 24,
                "label": "2020/2/1",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 25,
                "label": "2020/1/30",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 26,
                "label": "2020/1/28",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 27,
                "label": "2020/1/24",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 28,
                "label": "2020/1/23",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 29,
                "label": "2020/1/20",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 30,
                "label": "2020/1/19",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 31,
                "label": "2020/1/18",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 32,
                "label": "2020/1/16",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 33,
                "label": "2020/1/15",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 34,
                "label": "2020/1/14",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 35,
                "label": "2020/1/13",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 36,
                "label": "2020/1/11",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 37,
                "label": "2020/1/10",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 38,
                "label": "2020/1/7",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 39,
                "label": "2020/1/5",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 40,
                "label": "2020/1/3",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 41,
                "label": "florfenicol",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 42,
                "label": "chloramphenicol",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 43,
                "label": "nitrofural",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 44,
                "label": "doxycycline",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 45,
                "label": "Enrofloxacin",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 46,
                "label": "sulfonamides",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 47,
                "label": "nicarbazine",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 48,
                "label": "furazolidone",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 49,
                "label": "Amantadine",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 50,
                "label": "ofloxacin",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 51,
                "label": "Malachite Green",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 52,
                "label": "none",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 53,
                "label": "(100μg/kg)",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 54,
                "label": "(200μg/kg)",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 55,
                "label": "1/62×100(μg/kg)",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 56,
                "label": "2/47×100",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 57,
                "label": "1/22×1000μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 58,
                "label": "2/26μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 59,
                "label": "1/04×100(μg/kg)",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 60,
                "label": "9μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 61,
                "label": "192μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 62,
                "label": "8/35μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 63,
                "label": "2127μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 64,
                "label": "1/7μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 65,
                "label": "3/36×100(μg/kg)",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 66,
                "label": "21/2μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 67,
                "label": "13/1μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 68,
                "label": "136μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 69,
                "label": "2/04μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 70,
                "label": "26/2μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 71,
                "label": "459/2μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 72,
                "label": "1/03×1000μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 73,
                "label": "1/42μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 74,
                "label": "4/96μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 75,
                "label": "81μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 76,
                "label": "4μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 77,
                "label": "46μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 78,
                "label": "800μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 79,
                "label": "132/4μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 80,
                "label": "16/7μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 81,
                "label": "141μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 82,
                "label": "98/9μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 83,
                "label": "7/96μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 84,
                "label": "425/2μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 85,
                "label": "499μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 86,
                "label": "725/0μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 87,
                "label": "32/8μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 88,
                "label": "291μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 89,
                "label": "38/9μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 90,
                "label": "32/4μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 91,
                "label": "22/5±3/6μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 92,
                "label": "13/6μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 93,
                "label": "12/1μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 94,
                "label": "11/9μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 95,
                "label": "1/18±17μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 96,
                "label": "602/3μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 97,
                "label": "1255/2μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 98,
                "label": "9/80μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 99,
                "label": "113μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 100,
                "label": "48/2μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 101,
                "label": "9/85μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 102,
                "label": "87/0μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 103,
                "label": "47/7μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 104,
                "label": "26/6μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 105,
                "label": "22μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 106,
                "label": "15/4μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 107,
                "label": "13/3μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 108,
                "label": "242μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 109,
                "label": "51/3μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 110,
                "label": "17/8μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 111,
                "label": "17/6μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 112,
                "label": "73/2μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 113,
                "label": "303/7μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 114,
                "label": "279/8μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 115,
                "label": "40μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 116,
                "label": "18/2μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 117,
                "label": "7/22μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 118,
                "label": "49/1μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 119,
                "label": "202/8μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 120,
                "label": "263μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 121,
                "label": "11/5μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 122,
                "label": "47/2μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 123,
                "label": "132μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 124,
                "label": "344μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 125,
                "label": "168μg/kg",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 126,
                "label": "Guangdong Province Market supervision and Administration",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 127,
                "label": "Hainan Province Market supervision and Administration",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 128,
                "label": "Zhejiang Province Market supervision and Administration ",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 129,
                "label": "Anhui Province Market supervision and Administration",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 130,
                "label": "Beijing Municipal Market supervision and Administration",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 131,
                "label": "Jiangxi Province Market supervision and Administration",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 132,
                "label": "Shanxi Province Market supervision and Administration",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 133,
                "label": "Hebei Province Market supervision and Administration",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 134,
                "label": " Guizhou Province Market supervision and Administration",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 135,
                "label": "Sichuan Province Market supervision and Administration",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 136,
                "label": "2020/4/30",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 137,
                "label": "2020/5/15",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 138,
                "label": "2020/4/10",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 139,
                "label": "2020/4/17",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 140,
                "label": "2020/4/8",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 141,
                "label": "2020/5/9",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 142,
                "label": "2020/2/20",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 143,
                "label": "2020/3/23",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 144,
                "label": "2020/5/14",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 145,
                "label": "2020/4/16",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 146,
                "label": "2020/4/23",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 147,
                "label": "2020/4/9",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 148,
                "label": "2020/3/27",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 149,
                "label": "2020/2/26",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 150,
                "label": "2020/3/20",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 151,
                "label": "Guangdong",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 152,
                "label": "Sichuan",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 153,
                "label": "Zhejiang",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 154,
                "label": "Hainan",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 155,
                "label": "Anhui",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 156,
                "label": "Beijing",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 157,
                "label": "Jiangxi",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 158,
                "label": "Shanxi",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 159,
                "label": "Hebei",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 160,
                "label": "Guizhou",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 161,
                "label": "Guangxi",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 162,
                "label": "Shandong",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 163,
                "label": "1. On 2020/4/30,Guangdong Province Market supervision and Administration reported that florfenicol residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 164,
                "label": "2. On 2020/5/15,Hainan Province Market supervision and Administration reported that chloramphenicol residues in shrimp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 165,
                "label": "3. On 2020/5/15,Hainan Province Market supervision and Administration reported that florfenicol residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 166,
                "label": "4. On 2020/4/10,Zhejiang Province Market supervision and Administration  reported that nitrofural residues in shrimp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 167,
                "label": "5. On 2020/4/30,Guangdong Province Market supervision and Administration reported that florfenicol residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 168,
                "label": "6. On 2020/4/10,Zhejiang Province Market supervision and Administration  reported that nitrofural residues in shrimp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 169,
                "label": "7. On 2020/4/10,Zhejiang Province Market supervision and Administration  reported that doxycycline residues in black chicken were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 170,
                "label": "8. On 2020/4/10,Zhejiang Province Market supervision and Administration  reported that nitrofural residues in shrimp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 171,
                "label": "9. On 2020/4/17,Hainan Province Market supervision and Administration reported that Enrofloxacin residues in black chicken were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 172,
                "label": "10. On 2020/4/10,Zhejiang Province Market supervision and Administration  reported that nitrofural residues in shrimp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 173,
                "label": "11. On 2020/4/30,Guangdong Province Market supervision and Administration reported that Enrofloxacin residues in black chicken were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 174,
                "label": "12. On 2020/4/8,Anhui Province Market supervision and Administration reported that florfenicol residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 175,
                "label": "13. On 2020/4/8,Anhui Province Market supervision and Administration reported that Enrofloxacin residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 176,
                "label": "14. On 2020/4/10,Zhejiang Province Market supervision and Administration  reported that sulfonamides residues in pork were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 177,
                "label": "15. On 2020/4/10,Zhejiang Province Market supervision and Administration  reported that florfenicol residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 178,
                "label": "16. On 2020/4/8,Anhui Province Market supervision and Administration reported that florfenicol residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 179,
                "label": "17. On 2020/4/10,Zhejiang Province Market supervision and Administration  reported that Enrofloxacin residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 180,
                "label": "18. On 2020/4/10,Zhejiang Province Market supervision and Administration  reported that nicarbazine residues in black chicken were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 181,
                "label": "19. On 2020/4/10,Zhejiang Province Market supervision and Administration  reported that nitrofural residues in shrimp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 182,
                "label": "20. On 2020/5/9,Beijing Municipal Market supervision and Administration reported that furazolidone residues in mullet were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 183,
                "label": "21. On 2020/3/12,Jiangxi Province Market supervision and Administration reported that florfenicol residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 184,
                "label": "22. On 2020/2/20,Jiangxi Province Market supervision and Administration reported that florfenicol residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 185,
                "label": "23. On 2020/4/30,Shanxi Province Market supervision and Administration reported that florfenicol residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 186,
                "label": "24. On 2020/4/30,Shanxi Province Market supervision and Administration reported that florfenicol residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 187,
                "label": "25. On 2020/3/23,Hebei Province Market supervision and Administration reported that Amantadine residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 188,
                "label": "26. On 2020/2/20,Jiangxi Province Market supervision and Administration reported that florfenicol residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 189,
                "label": "27. On 2020/5/14, Guizhou Province Market supervision and Administration reported that ofloxacin residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 190,
                "label": "28. On 2020/5/14, Guizhou Province Market supervision and Administration reported that sulfonamides residues in pork were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 191,
                "label": "29. On 2020/3/12,Jiangxi Province Market supervision and Administration reported that florfenicol residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 192,
                "label": "30. On 2020/3/12,Jiangxi Province Market supervision and Administration reported that florfenicol residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 193,
                "label": "31. On 2020/5/14, Guizhou Province Market supervision and Administration reported that furazolidone residues in mullet were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 194,
                "label": "32. On 2020/4/16,Sichuan Province Market supervision and Administration reported that sulfonamides residues in chicken were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 195,
                "label": "33. On 2020/4/30,Sichuan Province Market supervision and Administration reported that Enrofloxacin residues in crucian were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 196,
                "label": "34. On 2020/4/23,Sichuan Province Market supervision and Administration reported that sulfonamides residues in chicken were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 197,
                "label": "35. On 2020/4/23,Sichuan Province Market supervision and Administration reported that ofloxacin residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 198,
                "label": "36. On 2020/4/23,Sichuan Province Market supervision and Administration reported that Enrofloxacin residues in black chicken were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 199,
                "label": "37. On 2020/4/23,Sichuan Province Market supervision and Administration reported that ofloxacin residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 200,
                "label": "38. On 2020/4/30,Sichuan Province Market supervision and Administration reported that ofloxacin residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 201,
                "label": "39. On 2020/4/23,Sichuan Province Market supervision and Administration reported that ofloxacin residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 202,
                "label": "40. On 2020/4/23,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 203,
                "label": "41. On 2020/4/16,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 204,
                "label": "42. On 2020/4/16,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 205,
                "label": "43. On 2020/4/23,Sichuan Province Market supervision and Administration reported that Malachite Green residues in mullet were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 206,
                "label": "44. On 2020/4/23,Sichuan Province Market supervision and Administration reported that sulfonamides residues in chicken were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 207,
                "label": "45. On 2020/4/9,Sichuan Province Market supervision and Administration reported that sulfonamides residues in chicken were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 208,
                "label": "46. On 2020/4/23,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 209,
                "label": "47. On 2020/4/23,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 210,
                "label": "48. On 2020/4/30,Sichuan Province Market supervision and Administration reported that Enrofloxacin residues in black chicken were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 211,
                "label": "49. On 2020/4/9,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 212,
                "label": "50. On 2020/4/16,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 213,
                "label": "51. On 2020/4/30,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 214,
                "label": "52. On 2020/4/16,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 215,
                "label": "53. On 2020/4/30,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 216,
                "label": "54. On 2020/4/9,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 217,
                "label": "55. On 2020/4/16,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 218,
                "label": "56. On 2020/4/16,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 219,
                "label": "57. On 2020/4/23,Sichuan Province Market supervision and Administration reported that Enrofloxacin residues in black chicken were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 220,
                "label": "58. On 2020/4/9,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 221,
                "label": "59. On 2020/4/16,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 222,
                "label": "60. On 2020/4/9,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 223,
                "label": "61. On 2020/4/9,Sichuan Province Market supervision and Administration reported that ofloxacin residues in black chicken were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 224,
                "label": "62. On 2020/4/23,Sichuan Province Market supervision and Administration reported that sulfonamides residues in chicken were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 225,
                "label": "63. On 2020/4/16,Sichuan Province Market supervision and Administration reported that sulfonamides residues in chicken were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 226,
                "label": "64. On 2020/4/23,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 227,
                "label": "65. On 2020/4/30,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 228,
                "label": "66. On 2020/4/9,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 229,
                "label": "67. On 2020/4/30,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 230,
                "label": "68. On 2020/4/16,Sichuan Province Market supervision and Administration reported that sulfonamides residues in chicken were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 231,
                "label": "69. On 2020/4/9,Sichuan Province Market supervision and Administration reported that ofloxacin residues in black chicken were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 232,
                "label": "70. On 2020/4/30,Sichuan Province Market supervision and Administration reported that ofloxacin residues in black chicken were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 233,
                "label": "71. On 2020/4/30,Sichuan Province Market supervision and Administration reported that ofloxacin residues in black chicken were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 234,
                "label": "72. On 2020/4/9,Sichuan Province Market supervision and Administration reported that ofloxacin residues in carp were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 235,
                "label": "73. On 2020/3/27,Beijing Municipal Market supervision and Administration reported that florfenicol residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 236,
                "label": "74. On 2020/2/26,Beijing Municipal Market supervision and Administration reported that Enrofloxacin residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }
            ,
            {
                "id": 237,
                "label": "75. On 2020/3/20,Beijing Municipal Market supervision and Administration reported that florfenicol residues in egg were unqualified",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(183,1,124)"
            }],
        "links":[{
            "source": "163",
            "target": "1",
            "label": "Sampling food"
        }
            ,
            {
                "source": "163",
                "target": "9",
                "label": "production date"
            }
            ,
            {
                "source": "163",
                "target": "151",
                "label": "region"
            }
            ,
            {
                "source": "163",
                "target": "126",
                "label": " issuance department"
            }
            ,
            {
                "source": "163",
                "target": "136",
                "label": "release date"
            }
            ,
            {
                "source": "163",
                "target": "41",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "163",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "163",
                "target": "55",
                "label": "sampling results"
            }
            ,
            {
                "source": "164",
                "target": "2",
                "label": "Sampling food"
            }
            ,
            {
                "source": "164",
                "target": "9",
                "label": "production date"
            }
            ,
            {
                "source": "164",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "164",
                "target": "127",
                "label": " issuance department"
            }
            ,
            {
                "source": "164",
                "target": "137",
                "label": "release date"
            }
            ,
            {
                "source": "164",
                "target": "42",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "164",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "164",
                "target": "56",
                "label": "sampling results"
            }
            ,
            {
                "source": "165",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "165",
                "target": "9",
                "label": "production date"
            }
            ,
            {
                "source": "165",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "165",
                "target": "127",
                "label": " issuance department"
            }
            ,
            {
                "source": "165",
                "target": "137",
                "label": "release date"
            }
            ,
            {
                "source": "165",
                "target": "41",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "165",
                "target": "53",
                "label": "standard value"
            }
            ,
            {
                "source": "165",
                "target": "57",
                "label": "sampling results"
            }
            ,
            {
                "source": "166",
                "target": "2",
                "label": "Sampling food"
            }
            ,
            {
                "source": "166",
                "target": "9",
                "label": "production date"
            }
            ,
            {
                "source": "166",
                "target": "153",
                "label": "region"
            }
            ,
            {
                "source": "166",
                "target": "128",
                "label": " issuance department"
            }
            ,
            {
                "source": "166",
                "target": "138",
                "label": "release date"
            }
            ,
            {
                "source": "166",
                "target": "43",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "166",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "166",
                "target": "58",
                "label": "sampling results"
            }
            ,
            {
                "source": "167",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "167",
                "target": "10",
                "label": "production date"
            }
            ,
            {
                "source": "167",
                "target": "151",
                "label": "region"
            }
            ,
            {
                "source": "167",
                "target": "126",
                "label": " issuance department"
            }
            ,
            {
                "source": "167",
                "target": "136",
                "label": "release date"
            }
            ,
            {
                "source": "167",
                "target": "41",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "167",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "167",
                "target": "59",
                "label": "sampling results"
            }
            ,
            {
                "source": "168",
                "target": "2",
                "label": "Sampling food"
            }
            ,
            {
                "source": "168",
                "target": "11",
                "label": "production date"
            }
            ,
            {
                "source": "168",
                "target": "153",
                "label": "region"
            }
            ,
            {
                "source": "168",
                "target": "128",
                "label": " issuance department"
            }
            ,
            {
                "source": "168",
                "target": "138",
                "label": "release date"
            }
            ,
            {
                "source": "168",
                "target": "43",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "168",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "168",
                "target": "60",
                "label": "sampling results"
            }
            ,
            {
                "source": "169",
                "target": "3",
                "label": "Sampling food"
            }
            ,
            {
                "source": "169",
                "target": "12",
                "label": "production date"
            }
            ,
            {
                "source": "169",
                "target": "153",
                "label": "region"
            }
            ,
            {
                "source": "169",
                "target": "128",
                "label": " issuance department"
            }
            ,
            {
                "source": "169",
                "target": "138",
                "label": "release date"
            }
            ,
            {
                "source": "169",
                "target": "44",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "169",
                "target": "53",
                "label": "standard value"
            }
            ,
            {
                "source": "169",
                "target": "61",
                "label": "sampling results"
            }
            ,
            {
                "source": "170",
                "target": "2",
                "label": "Sampling food"
            }
            ,
            {
                "source": "170",
                "target": "12",
                "label": "production date"
            }
            ,
            {
                "source": "170",
                "target": "153",
                "label": "region"
            }
            ,
            {
                "source": "170",
                "target": "128",
                "label": " issuance department"
            }
            ,
            {
                "source": "170",
                "target": "138",
                "label": "release date"
            }
            ,
            {
                "source": "170",
                "target": "43",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "170",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "170",
                "target": "62",
                "label": "sampling results"
            }
            ,
            {
                "source": "171",
                "target": "3",
                "label": "Sampling food"
            }
            ,
            {
                "source": "171",
                "target": "13",
                "label": "production date"
            }
            ,
            {
                "source": "171",
                "target": "154",
                "label": "region"
            }
            ,
            {
                "source": "171",
                "target": "127",
                "label": " issuance department"
            }
            ,
            {
                "source": "171",
                "target": "139",
                "label": "release date"
            }
            ,
            {
                "source": "171",
                "target": "45",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "171",
                "target": "53",
                "label": "standard value"
            }
            ,
            {
                "source": "171",
                "target": "63",
                "label": "sampling results"
            }
            ,
            {
                "source": "172",
                "target": "2",
                "label": "Sampling food"
            }
            ,
            {
                "source": "172",
                "target": "13",
                "label": "production date"
            }
            ,
            {
                "source": "172",
                "target": "153",
                "label": "region"
            }
            ,
            {
                "source": "172",
                "target": "128",
                "label": " issuance department"
            }
            ,
            {
                "source": "172",
                "target": "138",
                "label": "release date"
            }
            ,
            {
                "source": "172",
                "target": "43",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "172",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "172",
                "target": "64",
                "label": "sampling results"
            }
            ,
            {
                "source": "173",
                "target": "3",
                "label": "Sampling food"
            }
            ,
            {
                "source": "173",
                "target": "14",
                "label": "production date"
            }
            ,
            {
                "source": "173",
                "target": "151",
                "label": "region"
            }
            ,
            {
                "source": "173",
                "target": "126",
                "label": " issuance department"
            }
            ,
            {
                "source": "173",
                "target": "136",
                "label": "release date"
            }
            ,
            {
                "source": "173",
                "target": "45",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "173",
                "target": "53",
                "label": "standard value"
            }
            ,
            {
                "source": "173",
                "target": "65",
                "label": "sampling results"
            }
            ,
            {
                "source": "174",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "174",
                "target": "15",
                "label": "production date"
            }
            ,
            {
                "source": "174",
                "target": "155",
                "label": "region"
            }
            ,
            {
                "source": "174",
                "target": "129",
                "label": " issuance department"
            }
            ,
            {
                "source": "174",
                "target": "140",
                "label": "release date"
            }
            ,
            {
                "source": "174",
                "target": "41",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "174",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "174",
                "target": "66",
                "label": "sampling results"
            }
            ,
            {
                "source": "175",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "175",
                "target": "16",
                "label": "production date"
            }
            ,
            {
                "source": "175",
                "target": "155",
                "label": "region"
            }
            ,
            {
                "source": "175",
                "target": "129",
                "label": " issuance department"
            }
            ,
            {
                "source": "175",
                "target": "140",
                "label": "release date"
            }
            ,
            {
                "source": "175",
                "target": "45",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "175",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "175",
                "target": "67",
                "label": "sampling results"
            }
            ,
            {
                "source": "176",
                "target": "4",
                "label": "Sampling food"
            }
            ,
            {
                "source": "176",
                "target": "17",
                "label": "production date"
            }
            ,
            {
                "source": "176",
                "target": "153",
                "label": "region"
            }
            ,
            {
                "source": "176",
                "target": "128",
                "label": " issuance department"
            }
            ,
            {
                "source": "176",
                "target": "138",
                "label": "release date"
            }
            ,
            {
                "source": "176",
                "target": "46",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "176",
                "target": "53",
                "label": "standard value"
            }
            ,
            {
                "source": "176",
                "target": "68",
                "label": "sampling results"
            }
            ,
            {
                "source": "177",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "177",
                "target": "18",
                "label": "production date"
            }
            ,
            {
                "source": "177",
                "target": "153",
                "label": "region"
            }
            ,
            {
                "source": "177",
                "target": "128",
                "label": " issuance department"
            }
            ,
            {
                "source": "177",
                "target": "138",
                "label": "release date"
            }
            ,
            {
                "source": "177",
                "target": "41",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "177",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "177",
                "target": "69",
                "label": "sampling results"
            }
            ,
            {
                "source": "178",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "178",
                "target": "18",
                "label": "production date"
            }
            ,
            {
                "source": "178",
                "target": "155",
                "label": "region"
            }
            ,
            {
                "source": "178",
                "target": "129",
                "label": " issuance department"
            }
            ,
            {
                "source": "178",
                "target": "140",
                "label": "release date"
            }
            ,
            {
                "source": "178",
                "target": "41",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "178",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "178",
                "target": "70",
                "label": "sampling results"
            }
            ,
            {
                "source": "179",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "179",
                "target": "19",
                "label": "production date"
            }
            ,
            {
                "source": "179",
                "target": "153",
                "label": "region"
            }
            ,
            {
                "source": "179",
                "target": "128",
                "label": " issuance department"
            }
            ,
            {
                "source": "179",
                "target": "138",
                "label": "release date"
            }
            ,
            {
                "source": "179",
                "target": "45",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "179",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "179",
                "target": "71",
                "label": "sampling results"
            }
            ,
            {
                "source": "180",
                "target": "3",
                "label": "Sampling food"
            }
            ,
            {
                "source": "180",
                "target": "19",
                "label": "production date"
            }
            ,
            {
                "source": "180",
                "target": "153",
                "label": "region"
            }
            ,
            {
                "source": "180",
                "target": "128",
                "label": " issuance department"
            }
            ,
            {
                "source": "180",
                "target": "138",
                "label": "release date"
            }
            ,
            {
                "source": "180",
                "target": "47",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "180",
                "target": "54",
                "label": "standard value"
            }
            ,
            {
                "source": "180",
                "target": "72",
                "label": "sampling results"
            }
            ,
            {
                "source": "181",
                "target": "2",
                "label": "Sampling food"
            }
            ,
            {
                "source": "181",
                "target": "20",
                "label": "production date"
            }
            ,
            {
                "source": "181",
                "target": "153",
                "label": "region"
            }
            ,
            {
                "source": "181",
                "target": "128",
                "label": " issuance department"
            }
            ,
            {
                "source": "181",
                "target": "138",
                "label": "release date"
            }
            ,
            {
                "source": "181",
                "target": "43",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "181",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "181",
                "target": "73",
                "label": "sampling results"
            }
            ,
            {
                "source": "182",
                "target": "5",
                "label": "Sampling food"
            }
            ,
            {
                "source": "182",
                "target": "21",
                "label": "production date"
            }
            ,
            {
                "source": "182",
                "target": "156",
                "label": "region"
            }
            ,
            {
                "source": "182",
                "target": "130",
                "label": " issuance department"
            }
            ,
            {
                "source": "182",
                "target": "141",
                "label": "release date"
            }
            ,
            {
                "source": "182",
                "target": "48",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "182",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "182",
                "target": "74",
                "label": "sampling results"
            }
            ,
            {
                "source": "183",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "183",
                "target": "22",
                "label": "production date"
            }
            ,
            {
                "source": "183",
                "target": "157",
                "label": "region"
            }
            ,
            {
                "source": "183",
                "target": "131",
                "label": " issuance department"
            }
            ,
            {
                "source": "183",
                "target": "11",
                "label": "release date"
            }
            ,
            {
                "source": "183",
                "target": "41",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "183",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "183",
                "target": "75",
                "label": "sampling results"
            }
            ,
            {
                "source": "184",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "184",
                "target": "23",
                "label": "production date"
            }
            ,
            {
                "source": "184",
                "target": "157",
                "label": "region"
            }
            ,
            {
                "source": "184",
                "target": "131",
                "label": " issuance department"
            }
            ,
            {
                "source": "184",
                "target": "142",
                "label": "release date"
            }
            ,
            {
                "source": "184",
                "target": "41",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "184",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "184",
                "target": "76",
                "label": "sampling results"
            }
            ,
            {
                "source": "185",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "185",
                "target": "23",
                "label": "production date"
            }
            ,
            {
                "source": "185",
                "target": "155",
                "label": "region"
            }
            ,
            {
                "source": "185",
                "target": "132",
                "label": " issuance department"
            }
            ,
            {
                "source": "185",
                "target": "136",
                "label": "release date"
            }
            ,
            {
                "source": "185",
                "target": "41",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "185",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "185",
                "target": "77",
                "label": "sampling results"
            }
            ,
            {
                "source": "186",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "186",
                "target": "23",
                "label": "production date"
            }
            ,
            {
                "source": "186",
                "target": "158",
                "label": "region"
            }
            ,
            {
                "source": "186",
                "target": "132",
                "label": " issuance department"
            }
            ,
            {
                "source": "186",
                "target": "136",
                "label": "release date"
            }
            ,
            {
                "source": "186",
                "target": "41",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "186",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "186",
                "target": "77",
                "label": "sampling results"
            }
            ,
            {
                "source": "187",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "187",
                "target": "23",
                "label": "production date"
            }
            ,
            {
                "source": "187",
                "target": "159",
                "label": "region"
            }
            ,
            {
                "source": "187",
                "target": "133",
                "label": " issuance department"
            }
            ,
            {
                "source": "187",
                "target": "143",
                "label": "release date"
            }
            ,
            {
                "source": "187",
                "target": "49",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "187",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "187",
                "target": "78",
                "label": "sampling results"
            }
            ,
            {
                "source": "188",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "188",
                "target": "24",
                "label": "production date"
            }
            ,
            {
                "source": "188",
                "target": "157",
                "label": "region"
            }
            ,
            {
                "source": "188",
                "target": "131",
                "label": " issuance department"
            }
            ,
            {
                "source": "188",
                "target": "142",
                "label": "release date"
            }
            ,
            {
                "source": "188",
                "target": "41",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "188",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "188",
                "target": "79",
                "label": "sampling results"
            }
            ,
            {
                "source": "189",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "189",
                "target": "25",
                "label": "production date"
            }
            ,
            {
                "source": "189",
                "target": "160",
                "label": "region"
            }
            ,
            {
                "source": "189",
                "target": "134",
                "label": " issuance department"
            }
            ,
            {
                "source": "189",
                "target": "144",
                "label": "release date"
            }
            ,
            {
                "source": "189",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "189",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "189",
                "target": "80",
                "label": "sampling results"
            }
            ,
            {
                "source": "190",
                "target": "4",
                "label": "Sampling food"
            }
            ,
            {
                "source": "190",
                "target": "25",
                "label": "production date"
            }
            ,
            {
                "source": "190",
                "target": "160",
                "label": "region"
            }
            ,
            {
                "source": "190",
                "target": "134",
                "label": " issuance department"
            }
            ,
            {
                "source": "190",
                "target": "144",
                "label": "release date"
            }
            ,
            {
                "source": "190",
                "target": "46",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "190",
                "target": "53",
                "label": "standard value"
            }
            ,
            {
                "source": "190",
                "target": "81",
                "label": "sampling results"
            }
            ,
            {
                "source": "191",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "191",
                "target": "26",
                "label": "production date"
            }
            ,
            {
                "source": "191",
                "target": "157",
                "label": "region"
            }
            ,
            {
                "source": "191",
                "target": "131",
                "label": " issuance department"
            }
            ,
            {
                "source": "191",
                "target": "11",
                "label": "release date"
            }
            ,
            {
                "source": "191",
                "target": "41",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "191",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "191",
                "target": "82",
                "label": "sampling results"
            }
            ,
            {
                "source": "192",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "192",
                "target": "26",
                "label": "production date"
            }
            ,
            {
                "source": "192",
                "target": "161",
                "label": "region"
            }
            ,
            {
                "source": "192",
                "target": "131",
                "label": " issuance department"
            }
            ,
            {
                "source": "192",
                "target": "11",
                "label": "release date"
            }
            ,
            {
                "source": "192",
                "target": "41",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "192",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "192",
                "target": "82",
                "label": "sampling results"
            }
            ,
            {
                "source": "193",
                "target": "5",
                "label": "Sampling food"
            }
            ,
            {
                "source": "193",
                "target": "27",
                "label": "production date"
            }
            ,
            {
                "source": "193",
                "target": "160",
                "label": "region"
            }
            ,
            {
                "source": "193",
                "target": "134",
                "label": " issuance department"
            }
            ,
            {
                "source": "193",
                "target": "144",
                "label": "release date"
            }
            ,
            {
                "source": "193",
                "target": "48",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "193",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "193",
                "target": "83",
                "label": "sampling results"
            }
            ,
            {
                "source": "194",
                "target": "6",
                "label": "Sampling food"
            }
            ,
            {
                "source": "194",
                "target": "28",
                "label": "production date"
            }
            ,
            {
                "source": "194",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "194",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "194",
                "target": "145",
                "label": "release date"
            }
            ,
            {
                "source": "194",
                "target": "46",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "194",
                "target": "53",
                "label": "standard value"
            }
            ,
            {
                "source": "194",
                "target": "84",
                "label": "sampling results"
            }
            ,
            {
                "source": "195",
                "target": "7",
                "label": "Sampling food"
            }
            ,
            {
                "source": "195",
                "target": "29",
                "label": "production date"
            }
            ,
            {
                "source": "195",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "195",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "195",
                "target": "136",
                "label": "release date"
            }
            ,
            {
                "source": "195",
                "target": "45",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "195",
                "target": "53",
                "label": "standard value"
            }
            ,
            {
                "source": "195",
                "target": "85",
                "label": "sampling results"
            }
            ,
            {
                "source": "196",
                "target": "6",
                "label": "Sampling food"
            }
            ,
            {
                "source": "196",
                "target": "29",
                "label": "production date"
            }
            ,
            {
                "source": "196",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "196",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "196",
                "target": "146",
                "label": "release date"
            }
            ,
            {
                "source": "196",
                "target": "46",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "196",
                "target": "53",
                "label": "standard value"
            }
            ,
            {
                "source": "196",
                "target": "86",
                "label": "sampling results"
            }
            ,
            {
                "source": "197",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "197",
                "target": "29",
                "label": "production date"
            }
            ,
            {
                "source": "197",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "197",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "197",
                "target": "146",
                "label": "release date"
            }
            ,
            {
                "source": "197",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "197",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "197",
                "target": "87",
                "label": "sampling results"
            }
            ,
            {
                "source": "198",
                "target": "3",
                "label": "Sampling food"
            }
            ,
            {
                "source": "198",
                "target": "29",
                "label": "production date"
            }
            ,
            {
                "source": "198",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "198",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "198",
                "target": "146",
                "label": "release date"
            }
            ,
            {
                "source": "198",
                "target": "45",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "198",
                "target": "53",
                "label": "standard value"
            }
            ,
            {
                "source": "198",
                "target": "88",
                "label": "sampling results"
            }
            ,
            {
                "source": "199",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "199",
                "target": "30",
                "label": "production date"
            }
            ,
            {
                "source": "199",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "199",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "199",
                "target": "146",
                "label": "release date"
            }
            ,
            {
                "source": "199",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "199",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "199",
                "target": "89",
                "label": "sampling results"
            }
            ,
            {
                "source": "200",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "200",
                "target": "30",
                "label": "production date"
            }
            ,
            {
                "source": "200",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "200",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "200",
                "target": "136",
                "label": "release date"
            }
            ,
            {
                "source": "200",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "200",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "200",
                "target": "90",
                "label": "sampling results"
            }
            ,
            {
                "source": "201",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "201",
                "target": "30",
                "label": "production date"
            }
            ,
            {
                "source": "201",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "201",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "201",
                "target": "146",
                "label": "release date"
            }
            ,
            {
                "source": "201",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "201",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "201",
                "target": "91",
                "label": "sampling results"
            }
            ,
            {
                "source": "202",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "202",
                "target": "30",
                "label": "production date"
            }
            ,
            {
                "source": "202",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "202",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "202",
                "target": "146",
                "label": "release date"
            }
            ,
            {
                "source": "202",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "202",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "202",
                "target": "92",
                "label": "sampling results"
            }
            ,
            {
                "source": "203",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "203",
                "target": "30",
                "label": "production date"
            }
            ,
            {
                "source": "203",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "203",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "203",
                "target": "145",
                "label": "release date"
            }
            ,
            {
                "source": "203",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "203",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "203",
                "target": "93",
                "label": "sampling results"
            }
            ,
            {
                "source": "204",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "204",
                "target": "30",
                "label": "production date"
            }
            ,
            {
                "source": "204",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "204",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "204",
                "target": "145",
                "label": "release date"
            }
            ,
            {
                "source": "204",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "204",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "204",
                "target": "94",
                "label": "sampling results"
            }
            ,
            {
                "source": "205",
                "target": "5",
                "label": "Sampling food"
            }
            ,
            {
                "source": "205",
                "target": "30",
                "label": "production date"
            }
            ,
            {
                "source": "205",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "205",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "205",
                "target": "146",
                "label": "release date"
            }
            ,
            {
                "source": "205",
                "target": "51",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "205",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "205",
                "target": "95",
                "label": "sampling results"
            }
            ,
            {
                "source": "206",
                "target": "6",
                "label": "Sampling food"
            }
            ,
            {
                "source": "206",
                "target": "30",
                "label": "production date"
            }
            ,
            {
                "source": "206",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "206",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "206",
                "target": "146",
                "label": "release date"
            }
            ,
            {
                "source": "206",
                "target": "46",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "206",
                "target": "53",
                "label": "standard value"
            }
            ,
            {
                "source": "206",
                "target": "96",
                "label": "sampling results"
            }
            ,
            {
                "source": "207",
                "target": "6",
                "label": "Sampling food"
            }
            ,
            {
                "source": "207",
                "target": "30",
                "label": "production date"
            }
            ,
            {
                "source": "207",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "207",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "207",
                "target": "147",
                "label": "release date"
            }
            ,
            {
                "source": "207",
                "target": "46",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "207",
                "target": "53",
                "label": "standard value"
            }
            ,
            {
                "source": "207",
                "target": "97",
                "label": "sampling results"
            }
            ,
            {
                "source": "208",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "208",
                "target": "30",
                "label": "production date"
            }
            ,
            {
                "source": "208",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "208",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "208",
                "target": "146",
                "label": "release date"
            }
            ,
            {
                "source": "208",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "208",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "208",
                "target": "80",
                "label": "sampling results"
            }
            ,
            {
                "source": "209",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "209",
                "target": "31",
                "label": "production date"
            }
            ,
            {
                "source": "209",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "209",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "209",
                "target": "146",
                "label": "release date"
            }
            ,
            {
                "source": "209",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "209",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "209",
                "target": "98",
                "label": "sampling results"
            }
            ,
            {
                "source": "210",
                "target": "3",
                "label": "Sampling food"
            }
            ,
            {
                "source": "210",
                "target": "31",
                "label": "production date"
            }
            ,
            {
                "source": "210",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "210",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "210",
                "target": "136",
                "label": "release date"
            }
            ,
            {
                "source": "210",
                "target": "45",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "210",
                "target": "53",
                "label": "standard value"
            }
            ,
            {
                "source": "210",
                "target": "99",
                "label": "sampling results"
            }
            ,
            {
                "source": "211",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "211",
                "target": "32",
                "label": "production date"
            }
            ,
            {
                "source": "211",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "211",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "211",
                "target": "147",
                "label": "release date"
            }
            ,
            {
                "source": "211",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "211",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "211",
                "target": "100",
                "label": "sampling results"
            }
            ,
            {
                "source": "212",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "212",
                "target": "32",
                "label": "production date"
            }
            ,
            {
                "source": "212",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "212",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "212",
                "target": "145",
                "label": "release date"
            }
            ,
            {
                "source": "212",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "212",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "212",
                "target": "101",
                "label": "sampling results"
            }
            ,
            {
                "source": "213",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "213",
                "target": "32",
                "label": "production date"
            }
            ,
            {
                "source": "213",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "213",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "213",
                "target": "136",
                "label": "release date"
            }
            ,
            {
                "source": "213",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "213",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "213",
                "target": "102",
                "label": "sampling results"
            }
            ,
            {
                "source": "214",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "214",
                "target": "32",
                "label": "production date"
            }
            ,
            {
                "source": "214",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "214",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "214",
                "target": "145",
                "label": "release date"
            }
            ,
            {
                "source": "214",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "214",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "214",
                "target": "103",
                "label": "sampling results"
            }
            ,
            {
                "source": "215",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "215",
                "target": "32",
                "label": "production date"
            }
            ,
            {
                "source": "215",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "215",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "215",
                "target": "136",
                "label": "release date"
            }
            ,
            {
                "source": "215",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "215",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "215",
                "target": "104",
                "label": "sampling results"
            }
            ,
            {
                "source": "216",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "216",
                "target": "32",
                "label": "production date"
            }
            ,
            {
                "source": "216",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "216",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "216",
                "target": "147",
                "label": "release date"
            }
            ,
            {
                "source": "216",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "216",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "216",
                "target": "105",
                "label": "sampling results"
            }
            ,
            {
                "source": "217",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "217",
                "target": "32",
                "label": "production date"
            }
            ,
            {
                "source": "217",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "217",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "217",
                "target": "145",
                "label": "release date"
            }
            ,
            {
                "source": "217",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "217",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "217",
                "target": "106",
                "label": "sampling results"
            }
            ,
            {
                "source": "218",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "218",
                "target": "32",
                "label": "production date"
            }
            ,
            {
                "source": "218",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "218",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "218",
                "target": "145",
                "label": "release date"
            }
            ,
            {
                "source": "218",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "218",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "218",
                "target": "107",
                "label": "sampling results"
            }
            ,
            {
                "source": "219",
                "target": "3",
                "label": "Sampling food"
            }
            ,
            {
                "source": "219",
                "target": "32",
                "label": "production date"
            }
            ,
            {
                "source": "219",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "219",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "219",
                "target": "146",
                "label": "release date"
            }
            ,
            {
                "source": "219",
                "target": "45",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "219",
                "target": "53",
                "label": "standard value"
            }
            ,
            {
                "source": "219",
                "target": "108",
                "label": "sampling results"
            }
            ,
            {
                "source": "220",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "220",
                "target": "33",
                "label": "production date"
            }
            ,
            {
                "source": "220",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "220",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "220",
                "target": "147",
                "label": "release date"
            }
            ,
            {
                "source": "220",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "220",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "220",
                "target": "109",
                "label": "sampling results"
            }
            ,
            {
                "source": "221",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "221",
                "target": "33",
                "label": "production date"
            }
            ,
            {
                "source": "221",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "221",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "221",
                "target": "145",
                "label": "release date"
            }
            ,
            {
                "source": "221",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "221",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "221",
                "target": "110",
                "label": "sampling results"
            }
            ,
            {
                "source": "222",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "222",
                "target": "33",
                "label": "production date"
            }
            ,
            {
                "source": "222",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "222",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "222",
                "target": "147",
                "label": "release date"
            }
            ,
            {
                "source": "222",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "222",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "222",
                "target": "111",
                "label": "sampling results"
            }
            ,
            {
                "source": "223",
                "target": "3",
                "label": "Sampling food"
            }
            ,
            {
                "source": "223",
                "target": "33",
                "label": "production date"
            }
            ,
            {
                "source": "223",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "223",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "223",
                "target": "147",
                "label": "release date"
            }
            ,
            {
                "source": "223",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "223",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "223",
                "target": "112",
                "label": "sampling results"
            }
            ,
            {
                "source": "224",
                "target": "6",
                "label": "Sampling food"
            }
            ,
            {
                "source": "224",
                "target": "33",
                "label": "production date"
            }
            ,
            {
                "source": "224",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "224",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "224",
                "target": "146",
                "label": "release date"
            }
            ,
            {
                "source": "224",
                "target": "46",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "224",
                "target": "53",
                "label": "standard value"
            }
            ,
            {
                "source": "224",
                "target": "113",
                "label": "sampling results"
            }
            ,
            {
                "source": "225",
                "target": "6",
                "label": "Sampling food"
            }
            ,
            {
                "source": "225",
                "target": "33",
                "label": "production date"
            }
            ,
            {
                "source": "225",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "225",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "225",
                "target": "145",
                "label": "release date"
            }
            ,
            {
                "source": "225",
                "target": "46",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "225",
                "target": "53",
                "label": "standard value"
            }
            ,
            {
                "source": "225",
                "target": "114",
                "label": "sampling results"
            }
            ,
            {
                "source": "226",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "226",
                "target": "34",
                "label": "production date"
            }
            ,
            {
                "source": "226",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "226",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "226",
                "target": "146",
                "label": "release date"
            }
            ,
            {
                "source": "226",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "226",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "226",
                "target": "115",
                "label": "sampling results"
            }
            ,
            {
                "source": "227",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "227",
                "target": "34",
                "label": "production date"
            }
            ,
            {
                "source": "227",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "227",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "227",
                "target": "136",
                "label": "release date"
            }
            ,
            {
                "source": "227",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "227",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "227",
                "target": "116",
                "label": "sampling results"
            }
            ,
            {
                "source": "228",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "228",
                "target": "35",
                "label": "production date"
            }
            ,
            {
                "source": "228",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "228",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "228",
                "target": "147",
                "label": "release date"
            }
            ,
            {
                "source": "228",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "228",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "228",
                "target": "117",
                "label": "sampling results"
            }
            ,
            {
                "source": "229",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "229",
                "target": "35",
                "label": "production date"
            }
            ,
            {
                "source": "229",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "229",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "229",
                "target": "136",
                "label": "release date"
            }
            ,
            {
                "source": "229",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "229",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "229",
                "target": "118",
                "label": "sampling results"
            }
            ,
            {
                "source": "230",
                "target": "6",
                "label": "Sampling food"
            }
            ,
            {
                "source": "230",
                "target": "35",
                "label": "production date"
            }
            ,
            {
                "source": "230",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "230",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "230",
                "target": "145",
                "label": "release date"
            }
            ,
            {
                "source": "230",
                "target": "46",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "230",
                "target": "53",
                "label": "standard value"
            }
            ,
            {
                "source": "230",
                "target": "119",
                "label": "sampling results"
            }
            ,
            {
                "source": "231",
                "target": "3",
                "label": "Sampling food"
            }
            ,
            {
                "source": "231",
                "target": "36",
                "label": "production date"
            }
            ,
            {
                "source": "231",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "231",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "231",
                "target": "147",
                "label": "release date"
            }
            ,
            {
                "source": "231",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "231",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "231",
                "target": "120",
                "label": "sampling results"
            }
            ,
            {
                "source": "232",
                "target": "3",
                "label": "Sampling food"
            }
            ,
            {
                "source": "232",
                "target": "37",
                "label": "production date"
            }
            ,
            {
                "source": "232",
                "target": "162",
                "label": "region"
            }
            ,
            {
                "source": "232",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "232",
                "target": "136",
                "label": "release date"
            }
            ,
            {
                "source": "232",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "232",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "232",
                "target": "121",
                "label": "sampling results"
            }
            ,
            {
                "source": "233",
                "target": "3",
                "label": "Sampling food"
            }
            ,
            {
                "source": "233",
                "target": "37",
                "label": "production date"
            }
            ,
            {
                "source": "233",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "233",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "233",
                "target": "136",
                "label": "release date"
            }
            ,
            {
                "source": "233",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "233",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "233",
                "target": "121",
                "label": "sampling results"
            }
            ,
            {
                "source": "234",
                "target": "8",
                "label": "Sampling food"
            }
            ,
            {
                "source": "234",
                "target": "37",
                "label": "production date"
            }
            ,
            {
                "source": "234",
                "target": "152",
                "label": "region"
            }
            ,
            {
                "source": "234",
                "target": "135",
                "label": " issuance department"
            }
            ,
            {
                "source": "234",
                "target": "147",
                "label": "release date"
            }
            ,
            {
                "source": "234",
                "target": "50",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "234",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "234",
                "target": "122",
                "label": "sampling results"
            }
            ,
            {
                "source": "235",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "235",
                "target": "38",
                "label": "production date"
            }
            ,
            {
                "source": "235",
                "target": "156",
                "label": "region"
            }
            ,
            {
                "source": "235",
                "target": "130",
                "label": " issuance department"
            }
            ,
            {
                "source": "235",
                "target": "148",
                "label": "release date"
            }
            ,
            {
                "source": "235",
                "target": "41",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "235",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "235",
                "target": "123",
                "label": "sampling results"
            }
            ,
            {
                "source": "236",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "236",
                "target": "39",
                "label": "production date"
            }
            ,
            {
                "source": "236",
                "target": "156",
                "label": "region"
            }
            ,
            {
                "source": "236",
                "target": "130",
                "label": " issuance department"
            }
            ,
            {
                "source": "236",
                "target": "149",
                "label": "release date"
            }
            ,
            {
                "source": "236",
                "target": "45",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "236",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "236",
                "target": "124",
                "label": "sampling results"
            }
            ,
            {
                "source": "237",
                "target": "1",
                "label": "Sampling food"
            }
            ,
            {
                "source": "237",
                "target": "40",
                "label": "production date"
            }
            ,
            {
                "source": "237",
                "target": "156",
                "label": "region"
            }
            ,
            {
                "source": "237",
                "target": "130",
                "label": " issuance department"
            }
            ,
            {
                "source": "237",
                "target": "150",
                "label": "release date"
            }
            ,
            {
                "source": "237",
                "target": "41",
                "label": "residual veterinary drugs"
            }
            ,
            {
                "source": "237",
                "target": "52",
                "label": "standard value"
            }
            ,
            {
                "source": "237",
                "target": "125",
                "label": "sampling results"
            }
        ]
    }
    }
});