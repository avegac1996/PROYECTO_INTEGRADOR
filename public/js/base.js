const { Client } = require("pg")
const client = new Client({
    user: "postgres",
    password: "liga1996",
    host: "localhost",
    port: 5432,
    database: "data"
})
client.connect()
    .then(() => console.log("coneccioón exitosa"))
    .then(() => client.query("select * from login"))
    .then(results => console.table(results.rows))
    .catch(e => console.log(e))
    .finally(() => client.end())