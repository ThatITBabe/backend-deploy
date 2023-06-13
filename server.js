require('dotenv').config()
const express = require('express')
const app = express()
const port = 9000
const goalRouter = require('./route/goals')
// const mongoose = require('mongoose')

const connectDB = require('./config/db')

connectDB();

// mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
// const db = mongoose.connection;
// db.on('error', err => console.log(err))
// db.once('open', () => console.log('Connected to Database Successfully'))

app.use(express.json())

app.use('/api', goalRouter)

app.listen(port, () => console.log('Server running on port 9000'))