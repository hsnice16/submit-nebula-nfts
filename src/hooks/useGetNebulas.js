import { useState, useEffect } from "react";
import { Alchemy, Network } from "alchemy-sdk";
import { useAccount } from "wagmi";

const config = {
  apiKey: process.env.REACT_APP_ALCHEMY_API,
  network: Number(process.env.REACT_APP_IS_MAINNET)
    ? Network.MATIC_MAINNET
    : Network.ETH_SEPOLIA,
};
const alchemy = new Alchemy(config);

const address = "0xE44929013D7fe39Cde322bAce06EA654061E2E01";

export function useGetNebulas() {
  // const { address } = useAccount();
  const [nebulasCount, setNebulasCount] = useState();
  const [nebulaIds, setNebulaIds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getAllNfts(address, totalNfts = [], pageKey = undefined) {
      const nfts = await alchemy.nft.getNftsForOwner(address, {
        contractAddresses: [process.env.REACT_APP_ERC_721_CONTRACT_ADDRESS],
        pageKey,
      });

      totalNfts = [...totalNfts, ...nfts.ownedNfts];
      if (nfts.pageKey) {
        return getAllNfts(address, totalNfts, nfts.pageKey);
      }
      return totalNfts;
    }

    async function fetchNebulas() {
      if (address) {
        try {
          setIsLoading(true);
          setError("");

          const nfts = await getAllNfts(address);
          const nftsIds = nfts.map((nft) => nft.tokenId);

          setNebulasCount(nftsIds.length);
          setNebulaIds(nftsIds);
        } catch (error) {
          console.log("Get Nebulas Count Error: ", error.message);
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
    }

    fetchNebulas();
  }, []);

  return {
    nebulasCount,
    isNebulasCountLoading: isLoading,
    nebulasCountError: error,
    nebulaIds,
  };
}
