import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Community.css';

const Community = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch NASA APOD
  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        const apiKey = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY';
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
        const data = await response.json();
        setApodData(data);
      } catch (error) {
        console.error('Error fetching APOD:', error);
        // Fallback data
        setApodData({
          title: "NGC 6302: The Bug Nebula",
          explanation: "This spectacular nebula is created by a hot, dense white dwarf star surrounded by clouds of gas and dust.",
          url: "/api/placeholder/600/400",
          date: "2025-08-07"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAPOD();
  }, []);
  // Sample data for recent events
  const recentEvents = [
    {
      id: 1,
      title: "Lunar Eclipse Observation Night",
      date: "2025-08-15",
      description: "Join us for an amazing lunar eclipse viewing session with telescopes and expert guidance.",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Astrophotography Workshop",
      date: "2025-08-10",
      description: "Learn the basics of capturing stunning astronomical photographs.",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Mars Opposition Viewing",
      date: "2025-08-05",
      description: "Observe Mars at its closest approach to Earth this year.",
      image: "/api/placeholder/300/200"
    }
  ];

  // Sample data for gallery
  const galleryImages = [
    { id: 1, src: "/api/placeholder/250/250", alt: "Nebula captured by member" },
    { id: 2, src: "/api/placeholder/250/250", alt: "Moon phases observation" },
    { id: 3, src: "/api/placeholder/250/250", alt: "Star trails photography" },
    { id: 4, src: "/api/placeholder/250/250", alt: "Solar eclipse observation" },
    { id: 5, src: "/api/placeholder/250/250", alt: "Galaxy observation session" },
    { id: 6, src: "/api/placeholder/250/250", alt: "Telescope setup workshop" }
  ];

  return (
    <div className="community-container">
      <motion.div 
        className="community-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Community Hub</h1>
        <p>Connect with fellow astronomy enthusiasts and stay updated with our latest activities</p>
      </motion.div>

      {/* Astronomy Picture of the Day */}
      <motion.section 
        className="apod-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2>Astronomy Picture of the Day</h2>
        {loading ? (
          <div className="apod-loading">Loading today's cosmic wonder...</div>
        ) : (
          <div className="apod-container">
            <div className="apod-image">
              <img src={apodData.url} alt={apodData.title} />
            </div>
            <div className="apod-content">
              <h3>{apodData.title}</h3>
              <p className="apod-date">{apodData.date}</p>
              <p className="apod-explanation">{apodData.explanation}</p>
            </div>
          </div>
        )}
      </motion.section>

      {/* Recent Events Section */}
      <motion.section 
        className="recent-events"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>Recent Events</h2>
        <div className="events-grid">
          {recentEvents.map((event, index) => (
            <motion.div 
              key={event.id} 
              className="event-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
            >
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <p className="event-date">{new Date(event.date).toLocaleDateString()}</p>
                <p className="event-description">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section 
        className="gallery"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2>Community Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={image.id} 
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, zIndex: 10 }}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <p>{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Community;
