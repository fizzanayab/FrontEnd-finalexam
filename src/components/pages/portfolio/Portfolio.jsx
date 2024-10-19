import { Link } from 'react-router-dom'; // Import Link for navigation
import './Portfolio.css'; 
import Mainnav from '../../header/pagesnav/Mainnav';
import Footer from '../../footer/pagesfooter/Footer';

// Sample blog data for the blog posts
const allPosts = [
  { id: 1, category: 'Kitchen', title: "Proof Bread When It's Cold Outside", content: "Winter months call for slow fermentation." },
  { id: 2, category: 'Kitchen', title: 'Is Your Bread Kneaded Enough?', content: 'Mastering the art of kneading bread.' },
  { id: 3, category: 'Kitchen', title: 'The Perfect Sourdough Crust', content: 'Achieving that golden, crispy crust.' },
  { id: 4, category: 'Kitchen', title: 'Different Types of Flour', content: 'How to choose the right flour for your bread.' },
  { id: 5, category: 'Kitchen', title: 'The Science Behind Yeast', content: 'Understanding how yeast works in bread making.' },
  { id: 6, category: 'Kitchen', title: 'Bread Scoring Techniques', content: 'Enhance the look and texture of your bread.' },
  { id: 7, category: 'Kitchen', title: 'Whole Wheat vs White Bread', content: 'Exploring the differences between whole wheat and white bread.' },
  { id: 8, category: 'Kitchen', title: 'Is Your Bread Overproofed?', content: 'Signs that your bread may have proofed too long.' },
  { id: 9, category: 'Kitchen', title: 'Understanding Gluten', content: 'What is gluten, and why is it important in bread making?' },
  { id: 10, category: 'Travel', title: 'Travel to the Best Bread Spots', content: 'Discovering hidden bakeries around the world.' },
  { id: 11, category: 'Tutorial', title: 'Sourdough Mastery: Cream Cheese Bread', content: 'Step-by-step sourdough making.' },
  { id: 12, category: 'Tutorial', title: 'Beginner’s Guide to Sourdough', content: 'Learn the basics of making sourdough at home.' },
  { id: 13, category: 'Tutorial', title: 'Advanced Sourdough Techniques', content: 'Take your sourdough skills to the next level.' },
  { id: 14, category: 'Tutorial', title: 'Using a Bread Lame', content: 'How to score bread like a pro.' },
  { id: 15, category: 'Tutorial', title: 'Storing Bread Properly', content: 'Keep your bread fresh for longer.' },
  { id: 16, category: 'Tutorial', title: 'Bread Troubleshooting', content: 'How to fix common bread-making problems.' },
  { id: 17, category: 'Tutorial', title: 'Sourdough Variations', content: 'Explore different types of sourdough breads.' },
  { id: 18, category: 'Tutorial', title: 'Gluten-Free Bread', content: 'Make delicious gluten-free bread at home.' },
  { id: 19, category: 'Tutorial', title: 'Artisan Bread for Beginners', content: 'Learn the basics of artisan bread.' },
  { id: 20, category: 'Tutorial', title: 'Understanding Dough Hydration', content: 'How water content affects your bread.' },
  { id: 21, category: 'Tutorial', title: 'The Importance of Fermentation', content: 'Why fermentation is key to good bread.' },
  { id: 22, category: 'Tutorial', title: 'Bread Baking Tools', content: 'A guide to the tools you need for making bread.' },
  { id: 23, category: 'Tutorial', title: 'Make a Starter from Scratch', content: 'Learn how to make your own sourdough starter.' },
  { id: 24, category: 'Tutorial', title: 'Achieve a Light and Airy Crumb', content: 'How to get that perfect crumb structure.' },
  { id: 25, category: 'Tutorial', title: 'Bread with Seeds and Grains', content: 'Incorporating seeds and grains into your bread.' }
];

const Portfolio = () => {
  // If you want to filter posts based on a category or some criteria, define `filteredPosts`
  const filteredPosts = allPosts; // Currently displaying all posts; modify this as needed

  return (
    <div className="blog-container-fluid">
      <Mainnav />
      <div className="blog-header">
        <h1>Blog grid classic</h1>
        <p>Home / Blog grid classic</p>
      </div>

      <div className="blog-content">
        <div className="blog-posts">
          {filteredPosts.map((post) => (
            <div className="blog-post" data-id={post.id} key={post.id}>
              <Link to={`/blog/${post.id}`} className="post-link"> {/* Link to BlogDetail */}
                <div className="post-details">
                  <h4>{post.title}</h4>
                  <p>{post.content}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

       
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
