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

app.post('/submit', urlencodedParser, function (req, res) {

    axios.post('http://localhost:8082/submit', req.body)
        .then(function (res) {
            res.redirect('http://localhost:8080/chat');
            console.log('OK');
            
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.get('/chat', function (req, res) {

    axios.get('http://localhost:8082/chat')
        .then(function (resu) {
            console.log(resu)
            res.render('chat', { 'users': resu.data });
        })
        .catch(function (error) {
            console.log(error);
        });

});






app.listen(8080);