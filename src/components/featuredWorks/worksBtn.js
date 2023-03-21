import React from 'react'
import { Link } from 'react-router-dom'   
import "./FeaturedWorks.css"  

function worksBtn() {
  return (
    <div className='worksBtn'>
        <Link to="/Portfolio">
        <div className='featuredWorkBtn'>View More</div>
        </Link>
    </div>
  )
}

export default worksBtn