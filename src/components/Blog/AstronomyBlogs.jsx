import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase.js';
import './AstronomyBlogs.css';

const AstronomyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  // Sample blog data with astronomy themes
  const sampleBlogs = [
    {
      id: 1,
      title: "The James Webb Space Telescope's Latest Discoveries",
      content: "Explore the groundbreaking discoveries made by the James Webb Space Telescope, from distant galaxies to exoplanet atmospheres...",
      category: "discoveries",
      author: "Dr. Sarah Chen",
      date: "2025-08-01",
      image: "/api/placeholder/400/250",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Understanding Black Holes: From Theory to Observation",
      content: "Dive deep into the mysterious world of black holes, their formation, and how we observe these cosmic giants...",
      category: "theory",
      author: "Prof. Michael Rodriguez",
      date: "2025-07-28",
      image: "/api/placeholder/400/250",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Beginner's Guide to Astrophotography",
      content: "Learn the basics of capturing stunning images of the night sky with practical tips and equipment recommendations...",
      category: "tutorial",
      author: "Emma Johnson",
      date: "2025-07-25",
      image: "/api/placeholder/400/250",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Search for Exoplanets: Methods and Recent Findings",
      content: "Discover how astronomers find planets beyond our solar system and the exciting worlds they've uncovered...",
      category: "discoveries",
      author: "Dr. Alex Kim",
      date: "2025-07-22",
      image: "/api/placeholder/400/250",
      readTime: "7 min read"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'discoveries', name: 'Discoveries' },
    { id: 'theory', name: 'Theory' },
    { id: 'tutorial', name: 'Tutorials' },
    { id: 'observations', name: 'Observations' }
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const blogsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        
        // If no blogs from Firebase, use sample data
        if (blogsData.length === 0) {
          setBlogs(sampleBlogs);
        } else {
          setBlogs(blogsData);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        // Fallback to sample data
        setBlogs(sampleBlogs);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = selectedCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  if (loading) {
    return (
      <div className="blogs-loading">
        <div className="loading-spinner"></div>
        <p>Loading astronomy blogs...</p>
      </div>
    );
  }

  return (
    <div className="astronomy-blogs-container">
      <motion.div 
        className="blogs-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Astronomy Blogs</h1>
        <p>Explore the wonders of the universe through expert insights and discoveries</p>
      </motion.div>

      {/* Category Filter */}
      <motion.div 
        className="category-filter"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </motion.div>

      {/* Featured Blog */}
      {filteredBlogs.length > 0 && (
        <motion.div 
          className="featured-blog"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="featured-image">
            <img src={filteredBlogs[0].image} alt={filteredBlogs[0].title} />
            <div className="featured-overlay">
              <span className="featured-badge">Featured</span>
            </div>
          </div>
          <div className="featured-content">
            <h2>{filteredBlogs[0].title}</h2>
            <div className="blog-meta">
              <span className="author">By {filteredBlogs[0].author}</span>
              <span className="date">{new Date(filteredBlogs[0].date).toLocaleDateString()}</span>
              <span className="read-time">{filteredBlogs[0].readTime}</span>
            </div>
            <p>{filteredBlogs[0].content}</p>
            <button className="read-more-btn">Read Full Article</button>
          </div>
        </motion.div>
      )}

      {/* Blog Grid */}
      <div className="blogs-grid">
        {filteredBlogs.slice(1).map((blog, index) => (
          <motion.article 
            key={blog.id} 
            className="blog-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,212,255,0.2)" }}
          >
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
              <div className="category-badge">{blog.category}</div>
            </div>
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <div className="blog-meta">
                <span className="author">By {blog.author}</span>
                <span className="date">{new Date(blog.date).toLocaleDateString()}</span>
              </div>
              <p>{blog.content.substring(0, 120)}...</p>
              <div className="blog-footer">
                <span className="read-time">{blog.readTime}</span>
                <button className="read-btn">Read More</button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <motion.div 
          className="no-blogs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>No blogs found in this category</h3>
          <p>Check back later for more amazing astronomy content!</p>
        </motion.div>
      )}
    </div>
  );
};

export default AstronomyBlogs;
