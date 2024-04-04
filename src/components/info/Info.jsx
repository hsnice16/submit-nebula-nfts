import "./Info.css";
import { useMemo } from "react";
import { useMain } from "../../context";

export function Info() {
  const { nebulasCount } = useMain();

  const buttonText = useMemo(() => {
    if (nebulasCount <= 50) {
      return "Submit all Nebulas";
    }

    return "Submit 50/" + nebulasCount + " Nebulas";
  }, [nebulasCount]);

  return (
    <div className="main-sub__container">
      <h1 className="main-sub__container-head">
        You hold {nebulasCount} Nebulas
      </h1>

      <p className="main-sub__container-para info-para">
        Galileans holding more than 50 Nebulas are requested to submit in the
        batches of 50.
        <br />
        Download a text file containing all your Nebula IDs by clicking{" "}
        <a href="/">here</a>.
      </p>

      <button className="info-button__submit">{buttonText}</button>
    </div>
  );
}
