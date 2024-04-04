import { useAccount } from "wagmi";
import { createContext, useContext, useMemo } from "react";
import { useGetNebulasCount } from "../hooks";

const MainContext = createContext();

export function useMain() {
  return useContext(MainContext);
}

export function MainProvider({ children }) {
  const { address } = useAccount();
  const { nebulasCount, isNebulasCountLoading, nebulasCountError } =
    useGetNebulasCount(address);

  const value = useMemo(
    () => ({
      nebulasCount,
      isNebulasCountLoading,
      nebulasCountError,
    }),
    [isNebulasCountLoading, nebulasCount, nebulasCountError]
  );

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
