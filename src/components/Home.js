import React from 'react';
import profile from "./pics/saurabh.svg";
import resume from "./pics/saurabhResume.pdf";
import './Portfolio1.css';

const Home = () => {
  return (
    <div >
     <div className='intro-home' >
      <div className="intro-display">

      </div>
      <div className='intro-section'>
      <div className="intro-content">
      <h1 style={{color:'#c9ced8'}}>Hello, <span >I'am</span></h1>
                <h1 style={{color:'white'}}> SAURABH <span >RAJPUT</span></h1>
                <h2 style={{color:'black'}}>Web Developer</h2>
                <p style={{color:"white"}}>with knowledge in web development and design,I offer the best
                    projects resulting in quality work.</p>
                    <button  class="button" id="bu2"><a  href={resume}  download><h6 style={{"text-decoration ": "none"}}>RESUME </h6><img id="download-icon" style={{height: "auto", display:"inline"}} src="download.gif" alt=""/></a></button></div>
      <div className="intro-profile">
        <img src={profile} alt="" />
      </div>
      
      

      </div>  
          
      </div>
      
    </div>
  )
}

export default Home
