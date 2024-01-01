import React,{useState} from 'react';
import './Portfolio1.css';
import { Link } from 'react-router-dom';
import profile from "./pics/saurabh.svg";
import resume from "./pics/saurabhResume.pdf";
import project1 from './pics/project1.png';
import project2 from './pics/project2.png';
// import project3 from './pics/project3.png';
import dsa from "./pics/dsa.png";
import cpp from "./pics/cpp.png"
import html from "./pics/html.png"
import react from "./pics/react.png"
import js from "./pics/js.png"
import css from "./pics/css.png"


const Portfolio1 = () => {
  const [showAllCards, setShowAllCards] = useState(false);


  const handleViewMore = () => {
    setShowAllCards(true);

  };

  const handleViewLess = () => {
    setShowAllCards(false);
    
  };
  
  
  
    return (<>
   
    <div className="background">
    
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
      <section>
        <div className="about-section">
        <div class="sec2">
                <h2 style={{"margin-bottom": "10px" , "color": 'white'}} >About me</h2>
                <h1 style={{"margin-bottom": "14px","color": '#0093ff',fontSize:'25px'}}>I'm a friendly Front-End Developer</h1>
                <p style={{color:'white'}}>Frontend developer ,I create web pages with UI/UX user interface,I create responsive secure websites with React framework</p>
                    <button className='button' >
            <Link to="#contact">Contact Me</Link>
            </button>
            </div>
            

        </div>
      </section>
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
      <section>
        <div className="about-pojects">
        <div className="card-parent">
            <h1>Projects</h1>
            <ul className='cards-section'>
              <li className='cards'>

                <div className="card-img">
                <a href="https://saurabhrajput1234.github.io/awareness.github.io/"><img src={project1} alt="" /></a>
                  
                </div>
                <div className="about-card">
                <h3>Awareness system</h3>
                <p style={{ height:"72px",overflow:"hidden"}}>Basically, this project is all about awareness—specifically, spreading awareness among people regarding mental health and physical violence.</p>
                <a href="https://saurabhrajput1234.github.io/awareness.github.io/"><button>View</button></a>
                  <span><button>Source</button></span>
                </div>
              </li>
              <li className='cards'>
              <div className="card-img">
              <a href="https://e-sa.netlify.app/"><img src={project2} alt="" /></a>
                
              </div>
                <div className="about-card">
                <h3>Sopping E-commers web</h3>
                <p>Basically, our full-stack e-commerce website offers a comprehensive shopping experience. With robust authentication features, you can securely navigate and explore a diverse range of products. Enjoy the convenience of adding items to your cart and seamlessly searching for products that suit your preferences. This platform combines user-friendly design with powerful functionality, ensuring a smooth and personalized shopping journey for every user. Welcome to a dynamic online marketplace where authentication, product management, and search capabilities converge to enhance your e-commerce experience</p>
                <a href="https://e-sa.netlify.app/"><button>View</button></a>
                  <span><button>Source</button></span>
                </div>
              </li>
              <li className='cards'>
              <div className="card-img">
              {/* <a href="https://saurabhrajput1234.github.io/awareness.github.io/"><img src={project3} alt="" /></a> */}
              </div>
                <div className="about-card">
                <h3>Task management system</h3>
                <p>basically this is a social awareness towords society so that they can skip that type of any problem</p>
                {/* <a href="https://saurabhrajput1234.github.io/awareness.github.io/"><button>View</button></a> */}
                  {/* <span><button>Source</button></span> */}
                </div>
              </li>
              <li className={` ${showAllCards ? 'cards' : 'cards hidden'}`}>
              <div className="card-img"></div>
                <div className="about-card">
                <h3>project name</h3>
                <p>basically this is a social awareness towords society so that they can skip that type of any problem</p>
                <a href="https://saurabhrajput1234.github.io/awareness.github.io/"><button>View</button></a>
                  <span><button>Source</button></span>
                </div>
              </li>
              <li className={` ${showAllCards ? 'cards' : 'cards hidden'}`}>
              <div className="card-img"></div>
                <div className="about-card">
                <h3>project name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus hic nesciunt fuga accusantium quam, error praesentium dicta nostrum illum delectus, voluptate ex. Deleniti eos ipsum nostrum quibusdam, reiciendis soluta veritatis ex excepturi aliquam maiores fugit nam illo quidem? Officia tempore voluptatum non.</p>
                <a href="https://saurabhrajput1234.github.io/awareness.github.io/"><button>View</button></a>
                  <span><button>Source</button></span>
                </div>
              </li>
            </ul>
            </div>

        </div>
       <div className="view-card">
       <button className='button-card' onClick={showAllCards ? handleViewLess : handleViewMore}>
          {showAllCards ? 'View Less' : 'View More'}
        </button>
       </div>
      </section>
      <section>
        <div className="about-campus">
            <div className="contact-form">
               <div className="con-heading"  style = {{alignContent:"center"}}> <h1 style={{paddingLeft:"45px"}}>Contact.</h1>
                <h1 style={{"margin-bottom": "6px","color": '#0093ff',fontSize:'25px',paddingLeft:"29px"}}>Lets have a chat</h1></div>
                <form action="https://formsubmit.co/a25a522f123e55fc95bfd626b5ea7b92" method="POST">

                    <input type="text" name="name" placeholder="Full Name"/>
                    <input type="number" name="phone" placeholder="Mobile Number"/><br/>
                    <input type="email" name="email" placeholder="Email Address"/>
                    <input type="text" name="email-sub" placeholder="Email Subject"/><br/>
                    <div class="massage"> <input type="text" name="Massage" placeholder="Your Massage"/></div><br/>
                    <button className="button" type="submit">submit</button>

                </form>
                <img src="" alt=""/>
            </div>
            

        </div>
        </section>
        </div>
        

      

      
      
      </>
  )
}

export default Portfolio1
