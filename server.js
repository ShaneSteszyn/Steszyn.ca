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

app.use(express.static(__dirname + '/public'));

console.log('Starting a server on '+CONFIG.port);

http
  .createServer(app)
  .listen(CONFIG.port);
