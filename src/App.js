
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import Routers from './components/Routers';
import Footer from './components/Footer';




function App() {
  return (
  <Router>
   
   <Navbar/>

  <Routers/>
  <Footer/>
 
  
  </Router>
  
  )
}

export default App;
