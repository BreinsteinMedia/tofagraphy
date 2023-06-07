import React from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//General
import Header from "./components/Header/Header"
// import Footer from "./components/Footer/Footer"
import ScrollButton from "./components/ScrollButton/MainScrollUpBtn"
// import { BsWhatsapp, BsInstagram, BsTwitter } from 'react-icons/bs';
// import {  FiPhoneCall } from "react-icons/fi";
import "./index.css"
import ScrollToTop from "./components/ScrollToTop";

//Pages
import HomePage from "./pages/Homepage.js"
import Services from "./pages/Services";
import AboutUs from "./pages/About";
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact";

//gallery

import MaternityPics from "./components/styleGallery/MaternityPics";
import ApartmentPics from "./components/styleGallery/ApartmentPics";
import WeddingPics from "./components/styleGallery/WeddingPics";
import OutdoorPics from "./components/styleGallery/OutdoorPics";
import LifestylePics from "./components/styleGallery/LifestylePics";
import BirthdayPics from "./components/styleGallery/BirthdayPics";
import CampaignPics from "./components/styleGallery/CampaignPics";


const App = () => {

  return (
    <> 

    {/* <div class="icon-bar">
      <a href="https://www.instagram.com/tofagraphy" target="blank" className="instagram">
        <BsInstagram />
      </a>
      <a href="tel:+2348060177260" target="blank" className="instagram" >
        <FiPhoneCall />
      </a>
        <a href="https://wa.me/2348060177260/?text=Hello Tofagraphy" target="blank" className="instagram">
          <BsWhatsapp/>
        </a>
        <a href="https://www.twitter.com/tofagraphy" target="blank" className="instagram">
          <BsTwitter/>
        </a>
    </div> */}

      <Router>
      <ScrollToTop> 
      <Header/>
      <Routes>

        {/* Pages */}


        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />

        {/* Gallery */}

        <Route path='/maternity' element={<MaternityPics/>} />
        <Route path='/studio' element={<ApartmentPics/>} />
        <Route path='/outdoor' element={<OutdoorPics/>} />
        <Route path='/wedding' element={<WeddingPics/>} />
        <Route path='/lifestyle' element={<LifestylePics/>} />
        <Route path='/birthday' element={<BirthdayPics/>} />
        <Route path='/campaign' element={<CampaignPics/>} />

        </Routes>
        {/* <Footer/> */}
        </ScrollToTop>
    </Router>

    <ScrollButton />

    </>

  )
}

export default App;
