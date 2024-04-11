import "@rainbow-me/rainbowkit/styles.css";
import "./App.css";
import { DesktopApp } from "./DesktopApp";
import { MobileApp } from "./MobileApp";

function App() {
  return (
    <div className="App">
      {window.navigator.userAgentData.mobile ? <MobileApp /> : <DesktopApp />}
    </div>
  );
}

export default App;
