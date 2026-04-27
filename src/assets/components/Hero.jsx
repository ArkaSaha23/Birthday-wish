import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = ({ srtvalue, endvalue, children }) => {
  //this will contain images
  const items = [
    { id: 1, img: "https://picsum.photos/id/1015/300/220" },
    { id: 2, img: "https://picsum.photos/id/1025/300/220" },
    { id: 3, img: "https://picsum.photos/id/1035/300/220" },
    { id: 4, img: "https://picsum.photos/id/1045/300/220" },
    { id: 5, img: "https://picsum.photos/id/1055/300/220" },
    { id: 6, img: "https://picsum.photos/id/1065/300/220" },
  ];
  // Doubling the items is enough for the seamless loop logic
  const duplicatedItems = [...items, ...items];

  return (
    
    <div className="slider-container">
      {children ? (
        <motion.div
          className="slider-floating-layer"
          animate={{
            x: [Number(srtvalue), Number(endvalue)],
          }}
          transition={{
            ease: "linear",
            duration: 18,
            repeat: Infinity,
          }}
        >
          {children}
        </motion.div>
      ) : null}

      <motion.div
        className="slider-track"
        animate={{
          x: [Number(srtvalue), Number(endvalue)],
        }}
        transition={{
          ease: "linear",
          duration: 18,
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
