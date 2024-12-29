const express = require('express')
const app = express()
const port = 3000

const db = require("./connection");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//mongodb
db.connectDB("mongodb://127.0.0.1:27017/LinkLite")


app.listen(port, () => {
  console.log(`Running on localhost: ${port}`)
})