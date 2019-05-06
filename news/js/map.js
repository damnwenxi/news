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