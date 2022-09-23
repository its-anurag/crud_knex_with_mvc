const knex = require('knex')({
    client: "mysql",
    connection : {
        host : "localhost",
        user : "root",
        database : "author",
        password : "Anurag@123"
    }
})

knex.schema.createTable("users", t=>{
    t.increments(),
    t.string('name'),
    t.string("email"),
    t.string("password")
}).then(()=>{
    console.log("table created...........");
}).catch(()=>{
    console.log('table create allready...');
})

module.exports = knex
