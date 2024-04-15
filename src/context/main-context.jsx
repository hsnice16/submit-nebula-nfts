import { createContext, useContext, useMemo } from "react";
import { useGetNebulas } from "../hooks";

const MainContext = createContext();

export function useMain() {
  return useContext(MainContext);
}

export function MainProvider({ children }) {
  const { nebulasCount, isNebulasCountLoading, nebulasCountError, nebulaIds } =
    useGetNebulas();

  const value = useMemo(
    () => ({
      nebulasCount,
      isNebulasCountLoading,
      nebulasCountError,
      nebulaIds,
    }),
    [isNebulasCountLoading, nebulasCount, nebulasCountError, nebulaIds]
  );

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
