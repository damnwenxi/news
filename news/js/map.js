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
  
var school = [
    {name:"北京",value:['北京汇佳职业学院(动画与游戏制作)','现代软件学院(游戏动漫)']},
    {name:"天津",value:0},
    {name:"河北",value:['石家庄职业技术学院(游戏设计)','张家口职业技术学院(软件技术-手机游戏开发方向)','河北软件职业技术学院(软件技术-手机游戏开发方向)','河北工程技术学院(软件技术-游戏开发方向)','石家庄科技信息职业学院(软件技术-游戏开发方向)','河北软件职业技术学院(电子竞技运动与管理)','河北美术学院(游戏设计)']},
    {name:"山西",value:['山西体育职业学院(电子竞技运动与管理)']},
    {name:"内蒙古",value:['内蒙古电子信息职业技术学院(游戏设计、开发)','兴安职业技术学院(电子竞技运动与管理)','锡林郭勒职业学院(电子竞技)']},
    {name:"辽宁",value:['大连东软信息学院(游戏设计方向)']},
    {name:"吉林",value:0},
    {name:"黑龙江",value:['哈尔滨科学技术职业学院(游戏设计)','黑龙江商业职业学院(电子竞技运动与管理)']},
    {name:"上海",value:['上海工艺美术职业学院(游戏设计)','上海工商外国语职业学院(游戏设计)','上海邦德职业技术学院(游戏设计)','上海电影艺术职业学院(游戏设计)']},
    {name:"江苏",value:['苏州工艺美术职业技术学院(游戏设计)','建东职业技术学院(游戏设计)','宿迁职业技术学院(动漫制作技术)','无锡工艺职业技术学院(游戏设计)','中国传媒大学南广学院(艺术与科技)','镇江市高等专科学校(电子竞技运动与管理)','苏州工业园区职业技术学院(电子竞技运动与管理)']},
    {name:"浙江",value:0},
    {name:"安徽",value:['安徽绿海商务职业学院(游戏设计)','合肥共达职业技术学院(电子竞技运动与管理)']},
    {name:"福建",value:['福州职业技术学院(游戏设计)','三明医学科技职业学院(电子竞技运动与管理)']},
    {name:"江西",value:['九江职业技术学院(游戏设计)','江西工业工程职业技术学院(数字媒体应用技术)','江西工程职业学院(网络游戏开发与测试方向)','南昌影视传播职业学院(手机动漫游戏设计方向)','南昌航空大学(游戏软件开发)','南昌工学院(电子竞技运动与管理)']},
    {name:"山东",value:['山东电子职业技术学院(游戏设计)','山东艺术设计职业学院(艺术设计)','青岛农业大学(动画设计)']},
    {name:"河南",value:['南阳师范学院(游戏开发技术方向)','郑州财税金融职业学院(动漫制作技术)','黄淮学院(游戏美术)','南阳理工学院(游戏开发技术方向)','三门峡社会管理职业学院(电子竞技运动与管理)']},
    {name:"湖北",value:['长江职业学院(游戏设计)','武汉工程职业技术学院(动漫制作技术)','湖北轻工职业技术学院(广告设计与制作)','武汉软件工程职业学院(影视动画)','湖北科技职业学院(游戏设计)','湖北商贸学院(计算机科学与技术)','湖北财税职业学院(电子竞技运动与管理)']},
    {name:"湖南",value:['湖南科技职业学院(游戏软件开发方向)','张家界航空工业职业技术学院(游戏软件方向)','湖南工艺美术职业学院(动漫制作技术)','湘潭大学(游戏设计方向)','湖南体育职业学院(电子竞技运动与管理)']},
    {name:"重庆",value:['重庆科创职业学院(游戏软件技术方向)','重庆艺术工程职业学院(游戏美工与电子竞技)','重庆工程学院(游戏设计)','重庆信息技术职业学院(电子竞技运动与管理)','重庆艺术工程职业学院(游戏设计)']},
    {name:"四川",value:['四川国际标榜职业学院(游戏动漫制作与技术)','成都艺术职业学院(数字游戏)','四川传媒学院(影视动画、游戏设计)','成都文理学院(游戏美术设计与制作)','四川艺术职业学院(游戏设计)','四川科技职业学院(电子竞技运动与管理)','四川文化产业职业学院(游戏设计)','四川电影电视学院(游戏竞技和管理方向)','四川音乐学院(游戏设计与制作)','电子科技大学成都学院(游戏程序设计)','四川传媒学院(3D影视动画、游戏美术)','四川大学锦江学院(广播电视编导)']},
    {name:"贵州",value:['贵州大学明德学院(游戏软件设计方向)']},
    {name:"云南",value:0},
    {name:"西藏",value:0},
    {name:"陕西",value:['西安汽车科技职业学院(电子竞技运动与管理)']},
    {name:"甘肃",value:['兰州文理学院(动画游戏与影视后期)']},
    {name:"青海",value:0},
    {name:"宁夏",value:0},
    {name:"新疆",value:0},
    {name:"广东",value:['广东轻工职业技术学院(游戏设计)','深圳职业技术学院(游戏设计)','广东科学技术职业学院(游戏美术设计方向)','广东职业技术学院(游戏制作)','广东机电职业技术学院(手机游戏开发)','深圳信息职业技术学院(游戏设计)','广东文艺职业学院(游戏设计)','广东理工职业学院(游戏设计)','广州松田职业学院(游戏设计)']},
    {name:"广西",value:0},
    {name:"海南",value:['海南职业技术学院(游戏设计)','海南软件职业技术学院(游戏设计)','海南体育职业技术学院(电子竞技运动与管理)']},
]    
var geoCoordMap = {};

var getSchool = function(name){
    for(var i=0; i<school.length; i++){
        if(name == school[i].name && !school[i].value){
            return "<ul> <li><a>"+ school[i].name+":</a></li> <br/> <li><a>"+"该地区没有电竞相关高校"+"</a></li>"+"</ul>"
        }
        else if(name == school[i].name && school[i].value){
            var list = "<ul><li><a>" +school[i].name+":</a></li> <br/> <li><a>"+school[i].value.join("</a></li><br/><li><a>") + "</a></li>"+"</ul>";
            return list;
        }
    }
}

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
            else return getSchool(params.data.name);
        },
        position: 'right'
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
            color: ['#A5CC82','#00467F' ] // 蓝绿
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
        roam: false,
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
                    color: '#0d2349'
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

var money = 'image://data:image/png;base64,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';

var college = 'image://data:image/png;base64,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';

var college2 = 'image://data:image/png;base64,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';

var college3 = 'image://data:image/png;base64,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';

var college4 = 'image://data:image/png;base64,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';