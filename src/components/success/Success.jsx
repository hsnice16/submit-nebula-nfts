import "./Success.css";
import Google from "./google.svg";

export function Success({ nebulaCount, date }) {
  return (
    <div className="main-sub__container">
      <p className="main-sub__container-para success-para__first">
        Congratulations! Your {nebulaCount} Nebulas have been successfully
        submitted for upgrade. please note that the new Nebulas will be
        distributed to you on
        {date}. Stay tuned for further updates and enjoy the anticipation of
        your upgraded collection!
      </p>

      <h2 className="main-sub__container-head">Next Steps</h2>

      <p className="main-sub__container-para">
        stay connected for updated information
      </p>

      <a href="/" className="success-link__social">
        <img src={Google} alt="google" />
      </a>
    </div>
  );
}
