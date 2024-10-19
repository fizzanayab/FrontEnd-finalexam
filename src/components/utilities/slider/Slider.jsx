import React, { useState, useEffect } from 'react';
import './Slider.css';
import coffeeLogo from '../../img/slider/sliderlogo.png'; 
import circlerotate from '../../img/slider/slideranimation.png'; 
import orangeArrow from '../../img/slider/srroworange.png'; 
import smalltext from '../../img/slider/smalltext1.png'; 
import maintext from '../../img/slider/maintext.png';    

const slides = [
  {
    eachSlide: 'url(https://retrolie.thememove.com/wp-content/uploads/2019/03/slider-h7-bg.jpg)',
  },
  {
    eachSlide: 'url(https://retrolie.thememove.com/wp-content/uploads/2019/05/slider-h7-bg-2.jpg)',
  },
];

const Slider = () => {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [animating, setAnimating] = useState(false);
  const [logoAnimating, setLogoAnimating] = useState(false); // Add state for logo animation
  const max = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoplay) {
        triggerSlideChange();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [active, autoplay]);

  const triggerSlideChange = () => {
    setLogoAnimating(true); // Trigger logo to move up before slide change
    setTimeout(() => {
      setAnimating(true);
      setTimeout(() => {
        setActive(active === max - 1 ? 0 : active + 1);
        setAnimating(false);
        setLogoAnimating(false); // Reset logo animation to move down after slide change
      }, 1000);
    }, 500); // Delay for logo movement
  };

  const nextOne = () => triggerSlideChange();
  const prevOne = () => setActive(active === 0 ? max - 1 : active - 1);

  const renderSlides = () =>
    slides.map((item, index) => (
      <div
        className={`each-slide ${active === index ? 'fade-in' : 'fade-out'}`}
        key={index}
        style={{ backgroundImage: item.eachSlide }}
      ></div>
    ));

  return (
    <section className="slider">
      <div className="wrapper">
        {renderSlides()}
      </div>
      <div className={`slider-content ${animating ? 'animating' : ''}`}>
        <div className="logo-container">
          <img 
            src={coffeeLogo} 
            alt="Coffee Logo" 
            className={`coffee-logo ${logoAnimating ? 'animate-logo-up' : 'animate-logo-down'}`} 
          />
        </div>
        <img src={maintext} alt="Main Text" className={`main-text ${animating ? 'animate-main' : 'zoom-in'}`} />
        <div className="small-text-container">
          <img src={smalltext} alt="Small Text" className={`small-text ${animating ? 'animate-small' : ''}`} />
        </div>
      </div>
      <div className="circle-container">
        <img src={circlerotate} alt="Rotating Circle" className="rotating-circle" />
        <img src={orangeArrow} alt="Down Arrow" className="down-arrow" />
      </div>
      <button type="button" className="arrows prev" onClick={() => prevOne()}>
        <span className="arrow left"></span>
      </button>
      <button type="button" className="arrows next" onClick={() => nextOne()}>
        <span className="arrow right"></span>
      </button>
    </section>
  );
};

export default Slider;
