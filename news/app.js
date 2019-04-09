const request = require('superagent');
require('superagent-charset')(request);
const cheerio = require('cheerio');
const util = require('util');
const Koa = require('koa');
const Router = require('koa-router');
const db = require('./db');
const schedule = require('node-schedule');
const app = new Koa();
const router = new Router();

app.context.db = db;

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Headers', '*');
    ctx.set('Access-Control-Allow-Origin', '*');
    await next();
})
/**
 * 获取新闻接口
 * query page
 *  */
router.get('/',async ctx=>{
    try{
        const page = ctx.query.page;
        const findNews = await ctx.db.query(
            "select * from news order by c_date desc limit ?,20",
            [20*page]
        );
        const count = await ctx.db.query(
            "select count(id) from news"
        );
        const source = await ctx.db.query(
            "select source, count(*) from news group by source"
        );
        if(findNews.length>0){
            ctx.status = 200;
            ctx.body = {news:findNews,count,source,page};
        }else{
            ctx.status = 201;
            ctx.body = {msg:"暂无更新或获取数据失败"};
        }
    }catch(e){
        console.log(e);
        ctx.status = 500;
        ctx.body = {msg:"崩了"};
    }
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(8123,()=>{
    console.log('app id running on port 8123');
})







//新浪新闻 每分钟刷新一次
const xinlang = function scheduleCronstyle() {
    schedule.scheduleJob('30 * * * * *', function () {
        try {
            const url1 = 'https://search.sina.com.cn/?q=%B5%E7%BE%BA&range=title&c=news&sort=time&col=&source=&from=&country=&size=&time=&a=&page=%d&pf=0&ps=0&dpc=1'
            for (var i = 2; i < 11; i++) {
                var url = util.format(url1, i);
                request.get(url).
                    set({
                        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
                        'referer': util.format(url1, i - 1),
                        'cookie': 'SINAGLOBAL=10.79.229.20_1547986098.650327; SCF=Ar8sNV30PJ7UmgWFsKphEij9JwPbrrSMCMaDAjRhXihsKSuRf_Y8ydcQs9C6haeH4qGI978s6dvD0m-nSEKTmSM.; sso_info=v02m6alo5qztKWRk6SljoOIpZCjgKWRk6SljpOkpY6DmKWRk5iljpOYpY6TnKadlqWkj5OYuI6DgLiNk4S1jpOYwA==; U_TRS1=00000024.387c4b08.5ca5c514.9a6fbb1c; U_TRS2=00000024.38884b08.5ca5c514.0463fc01; UOR=www.google.com,blog.sina.com.cn,; Apache=119.103.220.193_1554367767.983038; ULV=1554738567146:2:2:1:119.103.220.193_1554367767.983038:1554367732964; lxlrttp=1554343419'
                    }).binary(true)
                    .charset('gb2312').end((err, res) => {
                        if (err) {
                            // console.log(err);
                            return;
                        }
                        let $ = cheerio.load(res.text);
        
                        $("#result>.box-result").each(async (i, elem) => {
                            var url = $(elem).find('h2').find('a').attr('href');
                            var t_title = $(elem).find('h2').find('a').text();
                            var title = t_title.replace(/\n/g, '').replace(/\s/g, '');
                            var other = $(elem).find('h2').find('span').text().split(' ');
                            var author = other[0];
                            var date = other[1] + ' ' + other[2]
        
                            if (title && url) {
                                const a = await db.query(
                                    "select * from news where id =? or title=?",
                                    [url, title]
                                );
                                if (a.length > 0) return true;
                                else {
                                    var item = [url, title, author, date, '新浪新闻', url];
                                    db.query(
                                        "insert into news (id,title,author,c_date,source,url) values(?,?,?,?,?,?) ",
                                        item,
                                        function (err, data) {
                                            if (err) {
                                                // console.log(err);
                                                console.log("数据库错误");
                                            }
                                        }
                                    );
                                }
                            }
                        });
                    })
            }
        } catch (e) {
            // console.log(e);
        }
    });
}

//今日头条 每分钟刷新一次
const toutiao = function scheduleCronstyle() {
    schedule.scheduleJob('30 * * * * *', function () {
        try {
            //今日头条
            const time = new Date().getTime();
            const url2 = 'https://www.toutiao.com/api/search/content/?aid=24&app_name=web_search&offset=0&format=json&keyword=%E7%94%B5%E7%AB%9E&autoload=true&count=20&en_qc=1&cur_tab=1&from=search_tab&pd=synthesis&timestamp=%d'
            var url = util.format(url2, time)
            request.get(url).end(async (err, res) => {
                if (err) {
                    // console.log(err);
                    return;
                }
                var res_json = JSON.parse(res.text);
                var data = res_json.data;
                for (var i = 0; i < data.length; i++) {
                    //去除非新闻内容
                    if (data[i].title && data[i].id) {
                        const a = await db.query(
                            "select * from news where id =? or title=?",
                            [data[i].id,data[i].title]
                        );
                        if (a.length > 0) continue;
                        else {
                            var item = [
                                data[i].id,
                                data[i].title,
                                data[i].media_name,
                                data[i].datetime,
                                "今日头条",
                                data[i].article_url
                            ];
                            db.query(
                                "insert into news (id,title,author,c_date,source,url) values(?,?,?,?,?,?) ",
                                item,
                                function (err, data) {
                                    if (err) {
                                        console.log("数据库错误");
                                    }
                                }
                            );
                        }
                    }
                }
            });
        } catch (e) {
            // console.log(e);
        }
    });
}

toutiao();
xinlang();