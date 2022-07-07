import './Home.css';
import airplane from '../airplane-png-27948.png';
export const Home = () =>{
    return (
        <>
        <center>
        <h1>Welcome to the Flight-App!</h1>
        <div><img src = {airplane} alt=""/></div>
        </center>
        </>
    );
}