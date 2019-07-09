const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const ejs = require('ejs');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var api = 'http://localhost:8082'

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'))

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/', (req, res) => {
    res.render('chat.ejs');
    
    axios.post(api + '/addUser', req.body)
        .then(res) => {
            console.log('ok');
        };
        .catch(error) => {
            console.log(error);
        };
});






app.listen(8080);