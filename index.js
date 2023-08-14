const express = require('express');
const dotenv = require('dotenv');


// env. file configuration

dotenv.config();

// Create Express APP

const app = express();
const port = process.env.PORT || 8000;



//Define the first APP Route

app.get('/', (req, res) => {
    // Send Hello World
    res.send('Welcome to API Restful Express + TS + React + Swagger + Mongoose');
});

// Execute APP and Listen Request to PORT 

app.listen(port, ()=> {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
});






