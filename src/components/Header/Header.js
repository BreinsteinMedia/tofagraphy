import React, { useState } from "react"
import "./Header.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import FaBars from "../../assets/MenuIcon"
import ImCross from "../../assets/CloseIcon"
import Logo from "../../images/logo/logo2.png"
import Video from "../../images/backgroundVid.mp4"


const Header = () => {

  const [Mobile, setMobile] = useState(false)


   const[active, setactive] = useState(false);

  const changeBg = () =>{
    if(window.scrollY >= 350){
      setactive(true);
    }else{
      setactive(false);
    }
  };
  window.addEventListener('scroll', changeBg);

  return (

    <>

      <nav className={active? 'navbar active' : 'navbar'}>

        <Link to="/" className="logo">
        <img src={Logo} alt="" />
        </Link>

        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>

          <video autoPlay muted loop className="videoBG" >
          <source src={Video} type="video/mp4" />
          </video>
          <div className='video-dark-overlay'></div>


          <CustomLink to='/'>
            <li className="header1"> 
              Home
            </li>
          </CustomLink>

          <CustomLink to='/about'>
            <li className="header2"> 
              About Us
            </li>
          </CustomLink>

          <CustomLink to='/portfolio' >
            <li className="header3">
              Portfolio
            </li>
          </CustomLink>

          <CustomLink to='/services'>
            <li className="header4">
              Services
            </li>
          </CustomLink>

          <CustomLink to='/contact' >
            <li className="header5">
              Contact Us
            </li>
          </CustomLink>
      

        </ul>
        
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <div className='mobile-menu-icon button' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross className="bars" /> : <FaBars className="bars" />}
        </div>

       
      </nav>

      

      </>

  )
}


function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Header