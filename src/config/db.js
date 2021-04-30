const { Pool } = require("pg")

module.exports = new Pool({
    user: 'postgres',
    password: "289180289180",
    host: "localhost",
    port: 5432,
    database: "startstore"
})