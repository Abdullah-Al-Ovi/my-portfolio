import {useRef} from 'react'
import { FaEnvelopeOpen, FaPhoneSquareAlt } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import './contact.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1670mhw', 'template_1fa8z3t', form.current, 'Z9X3YPq5mseBUPFsV')
      .then((result) => {
          console.log(result.text);
          toast.success('Your message has been sent successfully!');
          e.target.reset()
      }, (error) => {
          console.log(error.text);
          toast.error('An error occurred while sending your message. Please try again later.');

      });
      
    }

  return (
    <section className="contact container section">
      <h2 className="section__title">Get In <span>Touch</span></h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Feel free to contact...</h3>

          <p className="contact__description">
            I&rsquo;d love to connect with you! Whether you have a project in mind, want to collaborate, or just have a question, please don&rsquo;t hesitate to reach out.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon'/>
              <div>
                <span className="info__title">Mail me: </span>
                <h4 className="info__desc">abdullah.ovi098@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon'/>
              <div>
                <span className="info__title">Call me: </span>
                <h4 className="info__desc">+880 01754448783</h4>
              </div>
            </div>
          </div>
          
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input  type="text" name='user_name' placeholder='Your Name' className="form__control" required />
            </div>
            <div className="form__input-div">
              <input type="email" name='user_email' placeholder='Your Email' className="form__control" required/>
            </div>
            <div className="form__input-div">
              <input type="text" name='subject' placeholder='Subject' className="form__control" required/>
            </div>
          </div>

          <div className="form__input-div">
             <textarea name='message' placeholder='Your Message'  className="form__control textarea" required></textarea>
            </div>
            <button type='submit' className="button">
              Send Message
              <span className="button__icon contact__button-icon"><FiSend></FiSend></span>
            </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  )
}
