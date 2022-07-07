import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const DeleteTable = () =>{
    const navigate = useNavigate();
    const FlightNumberRef = useRef();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.delete(`http://localhost:8080/flights/${FlightNumberRef.current.value}`);
            navigate('../', {replace: true});
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <form className = "DeleteFlight" onSubmit = {handleSubmit}>
            <div>
                <label htmlFor="FlightNumber">Flight Number</label><div><input type = "text" id="FlightNumber" ref={FlightNumberRef}/></div>
            <input type ="submit" value ="Delete Flight"/>
            </div>
        </form>
    );


}