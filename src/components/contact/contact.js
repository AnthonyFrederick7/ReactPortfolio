import { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Result =() => {
  return(
    <p>Thank you! Your message has been successfully sent. I will contact you soon :&#41;</p>
  )
}

function Contact() {

    const [result, showResult] = useState(false);
  const sendEmail =(e) => {
    e.preventDefault();
  
    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, e.target, process.env.PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };

  return (
    <div className='contactContainer' id='contact'>
    <section className="contactCard">
      <h2 className="contactH2">Contact Me</h2>
    <form action='' onSubmit={sendEmail} className="cf">

      <div className="half left cf">
        <input 
          type="text"
          name="fullName"
          id="input-name" 
          placeholder="Full name"
          required
        />

        <input 
            type="text" 
            name="email"
            id="input-email" 
            placeholder="Email address"
            required
        />

        <input 
          type="text" 
          name="subject"
          id="input-subject" 
          placeholder="Subject"
          required
        />
      </div>

      <div className="half right cf">
      <textarea name="message" type="text" id="input-message" placeholder="Enter a message"/>
      </div>

        <button type="submit" value="Send" id="input-submit">Submit</button>
        
        <div className='row' style={{color: 'white'}}>{ result ? <Result /> : null }</div>
    </form>
    </section>
    </div>
  )
}

export default Contact;