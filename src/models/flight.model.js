// Mongoose allows us to provide a schema for our documents
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//o	Flight Number
//	Departure Date
//o	Arrival date
//o	departure time
//o	arrival time
//o	departure airport
//o	arrival airport
// Create a Movie schema
const flightSchema = new Schema({
    //_id is auto created unless specified
    // _id is the primary key
    FlightNumber: {type: String,
        unique: [true, 'This flight already exists.'],
        required: [true, 'Flight number is required.']
    },
    DepartureDate: String, 
    ArrivalDate: String,
    DepartureTime: String,
    ArrivalTime: String,
    DepartureAirport: String,
    ArrivalAirport: String,
    PassengerLimit: String,
    PassengerNumber: String
});


const Flight = mongoose.model('Flight', flightSchema, 'Flights')
module.exports = Flight; 