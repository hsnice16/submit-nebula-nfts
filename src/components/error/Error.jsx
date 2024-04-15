import "./Error.css";
import Face from "./face.svg";
import LeftStars from "./left-stars.svg";
import RightStars from "./right-stars.svg";

export function Error({ message }) {
  return (
    <div className="main-sub__container">
      <div className="error-img__container">
        <img src={LeftStars} alt="left stars" />
        <img src={Face} alt="face" />
        <img src={RightStars} alt="right stars" className="right-star" />
      </div>

      <p className="main-sub__container-head">{message}</p>
    </div>
  );
}
