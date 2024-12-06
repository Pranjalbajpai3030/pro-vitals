import React, { useState, useRef } from "react";
import "./ItemSlider.css";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Container } from "react-bootstrap";

const ItemsSlider = ({ title, children }) => {
  const scrl = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollBy({
      left: shift,
      behavior: "smooth",
    });

    setScrollX(scrollX + shift);

    // Check if we are at the end
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  const scrollCheck = () => {
    setScrollX(scrl.current.scrollLeft);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  return (
    <Container fluid className="my-3 py-3 item-slider-container">
      <h4 className="px-3 mb-3 item-title">{title}</h4>
      <div className="item-slider">
        {/* Left Arrow */}
        <div
          className={`left-arrow ${scrollX < 1 ? "is-disabled-hide" : ""}`}
          onClick={() => slide(-300)} // Adjust shift value as needed
        >
          <MdArrowBackIos size="30px" />
        </div>

        {/* Item Container */}
        <div ref={scrl} onScroll={scrollCheck} className="item-container">
          {children}
        </div>

        {/* Right Arrow */}
        <div
          className={`right-arrow ${!scrollEnd ? "" : "is-disabled-hide"}`}
          onClick={() => slide(300)} // Adjust shift value as needed
        >
          <MdArrowForwardIos size="30px" />
        </div>
      </div>
    </Container>
  );
};

export default ItemsSlider;
