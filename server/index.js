const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const helpers = require('./helpers')

app.use(express.static(__dirname + '/../client/'));

app.post('/', helpers.sendMessage, function(req, res){
  res.send('delivered');
});

app.listen(3000);

