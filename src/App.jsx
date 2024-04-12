import "@rainbow-me/rainbowkit/styles.css";
import "./App.css";
import { DesktopApp } from "./DesktopApp";
import { MobileApp } from "./MobileApp";
import { Footer } from "./components";

function App() {
  return (
    <div className="App">
      {window.navigator.userAgentData.mobile ? <MobileApp /> : <DesktopApp />}
      <Footer />
    </div>
  );
}

export default App;
