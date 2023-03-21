import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import WSPGallery from './styleGallery';



function ApartmentPics() {


  

    const Apartment =[
        {
          img : "https://i.ibb.co/mGnCjQm/IMG-9717.jpg" 
        },
        {
          img :"https://i.ibb.co/d4mQzMW/IMG-9667.jpg" 
        },
        {
          img: "https://i.ibb.co/tDVZ6df/IMG-9186.jpg" 
        },
        {
          img: "https://i.ibb.co/yYfMSgj/IMG-2775.jpg"  
        },
        {
          img:"https://i.ibb.co/k215zTb/IMG-9176.jpg" 
        },
        {
          img: "https://i.ibb.co/BBXRR9W/IMG-2747.jpg" 
        },
        {
          img:"https://i.ibb.co/Fz62Nfd/IMG-2711.jpg" 
        }
      
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

    <>

      <motion.section
        exit={{ opacity: 0 }}
      >
        <motion.div variants={content} animate="animate" initial="initial" >

          <motion.div variants={title} >     
        
          <motion.div variants={inputs} >   

            <WSPGallery galleryImages={Apartment} />

            <Link to="/portfolio">
            <div className='backToGalleryBtn'>Back to Gallery</div>
            </Link>

          </motion.div>

        </motion.div>
        </motion.div>
        </motion.section>

      

        </>

  
  )
}

export default ApartmentPics