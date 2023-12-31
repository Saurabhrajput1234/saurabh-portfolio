// import React from 'react'
// import { Link } from 'react-router-dom';
// import "./header.css";

// const header = () => {
//   return (<div className='header'>
//     <div>
//         <h1>
//             <Link to="/" className='logo'>
//                 college
//             </Link>
//         </h1>
//     </div>
//     <div className="header-links">
//         <ul>
//             <li>
//                 <Link to="/">Home</Link>
//             </li>
//         </ul>
//         <ul>
//             <li>
//                 <Link to="/members">Members</Link>
//             </li>
//         </ul>
//         <ul>
//             <li>
//                 <Link to="/about">about us</Link>
//             </li>
//         </ul>

//     </div>
//     </div>
//   )
// }

// export default header

import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo"><h1>Portfolio</h1></div>
        <div className={`navbar-links ${isNavbarOpen ? 'active' : ''}`}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/skills">Skills</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
