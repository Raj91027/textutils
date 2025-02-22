//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState} from 'react'
import Footer from './components/Footer';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      
    }
    else{
      setMode('light');
  
    }
  }
  return (
    <Router>

      <Navbar title="Text Manipulator" mode={mode} toggleMode ={toggleMode} />
      <Routes>
        <Route path="/" element={<Home mode={mode} />}/>
        <Route path="/about" element={<About mode={mode} />}/>

        <Route path="/textform" element={<TextForm  heading="Enter Text to Analyse" mode={mode}/>}/>
      </Routes>
      <Footer mode={mode}/>
     
    </Router>
  );
}

export default App;
