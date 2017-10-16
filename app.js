const express = require('express');
const path = require('path');

// Init App
var app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

// Home Route
app.get('/', function(req, res){
  var language = (req.headers['accept-language'].split(';')[0]).split(',');
  var software = (req.headers['user-agent'].split('(')[1]).split(')');
  var result = {
    ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    language: language[0],
    software: software[0]
  };
  res.render('whoami',{
    result:result
  });
});

// Start Server
app.listen(3000, function(){
  console.log('Server Started on port 3000...');
});
