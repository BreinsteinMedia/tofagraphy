import React from 'react'
import Gallery from '../components/Gallery/Gallery'
import InitialTransition from '../components/InitialTransition'
import OurServices from '../components/ourServices/OurServices'
import OtherServices from '../components/OtherServices/OtherServices'
import Portfolio from '../components/Portfolio/Portfolio'
import Pricing from '../components/Pricing/Pricing'
import Testimonial from '../components/Testimonial/Testimonial'
import FeaturedWorks from "../components/featuredWorks/FeaturedWorksMain"




function Homepage() {
  return (
    <div>

  <InitialTransition/>
   <Gallery/>
   <OurServices/>
   <Portfolio/>
   <OtherServices/>
   <FeaturedWorks/>
   <Pricing/>
   <Testimonial/>  
   
    </div>
  )
}

export default Homepage