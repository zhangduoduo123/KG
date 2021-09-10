define(function () {
    return{
        data:{
            "nodes":[{
                "id": 1,
                "label": "食品名称",
                "size": 66,
                "scale": "1.0",
                "color": "rgb(121,205,205)"
            }
                ,
                {
                    "id": 2,
                    "label": "添加剂残留标准",
                    "size": 66,
                    "scale": "1.0",
                    "color": "rgb(121,205,205)"
                }
                ,
                {
                    "id": 3,
                    "label": "重金属污染残留标准",
                    "size": 66,
                    "scale": "1.0",
                    "color": "rgb(121,205,205)"
                }
                ,
                {
                    "id": 4,
                    "label": "农药抽检数据",
                    "size": 66,
                    "scale": "1.0",
                    "color": "rgb(121,205,205)"
                }
                ,
                {
                    "id": 5,
                    "label": "农药残留标准",
                    "size": 66,
                    "scale": "1.0",
                    "color": "rgb(121,205,205)"
                }
                ,
                {
                    "id": 6,
                    "label": "食品生产通用规范",
                    "size": 66,
                    "scale": "1.0",
                    "color": "rgb(121,205,205)"
                }
                ,
                {
                    "id": 7,
                    "label": "农药通用规范",
                    "size": 66,
                    "scale": "1.0",
                    "color": "rgb(121,205,205)"
                }
                ,
                {
                    "id": 8,
                    "label": "兽药残留标准",
                    "size": 66,
                    "scale": "1.0",
                    "color": "rgb(121,205,205)"
                }
                ,
                {
                    "id": 9,
                    "label": "兽药抽检数据",
                    "size": 66,
                    "scale": "1.0",
                    "color": "rgb(121,205,205)"
                }
                ,
                {
                    "id": 10,
                    "label": "食品分类",
                    "size": 66,
                    "scale": "1.0",
                    "color": "rgb(121,205,205)"
                },
                {
                    "id": 11,
                    "label": "食品生产管理知识",
                    "size": 66,
                    "scale": "1.0",
                    "color": "rgb(121,205,205)"
                }
            ],
            "links":[
                {
                    "source": 1,
                    "target": 2,
                    "label": "食品相关的添加剂残留标准"
                },
                {
                    "source": 1,
                    "target": 3,
                    "label": "食品相关的重金属污染标准"
                },
                {
                    "source": 1,
                    "target": 4,
                    "label": "食品相关的农药抽检数据"
                },
                {
                    "source": 1,
                    "target": 5,
                    "label": "食品相关的农药残留标准"
                },
                {
                    "source": 1,
                    "target": 6,
                    "label": "食品相关的生产规范"
                },
                {
                    "source": 1,
                    "target": 7,
                    "label": "食品相关的农药通用规范"
                },
                {
                    "source": 1,
                    "target": 8,
                    "label": "食品相关的兽药残留标准"
                },
                {
                    "source": 1,
                    "target": 9,
                    "label": "食品相关的兽药抽检数据"
                },
                {
                    "source": 1,
                    "target": 10,
                    "label": "食品分类知识"
                },
                {
                    "source": 1,
                    "target": 11,
                    "label": "食品相关的生产管理"
                },
                {
                    "source": 8,
                    "target": 9,
                    "label": "提供标准"
                },
                {
                    "source": 5,
                    "target": 4,
                    "label": "提供标准"
                }
            ]
        }
    }

});