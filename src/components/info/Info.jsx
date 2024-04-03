import "./Info.css";

export function Info({ nebulaCount }) {
  return (
    <div className="main-sub__container">
      <h1 className="main-sub__container-head">
        You hold {nebulaCount} Nebulas
      </h1>

      <p className="main-sub__container-para info-para">
        Galileans holding more than 50 Nebulas are requested to submit in the
        batches of 50.
        <br />
        Download a text file containing all your Nebula IDs by clicking{" "}
        <a href="/">here</a>.
      </p>

      <button className="info-button__submit">
        Submit 50/{nebulaCount} Nebulas
      </button>
    </div>
  );
}
