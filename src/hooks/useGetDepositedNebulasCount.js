import { useEffect, useState } from "react";
import { useAccount, useProvider } from "wagmi";
import { Contract } from "ethers";
import { SubmitterContractABI } from "../constants";

export function useGetDepositedNebulasCount() {
  const { address } = useAccount();
  const provider = useProvider();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [depostedNebulasCount, setDepositedNebulasCount] = useState();

  useEffect(() => {
    async function fetchSubmittedNebulas() {
      if (provider && address) {
        try {
          setIsLoading(true);
          setError("");

          const contract = new Contract(
            process.env.REACT_APP_SUBMITTER_CONTRACT_ADDRESS,
            SubmitterContractABI,
            provider
          );

          const depositedTokensList = await contract.getDepositedTokens(
            address
          );
          setDepositedNebulasCount(depositedTokensList.length);
        } catch (error) {
          console.log("Get Deposted Nebulas Count Error: ", error.message);
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
    }

    fetchSubmittedNebulas();
  }, [provider, address]);

  return {
    depostedNebulasCount,
    isDepositedNebulasCountLoading: isLoading,
    depositedNebulasCountError: error,
  };
}
