const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

app.set('view engine', 'ejs');
 app.get('/', (req, res) => {
    res.sendfile('./views/login.ejs');
 });






app.listen(8080);