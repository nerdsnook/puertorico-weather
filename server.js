var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/sanjuan', function (req, res) {
  res.sendFile(path.join(__dirname + '/map.html'));
});

app.get('/bayamon', function (req, res) {
  res.sendFile(path.join(__dirname + '/map2.html'));
});

app.get('/carolina', function (req, res) {
  res.sendFile(path.join(__dirname + '/map3.html'));
});

app.get('/ponce', function (req, res) {
  res.sendFile(path.join(__dirname + '/map4.html'));
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("started Server");
})
