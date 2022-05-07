import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Navbar from "./Components/Nav/Nav"
import Profile from "./Components/Profiles/Profile"
import Dialogs from "./Components/Dialogs/Dialogs"
import Footer from "./Components/Footer/Footer"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import store, {actionsType, RootStateType, StoreType} from "./Redux/Store";

//UI
type appPropsType = {
    state: RootStateType
    dispatch: (action: actionsType) => void
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
                        <Route path="/profile" element={<Profile
                            postsData={props.state.profilePage.posts}
                            dispatch={props.dispatch}
                            textAreaText={props.state.profilePage.textAreaText}
                        />}/>
                        <Route path="/dialogs" element={
                            <Dialogs messageData={props.state.dialogsPage.messageData}
                                     dialogsData={props.state.dialogsPage.dialogsData}
                                     newMessageText={props.state.dialogsPage.newMessageText}
                                     dispatch={props.dispatch}
                            />}
                        />
                    </Routes>
                </div>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
