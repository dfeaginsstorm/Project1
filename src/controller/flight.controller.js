const Flight = require('../models/flight.model');


const createFlight = async ({ FlightNumber, DepartureDate, ArrivalDate, DepartureTime, ArrivalTime, DepartureAirport, ArrivalAirport, PassengerLimit, PassengerNumber}) => {
    
    try { 
        const flight = new Flight({
            FlightNumber,
            DepartureDate, 
            ArrivalDate,
            DepartureTime,
            ArrivalTime,
            DepartureAirport,
            ArrivalAirport,
            PassengerLimit,
            PassengerNumber
        }); // This alone does not save to the database, this just simply prepares for the database
        await flight.save(); // Saves the newly created movie to the database

        return flight._id; // Return the id of the newly created. Could also return the entire object
    } 
    // This catch will occur if any of the values are up to standard
    catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

const deleteFlight = async (FlightNumberparam)=>{

    try{ const flights = await Flight.deleteOne({FlightNumber: FlightNumberparam});
    return FlightNumberparam;
    } catch (err){
        console.error(err);
        throw{ status: 400, message: err};
    }
    
}
const findAllFlights = async (limit=0) => {
    const flights = await Flight.find(); // 
    return flights;
}

const updateFlight = async ({FlightNumber,
    DepartureDate, 
    ArrivalDate,
    DepartureTime,
    ArrivalTime,
    DepartureAirport,
    ArrivalAirport,
    PassengerLimit,
    PassengerNumber}) =>{
       
        try{ const flights = await Flight.updateOne({FlightNumber: FlightNumber},
            {  FlightNumber,
               DepartureDate, 
                ArrivalDate,
                DepartureTime,
                ArrivalTime,
                DepartureAirport,
                ArrivalAirport,
                PassengerLimit,
                PassengerNumber}  
            );
            if(flights==null)
                throw "Something went wrong!";
    return FlightNumber;
    } catch (err){
        console.error(err);
        throw{ status: 400, message: err};
    }    
    }



module.exports = { createFlight, findAllFlights, deleteFlight, updateFlight};