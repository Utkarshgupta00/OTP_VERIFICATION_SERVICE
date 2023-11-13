// src/App.js
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import GenerateOTP from './components/GenerateOTP';
import VerifyOTP from './components/VerifyOTP';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <>

    {/* routes for navigating between different components */}

      <Routes> 
          <Route path="/" element={<GenerateOTP/>} />
          <Route path="/verify" element={<VerifyOTP/>} />
          <Route path="homepage" element={<HomePage/>}/>
      </Routes>
    </>

  );
};

export default App;
