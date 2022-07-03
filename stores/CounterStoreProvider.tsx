// This whole component is only used for checking if counterStore is mounted on the client. Fixes Hydration mismatches.
import React, { useContext, createContext, useState, useEffect } from "react";

const initialState = {
  hasMounted: false,
};

const CounterStoreContext = createContext(initialState);

export const useCounterStoreContext = () => useContext(CounterStoreContext);

const CounterStoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const value = {
    hasMounted,
  };

  return (
    <CounterStoreContext.Provider value={value}>
      {children}
    </CounterStoreContext.Provider>
  );
};

export default CounterStoreProvider;
