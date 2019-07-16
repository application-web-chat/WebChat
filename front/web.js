const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const ejs = require('ejs');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var api = 'http://localhost:8082'

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'))
app.use(bodyParser.json());

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/chat', urlencodedParser, (req, res) => {
    //res.render('chat.ejs')

    axios.post('http://localhost:8082/new', req.body)
        .then(function (resu) {
            console.log(resu);
            console.log('Enregistrement OK');
            axios.get('http://localhost:8082/users')
                .then(function (resu) {
                   // console.log(resu)
                   // console.log('data ok')
                   // console.log('*****stringify*****')
                   // console.log(JSON.stringify(resu.data));
                   // console.log('*****sans stringify*****')
                   // console.log(resu.data[0].user_name);
                    res.render('chat', { users: resu.data });
                })
                .catch(function (error) {
                    console.log(error);
                });
            axios.get('http://localhost:8082/msgs')
                .then
           // res.end();           
        })
        .catch(function (error) {
            console.log(error);
        });
});

//app.get('/chat', function (req, res) {
//
//    axios.get('http://localhost:8082/chat')
//        .then(function (resu) {
//            console.log(resu)
//            res.render('chat', { users: resu.data });
//        })
//        .catch(function (error) {
//            console.log(error);
//        });
//        res.end();
//
//});



app.listen(8080);