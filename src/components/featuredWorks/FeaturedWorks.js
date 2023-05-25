import React from 'react'
import "./FeaturedWorks.css"
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";

import img57 from "../../images/maternity/IMG_1680.jpg"
// import img62 from "../../images/maternity/IMG_9905.jpg"

// import img70 from "../../images/wedding/IMG_0209.jpg"
import img75 from "../../images/wedding/IMG_9455.jpg"
 
import img17 from "../../images/birthday/IMG_9314.jpg"
// import img18 from "../../images/birthday/IMG_2737.jpg"

import img66 from "../../images/outdoor/IMG_6333.jpg"
// import img64 from "../../images/outdoor/IMG_6177.jpg"

// import img54 from "../../images/lifestyle/WAL07779.jpg"
import img43 from "../../images/lifestyle/IMG_6478.jpg"

import img33 from "../../images/campaign/IMG_9512.jpg"
// import img31 from "../../images/campaign/IMG_6202.jpg"

// import img6 from "../../images/apartments/IMG_9667.jpg"
import img3 from "../../images/apartments/IMG_2775.jpg"




function FeaturedWorks() {

  return (

    <div id='FeaturedWorks'>

        <h5>Portfolio</h5>

        <h1>Featured Works</h1>

        <div className='featuredWorksContent'>

            <div className='featuredWorksContent1'>

                <Link to="/maternity"> 
                <div className='maternityShoot1'>
                <Fade>
                <img src={img57} alt=""/>
                <h4>Maternity Shoot</h4>
                </Fade>
                </div>
                </Link>

                <Link to="/wedding">
                <div className='maternityShoot2'>
                <Fade>
                <img src={img75} alt="" />
                <h4>Wedding Shoot</h4>
                </Fade>
                </div>
                </Link>

                {/* <Link to="/maternity">
                <div className="maternityShoot2">
                <Fade>
                <img src={img62} alt=""/>
                <h4> Family Maternity Shoot</h4>
                </Fade>
                </div>
                </Link> */}

            </div>


            {/* <div className='featuredWorksContent2'>

                <Link to="/wedding">
                <div className='weddingShoot1'>
                <Fade>
                <img src={img75} alt="" />
                <h4>Wedding Shoot</h4>
                </Fade>
                </div>
                </Link>


                <Link to="/wedding">
                <div className='weddingShoot2'>
                <Fade>
                <img src={img70} alt="" />
                <h4>Wedding Shoot</h4>
                </Fade>
                </div>
                </Link>
               
            </div> */}



            <div className='featuredWorksContent3'>

                <Link to="/birthday"> 
                <div className='birthdayShoot1'>
                <Fade>
                <img src={img17} alt="" />
                <h4>Birthday Shoot</h4>
                </Fade>
                </div>
                </Link>


                <Link to="/outdoor"> 
                <div className='birthdayShoot2'>
                <Fade>
                <img src={img66} alt="" />
                <h4>Outdoor Shoot</h4>
                </Fade>
                </div>
                </Link>

{/* 
                <Link to="/birthday"> 
                <div className='birthdayShoot2 '>
                <Fade>
                <img src={img18} alt="" />
                <h4>Birthday Shoot</h4>
                </Fade>
                </div>
                </Link> */}

               
            </div>


{/* 
            <div className='featuredWorksContent4'>

    
                <Link to="/outdoor"> 
                <div className='outdoorShoot1'>
                <Fade>
                <img src={img66} alt="" />
                <h4>Outdoor Shoot</h4>
                </Fade>
                </div>
                </Link>

                <Link to="/outdoor"> 
                <div className='outdoorShoot2'>
                <Fade>
                <img src={img64} alt="" />
                <h4>Outdoor Shoot</h4>
                </Fade>
                </div>
                </Link>

                </div>


                <div className='featuredWorksContent5'>

            
                <Link to="/lifestyle"> 
                <div className='lifestyleShoot1'>
                <Fade>
                <img src={img54} alt="" />
                <h4>Lifestyle Shoot</h4>
                </Fade>
                </div>
                </Link> 

                <Link to="/lifestyle"> 
                <div className='lifestyleShoot2'>
                <Fade>
                <img src={img43} alt="" />
                <h4>Lifestyle Shoot</h4>
                </Fade>
                </div>

                </Link>

          
               
            </div> */}

            <div className='featuredWorksContent6'>

            

                <Link to="/campaign"> 
                <div className='campaignShoot1'>
                <Fade>
                <img src={img33} alt="" />
                <h4>Campaign Shoot</h4>
                </Fade>
                </div>
                </Link>


                <Link to="/studio"> 
                <div className='campaignShoot2'>
                <Fade>
                <img src={img3} alt="" />
                <h4>Studio Apartment Shoot</h4>
                </Fade>
                </div>
                </Link>

                {/* <Link to="/campaign"> 
                <div className='campaignShoot2'>
                <Fade>
                <img  src={img31} alt="" />
                <h4>Campaign Shoot</h4>
                </Fade>
                </div>
                </Link> */}

       
            </div>



            <div className='featuredWorksContent7'>

                <Link to="/studio"> 
                <div className='studioShoot1'>
                <Fade>
                <img src={img43} alt="" />
                <h4>Lifestyle Shoot</h4>
                </Fade>
                </div>
                </Link>


            </div>    

{/* 
            <div className='featuredWorksContent7'>

                <Link to="/studio"> 
                <div className='studioShoot1'>
                <Fade>
                <img src={img3} alt="" />
                <h4>Studio Apartment Shoot</h4>
                </Fade>
                </div>
                </Link>


                <Link to="/studio"> 
                <div className='studioShoot2'>
                <Fade>
                <img  src={img6} alt="" />
                <h4>Studio Shoot</h4>
                </Fade>
                </div>

                </Link>

               
            </div> */}

        </div>

        <div className='worksBtn'>
        <Link to="/Portfolio">
        <div className='featuredWorkBtn'>View More</div>
        </Link>
    </div>

    </div>
  )
}

export default FeaturedWorks
