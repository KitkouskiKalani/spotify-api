const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const path= require('path');
const cors= require('cors');

const app= express();

const PORT = process.env.PORT || 3001;

const DATABASE_URL = process.env.DATABASE_URL;


mongoose.connect(DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', error => console.log(error))
db.once('open', ()=> console.log("Database Connection Established"))

const spotifyRouter = require('./routes/spotify')
app.use('/spotify', spotifyRouter)

app.listen(PORT, ()=> {
    console.log(`Server running on ${PORT}`)
})