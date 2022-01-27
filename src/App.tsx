import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Navbar from "./Components/Nav/Nav"
import Profile from "./Components/Profiles/Profile"
import Dialogs from "./Components/Dialogs/Dialogs"
import Footer from "./Components/Footer/Footer"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {dialogsPropsType} from "./index";

/*
//BLL

export type dialogsPropsType = {
        dialogs: Array<dialogItemType>
        messages: Array<messageType>
}
export type dialogItemType = {
    id:number
    name:string
    }
export type messageType = {
    id:number
    messageText:string
}

let dialogData:Array<dialogItemType> = [
    {id : 1, name : "Petro" },
    {id : 2, name : "Nikola" },
    {id : 3, name : "Zahar" },
    {id : 4, name : "Kat" },
]
let messageData:Array<messageType> = [
    { id: 1 , messageText : "Bachelor degree" },
    { id: 2 , messageText : "I love Type Script" },
    { id: 3 , messageText : "In't gonna live forever" },
    { id: 4 , messageText : "Just do it" },
]
*/


//UI

const App = (props:dialogsPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/dialogs" element={<Dialogs dialogs={props.dialogs} messages={props.messages} />}  />
                    </Routes>
                </div>

                <Footer/>
            </div>
        </BrowserRouter>
);
}

export default App;
