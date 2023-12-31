import React from 'react'
import './Portfolio1.css';
import dsa from "./pics/dsa.png";
import cpp from "./pics/cpp.png"
import html from "./pics/html.png"
import react from "./pics/react.png"
import js from "./pics/js.png"
import css from "./pics/css.png"

const Skills = () => {
  return (
    <div className="background">
   <section>
        <div className="about-skills">
        <div class="sec3">
                <h2 style={{'margin-bottom': "10px" , "color": 'white'}}>Favorite Skills</h2>
                <h1 style={{"margin-bottom": "15px","color": '#0093ff'}}>My Skills</h1>
                <p style={{'color':'white'}}>See fully what skiils i have and perform to develop the project for
                    you</p>
                    
                <button  class="button" id="bu2"><a  href="saurabhResume.pdf"  download><h6 style={{'text-decoration': 'none'}}>RESUME</h6></a></button>
                    
                
            </div>
          <div className="skills-icon">
          <div className="icons-skills">
          <img src={css} alt="" />
          <img src={html} alt="" />
          <img src={js} alt="" />
          </div>
          <div className="icons-skills">
          <img src={react} alt="" />
          <img src={cpp} alt="" />
          <img src={dsa} alt="" />
          </div>


          </div>


        </div>
      </section>
      
    </div>
  )
}

export default Skills
