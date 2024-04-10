import "./Carousel.css";
import ImageOne from "./image-one.jpeg";
import ImageTwo from "./image-two.jpeg";
import ImageThree from "./image-three.jpeg";
import ImageFour from "./image-four.jpeg";
import ImageFive from "./image-five.jpeg";
import ImageSix from "./image-six.jpeg";
import ImageSeven from "./image-seven.jpeg";
import ImageEight from "./image-eight.jpeg";
import ImageNine from "./image-nine.jpeg";
import ImageTen from "./image-ten.jpeg";
import ImageEleven from "./image-eleven.jpeg";

const IMAGES = [
  ImageOne,
  ImageTwo,
  ImageThree,
  ImageFour,
  ImageFive,
  ImageSix,
  ImageSeven,
  ImageEight,
  ImageNine,
  ImageTen,
  ImageEleven,

  ImageOne,
  ImageTwo,
  ImageThree,
  ImageFour,
  ImageFive,
  ImageSix,
  ImageSeven,
  ImageEight,
  ImageNine,
  ImageTen,
  ImageEleven,
];

export function Carousel() {
  return (
    <div className="carousel-container">
      <div>
        {IMAGES.map((image, index) => (
          <img
            key={index}
            className="carousel-img"
            src={image}
            alt={"image-" + index + ".jpeg"}
          />
        ))}
      </div>
    </div>
  );
}
