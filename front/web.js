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

let usrList = "";
let msgs = "";

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/', (req, res) => {
    res.render('login.ejs');
});

app.get('/chat', (req, res) => {
    res.render('chat.ejs');
});

//Ajout utilisateur
app.post('/chat', urlencodedParser, (req, res) => {

    axios.post('http://localhost:8082/new', req.body)
        .then(function (resul) {
            console.log(resul);
            console.log('Enregistrement OK');
            axios.get('http://localhost:8082/users')
                .then(function (resu) {
                    usrList = resu.data
                    res.render('chat', { users: resu.data});
                    console.log('users ok')
                })
                .catch(function (error) {
                    console.log(error);
                });     
        })
        
});

//Suppression utilisateur
app.post('/delete', function (req, res) {
    let id = req.params.id;
    axios.delete("http://localhost:8082/delete/" + id)
        .then(function (resp) {
            res.redirect("http://localhost:8080/chat")
            console.log(resp)
            res.status(200).send();
        })
        .catch(function (err) {
            console.log(err);
            res.status(404).send();
        });
});

//Envoie message
app.post('/newMsg', urlencodedParser, (request, result) => {
console.log(request.body);
    axios.post('http://localhost:8082/newMsg', request.body)
        .then(function (res) {
            console.log(res);
            console.log('message send');
            result.render('chat');
        })
        .catch(function(err) {
            console.log(err);
        })
});

//Afficher les messages
app.get('/msgs', function (req, res){
    axios.get('http://localhost:8082/msgs')
        .then(function (resu) {
            msgs = resu.data
            console.log('msg ok')
            res.render('chat', { messages: resu.data });
        })
        .catch(function (error) {
            console.log(error);
        });
});


app.listen(8080);