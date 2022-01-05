import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Navbar from "./Components/Nav/Nav"
import Profile from "./Components/Profiles/Profile"
import Footer from "./Components/Footer/Footer"

const App = () => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <Profile />
        <Footer />
      </div>
  );
}

export default App;
