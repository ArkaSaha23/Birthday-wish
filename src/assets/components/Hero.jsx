import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import img1 from "../../asset/img1.jpeg";
import img2 from "../../asset/img2.jpeg";
import img3 from "../../asset/img3.jpeg";
import img4 from "../../asset/img4.jpeg";
import img5 from "../../asset/img5.jpeg";
import img6 from "../../asset/img6.jpeg";
import img7 from "../../asset/img7.jpeg";

const Hero = ({ children }) => {
  const items = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
  ];

  // Duplicate for seamless infinite loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="slider-container">
      {children && (
        <motion.div
          className="slider-floating-layer"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40, // 40 seconds = smooth + slow
            repeat: Infinity,
          }}
        >
          {children}
        </motion.div>
      )}

      <motion.div
        className="slider-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 40, // 40 seconds for full loop
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={`${item.id}-${index}`} className="slider-card">
            <img src={item.img} alt={`birthday-photo-${item.id}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;