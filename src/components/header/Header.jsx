import "./Header.css";
import Logo from "./logo.webp";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

export function Header() {
  return (
    <header className="header-container">
      <a
        href="https://www.galileoprotocol.io/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Logo} alt="Morty Logo" className="logo" />
      </a>

      <div className="header-button__container">
        <ConnectButton chainStatus="icon" />
      </div>
    </header>
  );
}
