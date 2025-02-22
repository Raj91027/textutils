import React from "react";
import {Link} from "react-router-dom";
import "./Home.css";

const Home = (props) => {
return (
    <div className="home-container min-h-screen bg-gradient-to-br from-green-100 to-blue-300 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white flex flex-col items-center justify-center p-6 mt-0"
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
        <div className="home-content">
            <h1 className="home-title">Welcome to Text Manipulator</h1>
            <p className="home-description">
                The ultimate tool to format, optimize, and analyze your text
                efficiently.
            </p>
            <Link to="/textform" className="home-button">
                Try It Now
            </Link>
            <div className="features-box">
                <h3 className="features-title">Key Features</h3>
                <ul>
                    <li className="feature-item">✔ Text Formatting</li>
                    <li className="feature-item">✔ Text Optimization</li>
                    <li className="feature-item">✔ Text Analysis</li>
                </ul>
            </div>
        </div>
    </div>
);
};

export default Home;
