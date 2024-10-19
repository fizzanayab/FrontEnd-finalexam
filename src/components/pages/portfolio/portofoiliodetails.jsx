import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the post ID from the URL
import './portofoiliodetails.css'; // Import your detail page styles
import Mainnav from '../../header/pagesnav/Mainnav'; // Custom navigation component
import Footer from '../../footer/pagesfooter/Footer'; // Custom footer component

// Import images
import post1 from '../../img/blog/totoutrial11-kitchen1.jpg';
import post2 from '../../img/blog/totoutrial8-kitchen2.jpg';
import post3 from '../../img/blog/kitchen3.jpg';
import post4 from '../../img/blog/kitchen4.jpg';
import post5 from '../../img/blog/kitchen5.jpg';
import post6 from '../../img/blog/kitchen6.jpg';
import post7 from '../../img/blog/kitchen7.jpg';
import post8 from '../../img/blog/kitchen8.jpg';
import post9 from '../../img/blog/kitchen9.jpg';
import post10 from '../../img/blog/toutrail-travel-1.jpg';
import post11 from '../../img/blog/toutrail-travel-1.jpg';
import post12 from '../../img/blog/totoutrial2.jpg';
import post13 from '../../img/blog/totoutrial3.jpg';
import post14 from '../../img/blog/totoutrial4.jpg';
import post15 from '../../img/blog/totoutrial5.jpg';
import post16 from '../../img/blog/totoutrial6.jpg';
import post17 from '../../img/blog/totoutrial7.jpg';
import post18 from '../../img/blog/totoutrial8-kitchen2.jpg';
import post19 from '../../img/blog/totoutrial9.jpg';
import post20 from '../../img/blog/totoutrial10.jpg';
import post21 from '../../img/blog/totoutrial11-kitchen1.jpg';
import post22 from '../../img/blog/totoutrial12.jpg';
import post23 from '../../img/blog/totoutrial13.jpg';
import post24 from '../../img/blog/totoutrial14.jpg';
import post25 from '../../img/blog/totoutrial5.jpg';

// Sample blog data for the blog post details
const allPosts = [
    { id: 1, category: 'Kitchen', title: "Proof Bread When It's Cold Outside", content: "Winter months call for slow fermentation.", image: post1 },
    { id: 2, category: 'Kitchen', title: 'Is Your Bread Kneaded Enough?', content: 'Mastering the art of kneading bread.', image: post2 },
    { id: 3, category: 'Kitchen', title: 'The Perfect Sourdough Crust', content: 'Achieving that golden, crispy crust.', image: post3 },
    { id: 4, category: 'Kitchen', title: 'Different Types of Flour', content: 'How to choose the right flour for your bread.' , image: post4},
    { id: 5, category: 'Kitchen', title: 'The Science Behind Yeast', content: 'Understanding how yeast works in bread making.', image: post5 },
    { id: 6, category: 'Kitchen', title: 'Bread Scoring Techniques', content: 'Enhance the look and texture of your bread.' , image: post6},
    { id: 7, category: 'Kitchen', title: 'Whole Wheat vs White Bread', content: 'Exploring the differences between whole wheat and white bread.' , image: post7},
    { id: 8, category: 'Kitchen', title: 'Is Your Bread Overproofed?', content: 'Signs that your bread may have proofed too long.', image: post8 },
    { id: 9, category: 'Kitchen', title: 'Understanding Gluten', content: 'What is gluten, and why is it important in bread making?', image: post9 },
    { id: 10, category: 'Travel', title: 'Travel to the Best Bread Spots', content: 'Discovering hidden bakeries around the world.' , image: post10},
    { id: 11, category: 'Tutorial', title: 'Sourdough Mastery: Cream Cheese Bread', content: 'Step-by-step sourdough making.', image: post11 },
    { id: 12, category: 'Tutorial', title: 'Beginner’s Guide to Sourdough', content: 'Learn the basics of making sourdough at home.', image: post12 },
    { id: 13, category: 'Tutorial', title: 'Advanced Sourdough Techniques', content: 'Take your sourdough skills to the next level.', image: post13 },
    { id: 14, category: 'Tutorial', title: 'Using a Bread Lame', content: 'How to score bread like a pro.', image: post14 },
    { id: 15, category: 'Tutorial', title: 'Storing Bread Properly', content: 'Keep your bread fresh for longer.', image: post15 },
    { id: 16, category: 'Tutorial', title: 'Bread Troubleshooting', content: 'How to fix common bread-making problems.', image: post16 },
    { id: 17, category: 'Tutorial', title: 'Sourdough Variations', content: 'Explore different types of sourdough breads.', image: post17 },
    { id: 18, category: 'Tutorial', title: 'Gluten-Free Bread', content: 'Make delicious gluten-free bread at home.', image: post18 },
    { id: 19, category: 'Tutorial', title: 'Artisan Bread for Beginners', content: 'Learn the basics of artisan bread.', image: post19 },
    { id: 20, category: 'Tutorial', title: 'Understanding Dough Hydration', content: 'How water content affects your bread.', image: post20 },
    { id: 21, category: 'Tutorial', title: 'The Importance of Fermentation', content: 'Why fermentation is key to good bread.', image: post21 },
    { id: 22, category: 'Tutorial', title: 'Bread Baking Tools', content: 'A guide to the tools you need for making bread.', image: post22 },
    { id: 23, category: 'Tutorial', title: 'Make a Starter from Scratch', content: 'Learn how to make your own sourdough starter.', image: post23 },
    { id: 24, category: 'Tutorial', title: 'Achieve a Light and Airy Crumb', content: 'How to get that perfect crumb structure.', image: post24 },
    { id: 25, category: 'Tutorial', title: 'Bread with Seeds and Grains', content: 'Incorporating seeds and grains into your bread.', image: post25 }
];

const PortfolioDetails = () => { // Changed the component name to follow conventions
    const { id } = useParams(); // Get the post ID from the URL
    const post = allPosts.find((post) => post.id === parseInt(id)); // Find the specific post

    if (!post) {
        return <div>Post not found</div>; // Handle case where post doesn't exist
    }

    return (
        <div className="blog-detail-container">
            <Mainnav />
            <div className="blog-detail-header" style={{ backgroundImage: `url(${post.image})` }}>
                <h1>{post.title}</h1>
                <p>Category: {post.category}</p>
            </div>
            <div className="blog-detail-content">
                <p>{post.content}</p>
            </div>
            <Footer />
        </div>
    );
};

export default PortfolioDetails; // Ensure you're exporting the renamed component
