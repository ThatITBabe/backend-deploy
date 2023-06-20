const dotenv = require('dotenv').config()
const colors = require('colors')
const express = require('express')
const { errorHandler} = require('./middleware/errorMiddleware')

const app = express()

const port = 9000

const goalRouter = require('./route/goalRoute')
// const mongoose = require('mongoose')

const connectDB = require('./config/db')

connectDB();

// mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
// const db = mongoose.connection;
// db.on('error', err => console.log(err))
// db.once('open', () => console.log('Connected to Database Successfully'))

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api', goalRouter)

app.use(errorHandler)

app.listen(port, () => console.log('Server running on port 9000'))