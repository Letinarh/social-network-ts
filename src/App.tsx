import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Navbar from "./Components/Nav/Nav"
import Profile from "./Components/Profiles/Profile"
import Dialogs from "./Components/Dialogs/Dialogs"
import Footer from "./Components/Footer/Footer"
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/dialogs" element={<Dialogs/>}  />
                    </Routes>
                </div>

                <Footer/>
            </div>
        </BrowserRouter>
);
}

export default App;
