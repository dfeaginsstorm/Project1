import { useEffect, useState } from 'react';
import axios from 'axios';
//import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import './FlightList.css';
export const FlightList = () =>{
    const [flights, setFlights] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:8080/flights')
        .then(res=>setFlights(res.data));
    }, []);

    return(
        <>
            
            {flights.map(flight=> {
                return(
                <form className = "CurrentFlights">
                <div>{'Flight Number: '}<strong>{flight.FlightNumber}</strong></div>
                <div>{'Departure Date: '+flight.DepartureDate}</div>
                <div>{'Arrival Date: '+ flight.ArrivalDate}</div>
                <div>{'Departure Time: '+flight.DepartureTime}</div>
                <div>{'Arrival Time: '+flight.ArrivalTime}</div>
                <div>{'Departure Airport: '+flight.DepartureAirport}</div>
                <div>{'Arrival Airport: ' +flight.ArrivalAirport}</div>
                <div>{'Passenger Limit: ' +flight.PassengerLimit}</div>
                <div>{'Number of Passengers: ' +flight.PassengerNumber}</div>
                </form>
                )
            })}
        </>
    );
}