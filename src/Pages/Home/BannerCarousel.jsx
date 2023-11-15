import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import pic1 from "../../images/carouselBanner/Untitled-3.png"
import pic2 from "../../images/carouselBanner/united-1.png"
import pic3 from "../../images/carouselBanner/united-2.png"
import pic4 from "../../images/carouselBanner/united-4.png"
const BannerCarousel = () => {
    
    return (
        <div >
     <AwesomeSlider  animation="cubeAnimation">
    <div data-src={pic1} >
    </div>
    <div data-src={pic2} />
    <div data-src={pic3} />
    <div data-src={pic4} />
  </AwesomeSlider>
        </div>
    );
};

export default BannerCarousel;