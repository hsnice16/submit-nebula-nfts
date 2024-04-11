import { Header } from "./components";
import React from "react";

export function MobileApp() {
  return (
    <>
      <Header isMobile={true} />
      <p className="main-sub__container-para mobile-app__para">
        Mobile devices not supported. Please view on desktop device to proceed.
      </p>
    </>
  );
}
