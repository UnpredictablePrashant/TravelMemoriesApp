const express = require('express')
const cors = require('cors');

require('dotenv').config()

const conn = require('./conn')

PORT = process.env.PORT

const app = express()
const tripRoutes = require('./routes/trip.routes')

app.use(express.json())
app.use(cors());


app.use('/trip', tripRoutes)

app.get('/hello', (req,res)=>{
    res.send('Hello World!')
})

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})