import React from 'react';
import './Portfolio1.css';

const Contact = () => {
  return (
    <div className="background">
    <section>
        <div className="about-campus">
            <div className="contact-form">
               <div className="con-heading"  style = {{alignContent:"center"}}> <h1 style={{paddingLeft:"61px"}}>Contact.</h1>
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
  )
}

export default Contact
