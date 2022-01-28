const express = require('express');
const app = express();
const handlebars = require('express-handlebars');


const host = '127.0.0.1';
const port = 8080;

app.enable('view cache');

app.get('/', function(req, res) {
  res.send('Hello world!');
});



app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
});
