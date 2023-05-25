import React from 'react'
import {AiFillCamera} from 'react-icons/ai'
// import {RiPlantLine, RiEqualizerLine} from 'react-icons/ri'
import {FaPhotoVideo} from 'react-icons/fa'
import {TbPlant} from 'react-icons/tb'
import "./OurServices.css"



function OurServices() {

  return (

    <div className='OurServices'>

      <h4>Intro</h4>

      <h1>Life is about creating experiences</h1>

      <h6> We capture unforgettable memories and experiences for you and yours. <br/> A trial with us will convince you to always come back.</h6>

      <div className='OurServicesContent'>

        <div className='OurServicesContentItem'>
          <AiFillCamera className='OurServicesContentSvg1'/>
          <p> Retouching Services </p>
        </div>

        <div className='OurServicesContentItem2'>
          <TbPlant className='OurServicesContentSvg2' />
          <p>Mobile Studio</p>
        </div>

        {/* <div className='OurServicesContentItem'>
          <BiMemoryCard className='OurServicesContentSvg' />
          <p>Professional ISO</p>
        </div> */}

        <div className='OurServicesContentItem'>
          <FaPhotoVideo className='OurServicesContentSvg3' />
          <p>Photography Classes</p>
        </div>

        {/* <div className='OurServicesContentItem'>
          <RiEqualizerLine className='OurServicesContentSvg' />
          <p>Full Quality</p>
        </div> */}


      </div>



    </div>
  )
}

export default OurServices