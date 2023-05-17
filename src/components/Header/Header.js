import React , { useState } from 'react'
import Logo from "../../images/logo/logo2.png"
import { Link} from "react-router-dom"
import "./Header.css"


export default function Header() {
    const [menuBar , setMenuBar] = useState('false')
  
 function openBar(){
      setMenuBar(!menuBar)
    }

    function closeBar(){
      setMenuBar(false)
    }

  return (
    <div className="Header">
      <nav className="navbarContent">
        <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
        </Link>
        
      <div className="desktop">
        <ul>
        <Link to='/'>
            <li className="header1"> 
              Home
            </li>
          </Link>

          <Link to='/about'>
            <li className="header2"> 
              About Us
            </li>
          </Link>

          <Link to='/portfolio' >
            <li className="header3">
              Portfolio
            </li>
          </Link>

          <Link to='/services'>
            <li className="header4">
              Services
            </li>
          </Link>

          <Link to='/contact' >
            <li className="header5">
              Contact Us
            </li>
          </Link>
       
        </ul>
      </div>



      {/* MenuIcon Bar  */}
      <div className="menuBarIcon">
      <div onClick={openBar}>{menuBar ? (<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="white" fill-rule="evenodd"/></svg>):(<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="white" fill-rule="evenodd" opacity=".201"/></svg>)}</div>
        <div onClick={closeBar} className="closeBarMenu">{menuBar ?" " :(
          <ul>
          <Link to='/'>
            <li className="header1"> 
              Home
            </li>
          </Link>

          <Link to='/about'>
            <li className="header2"> 
              About Us
            </li>
          </Link>

          <Link to='/portfolio' >
            <li className="header3">
              Portfolio
            </li>
          </Link>

          <Link to='/services'>
            <li className="header4">
              Services
            </li>
          </Link>

          <Link to='/contact' >
            <li className="header5">
              Contact Us
            </li>
          </Link>
       
        </ul>
        )}</div>
     </div>
    </nav>
   </div>
  )
}
