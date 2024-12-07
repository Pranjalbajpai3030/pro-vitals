import React from 'react';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image9.jpg';
import image6 from '../assets/images/image6.jpg';
import image7 from '../assets/images/image7.jpg';
import image8 from '../assets/images/image8.jpg';

const ImageCarousel = () => {
  const leftImages = [image1, image2, image3, image4]; // Images for the left strip
  const rightImages = [image5, image6, image7, image8]; // Images for the right strip

  return (
    <div className="image-carousel">
      {/* Left Strip */}
      <div className="image-strip image-strip-up">
        {leftImages.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index ++}`} className="collage-image" />
        ))}
      </div>
      {/* Right Strip */}
      <div className="image-strip image-strip-down">
        {rightImages.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="collage-image" />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
