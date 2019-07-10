const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mysql@7',
    database: 'dbchat'
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('BDD connecté !')
    else
        console.log('Erreur de connection à la BDD : ' + JSON.stringify(err, undefined, 2));
});

//Get USERS
app.get('/test', (req, res) => {
    mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
        if (!err)
        console.log(rows);
        else
        console.log(err);
    })
});

//Get a User
app.get('/test/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM users WHERE user_id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            console.log(rows);
        else
            console.log(err);
    })
});

//Delete a User
app.delete('/test/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM users WHERE user_id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
        res.send('Delete succesfully !');
        else
        console.log(err);
    })
});

//Insert a User

app.listen(8082);