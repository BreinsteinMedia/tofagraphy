import React, {useRef} from 'react'
import "./Services.scss"
import ServicesSection from "../components/ourServices/OurServices"
import TheHead from "../components/serviceHead/ServiceHead"
import {SlPicture} from "react-icons/sl"
import {BiHomeHeart} from "react-icons/bi"
import {FaQuoteLeft} from "react-icons/fa"
import {BsCameraFill} from "react-icons/bs"
import { Slide } from "react-awesome-reveal";
import Tofa1 from "../images/tofa1.jpg"
import Tofa2 from "../images/tofa2.jpg"
import "./Pages.css"
import { Fade } from "react-awesome-reveal";






function Services() {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };



  return (


    <>
       <div className='PagesHeader3'>

      <div className='PagesHeaderContent3'>

      <Fade  direction='up'>

      <h1>Services</h1>

      <div className='theLearnmoreBtn' onClick={handleClick} >Learn More</div>

      </Fade>

      </div>

      </div>
 
      <div className='ServicesSection'  ref={ref}>


        <div className="theHead">
        <TheHead />
        </div>

        <div className="serviceSectionContent">
        <ServicesSection />
        </div>


         <div className='serviceSectionInnerContent'>

        <Slide>

          <div className="serviceSectionImg1">
            <img src={Tofa1} alt="" />
          </div>


          <div className='serviceSectionInnerMostContent'>

            <h4>What I Do</h4>

            <h1>I Deliver Consistent Results Always </h1>


            <div className='theServiceContMain'>

            <div className='theServiceCont'>
              <BiHomeHeart className='theServiceContSvg'/>
              <p>Great Studio and Location</p>
            </div>

            <div className='theServiceCont'>
              <BsCameraFill className='theServiceContSvg'/>
              <p>Professional Equipments</p>
            </div>

            <div className='theServiceCont'>
              <SlPicture className='theServiceContSvg'/>
              <p>High Quality Pictures</p>
            </div>
            </div>


            </div>

            </Slide>

      </div>





        <div className='ServicesCreate'>

        <Slide direction='right'>

              <div className='ServicesCreateContent'>
              <FaQuoteLeft className='ServicesCreateContentSvg'/>
              <h1>We help people capture their best moments in the best way possible.</h1>
              </div>

              <div className="ServicesCreateImg">
                  <img src={Tofa2} alt="" id='ServicesCreateImg'/>
              </div>

        </Slide>

        </div>  
    
    

    </div>

    </>

  
  )
}

export default Services