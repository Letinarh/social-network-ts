import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Navbar from "./Components/Nav/Nav"
import Profile from "./Components/Profiles/Profile"
import Dialogs from "./Components/Dialogs/Dialogs"
import Footer from "./Components/Footer/Footer"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {actionsType, RootStateType} from "./Redux/Store";
import {AppStateType} from "./Redux/redux-store";
import Users from "./Components/Users/Users";

//UI
type appPropsType = {
/*    state: RootStateType
    dispatch: (action: actionsType) => void*/
}
const App = (props: appPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path={"/"} element={<Navigate to="/profile"/>}/>
                        <Route path="/profile" element= { <Profile/> } />
                        <Route path="/dialogs" element={ <Dialogs/> } />
                        <Route path="/users" element={ <Users/> } />
                    </Routes>
                </div>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
