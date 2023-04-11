import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Gallery.css"
import { Fade } from "react-awesome-reveal";

//framer motion
import { motion, useScroll, useSpring } from 'framer-motion';

//apartment images

























function Gallery() {



   

    
    return (
   <div className="slider">
        <div className="content">
          <div className="principal">
              <h1>Bashir Tofa</h1>
              <h4>PHOTOGRAPHY</h4>
              <Link to="/about" className='gbtn'>
                        <div className='GalleryBtn'> Learn More</div>
                    </Link>
          </div>
        </div>
      </div> 
        
    )
}

export default Gallery

