import "./Success.css";
import Telegram from "./telegram.svg";
import Twitter from "./twitter.svg";
import YouTube from "./youtube.svg";
import { useGetDepositedNebulasCount } from "../../hooks";
import { useMemo } from "react";

const SOCIALS = [
  {
    name: "telegram",
    icon: Telegram,
    link: "https://t.me/galileoprotocolcommunity",
  },
  {
    name: "twitter",
    icon: Twitter,
    link: "https://twitter.com/galileoprotocol",
  },
  {
    name: "youtube",
    icon: YouTube,
    link: "https://www.youtube.com/@galileoprotocol.official",
  },
];

export function Success() {
  const {
    depostedNebulasCount,
    isDepositedNebulasCountLoading,
    depositedNebulasCountError,
  } = useGetDepositedNebulasCount();

  const messageToShow = useMemo(() => {
    if (isDepositedNebulasCountLoading) return "Getting this value...";

    if (depositedNebulasCountError)
      return "We were not able to get this number. Seems like some error occurred!";

    return depostedNebulasCount;
  }, [
    depositedNebulasCountError,
    depostedNebulasCount,
    isDepositedNebulasCountLoading,
  ]);

  return (
    <div className="main-sub__container">
      <p className="main-sub__container-para success-para__first">
        Congratulations! Your <span>{messageToShow}</span> Nebulas have been
        successfully submitted for upgrade. please note that the new Nebulas
        airdrop date will be announced by April last week. Stay tuned for further
        updates and enjoy the anticipation of your upgraded collection!
      </p>

      <h2 className="main-sub__container-head">Next Steps</h2>

      <p className="main-sub__container-para">
        Connect with us
      </p>

      <ul className="success-link__social-container">
        {SOCIALS.map((social) => (
          <li key={social.name}>
            <a href={social.link} target="_blank" rel="noreferrer">
              <img src={social.icon} alt={social.name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
