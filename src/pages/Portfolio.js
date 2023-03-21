import React, {useRef}  from 'react'
import FeaturedWorks from "../components/featuredWorks/FeaturedWorks"
import "./Pages.css"
import { Fade } from "react-awesome-reveal";


function Portfolio() {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };


  return (

    <>

      <div className='PagesHeader2'>

      <div className='PagesHeaderContent3'>

      <Fade  direction='up'>

      <h1>Portfolio</h1>

      <div className='theLearnmoreBtn'  onClick={handleClick} >Learn More</div>

      </Fade>

      </div>

      </div>

      <div  ref={ref}>

      <FeaturedWorks/>

      </div>

    </>
  )
}

export default Portfolio