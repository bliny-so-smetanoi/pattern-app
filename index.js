const mongo = require('mongoose')
const express = require('express')
const config = require('config')
const path = require('path')
const ip = require('ip')

const app = express()
const PORT = config.get('port')

app.use(express.json({extended: true}))
app.use('/api/patterns', require('./routes/patterns-routes'))

async function start() {
    try{
        console.log('Initializing the server...')
        console.log('Trying to connect to the database...')

        await mongo.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        app.listen(PORT, () => console.log(`Server has been started at port: ${PORT}\nIP: ${ip.address()}`))
    } catch (e) {
        console.error(`Error: ${e.message}`)
        process.exit(1)
    }
}

start()

