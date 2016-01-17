var http = require('http');
var express = require('express');
var app = express();

process.argv.forEach(function(v){
  if(v === '--development') {
    global.PRODUCTION = false;
    global.CONFIG = require('./config/main.js').development;
  } else {
    global.PRODUCTION = true;
    global.CONFIG = require('./config/main.js').production;
  }
});

app.use('/static', express.static('public'));

app.use(express.static('app/public'));

app.use('/', function(req, res, next){
  console.log('/');
  res.sendfile('public/index.html')
});


console.log('Starting a server on '+CONFIG.port);

http
  .createServer(app)
  .listen(CONFIG.port);
