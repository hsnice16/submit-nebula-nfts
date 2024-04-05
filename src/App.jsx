import "@rainbow-me/rainbowkit/styles.css";
import "./App.css";
import { Header, LoaderModal } from "./components";
import {
  Home,
  NoNebulas,
  SomethingWrong,
  SubmitNebulas,
  NebulasSubmitted,
} from "./pages";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useMain } from "./context";
import { useEffect, useMemo } from "react";
import { useAccount } from "wagmi";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { address } = useAccount();
  const { nebulasCountError, nebulasCount, isNebulasCountLoading } = useMain();

  const loadingMessage = useMemo(() => {
    if (isNebulasCountLoading) {
      return "Getting Nebulas...";
    }

    return "";
  }, [isNebulasCountLoading]);

  useEffect(() => {
    if (address) {
      if (location.pathname === "/nebulas-submitted") {
        navigate(location.pathname);
      } else if (nebulasCountError.length) {
        navigate("/error");
      } else if (nebulasCount === 0) {
        navigate("/no-nebulas");
      } else if (nebulasCount > 0) {
        navigate("/submit-nebulas");
      }
    } else {
      navigate("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, nebulasCount, nebulasCountError.length]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/no-nebulas" element={<NoNebulas />} />
        <Route path="/error" element={<SomethingWrong />} />
        <Route path="/submit-nebulas" element={<SubmitNebulas />} />
        <Route path="/nebulas-submitted" element={<NebulasSubmitted />} />
      </Routes>
      <LoaderModal loadingMessage={loadingMessage} />
    </div>
  );
}

export default App;
