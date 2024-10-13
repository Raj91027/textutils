//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState} from 'react'
import Footer from './components/Footer';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },1500);
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='black';
      // document.body.style.border='1px solid white';
      showAlert("Dark mode has been enabled!","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      //document.body.style.border='1px solid black';
      showAlert("Light mode has been enabled!","success");

    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode ={toggleMode} />
    <Alert alert={alert}/>
    
    {/* <Routes> */}
      {/* <Route exact path="/about" element={<About mode={mode} />} /> */}
      <TextForm showAlert={showAlert} heading="Enter Text to Analyse" mode={mode}/>
    {/* </Routes> */}
    
    <Footer mode={mode}/>
    {/* </Router> */}
    </>
  );
}

export default App;
