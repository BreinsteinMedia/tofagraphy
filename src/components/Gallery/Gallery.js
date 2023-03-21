import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Gallery.css"
import { Fade } from "react-awesome-reveal";

//framer motion
import { motion, useScroll, useSpring } from 'framer-motion';

//apartment images
import img69 from "../../images/birthday/IMG_2512.jpg"
import img5 from "../../images/apartments/IMG_9186.jpg"


import img7 from "../../images/campaign/IMG_2022.jpg"

import img10 from "../../images/birthday/IMG_2285.jpg"
import img11 from "../../images/birthday/IMG_2291.jpg"
import img17 from "../../images/birthday/IMG_2737.jpg"
import img18 from "../../images/birthday/IMG_3311.jpg"


import img1 from "../../images/wedding/IMG_0149.jpg"
import img70 from "../../images/wedding/IMG_0209.jpg"


import img63 from "../../images/outdoor/IMG_6151.jpg"
import img64 from "../../images/outdoor/IMG_6177.jpg"

import img55 from "../../images/maternity/IMG_1420.jpg"


import img34 from "../../images/birthday/IMG_7937.jpg"
import img35 from "../../images/lifestyle/IMG_3157.jpg"



import img29 from "../../images/wedding/IMG_1054.jpg"


import img46 from "../../images/lifestyle/WAL07779.jpg"
import img47 from "../../images/lifestyle/IMG_8808.jpg"

import img65 from "../../images/outdoor/IMG_6271.jpg"



import img49 from "../../images/apartments/IMG_9717.jpg"


import img50 from "../../images/birthday/IMG_2582.jpg"
import img51 from "../../images/lifestyle/WAL07633.jpg"

import img75 from "../../images/wedding/IMG_9455.jpg"
import img76 from "../../images/birthday/IMG_8523.jpg"

import img45 from "../../images/lifestyle/IMG_6523.jpg"
import img40 from "../../images/lifestyle/IMG_6449.jpg"

function Gallery() {



    const [scrollTP, setScrollTP] = useState(0);
    const [scrollTP2, setScrollTP2] = useState(0);

    window.addEventListener('scroll', function () {

        var st = window.pageYOffset || document.documentElement.scrollTop;

        if (st > scrollTP) {
            setScrollTP(scrollTP + 10)
            setScrollTP2(scrollTP2 + 3)
        }

        if (st > scrollTP2) {
            setScrollTP2(scrollTP2 + 3)
        }

    })
    return (

        <>
        <div className='gallery-cont'>

            <motion.div className='carsl2'>

                <motion.div
                    className='inner-carsl2'>

                    <motion.div className='carsl2-item top-offset'
                        initial={{ y: -200 }}
                        style={{ y: -200 - scrollTP }}
                    >
                        <img src={img63} alt='movie-cover' />
                        <img src={img76} alt='movie-cover' />
                        <img src={img34} alt='movie-cover' />
                        <img src={img10} alt='movie-cover' />
                        <img src={img55} alt='movie-cover' />

                    </motion.div>

                    <motion.div className='carsl2-item'
                        initial={{ y: -30 }}
                        style={{ y: -30 - scrollTP2 }}>
                        <img src={img46} alt='movie-cover' />
                        <img src={img7} alt='movie-cover' />
                        <img src={img69} alt='movie-cover' />
                        <img src={img64} alt='movie-cover' />
                    </motion.div>


                    <motion.div className='carsl2-item top-offset'
                        initial={{ y: -200 }}
                        style={{ y: -200 - scrollTP }}
                    >
                        <img src={img29} alt='movie-cover' />
                        <img src={img49} alt='movie-cover' />
                        <img src={img5} alt='movie-cover' />
                        <img src={img35} alt='movie-cover' />
                        <img src={img7} alt='movie-cover' />

                    </motion.div>

                    <motion.div className='carsl2-item'
                        initial={{ y: -30 }}
                        style={{ y: -30 - scrollTP2 }}>
                        <img src={img1} alt='movie-cover' />
                        <img src={img50} alt='movie-cover' />
                        <img src={img65} alt='movie-cover' />
                        <img src={img51} alt='movie-cover' />
                    </motion.div>

                    <motion.div className='carsl2-item top-offset'
                        initial={{ y: -200 }}
                        style={{ y: -200 - scrollTP }}
                    >
                        <img src={img11} alt='movie-cover' />
                        <img src={img18} alt='movie-cover' />
                        <img src={img70} alt='movie-cover' />
                        <img src={img47} alt='movie-cover' />
                        <img src={img75} alt='movie-cover' />

                    </motion.div>

                    <motion.div className='carsl2-item'
                        initial={{ y: -30 }}
                        style={{ y: -30 - scrollTP2 }}>
                        <img src={img17} alt='movie-cover' />
                        <img src={img45} alt='movie-cover' />
                        <img src={img40} alt='movie-cover' />
                        <img src={img76} alt='movie-cover' />
                    </motion.div>

                </motion.div>

            </motion.div>



            <div className='dark-overlay'>

            </div>

        </div>


        <div className='galleryOption'>

            <Fade direction='up'>

                <div className='galleryOptions'>

                    <h1>Bashir Tofa</h1>

                    <h4>PHOTOGRAPHY</h4>

                    <Link to="/about" className='gbtn'>
                        <div className='GalleryBtn'> Learn More</div>
                    </Link>

                </div>
            </Fade>

            </div> 
        </>
    )
}

export default Gallery

