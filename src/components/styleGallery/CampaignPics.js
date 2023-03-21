import React from 'react'
import { motion } from 'framer-motion';
import WSPGallery from './styleGallery';
import { Link } from 'react-router-dom';


function CampaignPics() {


 
  const Campaign = [

  
    {
      img: "https://i.ibb.co/4mXN5Kd/IMG-9512.jpg"
    },
    {
      img: "https://i.ibb.co/tqk9RZz/IMG-9494.jpg"
    },
    {
      img: "https://i.ibb.co/fQ43q2Y/IMG-6202.jpg" 
    },
    {
      img: "https://i.ibb.co/jfv8H6p/IMG-2396.jpg" 
    },
    {
      img: "https://i.ibb.co/YkMvVMZ/IMG-6191.jpg" 
    },
    {
      img: "https://i.ibb.co/Pjrxm3M/IMG-2388.jpg"
    },
    {
      img: "https://i.ibb.co/bQ16sR5/IMG-2022.jpg"
    },

  ]



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

    <div className='MaternityPics'>

      <motion.section
        exit={{ opacity: 0 }}
      >
        <motion.div variants={content} animate="animate" initial="initial" >

          <motion.div variants={title} >     
        
          <motion.div variants={inputs} >   

            <WSPGallery galleryImages={Campaign} />


            <Link to="/portfolio">
            <div className='backToGalleryBtn'>Back to Gallery</div>
            </Link>

          </motion.div>

        </motion.div>
        </motion.div>
        </motion.section>

    </div>
  )
}

export default CampaignPics