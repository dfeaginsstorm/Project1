import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const InputTable = () =>{
    const FlightNumberRef = useRef();
    const DepartureDateRef = useRef();
    const ArrivalDateRef = useRef();
    const DepartureTimeRef = useRef();
    const ArrivalTimeRef = useRef();
    const DepartureAirportRef = useRef();
    const ArrivalAirportRef = useRef();
    const PassengerLimitRef = useRef();
    const PassengerNumberRef = useRef();
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if(parseInt(PassengerLimitRef.current.value)<parseInt(PassengerNumberRef.current.value)){
                alert("Passenger number exceeds limit.");
            }
            if(parseInt(PassengerLimitRef.current.value)>=parseInt(PassengerNumberRef.current.value)){
            await axios.post('http://localhost:8080/flights', 
                            { FlightNumber: FlightNumberRef.current.value, DepartureDate: DepartureDateRef.current.value,
                            ArrivalDate: ArrivalDateRef.current.value, DepartureTime: DepartureTimeRef.current.value,ArrivalTime:ArrivalTimeRef.current.value,
                             DepartureAirport: DepartureAirportRef.current.value,
                        ArrivalAirport: ArrivalAirportRef.current.value, PassengerLimit: PassengerLimitRef.current.value, PassengerNumber: PassengerNumberRef.current.value });
            navigate('../', {replace: true});
                            }
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <form className = "NewFlightForm" onSubmit = {handleSubmit}>
            <div>
                <label htmlFor="FlightNumber">Flight Number</label><div><input type = "text" id="FlightNumber" ref={FlightNumberRef}/></div>
            <label htmlFor="DepartureDate">Departure Date</label><div><input type = "date" id = "DepartureDate" ref={DepartureDateRef}/></div>
            
            
        
            
            <label htmlFor="ArrivalDate">Arrival Date</label><div><input type = "date" id = "ArrivalDate" ref={ArrivalDateRef}/></div>
            
          
            
             <label htmlFor="Departure Time">Departure Time</label><div><input type = "text" id = "Departure Time" ref={DepartureTimeRef}/></div>
           
            
            
            <label htmlFor="ArrivalTime">Arrival Time</label><div><input type = "text" id = "ArrivalTime" ref={ArrivalTimeRef}/></div>
            
            <label htmlFor="DepartureAirport">Departure Airport</label><div><input type = "text" id = "DepartureAirport" ref={DepartureAirportRef}/></div>
           
            <label htmlFor="ArrivalAirport">Arrival Airport</label><div><input type = "text" id = "ArrivalAirport" ref={ArrivalAirportRef}/></div>

            <label htmlFor="PassengerLimit">Passenger Limit</label><div><input type = "text" id = "PassengerLimit" ref={PassengerLimitRef}/></div>

            <label htmlFor="PassengerNumber">Number of Passengers</label><div><input type = "text" id = "PassengerNumber" ref={PassengerNumberRef}/></div>
            <input type ="submit" value ="Add Flight"/>
            </div>
        </form>
    );
}
//o	Flight Number
//	Departure Date
//o	Arrival date
//o	departure time
//o	arrival time
//o	departure airport
//o	arrival airport
