import React, {useEffect, useState} from 'react'
import { TfiAngleUp } from 'react-icons/tfi';
import "./styles.css";

function MainScrollUpBtn() {

    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


  return (
    
    <div className="top-to-btm">
    {" "}
    {showTopBtn && (
        <TfiAngleUp
            className="icon-position icon-style"
            onClick={goToTop}
        />
    )}{" "}
</div>

  )
}


export default MainScrollUpBtn

