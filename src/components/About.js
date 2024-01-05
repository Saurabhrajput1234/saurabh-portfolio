import React from 'react'
import './Portfolio1.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
    <section>
        <div className="about-section" >
        <div class="sec2">
                <h2 style={{"margin-bottom": "10px" , "color": 'white'}} >About me</h2>
                <h1 style={{"margin-bottom": "14px","color": '#0093ff',fontSize:'25px'}}>I'm a friendly Front-End Developer</h1>
                <p style={{color:'white'}}>Frontend developer ,I create web pages with UI/UX user interface,I create responsive secure websites with React framework</p>
                    <button className='button' >
            <Link to="/contact">Contact Me</Link>
            </button>
            </div>
 
            

        </div>
      </section>
      
    </div>
  )
}

export default About
