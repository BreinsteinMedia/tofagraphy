import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Pricing.css"

// import required modules
import { Pagination, Navigation } from "swiper";


import Campaign from "../../images/Pricing/Campaign.jpg"
import Family from "../../images/Pricing/Family.jpg"
import Outdoor from "../../images/Pricing/Outdoor.jpg"
import Studio from "../../images/Pricing/Studio.jpg"
import TandC from "../../images/Pricing/Terms.jpg"


import {GiPhotoCamera, GiCctvCamera, GiWhiteBook} from "react-icons/gi"
import {MdCameraEnhance} from "react-icons/md"
import {TbCameraPlus} from "react-icons/tb"
import {GoDeviceCamera} from "react-icons/go"

export default function Pricing() {

  return (

    <div className="MainPricingBg">

    <div id="MainPricing">
      
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={3}
        loop={true}
        // loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Navigation, Pagination]}
        className="mySwiper"
      >
        <div>

        <SwiperSlide>
        <div className='mainPricingContent1'>
        <Fade>
        <GiPhotoCamera className='mainPricingSvg'/>
        <h1>Campaign Pricing Package</h1>
        <div class="theLine-1"></div>
        <img src={Campaign} alt="mobilePricingImg"/>
        <a href="https://wa.me/2348060177260/?text=Hello Tofa , I want the campaign package" >
        <div className='mainPricingBtn'>I want this</div>
        </a>
        </Fade>
      </div>
        </SwiperSlide>


        {/* <SwiperSlide>

      <div className='mainPricingContent2'>
      <Fade>
      <GoDeviceCamera className='mainPricingSvg' />
      <h1>Family Pricing Package</h1>
      <div class="theLine-1"></div>
      <img src={Family} alt="mobilePricingImg" />
      <a  href="https://wa.me/2348060177260/?text=Hello Tofa , I want the family package">
      <div className='mainPricingBtn'>I want this</div>
      </a>
      </Fade>
      </div>

        </SwiperSlide> */}



        <SwiperSlide>
        <div className='mainPricingContent3'>
      <Fade>
      <MdCameraEnhance  className='mainPricingSvg' />
      <h1>Outdoor/Nightlife Pricing Package</h1>
      <div class="theLine-1"></div>
      <img src={Outdoor} alt="mobilePricingImg" />
      <a href="https://wa.me/2348060177260/?text=Hello Tofa , I want the outdoor package">
      <div className='mainPricingBtn'>I want this</div>
      </a>
      </Fade>
      </div>
        </SwiperSlide>



        <SwiperSlide>

      <div className='mainPricingContent4'>
      <Fade>
        <TbCameraPlus className='mainPricingSvg' />
        <h1>Studio Pricing Package</h1>
        <div class="theLine-1"></div>
        <img src={Studio} alt="mobilePricingImg" />
        <a  href="https://wa.me/2348060177260/?text=Hello Tofa , I want the studio package">
        <div className='mainPricingBtn'>I want this</div>
        </a>
        </Fade>
      </div>
        </SwiperSlide>




        <SwiperSlide>

        <div className='mainPricingContent5'>
      <Fade>
        <GiCctvCamera className='mainPricingSvg' />
        <h1>Terms and Conditions</h1>
        <div class="theLine-1"></div>
        <img src={TandC} alt="mobilePricingImg" />
        <a  href="https://wa.me/2348060177260/?text=Hello Tofa , I want to book for...">
        <div className='mainPricingBtn'>I want a package</div>
        </a>
        </Fade>
      </div>

        </SwiperSlide>

</div>
      </Swiper>
    </div>



<div  className="mobileMainPricing"  >
      
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Navigation, Pagination]}
        className="mySwiper "
      >
        <div>

        <SwiperSlide>
        <div className='mobileMainPricingContent1'>
        <Fade>
        <GiPhotoCamera className='mobileMainPricingSvg'/>
        <h1>Campaign Pricing Package</h1>
        <div class="mTheLine-1"></div>
        <img src={Campaign} alt="mobilePricingImg"/>
        <a href="https://wa.me/2348060177260/?text=Hello Tofa , I want the campaign package" >
        <div className='mobileMainPricingBtn'>I want this</div>
        </a>
        </Fade>
      </div>
        </SwiperSlide>


        <SwiperSlide>

      <div className='mobileMainPricingContent2'>
      <Fade>
      <GoDeviceCamera className='mobileMainPricingSvg' />
      <h1>Family Pricing Package</h1>
      <div class="mTheLine-1"></div>
      <img src={Family} alt="mobilePricingImg" />
      <a  href="https://wa.me/2348060177260/?text=Hello Tofa , I want the family package">
      <div className='mobileMainPricingBtn'>I want this</div>
      </a>
      </Fade>
      </div>

        </SwiperSlide>



        <SwiperSlide>
        <div className='mobileMainPricingContent3'>
      <Fade>
      <MdCameraEnhance  className='mobileMainPricingSvg' />
      <h1>Outdoor/Nightlife Package</h1>
      <div class="mTheLine-1"></div>
      <img src={Outdoor} alt="mobilePricingImg" />
      <a href="https://wa.me/2348060177260/?text=Hello Tofa , I want the outdoor package">
      <div className='mobileMainPricingBtn'>I want this</div>
      </a>
      </Fade>
      </div>
        </SwiperSlide>



        <SwiperSlide>

      <div className='mobileMainPricingContent4'>
      <Fade>
        <TbCameraPlus className='mobileMainPricingSvg' />
        <h1>Studio Pricing Package</h1>
        <div class="mTheLine-1"></div>
        <img src={Studio} alt="mobilePricingImg" />
        <a  href="https://wa.me/2348060177260/?text=Hello Tofa , I want the studio package">
        <div className='mobileMainPricingBtn'>I want this</div>
        </a>
        </Fade>
      </div>
        </SwiperSlide>




        <SwiperSlide>

        <div className='mobileMainPricingContent5'>
      <Fade>
        <GiCctvCamera className='mobileMainPricingSvg' />
        <h1>Terms and Conditions</h1>
        <div class="mTheLine-1"></div>
        <img src={TandC} alt="mobilePricingImg" />
        <a  href="https://wa.me/2348060177260/?text=Hello Tofa , I want to book for...">
        <div className='mobileMainPricingBtn'>I want a package</div>
        </a>
        </Fade>
      </div>

        </SwiperSlide>

      </div>
      </Swiper>
    </div>

    </div>
  );
}
