import React from 'react'
import { motion } from 'framer-motion';
import WSPGallery from './styleGallery';
import {Link} from 'react-router-dom';


function OutdoorPics() {


    const Outdoor = [
  
        {
          img: "https://i.ibb.co/VYFr0zC/IMG-6375.jpg" 
        },
        {
          img: "https://i.ibb.co/zXDcKGm/IMG-6352.jpg" 
        },
        {
          img: "hhttps://i.ibb.co/d5SxY9M/IMG-6333.jpg" 
        },
        {
          img: "https://i.ibb.co/r76tTKt/IMG-6271.jpg" 
        },
        {
          img: "https://i.ibb.co/vh7BPv3/IMG-6151.jpg" 
        },
        {
          img: "https://i.ibb.co/z8dXnZG/IMG-6177.jpg"
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

            <WSPGallery galleryImages={Outdoor} />


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

export default OutdoorPics