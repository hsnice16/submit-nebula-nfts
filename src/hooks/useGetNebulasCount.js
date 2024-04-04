import { useState, useEffect } from "react";
import { Contract } from "ethers";
import { useProvider } from "wagmi";

export function useGetNebulasCount(address) {
  const provider = useProvider();
  const [nebulasCount, setNebulasCount] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchNebulas() {
      if (provider && address) {
        try {
          setIsLoading(true);
          setError("");

          const contract = new Contract(
            process.env.REACT_APP_ERC_721_CONTRACT_ADDRESS,
            ["function balanceOf(address owner) view returns (uint256)"],
            provider
          );

          const nebulasCount = await contract.balanceOf(address);
          setNebulasCount(Number(nebulasCount));
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
    }

    fetchNebulas();
  }, [address, provider]);

  return {
    nebulasCount,
    isNebulasCountLoading: isLoading,
    nebulasCountError: error,
  };
}
