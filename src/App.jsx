import "@rainbow-me/rainbowkit/styles.css";
import "./App.css";
import { Header, LoaderModal } from "./components";
import { Home, NoNebulas, SomethingWrong, SubmitNebulas } from "./pages";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useMain } from "./context";
import { useEffect, useMemo } from "react";
import { useAccount } from "wagmi";

function App() {
  const navigate = useNavigate();
  const { address } = useAccount();
  const { nebulasCountError, nebulasCount, isNebulasCountLoading } = useMain();

  const loadingMessage = useMemo(() => {
    if (isNebulasCountLoading) {
      return "Loading Nebulas Count...";
    }

    return "";
  }, [isNebulasCountLoading]);

  useEffect(() => {
    if (address) {
      if (nebulasCountError.length) {
        navigate("/error");
      }

      if (nebulasCount === 0) {
        navigate("/no-nebulas");
      }

      if (nebulasCount > 0) {
        navigate("/submit-nebulas");
      }
    }
  }, [address, navigate, nebulasCount, nebulasCountError.length]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/no-nebulas" element={<NoNebulas />} />
        <Route path="/error" element={<SomethingWrong />} />
        <Route path="/submit-nebulas" element={<SubmitNebulas />} />
      </Routes>
      <LoaderModal loadingMessage={loadingMessage} />
    </div>
  );
}

export default App;
