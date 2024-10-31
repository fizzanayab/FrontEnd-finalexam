import React from 'react';

import ScrollToTopButton from '../../utilities/button/ScrollToTopButton';
import './BlogDetail.css'; // Import your detail page styles
import Mainnav from '../../header/pagesnav/Mainnav'; // Custom navigation component
import Footer from '../../footer/pagesfooter/Footer'; // Custom footer component
import { useNavigate, useParams, Link } from 'react-router-dom';

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
import post25 from '../../img/blog/totoutrial15.jpg';

// Sample blog data for the blog post details
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

const BlogDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const postId = parseInt(id);
  const post = allPosts.find((p) => p.id === postId);

  const postIndex = allPosts.findIndex((p) => p.id === postId);
  if (!post) return <div>Post not found</div>;

  const previousPostId = postIndex > 0 ? allPosts[postIndex - 1].id : null;
  const nextPostId = postIndex < allPosts.length - 1 ? allPosts[postIndex + 1].id : null;

  const handleSearchRedirect = (e) => {
    const searchQuery = e.target.value;
    navigate(`/blog?search=${encodeURIComponent(searchQuery)}`);
  };

  const handleFilterRedirect = (category) => {
    navigate(`/blog?filter=${encodeURIComponent(category)}`);
  };

  return (
    <div className="blog-detail-container">
      <Mainnav />

      <div className="container">
        <div className="row">
          <div className="main-content col-md-7">
            <div className="blog-header-details">
              <Link to="/blog" style={{ textDecoration: 'none', color: 'blue' }}>
                <p>Back to Blog Page</p>
              </Link>              <h1>{post.title}</h1>
              <div className="blog-image-container">
                <img src={post.image} alt={post.title} className="blog-detail-image" />
              </div>
              <p>Category: {post.category}</p>
              <p>{post.content}</p>
              <p>When the temps start to drop, I start craving all of my favorite comfort foods. That means more soups, more pot roasts and—in particular—a lot more fresh homemade bread to go with both. So what’s a baker to do when she wants to make fresh bread at home when it’s cold? Well, it turns out there are a few tricks to proofing bread in the cold.</p>
              <span className='dots' >"</span>
              <span className='textdot1'  >  If you’re a real thermostat stickler like me, that’s not something you really want to do very often.</span>
              <br />
              <p>However, when it’s chilly outside and in, making yeasted bread at home becomes more challenging. That’s because yeast does its job best at temperatures above 75ºF. That means in order to proof bread on a cold day, you really have to crank up the heat at home to get a good rise.

                (Source: tasteofhome.com)</p>

              <div className="navigation-buttons">
                <button
                  onClick={() => navigate(`/blog/${previousPostId}`)}
                  disabled={!previousPostId}
                  className="go-back-post-button"
                >
                  Back Post
                </button>
                <button
                  onClick={() => navigate(`/blog/${nextPostId}`)}
                  disabled={!nextPostId}
                  className="next-post-button"
                >
                  Next Post
                </button>
              </div>

            </div>

            {/* Blog content and carousel */}
            <div id="relatedPostsCarousel" className="carousel slide slidmain" data-bs-ride="carousel">
              <div className="carousel-inner">
                {allPosts
                  .slice(1, 5)
                  .reduce((acc, relatedPost, index) => {
                    if (index % 2 === 0) acc.push([]);
                    acc[acc.length - 1].push(relatedPost);
                    return acc;
                  }, [])
                  .map((slide, slideIndex) => (
                    <div
                      className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`}
                      key={slideIndex}
                    >
                      <div className="row">
                        {slide.map((relatedPost) => (
                          <div className="col-6 related-post1" key={relatedPost.id}>
                            <img
                              src={relatedPost.image}
                              className="d-block w-100 related-post-image1"
                              alt={relatedPost.title}
                            />
                            <div className="related-post-content">
                              <div className="category-badge">KITCHEN</div>
                              <h5 className="related-post-title">{relatedPost.title}</h5>
                              <p className="related-post-date">March 11, 2019</p>
                              <p className="related-post-excerpt">
                                {relatedPost.content}
                              </p>
                              <a href={`/blog/${relatedPost.id}`} className="read-more-link">
                                READ MORE
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>



              <button className="carousel-control-prev" type="button" data-bs-target="#relatedPostsCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#relatedPostsCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>


            <div className="leave-comment">
              <h2>Leave a Comment</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="comment">Your Comment</label>
                  <textarea id="comment" rows="4" required></textarea>
                </div>
                <button type="submit" className="submit-button">Submit</button>
              </form>
            </div>
          </div>

          <aside className="blog-sidebar col-3">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for blog posts..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSearchRedirect(e);
                }}
              />
            </div>
            <div className="categories">
              <h4>Categories</h4>
              <ul>
                <li onClick={() => handleFilterRedirect('All')}>All</li>
                <li onClick={() => handleFilterRedirect('Kitchen')}>Kitchen</li>
                <li onClick={() => handleFilterRedirect('Travel')}>Travel</li>
                <li onClick={() => handleFilterRedirect('Tutorial')}>Tutorial</li>
              </ul>
            </div>
            <div className="featured-posts">
              <h2>Related Posts</h2>
              {allPosts.slice(1, 3).map((relatedPost) => (
                <div className="related-post" key={relatedPost.id}>
                  <img src={relatedPost.image} alt={relatedPost.title} />
                  <p>{relatedPost.title}</p>
                </div>
              ))}
            </div>

            <div className="banner-ad">
            </div>
          </aside>
        </div>

      </div>
      <ScrollToTopButton />

      <Footer />
    </div>
  );
};

export default BlogDetail;
