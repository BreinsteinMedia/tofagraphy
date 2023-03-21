import React from 'react';
import "./Portfolio.css"
import { Fade } from "react-awesome-reveal";
// import { GiCancel } from 'react-icons/gi';
import {Link} from "react-router-dom"
import Tofa from "../../images/tofa2.jpg"


function Portfolio () {

  let data  = [

    {
      id: 1,
      src: "https://i.ibb.co/S0bhwt2/IMG-9314.jpg" 
    },
  
    // {
    //   id: 2,
    //   src: "https://i.ibb.co/BtmmKTG/IMG-2218.jpg" 
    // },
    {
      id: 3,
      src: "https://i.ibb.co/rZ2W8V7/IMG-3358.jpg" 
    },

    {
      id: 4,
      src: "https://i.ibb.co/fNJWWWR/IMG-2582.jpg"
    },  

    {
      id: 5,
      src:  "https://i.ibb.co/dk8FTQ1/WAL07779.jpg"
    },

    {
      id: 6,
      src: "https://i.ibb.co/bXPkQyL/IMG-1420.jpg" 
    },
    {
      id: 7,
      src: "https://i.ibb.co/hgSw9S1/IMG-1687.jpg" 
    },
    {
      id: 8,
      src: "https://i.ibb.co/Cz4SKYP/IMG-3981.jpg" 
    },
    {
      id: 9,
      src:  "https://i.ibb.co/fGYKjzC/WAL07657.jpg" 
    },
    {
      id: 10,
      src: "https://i.ibb.co/JpjzmB8/IMG-0966.jpg" 
    },
    {
      id: 11,
      src: "https://i.ibb.co/fnnvTwq/IMG-9455.jpg"  
    },
    {
      id: 12,
      src: "https://i.ibb.co/zXDcKGm/IMG-6352.jpg" 
    },
    {
      id: 13,
      src: "https://i.ibb.co/vh7BPv3/IMG-6151.jpg" 
    },
    {
      id: 14,
      src: "https://i.ibb.co/VYFr0zC/IMG-6375.jpg" 
    },
    {
      id: 15,
      src: "https://i.ibb.co/bQ16sR5/IMG-2022.jpg" 
    },
    {
      id: 16,
      src: "https://i.ibb.co/fQ43q2Y/IMG-6202.jpg" 
    },
    {
      id: 17,
      src: "https://i.ibb.co/4mXN5Kd/IMG-9512.jpg" 
    },
    {
      id: 18,
      src: "https://i.ibb.co/Pjrxm3M/IMG-2388.jpg"
    },
    {
      id: 19,
      src : "https://i.ibb.co/mGnCjQm/IMG-9717.jpg" 
    },
    {
      id:20,
      src: "https://i.ibb.co/sJJmHZ6/IMG-7601.jpg"
    },
    {
      id:21,
      src: "https://i.ibb.co/9ZhZLLB/WAL07633.jpg" 
    },
   
  
  ]

  // const [modal, setModal] = useState(false);
  
  // const[tempImgSrc, setTempImgSrc] = useState ('');


  // const getImg = (src) =>{

  //   setTempImgSrc(src)
  //   setModal(true)

  // }



  return (

    <>
    <div id='Portfolio'>

      <h4>Pictures</h4>

    <h1> Latest Pictures on my <br/> Camera Roll </h1>
      

      <section>

        <div className='galleryMain' >

          {data.map ((item, index) => {

                return(
                  <div className='pics' key={index}>

                  <Fade> 

                    <img src={item.src} alt='galleryImages' style={{width: "100%" }}/>

                    </Fade>

                    
    
                  </div>

                )
          })}
         
        </div>

          <Link to="/portfolio">
          <div className='portfolioBtn'>View More</div>
          </Link>
     

      </section>

      </div>


      <div className='otherPortfolio'>

      <div className='otherPortfolio1'>
        
        <h2>
        Bashir Tofa is a Passionate
        Photographer Based in the City of Lagos.
        </h2>

        <p> We capture unforgettable memories and experiences for you and yours. </p>
          
        <p> A trial with us will convince you to always come back.</p>
        
      </div>


      <div className='otherPortfolio2'>
        <img src={Tofa} alt=''/>
      </div>



      </div>

      </>
  
      );
    }



export default Portfolio