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
import { sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { BrowserRouter } from "react-router-dom";

const { chains, provider, webSocketProvider } = configureChains(
  Number(process.env.REACT_APP_IS_MAINNET) ? [] : [sepolia],
  [publicProvider()]
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
