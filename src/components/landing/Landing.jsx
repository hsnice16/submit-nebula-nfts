import "./Landing.css";
import { Steps } from "./Steps";
import { Carousel } from "./Carousel";

export function Landing() {
  return (
    <div className="main-sub__container landing-container">
      <h1 className="main-sub__container-head">
        Welcome to Nebula Odyssey: Upgrade Your Collection!
      </h1>

      <Carousel />
      <p className="main-sub__container-para">
        Follow the steps below to seamlessly submit your older nebulas{" "}
      </p>

      <h2 className="main-sub__container-head">How does it work? </h2>
      <Steps />

      <h4 className="landing-h4">Got Questions?</h4>
      <p className="main-sub__container-para">
        If you have any questions or need assistance along the way, reach out to
        us at hello@galileoprotocol.io or from our telegram group
      </p>
    </div>
  );
}
