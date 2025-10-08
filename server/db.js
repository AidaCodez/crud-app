const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "a4a4",
    port: 5432,
    database: "perntodo"
});

module.export = pool;