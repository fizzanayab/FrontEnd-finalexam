import React from 'react';
import './Blog.css'; // You will define the styles in a separate CSS file.
import Mainnav from '../../header/pagesnav/Mainnav';
import Footer from '../../footer/pagesfooter/Footer';

const Blog = () => {
  return (
    <div className="blog-container">
      <Mainnav/>
      <div className="blog-header">
        <h1>Blog grid classic</h1>
        <p>Home / Blog grid classic</p>
      </div>
      <div className="blog-content">
        <div className="blog-posts">
          {/* Blog Post 1 */}
          <div className="blog-post">
            <img src="post1.jpg" alt="Post 1" />
            <div className="post-details">
              <h4>Proof Bread When It's Cold Outside</h4>
              <p>Winter months call for slow fermentation.</p>
            </div>
          </div>
          {/* Add more blog posts similarly */}
        </div>
        <aside className="blog-sidebar">
          <div className="search-bar">
            <input type="text" placeholder="Enter search keyword..." />
          </div>
          <div className="categories">
            <h4>Categories</h4>
            <ul>
              <li>Baking</li>
              <li>Travel</li>
            </ul>
          </div>
          <div className="featured-posts">
            <h4>Featured Posts</h4>
            <ul>
              <li>Post 1</li>
              <li>Post 2</li>
            </ul>
          </div>
          <div className="archives">
            <h4>Archives</h4>
            <ul>
              <li>March 2018</li>
              <li>January 2018</li>
            </ul>
          </div>
        </aside>
      </div>
      <Footer/>
    </div>
  );
};

export default Blog;
