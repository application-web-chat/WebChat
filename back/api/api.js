const express = require('express');
const fs = require('fs');
var app = express();

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


app.listen(8082);