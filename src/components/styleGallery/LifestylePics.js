import React from 'react'
import { motion } from 'framer-motion';
import WSPGallery from '../../components/styleGallery/styleGallery';
import { Link } from 'react-router-dom';


function LifestylePics() {


  
    const Lifestyle = [

        {
          img: "https://i.ibb.co/ZLZGqGb/IMG-8916.jpg" 
        },
        {
          img: "https://i.ibb.co/jHFDpd6/IMG-8814.jpg" 
        },
        {
          img: "https://i.ibb.co/X46z1cr/IMG-8800.jpg" 
        },
  
        {
          img: "https://i.ibb.co/DVsnMpj/IMG-6523.jpg" 
        },
        {
          img: "https://i.ibb.co/dPq8Nm9/IMG-8808.jpg" 
        },
        {
          img: "https://i.ibb.co/8NQbS9k/IMG-6478.jpg" 
        },
        {
          img: "https://i.ibb.co/WG9Mkcg/IMG-6500.jpg" 
        },
        {
          img: "https://i.ibb.co/7CrhD3Y/WAL07617.jpg" 
        },
        {
          img: "https://i.ibb.co/fGYKjzC/WAL07657.jpg" 
        },
        {
          img: "https://i.ibb.co/9ZhZLLB/WAL07633.jpg"
        },
        {
          img: "https://i.ibb.co/8x6bhsf/WAL07697.jpg" 
        },
        {
          img: "https://i.ibb.co/4jZFgyk/IMG-6469.jpg" 
        },
        {
          img: "https://i.ibb.co/dk8FTQ1/WAL07779.jpg"  
        },
        {
          img: "https://i.ibb.co/hypgznN/IMG-6452.jpg" 
        },
        {
          img: "https://i.ibb.co/DGHX5Ph/IMG-6449.jpg" 
        },
        {
          img: "https://i.ibb.co/jZpYrZn/IMG-6420.jpg" 
        },
        {
          img: "https://i.ibb.co/BrqW894/IMG-3308.jpg" 
        },
        {
          img: "https://i.ibb.co/1R7TQy3/IMG-3280.jpg"
        },
        {
          img: "https://i.ibb.co/cyZcSBV/IMG-3211.jpg" 
        },
        {
          img: "https://i.ibb.co/gJCCNxN/IMG-3157.jpg"  
        },
        {
          img: "https://i.ibb.co/6PtkBbs/IMG-3134.jpg" 
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


      <motion.section
        exit={{ opacity: 0 }}
      >
        <motion.div variants={content} animate="animate" initial="initial" >

          <motion.div variants={title} >     
        
          <motion.div variants={inputs} >   

            <WSPGallery galleryImages={Lifestyle} />


            <Link to="/portfolio">
            <div className='backToGalleryBtn'>Back to Gallery</div>
            </Link>

          </motion.div>

        </motion.div>
        </motion.div>
        </motion.section>

  
  )
}

export default LifestylePics