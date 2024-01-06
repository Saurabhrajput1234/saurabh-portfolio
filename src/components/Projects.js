import React,{useState} from 'react';
import './Portfolio1.css';
import project1 from './pics/project1.png';
import project2 from './pics/project2.png';
// import project3 from './pics/project3.png';

const Projects = () => {

  const [showAllCards, setShowAllCards] = useState(false);


  const handleViewMore = () => {
    setShowAllCards(true);

  };

  const handleViewLess = () => {
    setShowAllCards(false);
    
  };
  

  return (
    <div >
   <section>
        <div className="about-pojects">
        <div className="card-parent">
            <h1>Projects</h1>
            <ul className='cards-section'>
              <li className='cards'>

                <div className="card-img">
                <a href='https://saurabhrajput1234.github.io/awareness.github.io/'><img src={project1} alt="" /></a>
                  
                </div>
                <div className="about-card">
                <h3>Awareness system</h3>
                <p style={{ height:"72px",overflow:"hidden"}}>Basically, this project is all about awareness—specifically, spreading awareness among people regarding mental health and physical violence.</p>
                </div>
                <a href="https://saurabhrajput1234.github.io/awareness.github.io/"><button>View</button></a>
                  <span><button>Source</button></span>
                
              </li>
              <li className='cards'>
              <div className="card-img">
              <a href="https://e-sa.netlify.app/"><img src={project2} alt="" /></a>
                
              </div>
                <div className="about-card">
                <h3>Sopping E-commers web</h3>
                <p>Basically, our full-stack e-commerce website offers a comprehensive shopping experience. With robust authentication features, you can securely navigate and explore a diverse range of products. Enjoy the convenience of adding items to your cart and seamlessly searching for products that suit your preferences. This platform combines user-friendly design with powerful functionality, ensuring a smooth and personalized shopping journey for every user. Welcome to a dynamic online marketplace where authentication, product management, and search capabilities converge to enhance your e-commerce experience</p>
                </div>
                <a href="https://e-sa.netlify.app/"><button>View</button></a>
                  <span><button>Source</button></span>
                
              </li>
              <li className='cards'>
              <div className="card-img">
              {/* <a href="https://saurabhrajput1234.github.io/awareness.github.io/"><img src={project3} alt="" /></a> */}
              </div>
                <div className="about-card">
                <h3>Task management system</h3>
                <p>basically this is a social awareness towords society so that they can skip that type of any problem</p>
                </div>
                <a href="https://saurabhrajput1234.github.io/awareness.github.io/"><button>View</button></a>
                  {/* <span><button>Source</button></span> */}
                
              </li>
              <li className={` ${showAllCards ? 'cards' : 'cards hidden'}`}>
              <div className="card-img"></div>
                <div className="about-card">
                <h3>project name</h3>
                <p>basically this is a social awareness towords society so that they can skip that type of any problem</p>
                </div>
                <a href="https://saurabhrajput1234.github.io/awareness.github.io/"><button>View</button></a>
                  <span><button>Source</button></span>
              </li>
              <li className={` ${showAllCards ? 'cards' : 'cards hidden'}`}>
              <div className="card-img"></div>
                <div className="about-card">
                <h3>project name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus hic nesciunt fuga accusantium quam, error praesentium dicta nostrum illum delectus, voluptate ex. Deleniti eos ipsum nostrum quibusdam, reiciendis soluta veritatis ex excepturi aliquam maiores fugit nam illo quidem? Officia tempore voluptatum non.</p>
                </div>
                <a href="https://saurabhrajput1234.github.io/awareness.github.io/"><button>View</button></a>
                  <span><button>Source</button></span>
            
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
      
    </div>
  )
}

export default Projects
