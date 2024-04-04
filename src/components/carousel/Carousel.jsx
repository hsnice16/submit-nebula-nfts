import RandomOne from "./random-one.avif";
import RandomTwo from "./random-two.avif";
import { useState } from "react";
import NavigateBefore from "./navigate-before.svg";
import NavigateNext from "./navigate-next.svg";
import "./Carousel.css";

const IMAGES = [RandomOne, RandomTwo];

export function Carousel() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleLeftArrowClick = () => {
    if (activeImageIndex === 0) {
      setActiveImageIndex(IMAGES.length - 1);
    } else {
      setActiveImageIndex(activeImageIndex - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (activeImageIndex === IMAGES.length - 1) {
      setActiveImageIndex(0);
    } else {
      setActiveImageIndex(activeImageIndex + 1);
    }
  };

  return (
    <div className="carousel-container">
      <div>
        {IMAGES.map((image, index) => (
          <img
            key={index}
            className="carousel-img"
            style={{
              transform: `translateX(${(index - activeImageIndex) * 100}%)`,
            }}
            src={image}
            alt={"random " + index}
          />
        ))}
      </div>

      <button
        className="action-button left-arrow"
        onClick={handleLeftArrowClick}
      >
        <img src={NavigateBefore} alt="navigate before" />
      </button>

      <button
        className="action-button right-arrow"
        onClick={handleRightArrowClick}
      >
        <img src={NavigateNext} alt="navigate next" />
      </button>
    </div>
  );
}
