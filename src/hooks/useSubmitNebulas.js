import { useSigner } from "wagmi";
import { useState, useCallback } from "react";
import { Contract } from "ethers";
import { SubmitterContractABI, Erc721ContractABI } from "../constants";

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
        setTxHash("");

        const erc721Contract = new Contract(
          process.env.REACT_APP_ERC_721_CONTRACT_ADDRESS,
          Erc721ContractABI,
          signer
        );

        const isApproved = await erc721Contract.isApprovedForAll(
          await signer.getAddress(),
          process.env.REACT_APP_SUBMITTER_CONTRACT_ADDRESS
        );

        if (!isApproved) {
          const tx = await erc721Contract.setApprovalForAll(
            process.env.REACT_APP_SUBMITTER_CONTRACT_ADDRESS,
            true
          );
          await tx.wait();
        }

        const contract = new Contract(
          process.env.REACT_APP_SUBMITTER_CONTRACT_ADDRESS,
          SubmitterContractABI,
          signer
        );

        const tx = await contract.submitNebulas(idsList, {
          gasLimit: 2000000,
        });

        setTxHash(tx.hash);
        await tx.wait();
        setIsSuccess(true);
      } catch (error) {
        console.log("Submit Nebulas Error:", error);
        setError("Error submitting Nebulas");
      } finally {
        setIsLoading(false);

        setTimeout(() => {
          setIsSuccess(false);
          setTxHash("");
        }, 3000);
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
