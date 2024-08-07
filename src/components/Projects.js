import React,{useState} from 'react';
import './Portfolio1.css';
import project1 from './pics/project1.png';
// import project2 from './pics/project2.png';
import project2 from './pics/project4.png';
import project3 from './pics/ccc.png';
import project4 from './pics/Data.png';
import project5 from './pics/skill.png';


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
              <a href="https://sherlock-rose.vercel.app/"><img src={project4} alt="" /></a>
                
              </div>
                <div className="about-card">
                <h3>Data anonymization tool</h3>
                <p>Developed a full stack tool for the Karnataka Police to anonymize Personally Identifiable Information (PII) in
documents such as reports, ensuring data privacy. The tool uses an AI/ML model to identify and hide PII entities.Worked collaboratively with a team to execute the project, contributing to both frontend and backend
development, and ensuring full stack integration.</p>
                </div>
                <a href="https://sherlock-rose.vercel.app/"><button>View</button></a>
                <span><a href="https://github.com/Saurabhrajput1234/Data-privacy-anonymization-tool"><button>Source</button></a></span>
                
              </li>
              <li className='cards'>
              <div className="card-img">
              <a href="https://skillrevive-web.vercel.app/"><img src={project5} alt="" /></a>
                
              </div>
                <div className="about-card">
                <h3>skillRevital</h3>
                <p>Engineered a dynamic job portal using the MERN stack, facilitating efficient job matching for employers and job seekers. The platform includes advanced search filters, resume parsing, and application tracking. Integrated real-time notifications and user-friendly dashboards to enhance engagement. Led the full stack development process, from initial planning and design to deployment and maintenance, ensuring a scalable and secure system. Worked closely with stakeholders to gather requirements and deliver a solution that meets industry standards.</p>
                </div>
                <a href="https://skillrevive-web.vercel.app/"><button>View</button></a>
                <span><a href="https://github.com/Saurabhrajput1234/SkillRevital"><button>Source</button></a></span>
                
              </li>
              
              <li className='cards'>
              <div className="card-img">
              <a href="https://intern-assignment-2.vercel.app/"><img src={project2} alt="" /></a>
                
              </div>
                <div className="about-card">
                <h3>E-commerce web</h3>
                <p>Basically, our full-stack e-commerce website offers a comprehensive shopping experience. With robust authentication features, you can securely navigate and explore a diverse range of products. Enjoy the convenience of adding items to your cart and seamlessly searching for products that suit your preferences. This platform combines user-friendly design with powerful functionality, ensuring a smooth and personalized shopping journey for every user.</p>
                </div>
                <a href="https://intern-assignment-2.vercel.app/"><button>View</button></a>
                <span><a href="https://github.com/Saurabhrajput1234/Intern-assignment-2"><button>Source</button></a></span>
                
              </li>
              <li className={` ${showAllCards ? 'cards' : 'cards hidden'}`}>
              <div className="card-img">
              <a href="https://ccc-webpage.vercel.app/"><img src={project3} alt="" /></a>
              </div>
                <div className="about-card">
                <h3>CCC-Website</h3>
                <p>basically this is a social awareness towords society so that they can skip that type of any problem</p>
                </div>
                <a href="https://ccc-webpage.vercel.app/"><button>View</button></a>
                <span> <a href="https://github.com/Saurabhrajput1234/CCC-webpage"><button>Source</button></a></span>
                
              </li>
              <li className={` ${showAllCards ? 'cards' : 'cards hidden'}`}>

                <div className="card-img">
                <a href='https://saurabhrajput1234.github.io/awareness.github.io/'><img src={project1} alt="" /></a>
                  
                </div>
                <div className="about-card">
                <h3>Awareness system</h3>
                <p style={{ height:"72px",overflow:"hidden"}}>Basically, this project is all about awareness—specifically, spreading awareness among people regarding mental health and physical violence.</p>
                </div>
                <a href="https://saurabhrajput1234.github.io/awareness.github.io/"><button>View</button></a>
                <span><a href="https://github.com/Saurabhrajput1234/awareness-system"><button>Source</button></a></span>

                
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
                <h3>SkillRevital</h3>
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
