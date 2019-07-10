const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var mysqlConnection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('BDD connecté !')
    else
        console.log('Erreur de connection à la BDD : ' + JSON.stringify(err, undefined, 2));
});

//get USERS
app.get('/test', (req, res) => {
    mysqlConnection.query('SELECT * FROM ???', (err, rows, fields) => {
        if (!err)
        console.log(rows);
        else
        console.log(err);
    })
});


app.listen(8082);