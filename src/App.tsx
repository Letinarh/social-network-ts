import React, {FC} from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Navbar from "./Components/Nav/Nav"
import Profile from "./Components/Profiles/Profile"
import Dialogs from "./Components/Dialogs/Dialogs"
import Footer from "./Components/Footer/Footer"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {RootStateType, StoreType} from "./Redux/State";

//UI
type appPropsType = {
    state: RootStateType
    addPost: () => void
    changeTextArea: (currentText: string) => void
}

const App = (props:appPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path={"/"} element={<Navigate to="/profile"/>}/>
                        <Route path="/profile" element={<Profile
                            postsData ={props.state.profilePage.posts}
                            addPostCallBack={props.addPost}
                            textAreaText={props.state.profilePage.textAreaText}
                            changeTextArea={props.changeTextArea}
                        />}/>
                        <Route path="/dialogs" element={
                            <Dialogs messageData={props.state.dialogsPage.messageData}
                                     dialogsData={props.state.dialogsPage.dialogsData}
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
