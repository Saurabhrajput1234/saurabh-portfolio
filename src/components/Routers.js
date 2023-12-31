import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Portfolio1 from './Portfolio1';
import Contact from './Contact';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';




const Routers = () => {
  return (
    <div>
        <Routes>
        <Route path='' element={<Portfolio1/>} />
      <Route path='/skills' element={<Skills/>} />
        
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
        
        </Routes>
    </div>
  )
}

export default Routers;
