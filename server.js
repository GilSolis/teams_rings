const express = require('express')
const app = express()
const PORT = 8000

const MongoClient = require('mongodb').MongoClient

let db;
let dbConnectionStr = 'mongodb+srv://Admin2:password@123@cluster0.egc7a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
let dbName = 'teamsRings'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

app.use('/', (request, respond) => {
    respond.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on PORT 8000`)
})