import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppNav } from './features/AppNav';
//import { AppNav } from './features';
import { Landing, Flights, Error, Home, Delete, Update} from './pages';

//import ThemeContext, { themes } from './contexts/ThemeContext';
const App = () => {

   // const [shouldRender, setShouldRender] = useState(true);

    return(
        <>
           <BrowserRouter>
           <AppNav/>
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/newflights" element = {<Landing/>}/>
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