import React from 'react'
import {MdCameraswitch} from "react-icons/md"
import { GiHouse} from "react-icons/gi"
import {ImCheckmark} from "react-icons/im"
import tofaImg from "../../images/tofa2.jpg"
import {Link} from "react-router-dom"
import "./AboutMe.css"


function AboutMe() {
  return (
    <div className='AboutMe'>

        <h6>About</h6>

        <h3>I am a Passionate Photographer</h3>

        <div className='AboutMeContent'>

            <div className='AboutMeContent1'>
                <ImCheckmark className='AboutMeContentSvg'/>
                <h2>Proven Record</h2>
            </div>

            <div className='AboutMeContent2'>
                <GiHouse className='AboutMeContentSvg' />
                <h2>Great Studio</h2>
            </div>

            <div className='AboutMeContent2'>
                <MdCameraswitch className='AboutMeContentSvg' />
                <h2>Latest Technology</h2>
            </div>

        </div>


        <div className='AboutMeSecond'>


        <div className="AboutMeSecondImg">
            <img src={tofaImg} className="img-fluid" alt=""/>
        </div>

        <div className='AboutMeSecondContent' >

        <h1>My passion is to capture memories that you love.</h1>


        <div className='AboutMeSecondInnerContent'>

        <p>
        A visual artist, i am passionate about capturing beautiful moments and creating timeless images, i love to explore 
        new ideas and places.
        </p> 
        <br/>
        <p>
        My brand name (TOFA-Graphy) came from my name, (TOFA). I started my photography journey as a Nightlife Photographer (2017), where I continually grow and dived into Fashion photography which  later bagged me The Award for Best Fashion Photographer in Lagos (2019).
        </p>
        <br/>
        <p>
        And ever since, I’ve taken my skills further into Portrait Photography, Lifestyle and Travels respectively.
        </p>
        <br/>
        <p>
        My love for adventure pushed me into Travel and Documentary Photography as well, and so far, (Tofa_Documentaries) is one of the Best Travel and Documentary Photographer in Lagos Right now, and soon all over Nigeria. 
        </p>
        <br/>
        <p>
        I am on a Journey of Discovery and Documenting Every Corner of Africa and the Entire World at large, I’m just getting started,
        </p>
        <br/>
        <p>
        There’s so much work to be done, Let’s Keep it Moving!
        </p> 

        </div>


        <h4>Bashir Tofa</h4>

        <h5>Photographer</h5>


        <Link to="/contact">
        <div className='AboutMeBtn'>Book An Appointment</div>
        </Link>

        </div>



        </div>

    </div>
  )
}

export default AboutMe