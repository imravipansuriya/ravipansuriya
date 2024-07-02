import React, {useRef} from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp, BsInstagram}  from 'react-icons/bs'
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
                        <HiOutlineMail className='contact-option-icon'/>
                        <h4>Email</h4>
                        <h5>ravipansuriya786@gmail</h5>
                        <a href="mailto:ravipansuriya786@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact-option">
                        <BsInstagram className='contact-option-icon'/>
                        <h4>Instagram</h4>
                        <h5>_ravi_pansuriya_</h5>
                        <a href="https://www.instagram.com/_ravi_pansuriya_/">Send a message</a>
                    </article>
                    <article className="contact-option">
                        <BsWhatsapp className='contact-option-icon'/>
                        <h4>Whatsapp</h4>
                        <h5> +91-84609 21201</h5>
                        <a href="https://api.whatsapp.com/send?phone=8460921201">Send a message</a>
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