import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Navbar from "./Components/Nav/Nav"
import Profile from "./Components/Profiles/Profile"
import Dialogs from "./Components/Dialogs/Dialogs"
import Footer from "./Components/Footer/Footer"
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Profile/>
                    {/*<Route path="/profile" element={<Profile/>}/>*/}
                    {/*<Route path="/dialogs" element={<Dialogs/>}  />*/}

                </div>

                <Footer/>
            </div>
        </BrowserRouter>
);
}

export default App;
