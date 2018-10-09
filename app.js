const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const views = require('koa-views')
const index = require('./index')

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

const main = static(__dirname + '/public');
app.use(main);
app.use(views(__dirname + '/views'));
app.use(index.routes(), index.allowedMethods())