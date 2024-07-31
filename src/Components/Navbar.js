import React, { useState } from 'react';
import '../css/navbar.css'
import 'animate.css';
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="main-content">
      <header className="header">
        <a href="/" className="logo" style={{ fontFamily:'"Playwrite CU",cursive'}}>Abhi</a>
        <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
          <ul className={isMobile ? "nav-links-mobile" : "navlinks"}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Education</a>
            {/* <a href="#skills">Skills</a> */}
            <a href="#skills">Projects</a>
            {/* <a href="https://drive.google.com/file/d/1WPOlMbl9wZ0ySBVce63qcNSUwmD5Oqam/view?usp=sharing">Get Resume</a> */}
            <a href="#contact">Contact</a>
          </ul>
          <button className="mobile-menu-icon" onClick={handleMenuToggle}>
  {isMobile ? <span class="material-symbols-outlined">
close
</span> : <span class="material-symbols-outlined">
menu
</span>}
</button>

        </nav>
      </header>
    </div>
  );
}

export default Navbar;
