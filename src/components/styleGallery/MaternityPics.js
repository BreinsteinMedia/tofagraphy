import React from 'react'
import { motion } from 'framer-motion';
import WSPGallery from '../../components/styleGallery/styleGallery';
import { Link } from 'react-router-dom';


function MaternityPics() {


  const Maternity = [
 

    {
      img:"https://i.ibb.co/t83pcWc/IMG-9905.jpg" 
    },
    {
      img: "https://i.ibb.co/ss8rY6x/IMG-4017.jpg" 
    },
    {
      img: "https://i.ibb.co/DkzsZNH/IMG-3982.jpg" 
    }, 
     {
      img: "https://i.ibb.co/Cz4SKYP/IMG-3981.jpg" 
    },
    {
      img: "https://i.ibb.co/hgSw9S1/IMG-1687.jpg" 
    },
    {
      img: "https://i.ibb.co/jwMx64N/IMG-1680.jpg" 
    },
    {
      img: "https://i.ibb.co/Rh420RC/IMG-1426.jpg" 
    },
    {
      img: "https://i.ibb.co/bXPkQyL/IMG-1420.jpg" 
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

            <WSPGallery galleryImages={Maternity} />

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

export default MaternityPics