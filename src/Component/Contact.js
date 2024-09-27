import React from 'react'
import { CONTACT_URL } from '../utils/constant';

const Contact = () => {
  return (
    <div className="contact-page-container">
       
        <div className="contact-container">
        <div className="h1"><h1>Contact First 🫵</h1></div>
       <input className="first" type="text" placeholder="First Name"></input><br></br>
       <input className="secand" type="text" placeholder="Email Address"></input><br></br>
       <input className="third" type="text" placeholder="Message"></input><br></br>
       <button className="btn">Submit</button>
        </div>
        <div className="image">
                <img className="image" src={CONTACT_URL} alt="logo"/>
            </div>
      
    </div>
  )
}

export default Contact;
