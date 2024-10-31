import React, { useEffect, useState, useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollTop < lastScrollTop.current && scrollTop > maxScroll - 200) {
        setIsVisible(true);
      } else if (scrollTop > lastScrollTop.current) {
        setIsVisible(false);
      }

      if (scrollTop === 0) {
        setIsVisible(false);
      }

      lastScrollTop.current = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'fade-in' : 'fade-out'}`}
      onClick={scrollToTop}
      style={{ display: isVisible || window.scrollY === 0 ? 'block' : 'none' }}
    >
      <FaArrowUp className="arrow-icon" />
    </button>
  );
};

export default ScrollToTopButton;
