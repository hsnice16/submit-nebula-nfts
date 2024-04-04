import "./Info.css";
import { useMemo, useCallback } from "react";
import { useMain } from "../../context";

export function Info() {
  const { nebulasCount, nebulaIds } = useMain();

  const buttonText = useMemo(() => {
    if (nebulasCount <= 50) {
      return "Submit all Nebulas";
    }

    return "Submit 50/" + nebulasCount + " Nebulas";
  }, [nebulasCount]);

  const handleDownload = useCallback(() => {
    const nebulaIdsString = nebulaIds.join("\n");
    const blob = new Blob([nebulaIdsString], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "nebula_ids.txt");

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [nebulaIds]);

  return (
    <div className="main-sub__container">
      <h1 className="main-sub__container-head">
        You hold {nebulasCount} Nebulas
      </h1>

      <p className="main-sub__container-para info-para">
        Galileans holding more than 50 Nebulas are requested to submit in the
        batches of 50.
        <br />
        Download a text file containing all your Nebula IDs by clicking{" "}
        <button onClick={handleDownload}>here</button>.
      </p>

      <button className="info-button__submit">{buttonText}</button>
    </div>
  );
}
