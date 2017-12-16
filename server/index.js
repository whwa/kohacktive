var express = require('express');
var app = express();
console.log(__dirname)
app.use(express.static(__dirname + '/../client/'));

// app.get('/', function(req, res){
//   res.send('hello world');
// });

app.listen(3000);

