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
        });
        await flight.save(); 

        return flight._id; 
    } 
    
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