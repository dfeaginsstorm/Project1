const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
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