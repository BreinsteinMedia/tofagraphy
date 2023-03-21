import React from 'react'
import { motion } from 'framer-motion';
import WSPGallery from '../../components/styleGallery/styleGallery';
import {Link} from 'react-router-dom';


function BirthdayPics() {


    const Birthday = [

 
        {
          img: "https://i.ibb.co/S0bhwt2/IMG-9314.jpg" 
        },
      
        {
          img: "https://i.ibb.co/1ZJ3b40/IMG-8571.jpg" 
        },
        {
          img: "https://i.ibb.co/b7zW79P/IMG-9218.jpg" 
        },
        {
          img: "https://i.ibb.co/YhyRKCj/IMG-8523.jpg" 
        },
      
        {
          img:"https://i.ibb.co/SNwRsP4/IMG-7937.jpg" 
        },
        {
          img: "https://i.ibb.co/0sMXgyn/IMG-7907.jpg" 
        },
        {
          img: "https://i.ibb.co/hMRdRGL/IMG-3380.jpg" 
        },
        {
          img: "https://i.ibb.co/rZ2W8V7/IMG-3358.jpg"  
        },
        {
          img: "https://i.ibb.co/n7zWSKm/IMG-2659.jpg" 
        },
        {
          img: "https://i.ibb.co/8cPJSRz/IMG-3311.jpg" 
        },
        {
          img: "https://i.ibb.co/WB5xYw3/IMG-2737.jpg" 
        },
        {
          img: "https://i.ibb.co/fNJWWWR/IMG-2582.jpg" 
        },
        {
          img: "https://i.ibb.co/SX3b9mD/IMG-2512.jpg" 
        },
        {
          img: "https://i.ibb.co/NFSbwpN/IMG-2358.jpg" 
        },
        {
          img: "https://i.ibb.co/SNKmccZ/IMG-2323.jpg" 
        },
        {
          img: "https://i.ibb.co/3F9BfPH/IMG-2291.jpg" 
        },
        {
          img: "https://i.ibb.co/tqG73t3/IMG-2285.jpg" 
        },
        {
          img: "https://i.ibb.co/wYV34kB/IMG-2220.jpg"  
        },
        {
          img: "https://i.ibb.co/dPvWRbd/IMG-2218.jpg" 
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

            <WSPGallery galleryImages={Birthday} />

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

export default BirthdayPics