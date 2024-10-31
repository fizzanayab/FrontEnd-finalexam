import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToTopButton from '../../utilities/button/ScrollToTopButton';
import './Blog.css';
import Mainnav from '../../header/pagesnav/Mainnav';
import Footer from '../../footer/pagesfooter/Footer';

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
import post25 from '../../img/blog/totoutrial15.jpg';

// Blog post data
const allPosts = [
  { id: 1, category: 'Kitchen', title: "Proof Bread When It's Cold Outside", content: "Winter months call for slow fermentation.", image: post1 },
  { id: 2, category: 'Kitchen', title: 'Is Your Bread Kneaded Enough?', content: 'Mastering the art of kneading bread.', image: post2 },
  { id: 3, category: 'Kitchen', title: 'The Perfect Sourdough Crust', content: 'Achieving that golden, crispy crust.', image: post3 },
  { id: 4, category: 'Kitchen', title: 'Different Types of Flour', content: 'How to choose the right flour for your bread.', image: post4 },
  { id: 5, category: 'Kitchen', title: 'The Science Behind Yeast', content: 'Understanding how yeast works in bread making.', image: post5 },
  { id: 6, category: 'Kitchen', title: 'Bread Scoring Techniques', content: 'Enhance the look and texture of your bread.', image: post6 },
  { id: 7, category: 'Kitchen', title: 'Whole Wheat vs White Bread', content: 'Exploring the differences between whole wheat and white bread.', image: post7 },
  { id: 8, category: 'Kitchen', title: 'Is Your Bread Overproofed?', content: 'Signs that your bread may have proofed too long.', image: post8 },
  { id: 9, category: 'Kitchen', title: 'Understanding Gluten', content: 'What is gluten, and why is it important in bread making?', image: post9 },
  { id: 10, category: 'Travel', title: 'Travel to the Best Bread Spots', content: 'Discovering hidden bakeries around the world.', image: post10 },
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

const useQuery = () => new URLSearchParams(useLocation().search);

const Blog = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const query = useQuery();
  const initialSearch = query.get('search') || '';
  const initialFilter = query.get('filter') || 'All';

  useEffect(() => {
    setSearch(initialSearch);
    setFilter(initialFilter);
  }, [initialSearch, initialFilter]);

  // Filtered and searched posts
  const filteredPosts = allPosts.filter(
    (post) =>
      (filter === 'All' || post.category === filter) &&
      post.title.toLowerCase().includes(search.toLowerCase())
  );

  // Ref for observer
  const observer = useRef();

  const setVisibility = (entry) => {
    if (entry.isIntersecting) {
      const postElement = entry.target;
      postElement.classList.add('visible');
      observer.current.unobserve(postElement);
    }
  };

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    // Create the observer
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(setVisibility);
    }, options);

    // Function to observe posts
    const observePosts = () => {
      const posts = document.querySelectorAll('.blog-post');
      posts.forEach((post) => {
        post.classList.remove('visible');
        observer.current.observe(post);
      });
    };

    // Observe posts on mount and when filteredPosts change
    observePosts();

    return () => {
      const posts = document.querySelectorAll('.blog-post'); // Select all posts
      posts.forEach((post) => observer.current.unobserve(post)); // Clean up observer
    };
  }, [filteredPosts]);

  return (
    <div className="blog-container-fluid">
      {/* Navigation bar */}
      <Mainnav />

      {/* Blog header section */}
      <div className="blog-header">
        <h1>Blog Grid Classic</h1>
        <Link to="/" className="home-link">Home</Link> / Blog Grid Classic

      </div>

      <div className="blog-content container">
        {/* Blog posts grid */}
        <div className="blog-posts">
          {filteredPosts.map((post) => (
            <div className="blog-post" data-id={post.id} key={post.id}>
              <Link to={`/blog/${post.id}`} className="post-link">
                <div
                  className={`post-image`}
                  style={{ backgroundImage: `url(${post.image})` }}
                />
              </Link>
              <div className="post-details-container">
                {/* Category Ribbon */}
                <span className="category-ribbon">{post.category}</span>
                <div className="post-details">
                  <h4>{post.title}</h4>
                  <p className="post-date">{new Date(post.date).toLocaleDateString()}</p>
                  <p>{post.content}</p>
                </div>
                {/* Read More button */}
                <Link to={`/blog/${post.id}`} className="read-more-button">Read More</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar with categories and search */}
        <aside className="blog-sidebar col-md-3">
          {/* Search bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for blog posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Categories filter */}
          <div className="categories">
            <h4>Categories</h4>
            <ul>
              <li onClick={() => setFilter('All')}>All</li>
              <li onClick={() => setFilter('Kitchen')}>Kitchen</li>
              <li onClick={() => setFilter('Travel')}>Travel</li>
              <li onClick={() => setFilter('Tutorial')}>Tutorial</li>
            </ul>
          </div>

          {/* Featured Posts */}
          <div className="featured-posts">
            <h2>Related Posts</h2>
            {allPosts.slice(1, 3).map((relatedPost) => (
              <div className="related-post" key={relatedPost.id}>
                <img src={relatedPost.image} alt={relatedPost.title} />
                <p>{relatedPost.title}</p>
              </div>
            ))}
          </div>

          {/* Archives */}
          <div className="archives">
            <h4>Archives</h4>
            <ul>
              <li>March 2023</li>
              <li>January 2023</li>
            </ul>
            <div className="banner-ad">
            </div>
          </div>
        </aside>
      </div>


      {/* Footer section */}
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Blog;
