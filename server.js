const express = require('express')
var server = express()
const db = require('./db') 
//import é do ES6, require é do node
const port = process.env.PORT || 4000
const bodyParser = require('body-parser')

server.use(bodyParser.json())

server.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next()
})

server.get('/empresas', function(req, res) {
    
    db.all(`SELECT * FROM empresas`, (err, rows)=> {
        if(err) {
            console.log(err)
            return res.send("Erro no banco de dados")
        }

    
        else {
            return res.send(rows.map(row=>row))
        }
    })
})

server.post('/empresas', function(req, res) {
    
    query = `
    INSERT INTO empresas(
        nome_empresa,
        code_empresa,
        bairro,
        situacao
        )VALUES(?,?,?,?);
    `
    
    values = [
        req.body.nome_empresa,
        req.body.code_empresa,
        req.body.bairro,
        req.body.situacao
    ]

    db.run(query, values , function(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no banco de dados")
        }
        return res.send("POST ENVIADO")
    })

})

server.listen(port, () => console.log(`app listenning on port ${port}`))