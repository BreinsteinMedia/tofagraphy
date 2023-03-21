import React, {useRef} from 'react'
import {motion} from 'framer-motion'
import AboutMe from '../components/About/AboutMe';
import "./Pages.css"
import { Fade } from "react-awesome-reveal";



function About() {


  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  const content = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };
  
  const title = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };
  
  const inputs = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  
  return (
    <div>

      <div className='PagesHeader'>

      <div className='PagesHeaderContent'>

      <Fade  direction='up'>

      <h1>About Me</h1>

      <div className='theLearnmoreBtn' onClick={handleClick}> Learn More </div>

      </Fade>

      </div>

      </div>


    <motion.section
        exit={{ opacity: 0 }}
      >
        <motion.div variants={content} animate="animate" initial="initial" >

          <motion.div variants={title} >     
        
          <motion.div variants={inputs} > 

        
        <div  ref={ref}>
        <AboutMe />
        </div>
    

     

      </motion.div>

  </motion.div>
  </motion.div>
</motion.section>


    </div>
  )
}

export default About