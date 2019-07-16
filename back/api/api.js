const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mysql@7',
    database: 'dbchat'
});

//Connection à la base de donnée
mysqlConnection.connect((err) => {
    if (!err)
        console.log('BDD connecté !')
    else
        console.log('Erreur de connection à la BDD : ' + JSON.stringify(err, undefined, 2));
});

//Afficher tous les utilisateurs
app.get('/chat', (req, res) => {
    mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
        if (!err)
        console.log(rows);
        else
        console.log(err);
    })
});

//Afficher un utilisateur
app.get('/chat/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM users WHERE user_id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            console.log(rows);
        else
            console.log(err);
    })
});

//Supprimer un utilisateur
app.delete('/editProfil/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM users WHERE user_id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
        res.send('Delete succesfully !');
        else
        console.log(err);
    })
});

//Ajouter un utilisateur
app.post('/submit', (req, res) => {
    console.log("Connected!");
    var sql = "INSERT INTO users (user_name) VALUES ?";
    mysqlConnection.query(sql,[req.body.login], (err, result) => {
        if (err) throw err;
        console.log("1 record inserted");
    });
});
//test
app.listen(8082);