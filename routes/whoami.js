const express = require('express');
const router = express.Router();

// Get method
router.get('/', function(req, res){
  var language = (req.headers['accept-language'].split(';')[0]).split(',');
  var software = (req.headers['user-agent'].split('(')[1]).split(')');
  var result = {
    ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    language: language[0],
    software: software[0]
  };
  res.send(result);
});

// Export Router
module.exports = router
