import "./Banner.css";
import Close from "./close.svg";

export function Banner({ submittedNebulasCount }) {
  if (submittedNebulasCount === undefined || submittedNebulasCount <= 0)
    return null;

  return (
    <div className="banner">
      A total {submittedNebulasCount} Nebula
      {submittedNebulasCount === 1 ? " has" : "s have"} been submitted so far
      🎉🎉
      <button className="banner-action">
        <img src={Close} alt="close" />
      </button>
    </div>
  );
}
