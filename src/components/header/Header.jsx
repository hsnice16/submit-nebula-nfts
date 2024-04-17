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
            <a href="https://www.galileoprotocol.io/">Galielo Protocol</a>
          </li>

          <li>
            <a href="https://nebula.galileoprotocol.io/">Nebula Odyssey</a>
          </li>

          <li>
            <a href="https://opensea.io/collection/nebula-pnft-genesis-collection">Opensea</a>
          </li>

          <li>
            <ConnectButton />
          </li>
        </ul>
      )}
    </header>
  );
}
