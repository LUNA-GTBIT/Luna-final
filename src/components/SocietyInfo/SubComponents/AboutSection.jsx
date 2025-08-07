import { useState } from "react";
import { motion } from "framer-motion";
import "./aboutSection.css"; // CSS ko import karna mat bhulna

// Directly importing images
import img1 from "./Images/1.jpg";
import img2 from "./Images/2.jpg";
import img3 from "./Images/3.jpg";
import img4 from "./Images/4.jpg";

const items = [
  { title: "a", image: img1 },
  { title: "b", image: img2 },
  { title: "c", image: img3 },
  { title: "d", image: img4 },
];

export default function AboutSection() {
  const [bgImage, setBgImage] = useState(items[0].image);

  return (
    <div className="about-section">
      {/* Background */}
      <motion.div
        key={bgImage}
        className="background"
        style={{ backgroundImage: `url(${bgImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Sidebar List */}
      <div className="content">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="list-item"
            onMouseEnter={() => setBgImage(item.image)}
          >
            {item.title}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
