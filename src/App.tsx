import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Navbar from "./Components/Nav/Nav"
import Profile from "./Components/Profiles/Profile"
import Dialogs from "./Components/Dialogs/Dialogs"
import Footer from "./Components/Footer/Footer"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {StateType} from "./index";


//UI
type AppPropsType = {
    State:StateType
}

const App = (props:AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path={"/"} element={<Navigate to="/profile"/>}/>
                        <Route path="/profile" element={<Profile postsData={props.State.postsData} />}/>
                        <Route path="/dialogs" element={<Dialogs messageData={props.State.messageData} dialogsData={props.State.dialogsData} />}  />
                    </Routes>
                </div>

                <Footer/>
            </div>
        </BrowserRouter>
);
}

export default App;
