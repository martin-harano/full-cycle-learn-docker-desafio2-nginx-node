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


var insertName = function(param) {
    var sqlreq = `INSERT INTO people(name) values('` + param + `')`
    const connection = mysql.createConnection(config)
    connection.query(sqlreq)
    connection.end()
}

app.get('/', (req,res) => {

    insertName('Martin Harano')

    res.send('<h1>Full Cycle</h1>')
})

app.get('/:nameID', (req,res) => {
    insertName(req.params.nameID)
    res.send('<h1>Full Cycle</h1>')
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})