import React from 'react'
import { Link } from 'react-router-dom';
import "./OtherServices.css"
import {BsPlusLg, BsLightningCharge} from 'react-icons/bs';
import {TfiVideoClapper} from 'react-icons/tfi';
import {TbLetterK, TbCapture} from 'react-icons/tb';
import {FaTimes, FaPercent} from 'react-icons/fa';
import { Slide } from "react-awesome-reveal";
import Tofa2 from "../../images/tofa1.jpg"
import Tofa from "../../images/tofa2.jpg"
import Maternity from "../../images/maternity/IMG_1426.jpg"
import Wedding from "../../images/wedding/IMG_0209.jpg"
import Birthday from "../../images/wedding/IMG_2512.jpg"



function OtherServices() {


  return (

    <div className='mainOtherServicesBg'>

    <div className='mainOtherServices'>

      <div className='mainOtherServices1'>
        <img src={Tofa} alt="" />
      </div>


      <div className='mainOtherServices2'>

        <h1>I Capture the Best Moments for You</h1>


        <div className='mainOtherServicesContent1'>

          <div>
          <TbCapture className='mainOtherServicesSvg' />
          </div>

          <div className='mainOtherServicesItem'>
            <h5>Professional Team</h5>
            <p> We have a competent and professional team to cater to all your photography needs.</p>
          </div>

        </div>


        <div className='mainOtherServicesContent2'>

        <div>
          <BsLightningCharge className='mainOtherServicesSvg' />
        </div>

        <div className='mainOtherServicesItem'>
          <h5>Top Notch Equipment</h5>
          <p>We use the best and most advanced equipments for our photography shoots.</p>
        </div>

        </div>


        <div className='mainOtherServicesContent3'>

        <div>
          <TfiVideoClapper className='mainOtherServicesSvg' />
        </div>

          <div className='mainOtherServicesItem'>
            <h5>Quality Results</h5>
            <p>When it comes to editing and photography touch-ups, we are the best in the game.</p>
          </div>

        </div>

        <Link to="/services">
        <div className='mainOtherServicesBtn'>Learn More</div>
        </Link>

      </div>


    </div>





    <div className='MiddleOtherServices'>


    <img src={Maternity} alt="MiddleOtherServicesImg" />

    <img src={Wedding} alt="MiddleOtherServicesImg" />

    <img src={Birthday} alt="MiddleOtherServicesImg" />



    </div>




    <div className='otherServices'>

        <div className='otherServicesContent'>

        <Slide>

          <h1> Memories that Lasts Forever</h1>

          <div className='otherServicesContent1'>
            <h2>Modern Studio</h2>
            <p>We have a modern studio with the latest equipments, great ambience and awesome facilities to help you capture memories that latest forever.</p>
          </div>

          <div className='otherServicesContent2'>
            <h2>Clean Editing and Great Pictures</h2>
            <p>After capturing, we edit your pictures with the best tools and in turn create great pictures to give you great memories that lasts a lifetime. </p>
          </div>


          <a href="#MainPricing">
                <div className='GalleryLearnMorebtn'>Learn More</div>
          </a>
          
          </Slide>
          
        </div>

        <div className="serviceImg">
         <img src={Tofa2} id='serviceAnimation' alt=''/>
      </div>
  
      
    </div> 
    

 <div class="line-1"></div>
    

    <div className='NumbersSection'>

    <Slide direction='up'>

    <div className='numbersHead'>
    <p>Numbers</p>
    </div>

    <div className='NumbersSectionContent'>


      <div className='NumbersSectionContent1'>
      <div className='NumbersSectionContent1_1'>
      <h1>1720</h1>
      <BsPlusLg className='serviceSvg1'/>
      </div>
      <h3>Photos Taken</h3>
      </div>

      <div class="vl"></div>

      <div className='NumbersSectionContent2'>
        <div className='NumbersSectionContent1_1'>
        <h1>23.5</h1>
        <TbLetterK className='serviceSvg2'/>
        </div>
        <h3>Editing Hours</h3>
      </div>

      <div class="vl"></div>
    
      <div className='NumbersSectionContent3'>
        <div className='NumbersSectionContent1_1'>
        <h1>130</h1>
        <FaTimes className='serviceSvg3'/>
        </div>
      <h3>Company Growth</h3>
      </div>

      <div class="vl"></div>

      <div className='NumbersSectionContent4'>
        <div className='NumbersSectionContent1_1'>
        <h1>100</h1>
        <FaPercent className='serviceSvg4'/>
        </div>
      <h3>Customer Satisfaction</h3>
      </div>
      
      
    </div>
    </Slide>


    </div>  

    <div class="line-2"></div>

    </div>

    
  )
}

export default OtherServices
