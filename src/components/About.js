import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = (props) => {
  return (
    <div className="about-container min-h-screen bg-gradient-to-br from-green-100 to-blue-300 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white flex flex-col items-center justify-center p-6 mt-0"
    style={{
        backgroundImage:
          props.mode === "light"
            ? "linear-gradient(to bottom right, #d1fae5, #93c5fd)"
            : "linear-gradient(to bottom right, #c9d9d1, #050d15)",
        color: props.mode === "light" ? "black" : "white",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div className="about-content" style={{backgroundColor:props.mode==='light'?'#90d9c5':'#30282882',color:props.mode==='light'?'black':'white'}}>
        <h1 className="about-title" style={{backgroundColor:props.mode==='light'?'#90d9c5':'rgb(48 40 40 / 0%)',color:props.mode==='light'?'#6b46c1':'white'}}>About Text Manipulator</h1>
        <p className="about-description">
          Welcome to Text Manipulator, your go-to tool for text processing and
          manipulation! Whether you're a developer, writer, student, or just
          someone who works with text frequently, TextUtils is designed to make
          your life easier.
        </p>
        <div className="features-box" style={{backgroundColor:props.mode==='light'?'#f3e8ff':'rgb(55 48 61)',color:props.mode==='light'?'black':'#b61fd6h'}}>
          <h3 className="features-title" style={{color:props.mode==='light'?'#6b46c1':'white'}}>Key Features</h3>
          <ul>
            <li className="feature-item" style={{color:props.mode==='light'?'#6b46c1':'white'}}>Convert to Upper/Lower Case</li>
            <li className="feature-item" style={{color:props.mode==='light'?'#6b46c1':'white'}}>Remove Extra Spaces</li>
            <li className="feature-item" style={{color:props.mode==='light'?'#6b46c1':'white'}}>Character & Word Count</li>
            <li className="feature-item" style={{color:props.mode==='light'?'#6b46c1':'white'}}>Copy to Clipboard</li>
            <li className="feature-item" style={{color:props.mode==='light'?'#6b46c1':'white'}}>Dark Mode</li>
          </ul>
        </div>
        <p className="about-get-started">
          Try it now and enhance your text processing!
        </p>
        <Link to="/textform" className="about-button">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default About;
