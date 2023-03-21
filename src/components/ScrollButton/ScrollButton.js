import React, {useState} from 'react';
import {BiUpArrow} from 'react-icons/bi';
import { Button } from './Styles';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 100){
	setVisible(true)
	}
	else if (scrolled <= 100){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (

	<>
	<Button style={{display:"grey",}}>

    <BiUpArrow onClick={scrollToTop}

	style={{display: visible ? 'inline' : 'none'}} />

	<div style={{display:"block", marginLeft:"-15px", marginTop:"-10px", color:"grey", }}>

	<p onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none', fontSize:"12px", fontWeight:"900", }}>
	Scroll Up
	</p> 

	</div>
    
	</Button>

	
	</>
);
}

export default ScrollButton;
