import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MainProvider } from "./context";

import {
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { sepolia, polygon } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { BrowserRouter } from "react-router-dom";

const { chains, provider, webSocketProvider } = configureChains(
  Number(process.env.REACT_APP_IS_MAINNET) ? [polygon] : [sepolia],
  [
    process.env.REACT_APP_ALCHEMY_API
      ? alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_API })
      : publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Submit Nebulas",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({ accentColor: "#2fa3ff" })}
      >
        <BrowserRouter>
          <MainProvider>
            <App />
          </MainProvider>
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
