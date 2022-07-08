import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppNav } from './features/AppNav';
import { Flights, Error, Home, Delete, Update, NewFlight} from './pages';


const App = () => {

   

    return(
        <>
           <BrowserRouter>
           <AppNav/>
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/newflights" element = {<NewFlight/>}/>
                <Route path="/flights" element = {<Flights/>}/>
                <Route path="/deleteflight" element = {<Delete/>}/>
                <Route path="/updateflight" element = {<Update/>}/>
                <Route path="*" element={<Error />} />
                
            </Routes>
           </BrowserRouter>
            
        </>
    );
}
export default App;