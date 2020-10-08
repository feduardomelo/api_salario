const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./empresas.db')

db.serialize(function() {

    db.run(`
        CREATE TABLE IF NOT EXISTS empresas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome_empresa TEXT,
            code_empresa NUMBER,
            bairro TEXT,
            situacao TEXT
        );
    `)

   /* const query = `
        INSERT INTO empresas(
            nome_empresa,
            code_empresa,
            bairro,
            situacao
            )VALUES(?,?,?,?);
        `
        
    const values = [
        "cesar",
        1,
        "boa viagem",
        "ativo"
    ]


    db.run(query, values, function(err) {
        if (err) return console.log(err)

        console.log(this)
    })

    db.all(`SELECT * FROM empresas`, function(err, rows) {
        if(err) return console.log(err)

        console.log(rows)
    })
*/
})

module.exports = db