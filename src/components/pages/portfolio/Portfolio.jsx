import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import ScrollToTopButton from '../../utilities/button/ScrollToTopButton';
import './Portfolio.css'; 
import Mainnav from '../../header/pagesnav/Mainnav';
import Footer from '../../footer/pagesfooter/Footer';

const allPortfolioItems = [
  { id: 1, category: 'Web Design', title: 'E-Commerce Platform', description: 'A responsive e-commerce platform designed for modern businesses.' },
  { id: 2, category: 'Graphic Design', title: 'Creative Logo Design', description: 'A collection of innovative logos for startups.' },
  { id: 3, category: 'Photography', title: 'Wildlife Photography', description: 'Capturing the essence of wildlife in natural habitats.' },
  { id: 4, category: 'Photography', title: 'Nature Photography', description: 'Capturing the beauty of nature.' },
  { id: 5, category: 'Photography', title: 'Portrait Photography', description: 'Artistic portraits of individuals.' },
  { id: 6, category: 'Photography', title: 'Street Photography', description: 'Capturing the essence of urban life.' },
  { id: 7, category: 'Photography', title: 'Travel Photography', description: 'Documenting adventures around the world.' },
  { id: 8, category: 'Photography', title: 'Food Photography', description: 'Artistic presentations of culinary creations.' },
  { id: 9, category: 'Photography', title: 'Product Photography', description: 'Showcasing products in an appealing way.' },
];

const Portfolio = () => {
  const filteredItems = allPortfolioItems; 

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('.portfolio-item'); 
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect(); 
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setTimeout(() => {
            item.classList.add('visible'); 
          }, index * 100); 
        }
      });
    };

    window.addEventListener('scroll', handleScroll); 
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  return (
    <div className="portfolio-container-fluid">
      <Mainnav />
      <div className="portfolio-header">
        <h1>Portfolio</h1>
        <p>
          <Link to="/">Home</Link> 
        </p>
      </div>

      <div className="portfolio-content">
        <div className="portfolio-items">
          {filteredItems.map((item) => (
            <Link to={`/portfolio/${item.id}`} className="portfolio-item" data-id={item.id} key={item.id}>
              <div className="portfolio-details">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ScrollToTopButton/>

      <Footer />
    </div>
  );
};

export default Portfolio;
