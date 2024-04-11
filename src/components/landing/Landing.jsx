import "./Landing.css";
import { Carousel, Steps, FAQ } from "../index";
import { useGetSubmittedNebulasCount } from "../../hooks";
import YouTube from "../success/youtube.svg";

export function Landing() {
  const { submittedNebulasCount } = useGetSubmittedNebulasCount();

  return (
    <div className="main-sub__container landing-container">
      <h1 className="main-sub__container-head">
        Welcome to Nebula Odyssey: Upgrade Your Collection!
      </h1>

      <Carousel />
      {submittedNebulasCount ? (
        <h1 className="main-sub__container-head">
          {submittedNebulasCount} Nebulas submitted so far
        </h1>
      ) : null}

      <h2 className="main-sub__container-head">How does it work? </h2>
      <a className="landing-link__youtube" href="/">
        view on <img src={YouTube} alt="youtube logo" /> YouTube
      </a>

      <Steps />
      <FAQ />
    </div>
  );
}
