import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'

export default function Navbar(props) {

return (
    
    <nav 
    className="navbar navbar-expand-lg navbar-dark"
    style={{ backgroundColor: props.mode === 'light' ? '#739cba' : '#1a1a2e' }} // Custom colors
>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/textform">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="/about">{props.about}</a> */}
                        <Link className="nav-link active" to="/about">{props.about}</Link>
                    </li>
                </ul>
                <div className="text-light d-flex align-items-center">
                    <button 
                        onClick={props.toggleMode} 
                        className="bg-transparent border-0 fs-4">
                        {props.mode === 'light' ? '🌙' : '☀️'}
                    </button>
                    
                </div>
            </div>
        </div>
    </nav>
)
}

Navbar.propTypes = {
    title: PropTypes.string
  };

Navbar.defaultProps = {
    title: 'Set title here',
    about: 'About Us'
};