import "./Info.css";
import { useMemo, useState, useCallback, useEffect, useRef } from "react";
import { useMain } from "../../context";
import { useNavigate } from "react-router-dom";
import { useSubmitNebulas } from "../../hooks";

export function Info() {
  const { nebulasCount, nebulaIds, isNebulasCountLoading } = useMain();
  const [nebulasCountToShow, setNebulasCountToShow] = useState(nebulasCount);
  const [nebulaIdsToDeposit, setNebulaIdsToDeposit] = useState(nebulaIds);
  const isNebulasCountUpdatedRef = useRef(false);

  const navigate = useNavigate();
  const {
    submitNebulas,
    submitNebulasError,
    submitNebulasLoading,
    submitNebulasSuccess,
    txHash,
  } = useSubmitNebulas();

  console.log("nebulasCountToShow", nebulasCountToShow);
  console.log("nebulaIdsToDeposit", nebulaIdsToDeposit);
  console.log("isNebulasCountUpdatedRef", isNebulasCountUpdatedRef);
  console.log("submitNebulasSuccess", submitNebulasSuccess);
  console.log("txHash", txHash);
  console.log("submitNebulasError", submitNebulasError);
  console.log("submitNebulasLoading", submitNebulasLoading);

  useEffect(() => {
    setNebulasCountToShow(nebulasCount);
    setNebulaIdsToDeposit(nebulaIds);
  }, [nebulaIds, nebulasCount]);

  useEffect(() => {
    if (submitNebulasSuccess && !isNebulasCountUpdatedRef.current) {
      if (nebulasCountToShow <= 50) {
        navigate("/nebulas-submitted");
      } else {
        isNebulasCountUpdatedRef.current = true;
        setNebulasCountToShow((prevValue) => prevValue - 50);
        setNebulaIdsToDeposit((prevValue) => prevValue.slice(50));
      }
    }
  }, [navigate, nebulasCountToShow, submitNebulasSuccess]);

  const buttonText = useMemo(() => {
    if (isNebulasCountLoading) {
      return "...";
    }

    if (submitNebulasLoading) {
      return "Submitting Nebulas...";
    }

    if (nebulasCountToShow <= 50) {
      return "Submit all Nebulas";
    }

    return "Submit 50/" + nebulasCountToShow + " Nebulas";
  }, [isNebulasCountLoading, nebulasCountToShow, submitNebulasLoading]);

  const handleDownload = useCallback(() => {
    const nebulaIdsString = nebulaIdsToDeposit.join("\n");
    const blob = new Blob([nebulaIdsString], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "nebula_ids.txt");

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [nebulaIdsToDeposit]);

  const handleSubmit = useCallback(async () => {
    isNebulasCountUpdatedRef.current = false;

    if (nebulasCountToShow <= 50) {
      await submitNebulas(nebulaIdsToDeposit);
    } else {
      const idsList = nebulaIdsToDeposit.slice(0, 50);
      await submitNebulas(idsList);
    }
  }, [nebulaIdsToDeposit, nebulasCountToShow, submitNebulas]);

  return (
    <div className="main-sub__container">
      <h1 className="main-sub__container-head">
        You hold {nebulasCountToShow} Nebulas
      </h1>

      <p className="main-sub__container-para info-para">
        Galileans holding more than 50 Nebulas are requested to submit in the
        batches of 50.
        <br />
        Download a text file containing all your Nebula IDs by clicking{" "}
        <button onClick={handleDownload}>here</button>.
      </p>

      <button
        className="info-button__submit"
        onClick={handleSubmit}
        disabled={submitNebulasLoading || isNebulasCountLoading}
      >
        {buttonText}
      </button>

      {txHash ? (
        <p className="main-sub__container-para info-warning">
          Check the transaction on explorer -
          <a
            href={process.env.REACT_APP_TX_EXPLORER_URL + txHash}
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        </p>
      ) : null}

      {submitNebulasError?.length > 0 ? (
        <p className="main-sub__container-para info-error">
          {submitNebulasError}
        </p>
      ) : null}
    </div>
  );
}
