import React from 'react';
import { useParams } from 'react-router-dom';
import './PortfolioDetails.css';
import AppNavbar from '../../header/homenav/HomeNav';
import Footer from '../../footer/pagesfooter/Footer';

// Import images
import project1 from '../../img/portofoilio/1.jpg';
import project2 from '../../img/portofoilio/2.jpg';
import project3 from '../../img/portofoilio/3.jpg';
import project4 from '../../img/portofoilio/4.jpg';
import project5 from '../../img/portofoilio/5.jpg';
import project6 from '../../img/portofoilio/6.jpg';
import project7 from '../../img/portofoilio/7.jpg';
import project8 from '../../img/portofoilio/8.jpg';
import project9 from '../../img/portofoilio/9.jpg';

const allProjects = [
    { id: 1, category: 'Web Development', title: "Responsive Website Design", content: "Built a fully responsive e-commerce website using React.", image: project1 },
    { id: 2, category: 'Graphic Design', title: 'Logo Design for Startups', content: 'Designed modern, sleek logos for various startups.', image: project2 },
    { id: 3, category: 'App Development', title: 'Mobile App UI/UX', content: 'Developed a mobile application with intuitive UI/UX.', image: project3 },
    { id: 4, category: 'Photography', title: 'Product Photography', content: 'Captured high-quality product images for an online store.', image: project4 },
    { id: 5, category: 'Web Development', title: 'Portfolio Website', content: 'Designed and developed a personal portfolio website.', image: project5 },
    { id: 6, category: 'Graphic Design', title: 'Brochure Design', content: 'Created a visually appealing brochure for a marketing campaign.', image: project6 },
    { id: 7, category: 'Videography', title: 'Promotional Video Editing', content: 'Edited and produced a promotional video for a local business.', image: project7 },
    { id: 8, category: 'Web Development', title: 'Landing Page Design', content: 'Designed and developed a high-conversion landing page.', image: project8 },
    { id: 9, category: 'App Development', title: 'E-Commerce Mobile App', content: 'Developed a full-fledged e-commerce mobile app.', image: project9 },
];

const PortfolioDetails = () => {
    const { id } = useParams();
    const project = allProjects.find((project) => project.id === parseInt(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="portfolio-detail-container">
            <AppNavbar />
            <div className="portfolio-detail-header" style={{ backgroundImage: `url(${project.image})` }}>
                <h1>{project.title}</h1>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="portfolio-detail-content">
                            <h2>Details</h2>
                            <hr />
                            <p>{project.content}</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, c
                                . Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do ei
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiu
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="portfolio-detail-info">
                            <div className="portfolio-detail-about">
                                <h2>About the Project</h2>
                                <hr />
                                <div className="portfolio-detail-categories">
                                    <h3>Categories:</h3>
                                    <p>{project.category}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PortfolioDetails;
