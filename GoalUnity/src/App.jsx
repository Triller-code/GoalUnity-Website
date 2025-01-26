import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import AboutUs from './components/AboutUs.jsx';
import Matches from './components/Matches.jsx';
import League from './components/League.jsx';
import SignInPage from './components/SignInPage.jsx';
import Profile from './components/Profile.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx'
import pics from './assets/football.jpg'
import pic from './assets/football4.jpg'
import pict from './assets/football5.jpg'
import { IoIosFootball } from "react-icons/io";
import './App.css';

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavVisible(!isNavVisible);
  };

  // Automatically hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isNavVisible) {
        setIsNavVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavVisible]);

  return (
    <>
    <Router>
      <div className="maind">
      <div>
        <header className="header">
        <IoIosFootball className='ball' />
          <h1>GoalUnity</h1>
          <div className='pro'><Link to="/profile" onClick={toggleNavbar}>Profile</Link></div>
          <button className="nav-toggle-btn" onClick={toggleNavbar}>
            {isNavVisible ? '☰' : '☰'}
          </button>
        </header>
        <nav className={`navbar ${isNavVisible ? 'visible' : 'hidden'}`}>
          <ul>
            <li><Link to="/" onClick={toggleNavbar}>Home</Link></li>
            <li><Link to="/about" onClick={toggleNavbar}>About Us</Link></li>
            <li><Link to="/matches" onClick={toggleNavbar}>Matches</Link></li>
            <li><Link to="/league" onClick={toggleNavbar}>League</Link></li>
            <li><Link to="/signin" onClick={toggleNavbar}>Sign In</Link></li>
          </ul>
        </nav>
        
       
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/league" element={<League />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
          </main>
          </div>
          <div className="box">
            Games that brings Unity
       </div>


      </div>
    </Router>

<div className='pic'>
<Card
 image= {pics}
 title="History that binds us "
 description="It all started from here."/>
<Card  image= {pic}
title="Great matches"
description="That have ever been played ."/>
<Card  image= {pict}
title="Greate people"
description="From funs to great players it's only one thing that brings us together 'Football'."/>
</div>
      <Footer />
      </>
  );
}

export default App;