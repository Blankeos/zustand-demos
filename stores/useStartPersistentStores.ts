import React, { useEffect } from "react";
import { useCounterStore } from "./counterStore";

const useStartPersistentStores = () => {
  const setHasMounted = useCounterStore((state) => state.setHasMounted);
  useEffect(() => {
    setHasMounted(true);
  }, []);
};

export default useStartPersistentStores;
