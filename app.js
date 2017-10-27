const express = require('express');
const path = require('path');

// Init App
var app = express();

// Port Number
const port = process.env.PORT || 8080;

// Load View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

// Home Route
app.get('/', function(req, res){
  res.render('whoami');
});

// Route Files
let whoami = require('./routes/whoami');
app.use('/whoami', whoami);

// Start Server
app.listen(3000, function(){
  console.log('Server Started on port 3000...');
});
