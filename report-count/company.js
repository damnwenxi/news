const request = require('superagent');
require('superagent-charset')(request);
const util = require('util');
const Koa = require('koa');
const Router = require('koa-router');
const db = require('./db');
const app = new Koa();
const router = new Router();

app.context.db = db;

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Headers', '*');
    ctx.set('Access-Control-Allow-Origin', '*');
    await next();
})

app.use(router.routes()).use(router.allowedMethods());
app.listen(8123, () => {
    console.log('app id running on port 8123');
});



// 中国游戏企业版图
try {
    // 中国游企版图数据
    const url2 = 'http://www.gamemap.cgigc.com.cn/gamecms/api/queryCorporationDetail?callback=jQuery21406469870844570424_1556092060053&queryType=2&id=%d&_=%s'
    // 循环开始
    for (var i = 1; i < 3000; i++) {
        // 闭包 自执行函数
        (function get(i) {
            // 时间戳
            const time = new Date().getTime();
            var url = util.format(url2, i, time);
            request.get(url).end(async (err, res) => {
                if (err) {
                    // console.log(err);
                    return;
                }
                const temp = res.text;
                const str = temp.replace(/jQuery\w*\(/g, '').slice(0, -1);
                const result = JSON.parse(str);
                // console.log(result);
                const item = [
                    i,  //id
                    'http://gamemap.cgigc.com.cn/detail.html?type=2&queryid=' + i,
                    result.data.bgPicUrl,   // logo图片
                    result.data.desc.text,   // 简介
                    result.data.items[0].text,   // 企业全称
                    result.data.items[1].text,   // 企业简称
                    result.data.items[2].text,   // 企业英文名字
                    result.msg   // 是否成功
                ]
                // console.log(item);
                const insertItem = await db.query(
                    "insert ignore into company (id,url,logo,description,name,short_name,english_name,is_success) values(?,?,?,?,?,?,?,?) ",
                    item
                );
                if (insertItem.affectedRows < 1) {
                    console.log("添加记录失败");
                }
            })
        }(i))
    }
    console.log("结束");
} catch (e) {
    // console.log(e);
}



// http://www.gamemap.cgigc.com.cn/gamecms/api/queryCorporation/list?callback=jQuery21405709954093628873_1556090166541&queryType=2&params%5B%5D=0&pageNo=4&_=155609016655
// http://www.gamemap.cgigc.com.cn/gamecms/api/queryCorporation/list?callback=jQuery21405709954093628873_1556090166541&queryType=2&params%5B%5D=0&params%5B%5D=0&params%5B%5D=0&params%5B%5D=0&params%5B%5D=0&params%5B%5D=0&params%5B%5D=&params%5B%5D=1&params%5B%5D=&pageNo=5&_=1556090166551