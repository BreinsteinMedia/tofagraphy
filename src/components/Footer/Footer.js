import React, {useRef, useState} from 'react'
import Logo from "../../images/logo/logo2.png"
import { Link } from 'react-router-dom'
// import {  FiPhoneCall } from "react-icons/fi";
import "./Footer.css"
import emailjs from "emailjs-com"

function Footer() {

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
      setResult("Subscribed")
      e.target.reset()
    }

    ).catch(() =>{
      setError("error")
    })
     
    e.target.reset()
  };
  return (

    <footer id='footer'>

<div className='footerline'></div>

    {/* <div className='waves'>
            <div className='wave' id='wave1'></div>
            <div className='wave' id='wave2'></div>
            <div className='wave' id='wave3'></div>
            <div className='wave' id='wave4'></div>
          </div> */}

    <div className='Footer'>


      <div className='footerContent'>


        <div className='footerContent1'>
          <img src={Logo} alt="" className='footerLogo' />
          <Link to="/about"><p>About Me</p></Link>
         <p>I am a Passionate Photographer</p>
        </div>


        <div className='footerContent2'>
          <h1>Menu</h1>
          <Link to="/"><p>Home</p></Link>
          <Link  to="/about"> <p>About Us</p></Link>
          <Link  to="/portfolio"><p>Portfolio</p></Link>
          <Link  to="/services"><p>Services</p></Link>
          <Link  to="/contact"><p>Contact Us</p></Link>
        </div>


        <div className='footerContent3'>
        <h1>Services</h1>
        <Link  to="/birthday"><p>Birthday Shoot</p></Link>
        <Link  to="/wedding"><p>Wedding Shoot</p></Link>
        <Link  to="/campaign"><p>Campaign Shoot</p></Link>
        <Link  to="/lifestyle"><p>Lifestyle Shoot</p></Link>
        <Link  to="/maternity"><p>Maternity Shoot</p></Link>
        <Link  to="/outdoor"> <p>Outdoor Shoot</p></Link>
        <Link  to="/studio"><p>Studio Shoot</p></Link>

        </div>


        <div className='footerContent4'>
        <Link to="/contact"><h1>Contact</h1></Link>
        <p>Location: Mobile Studio</p>
        <p><a href="tel:+2348060177260">+234 806 017 7260</a></p> 
        </div>


        <div className='footerContent5'>

          <h1>Ready to create something Amazing?</h1>

          {/* <div className='contactminor'> */}

          <p>Call: <a href="tel:+2348060177260"> + 234 806 017 7260</a></p> 

        {/* </div> */}

        {result && <div className="resultFooter">{result}</div>} 

        <div className='footerContent5Inner'>

        <form ref={form} onSubmit={sendEmail}>

          <div className='footerContent5Inner2'>

            <div className='footerContent5Inner2_1'>
            <input  type="text" name='name' placeholder=' Name' required />
            </div>

            <div className='mfcline'></div>
          
          <div className='footerContent5Inner2_2'>
          <input  type="email" name='email' placeholder='Email' required />
          </div>
            
        </div>

        <div className='mfcline2'></div>

            <div className='mfcsub'>
            <input  type="submit" value="Subscribe" />
            </div>
            </form>


        </div>

   

          


        </div>


      </div>


      <div className='MobilefooterContent5'>
        <div>Are you ready to create something Amazing?</div>
        <div className='Mobilecontactminor'>
        <div>Call:</div> 
        <div> <a href="tel:+2348060177260"> + 234 806 017 7260</a> </div>
        </div>


        {result && <div className="resultFooter">{result}</div>} 

          <div className='MobilefooterContent5InnerMobile'>

          <form ref={form} onSubmit={sendEmail}>


            <div className='MobilefooterContent5Inner2Mobile' >

              <div className='MobilefooterContent5Inner2_1mobile'>
              <input  type="text" name='name' placeholder=' Name' required />
              </div>
            

              <div className='mfclinemobile'></div>

              <div className='MobilefooterContent5Inner2_2mobile'>
              <input  type="email" name='email' placeholder='Email' required />
              </div>
           
            </div>

            <div className='mfcline2mobile'></div>

            <div className='mfcsubmobile'>
            <input  type="submit" value="Subscribe" />
            </div>
            </form>

          </div>

       
        </div>




    </div>

    </footer>
  )
}

export default Footer