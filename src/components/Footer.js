import React from 'react'
import './Footer.css'; // Import your custom CSS

import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons

export default function Footer(props) {
  return (
    <div>
    
      <footer className="footer py-4" style={{backgroundColor:props.mode==='light'?'#e9ecef':'rgb(35 39 43)',color:props.mode==='light'?'black':'white'}}>
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>About TextUtils</h5>
            <p>
              TextUtils is your ultimate platform to manipulate your text as the way you want to do.
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-4 mb-3" style={{backgroundColor:props.mode==='light'?'#e9ecef':'rgb(35 39 43)',color:props.mode==='light'?'black':'white'}}>
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/documentation" className={`text-${props.mode==='light'?'black':'white'}`}>Home</a></li>
              <li><a href="/roadmaps" className={`text-${props.mode==='light'?'black':'white'}`}>About</a></li>
            </ul>
          </div>

          {/* Contact and Social Media */}
          <div className="col-md-4 mb-3" style={{backgroundColor:props.mode==='light'?'#e9ecef':'rgb(35 39 43)',color:props.mode==='light'?'black':'white'}}>
            <h5>Contact Us</h5>
            <p>
              <FaEnvelope /> <a href="mailto:contact@techhub.com" className={`text-${props.mode==='light'?'black':'white'}`}>contact@textutils.com</a>
            </p>
            <div className="social-icons">
              <a href="https://twitter.com" className={`text-${props.mode==='light'?'black':'white'}`}><FaTwitter size={24} /></a>
              <a href="https://linkedin.com" className={`text-${props.mode==='light'?'black':'white'}`}><FaLinkedin size={24} /></a>
              <a href="https://github.com" className={`text-${props.mode==='light'?'black':'white'}`}><FaGithub size={24} /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="mb-0">&copy; 2024 TextUtils. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}
