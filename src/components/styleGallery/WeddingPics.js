import React from 'react'
import { motion } from 'framer-motion';
import WSPGallery from './styleGallery';
import { Link } from 'react-router-dom';


function WeddingPics() {



  const Wedding = [

    {
      img: "https://i.ibb.co/JQwSmkx/IMG-9796.jpg" 
    },
    {
      img: "https://i.ibb.co/fnnvTwq/IMG-9455.jpg" 
    },
    {
      img: "https://i.ibb.co/GHrN7Kh/IMG-7617.jpg" 
    },
    {
      img: "https://i.ibb.co/sJJmHZ6/IMG-7601.jpg" 
    },
    {
      img: "https://i.ibb.co/yR5HzKK/IMG-1054.jpg"  
    },
    {
      img: "https://i.ibb.co/JpjzmB8/IMG-0966.jpg" 
    },
    {
      img: "https://i.ibb.co/m9n5GJ9/IMG-0149.jpg" 
    },
    {
      img: "https://i.ibb.co/Qd7092Z/IMG-0209.jpg"
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

            <WSPGallery galleryImages={Wedding} />


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

export default WeddingPics