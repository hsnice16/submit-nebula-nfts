import { useState, useEffect } from "react";
import { Contract } from "ethers";
import { useProvider } from "wagmi";

export function useGetNebulas(address) {
  const provider = useProvider();
  const [nebulas, setNebulas] = useState([]);
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
            [
              "function balanceOf(address owner) view returns (uint256)",
              "function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)",
            ],
            provider
          );

          const balance = await contract.balanceOf(address);
          const nebulas = [];

          for (let i = 0; i < balance; i++) {
            const tokenId = await contract.tokenOfOwnerByIndex(address, i);
            nebulas.push(tokenId);
          }

          setNebulas(nebulas);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
    }

    fetchNebulas();
  }, [address, provider]);

  return { nebulas, isLoading, error };
}
