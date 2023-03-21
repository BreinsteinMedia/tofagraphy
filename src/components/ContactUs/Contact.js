import React, {useRef, useState} from 'react'
import {  FiPhoneCall } from "react-icons/fi";
import { FaMapMarkerAlt  } from "react-icons/fa";
import { BsWhatsapp  } from "react-icons/bs";
import "./Contact.css"
import emailjs from "emailjs-com"
import Pricing from '../Pricing/Pricing';

function Contact() {

  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
    'service_hqlo59b', 
    'template_tofagraphy',
    form.current, 
    'lXzxlQAJ7og4fryvm'
    )
    
    .then((result) => {
      setResult("Message Sent Successfully")
      e.target.reset()
    }

    ).catch(() =>{
      setError("error")
    })
     
    e.target.reset()
  };

  return (

    <>

    <div className='Contact'> 


    <div className='ContactContent'>


    <div className='ContactContent1'>

    <h1>I Am Ready To Talk About Your Project</h1>

    <div className='contact_option'>

            <div>
            <FaMapMarkerAlt className='contactsvg'/> 
            </div>
        
          <div className='contactSVG'>
          <h4>Address</h4>
          <h2> Mobile Studio </h2>
        {/* <h2>Visit Our Studio</h2> */}
         </div>

    </div>


    <div className='contactLine'></div>

      

        <div className='contact_option'>


        <div>
        <BsWhatsapp className='contactsvg' />
        </div>

          <div className='contactSVG'>
          <h4>Whatsapp</h4>
          {/* <h5>+234 806 017 7260</h5> */}
          <h2><a href='https://wa.me/2348060177260/?text=Hello Tofagraphy' target="_blank" rel="noreferrer">+234 806 017 7260</a></h2>
          </div>

          
        </div>


    <div className='contactLine'></div>

      

        <div className='contact_option'> 


            <div>
            <FiPhoneCall className='contactsvg' />
            </div>
         
        <div className='contactSVG'>
          <h4>Phone Call</h4>
          {/* <h5>+234 806 017 7260</h5>  */}
          <h2><a  href="tel:+2348060177260" >+234 806 017 7260</a></h2>
        </div>

    
        </div>


    <div className='contactLine'></div>


       

        </div>

    

                <form className='ContactContent2' ref={form} onSubmit={sendEmail}>

                {result && <div className="result">{result}</div>} 

                <div className='contactForm'>

                <input className='formName' type="text" name='name' placeholder=' Name' required />

                 <input  className='formNumber' type="text" name='number' placeholder='Phone Number' required />

                </div>

                <div className='contactForm'>

                <input className='formName' type="email" name='email' placeholder='Email' required />

                <input  className='formNumber' type="text" name='company' placeholder='Company' required />

                </div>

                <div className='selectOption'> 

              <select name="services" id="lang">
                <option value="services">Services...</option>
                <option value="birthday" >Birthday Shoot</option>
                <option value="wedding">Wedding Shoot</option>
                <option value="maternity">Maternity Shoot</option>
                <option value="lifestyle">Lifestyle Shoot</option>
                <option value="studio">Studio Shoot</option>
                <option value="outdoor">Outdoor Shoot</option>
                <option value="campaign">Campaign Shoot</option>
              </select>

              </div>

                <div className='textArea'>
                <textarea className='formMessage' type="text" name='message' rows="7" placeholder='Your Message'  required />
                </div>


                <input className='contactBtn' type="submit" value="Send" />


                </form>
   
            </div>

                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8070159.280816103!2d4.179722895373625!3d9.017386083643231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sng!4v1669718522152!5m2!1sen!2sng" 
                style={{border:"0",  background:"transparent"}} 
                allowfullscreen="" 
                loading="lazy" 
                title='map'
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>


        
    </div>

      <div className="PricingContact">
      <Pricing/>
      </div>



    </>
  )
}

export default Contact