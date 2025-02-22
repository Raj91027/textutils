import React from 'react'
import './Footer.css'; // Import your custom CSS

import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom';

export default function Footer(props) {
  return (
    <div>
    
      <footer className="footer py-4" style={{backgroundColor:props.mode==='light'?'#739cba':'rgb(35 39 43)',color:props.mode==='light'?'black':'white'}}>
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>About Text Manipulator</h5>
            <p>
              Text Manipulator is your ultimate platform to manipulate your text as the way you want to do.
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-4 mb-3" style={{backgroundColor:props.mode==='light'?'#739cba':'rgb(35 39 43)',color:props.mode==='light'?'black':'white'}}>
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className={`text-${props.mode==='light'?'black':'white'}`}>Home</Link></li>
              <li><Link to="/about" className={`text-${props.mode==='light'?'black':'white'}`}>About</Link></li>
              <li><Link to="/textform" className={`text-${props.mode==='light'?'black':'white'}`}>Text Form</Link></li>
            </ul>
          </div>

          {/* Contact and Social Media */}
          <div className="col-md-4 mb-3" style={{backgroundColor:props.mode==='light'?'#739cba':'rgb(35 39 43)',color:props.mode==='light'?'black':'white'}}>
            <h5>Contact Us</h5>
            <p>
              <FaEnvelope /> <a href="mailto:rajk08bgh@gmail.com" className={`text-${props.mode==='light'?'black':'white'}`}>Contact Us</a>
            </p>
            <div className="social-icons">
              <Link to="https://twitter.com/yadav-raj" className={`text-${props.mode==='light'?'black':'white'}`}><FaTwitter size={24} /></Link>
              <Link to="https://linkedin.com/in/yadav-raj10" className={`text-${props.mode==='light'?'black':'white'}`}><FaLinkedin size={24} /></Link>
              <Link to="https://github.com/Raj91027" className={`text-${props.mode==='light'?'black':'white'}`}><FaGithub size={24} /></Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="mb-0">&copy; 2025 Text Manipulator. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}
