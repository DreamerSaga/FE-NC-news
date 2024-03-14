import React, { useState, useEffect } from "react";
import Header from './components/Header';
import NavBar from './components/NavBar';
import Main from './components/Main'
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
     <Header />
      <NavBar />
      <Main />
      <Footer />
    </>
  );
}

export default App
