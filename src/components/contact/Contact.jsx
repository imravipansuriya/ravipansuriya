import React, {useRef} from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import emailjs from 'emailjs-com'

const Contact = () => {

     const form = useRef()

        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('service_rpk822t', 'template_r62cue1', form.current, 'wuNJAYjgwFO6HPkVT')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset()
          };
     
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact-container">
                <div className="contact-options">
                    <article className="contact-option">
                        <MdEmail className='contact-option-icon'/>
                        <h4>Email</h4>
                        <h5> dummyegator@gmail.com </h5>
                        <a href="mailto:ravipansuriya786@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact-option">
                        <MdEmail className='contact-option-icon'/>
                        <h4>Messanger</h4>
                        <h5> dummyegator@gmail.com </h5>
                        <a href="mailto: dummyegator@gmail.com ">Send a message</a>
                    </article>
                    <article className="contact-option">
                        <MdEmail className='contact-option-icon'/>
                        <h4>Email</h4>
                        <h5> dummyegator@gmail.com </h5>
                        <a href="mailto: dummyegator@gmail.com ">Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='name'  placeholder='Your Email' required/>
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;