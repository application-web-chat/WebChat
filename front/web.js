const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const ejs = require('ejs');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var api = 'http://localhost:8082'

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'))

app.get('/chat', (req, res) => {
    res.render('chat.ejs');
});

//test
//app.get('/', (req, res) => {
//    res.send('login.ejs');
//})
//
//app.get('/editProfile', (req, res) => {
//    res.send('editProfile.ejs');
//})

//app.post('/', (req, res) => {
//    res.render('chat.ejs');
//    
//    axios.post(api + '/addUser', req.body)
//        .then(res) => {
//            console.log('ok');
//        };
//        .catch(error) => {
//            console.log(error);
//        };
//});

//app.get('/chat', function (req, res) {
//
//    axios.get('http://localhost:8082/test')
//        .then(function (resu) {
//            console.log(resu)
//            res.render('chat', { 'users': req.body });
//        })
//        .catch(function (error) {
//            console.log(error);
//        });
//
//});






app.listen(8080);