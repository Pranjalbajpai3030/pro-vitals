import React from "react";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";
import image7 from "../assets/images/image7.jpg";
import image8 from "../assets/images/image8.jpg";

const ImageCarousel = () => {
  return (
    <div className="image-carousel">
      {/* Left Strip */}
      <div className="image-strip image-strip-up">
        <img src={image1} alt="Image 1" className="collage-image" />
        <img src={image2} alt="Image 2" className="collage-image" />
        <img src={image3} alt="Image 3" className="collage-image" />
        <img src={image4} alt="Image 4" className="collage-image" />
        <img src={image1} alt="Image 1 (Repeat)" className="collage-image" />
        <img src={image2} alt="Image 2 (Repeat)" className="collage-image" />
      </div>

      {/* Right Strip */}
      <div className="image-strip image-strip-down">
        <img src={image5} alt="Image 5" className="collage-image" />
        <img src={image6} alt="Image 6" className="collage-image" />
        <img src={image7} alt="Image 7" className="collage-image" />
        <img src={image8} alt="Image 8" className="collage-image" />
        <img src={image5} alt="Image 5 (Repeat)" className="collage-image" />
        <img src={image6} alt="Image 6 (Repeat)" className="collage-image" />
      </div>
    </div>
  );
};

export default ImageCarousel;
