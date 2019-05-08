/*
 Navicat MySQL Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : news

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 08/05/2019 01:44:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for school
-- ----------------------------
DROP TABLE IF EXISTS `school`;
CREATE TABLE `school` (
  `year` decimal(4,0) NOT NULL,
  `school_id` decimal(6,0) NOT NULL,
  `id` varchar(21) NOT NULL,
  `spname` varchar(40) NOT NULL,
  `name` varchar(13) NOT NULL,
  `f211` decimal(1,0) NOT NULL,
  `province_name` varchar(3) NOT NULL,
  `f985` decimal(1,0) NOT NULL,
  `type` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of school
-- ----------------------------
BEGIN;
INSERT INTO `school` VALUES (2019, 2028, 'gkschoolspecial126535', '游戏设计', '湖南工艺美术职业学院', 2, '湖南', 2, '专科');
INSERT INTO `school` VALUES (2019, 2543, 'gkschoolspecial163339', '艺术与科技（电子竞技设计与运营）', '中国传媒大学南广学院', 2, '江苏', 2, '专科');
INSERT INTO `school` VALUES (2019, 385, 'gkschoolspecial20530', '动画系（游戏设计方向）', '湘潭大学', 2, '湖南', 2, '本科');
INSERT INTO `school` VALUES (2019, 487, 'gkschoolspecial27236', '软件技术（游戏开发技术方向）', '南阳师范学院', 2, '河南', 2, '专科');
INSERT INTO `school` VALUES (2019, 491, 'gkschoolspecial27626', '动画（含二维动画、三维动画、虚拟现实与游戏设计方向）', '青岛农业大学', 2, '山东', 2, '本科');
INSERT INTO `school` VALUES (2019, 612, 'gkschoolspecial33641', '软件技术（游戏制作）', '广东职业技术学院', 2, '广东', 2, '专科');
INSERT INTO `school` VALUES (2019, 615, 'gkschoolspecial33718', '软件技术（手机游戏开发）', '广东机电职业技术学院', 2, '广东', 2, '专科');
INSERT INTO `school` VALUES (2019, 630, 'gkschoolspecial34252', '游戏设计', '广东文艺职业学院', 2, '广东', 2, '专科');
INSERT INTO `school` VALUES (2019, 646, 'gkschoolspecial34686', '游戏设计', '深圳职业技术学院', 2, '广东', 2, '专科');
INSERT INTO `school` VALUES (2019, 659, 'gkschoolspecial35043', '游戏设计', '河北美术学院', 2, '河北', 2, '专科');
INSERT INTO `school` VALUES (2019, 662, 'gkschoolspecial35130', '游戏设计', '上海邦德职业技术学院', 2, '上海', 2, '专科');
INSERT INTO `school` VALUES (2019, 671, 'gkschoolspecial35297', '游戏设计', '上海工艺美术职业学院', 2, '上海', 2, '专科');
INSERT INTO `school` VALUES (2019, 696, 'gkschoolspecial35990', '软件技术（手机游戏开发方向）', '张家口职业技术学院', 2, '河北', 2, '专科');
INSERT INTO `school` VALUES (2019, 701, 'gkschoolspecial36197', '游戏设计', '石家庄职业技术学院', 2, '河北', 2, '专科');
INSERT INTO `school` VALUES (2019, 717, 'gkschoolspecial36729', '软件技术（游戏软件开发方向）', '河北软件职业技术学院', 2, '河北', 2, '专科');
INSERT INTO `school` VALUES (2019, 717, 'gkschoolspecial36743', '电子竞技运动与管理', '河北软件职业技术学院', 2, '河北', 2, '专科');
INSERT INTO `school` VALUES (2019, 721, 'gkschoolspecial36862', '软件技术（含游戏开发方向）', '河北工程技术学院', 2, '河北', 2, '专科');
INSERT INTO `school` VALUES (2019, 728, 'gkschoolspecial37058', '软件技术（游戏开发方向）', '石家庄科技信息职业学院', 2, '河北', 2, '专科');
INSERT INTO `school` VALUES (2019, 741, 'gkschoolspecial37479', '电子竞技运动与管理', '黑龙江商业职业学院', 2, '黑龙江', 2, '专科');
INSERT INTO `school` VALUES (2019, 773, 'gkschoolspecial38392', '软件技术（数字游戏）', '成都艺术职业学院', 2, '四川', 2, '专科');
INSERT INTO `school` VALUES (2019, 781, 'gkschoolspecial39018', '软件技术（游戏动漫制作与技术）', '四川国际标榜职业学院', 2, '四川', 2, '专科');
INSERT INTO `school` VALUES (2019, 823, 'gkschoolspecial40478', '动画与游戏制作', '北京汇佳职业学院', 2, '北京', 2, '专科');
INSERT INTO `school` VALUES (2019, 853, 'gkschoolspecial41056', '软件工程（游戏开发技术方向）', '南阳理工学院', 2, '河南', 2, '专科');
INSERT INTO `school` VALUES (2019, 884, 'gkschoolspecial42066', '动画（游戏美术方向）', '黄淮学院', 2, '河南', 2, '专科');
INSERT INTO `school` VALUES (2019, 893, 'gkschoolspecial42375', '游戏设计', '九江职业技术学院', 2, '江西', 2, '专科');
INSERT INTO `school` VALUES (2019, 922, 'gkschoolspecial43280', '软件技术（网络游戏开发与测试方向）', '江西工程职业学院', 2, '江西', 2, '专科');
INSERT INTO `school` VALUES (2019, 956, 'gkschoolspecial44617', '数字媒体应用技术（九星订单班3D游戏设计方向）', '江西工业工程职业技术学院', 2, '江西', 2, '专科');
INSERT INTO `school` VALUES (2019, 985, 'gkschoolspecial45615', '游戏设计', '深圳信息职业技术学院', 2, '广东', 2, '专科');
INSERT INTO `school` VALUES (2019, 992, 'gkschoolspecial45777', '游戏设计（美术类）', '广东理工职业学院', 2, '广东', 2, '专科');
INSERT INTO `school` VALUES (2019, 1002, 'gkschoolspecial46088', '数字媒体艺术设计（游戏美术设计方向）', '广东科学技术职业学院', 2, '广东', 2, '专科');
INSERT INTO `school` VALUES (2019, 1106, 'gkschoolspecial49583', '游戏设计', '长江职业学院', 2, '湖北', 2, '专科');
INSERT INTO `school` VALUES (2019, 1131, 'gkschoolspecial50185', '软件工程（游戏程序设计）', '电子科技大学成都学院', 2, '四川', 2, '专科');
INSERT INTO `school` VALUES (2019, 1163, 'gkschoolspecial51070', '软件技术（游戏设计与制作方向）', '内蒙古电子信息职业技术学院', 2, '内蒙古', 2, '专科');
INSERT INTO `school` VALUES (2019, 1163, 'gkschoolspecial51097', '软件技术（游戏开发工程师方向）', '内蒙古电子信息职业技术学院', 2, '内蒙古', 2, '专科');
INSERT INTO `school` VALUES (2019, 1192, 'gkschoolspecial51988', '游戏设计', '建东职业技术学院', 2, '江苏', 2, '专科');
INSERT INTO `school` VALUES (2019, 1278, 'gkschoolspecial54204', '游戏设计', '四川文化产业职业学院', 2, '四川', 2, '专科');
INSERT INTO `school` VALUES (2019, 1348, 'gkschoolspecial55123', '软件技术（游戏软件技术方向）', '重庆科创职业学院', 2, '重庆', 2, '专科');
INSERT INTO `school` VALUES (2019, 1361, 'gkschoolspecial55417', '游戏设计', '无锡工艺职业技术学院', 2, '江苏', 2, '专科');
INSERT INTO `school` VALUES (2019, 1375, 'gkschoolspecial55627', '动画（—游戏设计与制作）', '四川音乐学院', 2, '四川', 2, '专科');
INSERT INTO `school` VALUES (2019, 1382, 'gkschoolspecial55683', '游戏设计', '海南职业技术学院', 2, '海南', 2, '专科');
INSERT INTO `school` VALUES (2019, 1390, 'gkschoolspecial56015', '游戏设计', '海南软件职业技术学院', 2, '海南', 2, '专科');
INSERT INTO `school` VALUES (2019, 1413, 'gkschoolspecial56669', '动漫制作技术（游戏设计与制作方向）', '武汉工程职业技术学院', 2, '湖北', 2, '专科');
INSERT INTO `school` VALUES (2019, 1499, 'gkschoolspecial57905', '游戏设计', '重庆工程学院', 2, '重庆', 2, '专科');
INSERT INTO `school` VALUES (2019, 1500, 'gkschoolspecial57952', '电子竞技运动与管理', '重庆信息技术职业学院', 2, '重庆', 2, '专科');
INSERT INTO `school` VALUES (2019, 1625, 'gkschoolspecial60904', '计算机应用（计算机网络技术、电子竞技运动与管理、云计算技术与应用）', '兴安职业技术学院', 2, '内蒙古', 2, '专科');
INSERT INTO `school` VALUES (2019, 1628, 'gkschoolspecial61030', '电子竞技', '锡林郭勒职业学院', 2, '内蒙古', 2, '专科');
INSERT INTO `school` VALUES (2019, 1654, 'gkschoolspecial61543', '电子竞技运动与管理', '山西体育职业学院', 2, '山西', 2, '专科');
INSERT INTO `school` VALUES (2019, 1711, 'gkschoolspecial62812', '数字媒体技术（动画游戏与影视后期）', '兰州文理学院', 2, '甘肃', 2, '专科');
INSERT INTO `school` VALUES (2019, 1724, 'gkschoolspecial63281', '游戏设计', '上海电影艺术职业学院', 2, '上海', 2, '专科');
INSERT INTO `school` VALUES (2019, 1727, 'gkschoolspecial63301', '游戏设计（简介）', '上海工商外国语职业学院', 2, '上海', 2, '专科');
INSERT INTO `school` VALUES (2019, 1727, 'gkschoolspecial63302', '游戏设计（（中日合作）简介）', '上海工商外国语职业学院', 2, '上海', 2, '专科');
INSERT INTO `school` VALUES (2019, 1850, 'gkschoolspecial66036', '电子竞技运动与管理', '合肥共达职业技术学院', 2, '安徽', 2, '专科');
INSERT INTO `school` VALUES (2019, 1851, 'gkschoolspecial66051', '游戏设计', '安徽绿海商务职业学院', 2, '安徽', 2, '专科');
INSERT INTO `school` VALUES (2019, 1867, 'gkschoolspecial66571', '游戏设计', '福州职业技术学院', 2, '福建', 2, '专科');
INSERT INTO `school` VALUES (2019, 1883, 'gkschoolspecial66997', '电子竞技运动与管理', '三明医学科技职业学院', 2, '福建', 2, '专科');
INSERT INTO `school` VALUES (2019, 1951, 'gkschoolspecial68931', '广告设计与制作（游戏设计方向）', '湖北轻工职业技术学院', 2, '湖北', 2, '专科');
INSERT INTO `school` VALUES (2019, 1952, 'gkschoolspecial68979', '影视动画（网络游戏、影视特效设计制作方向）', '武汉软件工程职业学院', 2, '湖北', 2, '专科');
INSERT INTO `school` VALUES (2019, 1959, 'gkschoolspecial69161', '电子竞技运动与管理', '湖北财税职业学院', 2, '湖北', 2, '专科');
INSERT INTO `school` VALUES (2019, 1966, 'gkschoolspecial69462', '计算机科学与技术（包含WEB前端开发VRAR游戏开发方向）', '湖北商贸学院', 2, '湖北', 2, '专科');
INSERT INTO `school` VALUES (2019, 1982, 'gkschoolspecial69758', '游戏设计', '湖北科技职业学院', 2, '湖北', 2, '专科');
INSERT INTO `school` VALUES (2019, 1999, 'gkschoolspecial70258', '软件技术（游戏软件开发方向）', '湖南科技职业学院', 2, '湖南', 2, '专科');
INSERT INTO `school` VALUES (2019, 2002, 'gkschoolspecial70320', '电子竞技运动与管理', '湖南体育职业学院', 2, '湖南', 2, '专科');
INSERT INTO `school` VALUES (2019, 2013, 'gkschoolspecial70552', '软件技术（游戏软件方向）', '张家界航空工业职业技术学院', 2, '湖南', 2, '专科');
INSERT INTO `school` VALUES (2019, 2028, 'gkschoolspecial70916', '动漫制作技术（游戏设计与制作方向）', '湖南工艺美术职业学院', 2, '湖南', 2, '专科');
INSERT INTO `school` VALUES (2019, 2048, 'gkschoolspecial71366', '游戏设计', '广东轻工职业技术学院', 2, '广东', 2, '专科');
INSERT INTO `school` VALUES (2019, 2063, 'gkschoolspecial71869', '游戏设计', '广州松田职业学院', 2, '广东', 2, '专科');
INSERT INTO `school` VALUES (2019, 2087, 'gkschoolspecial72309', '游戏设计', '四川艺术职业学院', 2, '四川', 2, '专科');
INSERT INTO `school` VALUES (2019, 2090, 'gkschoolspecial72368', '游戏设计', '四川科技职业学院', 2, '四川', 2, '专科');
INSERT INTO `school` VALUES (2019, 2090, 'gkschoolspecial72396', '电子竞技运动与管理', '四川科技职业学院', 2, '四川', 2, '专科');
INSERT INTO `school` VALUES (2019, 2122, 'gkschoolspecial73542', '游戏设计', '山东电子职业技术学院', 2, '山东', 2, '专科');
INSERT INTO `school` VALUES (2019, 2196, 'gkschoolspecial75368', '游戏设计', '哈尔滨科学技术职业学院', 2, '黑龙江', 2, '专科');
INSERT INTO `school` VALUES (2019, 2201, 'gkschoolspecial75423', '电子竞技运动与管理', '镇江市高等专科学校', 2, '江苏', 2, '专科');
INSERT INTO `school` VALUES (2019, 2202, 'gkschoolspecial75467', '游戏设计', '苏州工艺美术职业技术学院', 2, '江苏', 2, '专科');
INSERT INTO `school` VALUES (2019, 2211, 'gkschoolspecial75756', '电子竞技运动与管理', '苏州工业园区职业技术学院', 2, '江苏', 2, '专科');
INSERT INTO `school` VALUES (2019, 2213, 'gkschoolspecial75809', '动漫制作技术（网络游戏方向）', '宿迁职业技术学院', 2, '江苏', 2, '专科');
INSERT INTO `school` VALUES (2019, 2257, 'gkschoolspecial77111', '电子竞技运动与管理', '西安汽车科技职业学院', 2, '陕西', 2, '专科');
INSERT INTO `school` VALUES (2019, 2276, 'gkschoolspecial77525', '计算机科学与技术（游戏软件设计方向）', '贵州大学明德学院', 2, '贵州', 2, '专科');
INSERT INTO `school` VALUES (2019, 2351, 'gkschoolspecial78822', '艺术设计（游戏设计方向）', '大连东软信息学院', 2, '辽宁', 2, '专科');
INSERT INTO `school` VALUES (2019, 2494, 'gkschoolspecial82381', '影视动画（影视动画分设数字动画、动漫游戏、MG动画方向）', '四川传媒学院', 2, '四川', 2, '专科');
INSERT INTO `school` VALUES (2019, 2494, 'gkschoolspecial82384', '游戏设计', '四川传媒学院', 2, '四川', 2, '专科');
INSERT INTO `school` VALUES (2019, 2494, 'gkschoolspecial82392', '动画（3D影视动画、游戏美术）', '四川传媒学院', 2, '四川', 2, '专科');
INSERT INTO `school` VALUES (2019, 2494, 'gkschoolspecial82419', '电子竞技运动与管理', '四川传媒学院', 2, '四川', 2, '专科');
INSERT INTO `school` VALUES (2019, 2494, 'gkschoolspecial82434', '艺术与科技（电子竞技分析方向）', '四川传媒学院', 2, '四川', 2, '专科');
INSERT INTO `school` VALUES (2019, 2496, 'gkschoolspecial82583', '广告设计与制作（游戏美术设计与制作）', '成都文理学院', 2, '四川', 2, '专科');
INSERT INTO `school` VALUES (2019, 2501, 'gkschoolspecial82850', '广播电视编导（电子竞技方向）', '四川大学锦江学院', 2, '四川', 2, '专科');
INSERT INTO `school` VALUES (2019, 2818, 'gkschoolspecial86778', '游戏设计（游戏美工与电子竞技）', '重庆艺术工程职业学院', 2, '重庆', 2, '专科');
INSERT INTO `school` VALUES (2019, 2818, 'gkschoolspecial86779', '游戏设计（VR游戏设计）', '重庆艺术工程职业学院', 2, '重庆', 2, '专科');
INSERT INTO `school` VALUES (2019, 2843, 'gkschoolspecial87345', '电子竞技运动与管理', '南昌工学院', 2, '江西', 2, '专科');
INSERT INTO `school` VALUES (2019, 2917, 'gkschoolspecial87843', '数字媒体艺术（含数字影视、动漫游戏、电子竞技方向）', '四川电影电视学院', 2, '四川', 2, '专科');
INSERT INTO `school` VALUES (2019, 2917, 'gkschoolspecial87847', '动画（影视动画、动漫产品设计、动画游戏方向）', '四川电影电视学院', 2, '四川', 2, '专科');
INSERT INTO `school` VALUES (2019, 2917, 'gkschoolspecial87860', '数字媒体艺术设计（含新媒体制作、影视特效、游戏竞技和管理方向）', '四川电影电视学院', 2, '四川', 2, '专科');
INSERT INTO `school` VALUES (2019, 2917, 'gkschoolspecial87861', '电子竞技运动与管理（含电子竞技运动选手管理方向和电子竞技运动产业管理及服务方向）', '四川电影电视学院', 2, '四川', 2, '专科');
INSERT INTO `school` VALUES (2019, 3182, 'gkschoolspecial89901', '游戏动漫', '现代软件学院', 2, '北京', 2, '专科');
INSERT INTO `school` VALUES (2019, 3192, 'gkschoolspecial89981', '艺术设计（游戏动漫方向）', '山东艺术设计职业学院', 2, '山东', 2, '专科');
INSERT INTO `school` VALUES (2019, 3248, 'gkschoolspecial90674', '数字媒体应用技术（手机动漫游戏设计方向）', '南昌影视传播职业学院', 2, '江西', 2, '专科');
INSERT INTO `school` VALUES (2019, 3269, 'gkschoolspecial90859', '电子竞技运动与管理', '海南体育职业技术学院', 2, '海南', 2, '专科');
INSERT INTO `school` VALUES (2019, 3367, 'gkschoolspecial91632', '动漫制作技术（影视、游戏特效师方向）', '郑州财税金融职业学院', 2, '河南', 2, '专科');
INSERT INTO `school` VALUES (2019, 3368, 'gkschoolspecial91643', '电子竞技运动与管理', '三门峡社会管理职业学院', 2, '河南', 2, '专科');
INSERT INTO `school` VALUES (2019, 177, 'gkschoolspecial9576', '教育技术学（游戏软件开发）', '南昌航空大学', 2, '江西', 2, '本科');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
