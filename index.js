const express = require('express')
const app = express()
const port = 5001
const router = require('./ROUTER/routers')

app.use(express.json())
app.use("/" ,router)



app.listen(port, () => 
console.log(`Example app listening on port ${port}!`))