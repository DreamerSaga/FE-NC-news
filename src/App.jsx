import React, { useState, useEffect } from "react";
import Header from './components/Header';
import NavBar from './components/NavBar';
import Main from './components/Main'
// import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <Header />
      <NavBar />
      <Main />
    </>
  );
}

export default App
