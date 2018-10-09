var https = require('./grpcconnect');
const router = require('koa-router')()

router.get("/", async(ctx, next) => {
    await ctx.render('index');
})

router.get('/SayHello', async(ctx, next) => {
    var params = { name: "森林" };
    var json = await https.SayHello(params);
    ctx.body = json;
});

module.exports = router;