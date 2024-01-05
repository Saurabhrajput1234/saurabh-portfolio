import React,{useState} from 'react';
import './Portfolio1.css';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';



const Portfolio1 = () => {

  
  
    return (<>
   
    <div className="background">

    
     <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
        </div>
        

      

      
      
      </>
  )
}

export default Portfolio1
