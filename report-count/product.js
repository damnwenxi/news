
const Koa = require('koa');
const Router = require('koa-router');
const KoaBody = require('koa-body');
const db = require('./db');
const app = new Koa();
const router = new Router();

app.use(KoaBody());
app.context.db = db;

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Headers', '*');
    ctx.set('Access-Control-Allow-Origin', '*');
    await next();
})

router.post('/add', async ctx => {
    // console.log(ctx.request.body);
    try {
        const items = ctx.request.body.list;
        for (var i = 0; i < items.length; i++) {
            const year = items[i].approvalno.slice(5, 9);
            const item = [
                items[i].gamename,
                items[i].unitname,
                items[i].copyrightname,
                items[i].approvalno,
                items[i].isbnno,
                items[i].gametype,
                year
            ];

            const saveItem = await db.query(
                "insert into product (gamename,unitname,copyrightname,approvalno,isbnno,type,year) values(?,?,?,?,?,?,?) ",
                item
            );
            if (saveItem.affectedRows > 0) {
                console.log(i);
                ctx.body = { msg: i };
                ctx.status = 200;
            }
        }
    }catch(e){
        ctx.status = 500;
        ctx.body = {msg:"崩了"};
    }
})

app.use(router.routes()).use(router.allowedMethods());
app.listen(8123, () => {
    console.log('app id running on port 8123');
});