import "./Header.css";
import Logo from "./logo.webp";
import { useAccount } from "wagmi";
import { useConnectModal, useAccountModal } from "@rainbow-me/rainbowkit";

function sliceAddress(address, visibleChars = 3) {
  return (
    address.slice(0, visibleChars) +
    "..." +
    address.slice(address.length - visibleChars, address.length)
  );
}

export function Header({ isMobile }) {
  const { openConnectModal } = useConnectModal();
  const { address } = useAccount();
  const { openAccountModal } = useAccountModal();

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
            <button
              className="header-button__connect"
              onClick={address ? openAccountModal : openConnectModal}
            >
              <span> {address ? sliceAddress(address, 4) : "Connect"}</span>
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}
