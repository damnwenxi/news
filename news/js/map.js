// 秋雁南飞：
// 此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果
// 默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
// 当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。
// http://echarts.baidu.com/option.html#series-map.geoIndex
// 并且加了pin气泡图标以示数值大小
// // 全局变量区:参考江西绿色金融（谢谢：本来想用闭包实现接口数据调用，没时间了）

// 本图作者：参考秋雁南飞的《投票统计》一图，网址：http://gallery.echartsjs.com/editor.html?c=xrJU-aE-LG

var MapOfSchool = echarts.init(document.getElementById('mapOfSchool'));

var subname = '数据爬取自中国教育网'
var nameColor = " rgb(55, 75, 113)"
var name_fontFamily = '等线'
var subname_fontSize = 15
var name_fontSize = 18
var mapName = 'china'

var data = [
    {name:"北京",value:2},
    {name:"天津",value:0},
    {name:"河北",value:7},
    {name:"山西",value:1},
    {name:"内蒙古",value:3},
    {name:"辽宁",value:1},
    {name:"吉林",value:0},
    {name:"黑龙江",value:2},
    {name:"上海",value:4},
    {name:"江苏",value:7},
    {name:"浙江",value:0},
    {name:"安徽",value:2},
    {name:"福建",value:2},
    {name:"江西",value:6},
    {name:"山东",value:3},
    {name:"河南",value:5},
    {name:"湖北",value:7},
    {name:"湖南",value:5},
    {name:"重庆",value:5},
    {name:"四川",value:12},
    {name:"贵州",value:1},
    {name:"云南",value:0},
    {name:"西藏",value:0},
    {name:"陕西",value:1},
    {name:"甘肃",value:1},
    {name:"青海",value:0},
    {name:"宁夏",value:0},
    {name:"新疆",value:0},
    {name:"广东",value:9},
    {name:"广西",value:0},
    {name:"海南",value:3},
    ];
    
var geoCoordMap = {};

/*获取地图数据*/
MapOfSchool.showLoading();
var mapFeatures = echarts.getMap(mapName).geoJson.features;
MapOfSchool.hideLoading();
mapFeatures.forEach(function(v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;

});

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                num: data[i].value[2]
            });
        }
    }
    return res;
};
option = {
    title: {
        subtext: subname,
        x: 'center',
        textStyle: {
            color: nameColor,
            fontFamily: name_fontFamily,
            fontSize: name_fontSize
        },
        subtextStyle:{
            fontSize:subname_fontSize,
            fontFamily:name_fontFamily
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: 
        function(params) {
            if(params.seriesName == '点') return params.data.value[2];
            else if(params.data == undefined) return 'none';
            else return params.data.name+': '+params.data.value+' 所';
        }
    },
    visualMap: {
        show: true,
        min: 0,
        max: 12,
        left: '10%',
        top: 'center',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true,
        seriesIndex: [1],
        inRange: {
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
            color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿

        }
    },
    /*工具按钮组*/
    toolbox: {
        show: true,
        orient: 'vertical',
        right: '10%',
        top: 'center',
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    geo: {
        show: true,
        map: mapName,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#031525',
                borderColor: '#3B5077',
            },
            emphasis: {
                areaColor: '#2B91B7',
            }
        }
    },
    series: [
        {
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'bottom',
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#05C3F9'
                }
            }
        },
        {
            type: 'map',
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: false,
            data: data
        },
        {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //气泡
            symbolSize: function(val) {
                if(val[2] == 0) return 0;
                else return val[2]*2+20;
            },
            label: {
                normal: {
                    formatter: function(params) {
                        return params.data.value[2];
                    },
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 10,
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#F62157', //标志颜色
                }
            },
            zlevel: 6,
            data: convertData(data)
        }
    ]
};


MapOfSchool.setOption(option);