import React, {useRef} from 'react'
import ContactUs from '../components/ContactUs/Contact'
import "./Pages.css"
import { Fade } from "react-awesome-reveal";


function Contact() {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };


  return (

    <div>
      
    <div className='PagesHeader4'>

    <div className='PagesHeaderContent4'>

    <Fade  direction='up'>

    <h1>Contact</h1>

    <div className='theLearnmoreBtn' onClick={handleClick} >Learn More</div>

    </Fade>

    </div>

    </div>
    <div  ref={ref}>
      <ContactUs/>

      </div>
    
    </div>
  )
}

export default Contact