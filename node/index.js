const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')

function insertName(param, connection) {
    var sqlreq = `INSERT INTO people(name) values('` + param + `');`
    connection.query(sqlreq)
}

function getNames(callback, connection) {
    var sqlreq = `SELECT name FROM people;`
    connection.query(sqlreq, function(err, results, field) {
        var names = ""
        for(var i = 0; i < results.length; i++) {
            names = names + results[i].name + '<br>' 
        }
        return callback(names)
    });
}

app.get('/', (req,res) => {
    const connection = mysql.createConnection(config)
    insertName('Martin Harano', connection)
    getNames(function(names) {
        res.send('<h1>Full Cycle Rocks!</h1>' + names)
    },connection);
    connection.end()
})

app.get('/:nameID', (req,res) => {
    const connection = mysql.createConnection(config)
    insertName(req.params.nameID,connection)
    getNames(function(names) {
        res.send('<h1>Full Cycle Rocks!</h1>' + names)
    },connection);
    connection.end()
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})