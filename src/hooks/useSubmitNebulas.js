import { useSigner } from "wagmi";
import { useState, useCallback } from "react";
import { Contract } from "ethers";
import { SubmitterContractABI } from "../constants";

export function useSubmitNebulas() {
  const { data: signer } = useSigner();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [txHash, setTxHash] = useState("");

  const submitNebulas = useCallback(
    async (idsList) => {
      if (!signer) {
        setError("Signer is not defined.");
        return;
      }

      try {
        setIsLoading(true);
        setIsSuccess(false);
        setError("");

        const contract = new Contract(
          process.env.REACT_APP_SUBMITTER_CONTRACT_ADDRESS,
          SubmitterContractABI,
          signer
        );

        const tx = await contract.submitNebulas(idsList);
        await tx.wait();

        setTxHash(tx.hash);
        setIsSuccess(true);

        setTimeout(() => {
          setIsSuccess(false);
          setTxHash("");
        }, 2000);
      } catch (error) {
        console.log("Submit Nebulas Error:", error);
        setError("Error submitting Nebulas");
      } finally {
        setIsLoading(false);
      }
    },
    [signer]
  );

  return {
    submitNebulasLoading: isLoading,
    submitNebulasSuccess: isSuccess,
    submitNebulasError: error,
    submitNebulas,
    txHash,
  };
}
