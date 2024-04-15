import "./Header.css";
import Logo from "./logo.webp";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Header({ isMobile }) {
  return (
    <header className="header-container">
      <a href="/">
        <img src={Logo} alt="Morty Logo" className="logo" />
      </a>

      {isMobile ? null : (
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
            <ConnectButton />
          </li>
        </ul>
      )}
    </header>
  );
}
