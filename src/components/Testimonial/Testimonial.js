import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos, Style } from "@material-ui/icons";
import {AiTwotoneStar} from "react-icons/ai"
// import { Fade } from "react-awesome-reveal";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <>
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "white", fontSize: "45px" }} />
    </div>
    </>

  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;


  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "white", fontSize: "45px" }} />
    </div>
  );
};

const Testimonial = () => {

  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", paddingTop: "50px", paddingBottom:"100px" }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1 style={{paddingBottom:"20px", fontSize:"20px", fontWeight:"800"}}>TESTIMONIALS</h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots={true} className="sliderMain">
          <Card img="https://i.ibb.co/YhyRKCj/IMG-8523.jpg" />
           <Card2 img="https://i.ibb.co/fNJWWWR/IMG-2582.jpg" /> 
           <Card3 img="https://i.ibb.co/bXPkQyL/IMG-1420.jpg" />
           <Card4 img="https://i.ibb.co/tqk9RZz/IMG-9494.jpg" /> 
          <Card5 img="https://i.ibb.co/yR5HzKK/IMG-1054.jpg" />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (

  
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "white",
      }}
    >

      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />

   
      <p className="testimonialP">
 
      Tofa is the best photographer in my books. 
      No one else is yet to convince me otherwise.
 
      </p>
    

      <div className="testimonialStar">
        <AiTwotoneStar/>
        <AiTwotoneStar/>
        <AiTwotoneStar/>
        <AiTwotoneStar/>
        <AiTwotoneStar/>
      </div>

      <p style={{ fontStyle: "italic", marginTop: 20 }}>
        <span style={{ fontWeight: 500, color: "green", fontSize:"20px" }}>CYNTHIA</span> 
      </p>
    
    </div>
  );
};


const Card2 = ({ img }) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "gray",
        }}
      >
   
        <Avatar
          imgProps={{ style: { borderRadius: "50%" } }}
          src={img}
          style={{
            width: 120,
            height: 120,
            border: "1px solid lightgray",
            padding: 7,
            marginBottom: 20,
          }}
        />

       
        <p className="testimonialP">
     
        Tofa has a way of taking great pictures and editing it in the most natural way.
      
        </p>
       

        <div className="testimonialStar">
        <AiTwotoneStar/>
        <AiTwotoneStar/>
        <AiTwotoneStar/>
        <AiTwotoneStar/>
        <AiTwotoneStar/>
      </div>

        <p style={{ fontStyle: "italic", marginTop: 20 }}>
          <span style={{ fontWeight: 500, color: "green", fontSize:"20px" }}>LAUREL</span>
        </p>
    
      </div>
    );
  };

  const Card3 = ({ img }) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "gray",
        }}
      >
    
        <Avatar
          imgProps={{ style: { borderRadius: "50%" } }}
          src={img}
          style={{
            width: 120,
            height: 120,
            border: "1px solid lightgray",
            padding: 7,
            marginBottom: 20,
          }}
        />

   
        <p className="testimonialP">
      
        The studio has a great ambience. Tofa and his team are doing a great job.
    
        </p>
       

        <div className="testimonialStar">
        <AiTwotoneStar/>
        <AiTwotoneStar/>
        <AiTwotoneStar/>
        <AiTwotoneStar/>
        <AiTwotoneStar/>
      </div>

        <p style={{ fontStyle: "italic", marginTop: 20 }}>
          <span style={{ fontWeight: 500, color: "green", fontSize:"20px" }}>The Bamideles</span> 
        </p>
        
      </div>
    );
  };



  const Card4 = ({ img }) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "gray",
        }}
      >
      
        <Avatar
          imgProps={{ style: { borderRadius: "50%" } }}
          src={img}
          style={{
            width: 120,
            height: 120,
            border: "1px solid lightgray",
            padding: 7,
            marginBottom: 20,
          }}
        />

  
        <p className="testimonialP">
    
        It is always a pleasure working with Tofa. 
        I trust that he will always capture my brand in the best way.
     
        </p>
       

        <div className="testimonialStar">
        <AiTwotoneStar/>
        <AiTwotoneStar/>
        <AiTwotoneStar/>
        <AiTwotoneStar/>
        <AiTwotoneStar/>
      </div>

        <p style={{ fontStyle: "italic", marginTop: 20 }}>
          <span style={{ fontWeight: 500, color: "green", fontSize:"20px"}}>Passion Inc</span> 
        </p>
        
      </div>
    );
  };



  const Card5 = ({ img }) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "gray",
        }}
      >
      
        <Avatar
          imgProps={{ style: { borderRadius: "50%" } }}
          src={img}
          style={{
            width: 120,
            height: 120,
            border: "1px solid lightgray",
            padding: 7,
            marginBottom: 20,
          }}
        />


        <p className="testimonialP">
   
        Tofa is great at what he does. He always exceeds my expectations.
       
        </p>


        <div className="testimonialStar">
        <AiTwotoneStar/>
        <AiTwotoneStar/>
        <AiTwotoneStar/>
        <AiTwotoneStar/>
        <AiTwotoneStar/>
      </div>

        <p style={{ fontStyle: "italic", paddingTop: "20px" }}>
          <span style={{ fontWeight: 500, color: "green", fontSize:"20px" }}>The Sanusi's</span> 
        </p>
   
      </div>
    );
  };
  

export default Testimonial;