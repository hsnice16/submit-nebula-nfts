import "./Header.css";
import Logo from "./logo.webp";
import { useConnectModal } from "@rainbow-me/rainbowkit";

export function Header() {
  const { openConnectModal } = useConnectModal();

  return (
    <header className="header-container">
      <a href="/">
        <img src={Logo} alt="Morty Logo" className="logo" />
      </a>

      <ul className="header-nav__container">
        <li>
          <a href="/">Galielo Protocol</a>
        </li>

        <li>
          <a href="/">Nebula Odyssey</a>
        </li>

        <li>
          <a href="/">Opensea</a>
        </li>

        <li>
          <button className="header-button__connect" onClick={openConnectModal}>
            <span>Connect</span>
          </button>
        </li>
      </ul>
    </header>
  );
}
