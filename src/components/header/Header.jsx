import "./Header.css";
import Logo from "./logo.webp";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Header() {
  return (
    <header className="header-container">
      <a href="/">
        <img src={Logo} alt="Morty Logo" className="logo" />
      </a>

      <div className="header-button__container">
        <ConnectButton chainStatus="icon" showBalance={false} />
      </div>
    </header>
  );
}
