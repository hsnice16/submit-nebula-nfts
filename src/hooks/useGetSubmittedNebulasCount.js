import { useState, useEffect } from "react";
import { Contract } from "ethers";
import { useProvider } from "wagmi";
import { SubmitterContractABI } from "../constants";

export function useGetSubmittedNebulasCount() {
  const provider = useProvider();
  const [submittedNebulasCount, setSubmittedNebulasCount] = useState();

  useEffect(() => {
    async function fetchSubmittedNebulas() {
      if (provider) {
        try {
          const contract = new Contract(
            process.env.REACT_APP_SUBMITTER_CONTRACT_ADDRESS,
            SubmitterContractABI,
            provider
          );

          const submittedNebulasCount = await contract.totalSubmittedNebulas();
          setSubmittedNebulasCount(Number(submittedNebulasCount));
        } catch (error) {
          console.log("Get Submitted Nebulas Count Error: ", error.message);
        }
      }
    }

    fetchSubmittedNebulas();
  }, [provider]);

  return {
    submittedNebulasCount,
  };
}
