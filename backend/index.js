const express = require('express')
require('dotenv').config()

const conn = require('./conn')

PORT = process.env.PORT

const app = express()
const tripRoutes = require('./routes/trip.routes')

app.use(express.json())


app.use('/trip', tripRoutes)

app.get('/hello', (req,res)=>{
    res.send('Hello World!')
})

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})