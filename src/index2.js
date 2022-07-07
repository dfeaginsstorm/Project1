const express = require('express');
const mongoose = require('mongoose');
const logger = require('./middleware/logger');
require('dotenv').config(); // One and done so I don't need the value from require
const cors = require('cors'); // Cross Origin Resource Sharing

const app = express();
const PORT = process.env.PORT || 8080; // Default to 8080 if not in .env
app.use(express.json()); // This is middleware that auto parses JSON into JS objects between each HTTP request and the endpoint
app.use(cors()); // Allow all traffic
app.use(logger);


app.use('/flights', require('./routes/flight.route.js'));
app.all('*', (req, res)=>{
    res.status(404).send('We don\'t have the resource you\'re looking for.')
});
mongoose.connect("mongodb+srv://dfeagins:Feng51631415@cluster0.iobz1an.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Successfully connected to MongoDB!')
})
.catch(err=>{
    console.error(err);
    //Options
    //Connect to fallback database
    //OR
    //Terminate process
    process.exit(1);
});

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}!`);
});