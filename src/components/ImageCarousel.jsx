import React, { useEffect, useState } from "react";
import "./ImageCarousel.css";

const images = [
  "/assets/images/image1.jpg",
  "/assets/images/image2.jpg",
  // Add your image paths here
];

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Carousel ${index + 1}`}
          className={index === currentImage ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
