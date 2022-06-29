const express = require('express');
const mongoose = require('mongoose');
const app = express();

//
const routes = require('./routes/routes');


require('dotenv').config();
const mongoString = process.env.DATABASE_URL
// connection
mongoose.connect(mongoString);
const database = mongoose.connection
// checking and error msg
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json());

app.use('/api', routes) 

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})