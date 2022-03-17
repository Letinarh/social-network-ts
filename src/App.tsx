import React, {FC} from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Navbar from "./Components/Nav/Nav"
import Profile from "./Components/Profiles/Profile"
import Dialogs from "./Components/Dialogs/Dialogs"
import Footer from "./Components/Footer/Footer"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {StoreType} from "./Redux/State";

//UI
type appPropsType = {
    store:StoreType
}

const App = (props:appPropsType) => {
    const state = props.store.getState
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path={"/"} element={<Navigate to="/profile"/>}/>
                        <Route path="/profile" element={<Profile
                            postsData ={props.store._state.ProfilePage.Posts}
                            addPostCallBack={props.store.addPost}
                            textAreaText={props.store._state.ProfilePage.textAreaText}
                            changeTextArea={props.store.changeTextArea}
                        />}/>
                        <Route path="/dialogs" element={<Dialogs messageData={props.store._state.DialogsPage.messageData} dialogsData={props.store._state.DialogsPage.dialogsData} />}  />
                    </Routes>
                </div>

                <Footer/>
            </div>
        </BrowserRouter>
);
}

export default App;
