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

function insertName(param) {
    var sqlreq = `INSERT INTO people(name) values('` + param + `');`
    const connection = mysql.createConnection(config)
    connection.query(sqlreq)
    connection.end()
}

function getNames(callback) {
    var sqlreq = `SELECT name FROM people;`
    const connection = mysql.createConnection(config)
    connection.query(sqlreq, function(err, results, field) {
        var names = ""
        for(var i = 0; i < results.length; i++) {
            names = names + results[i].name + '<br>' 
        }
        return callback(names)
    });
    connection.end()
}

app.get('/', (req,res) => {

    insertName('Martin Harano')
    getNames(function(names) {
        res.send('<h1>Full Cycle Rocks!</h1>' + names)
    });
})

app.get('/:nameID', (req,res) => {
    insertName(req.params.nameID)
    getNames(function(names) {
        res.send('<h1>Full Cycle Rocks!</h1>' + names)
    });
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})