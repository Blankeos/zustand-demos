import { useEffect } from "react";
import { useCounterStore } from "./counterStore";

// OBSOLETE just use 'devtools' from '/zustand/middlewares'
// Connect to Redux DevTools Extension
const useReduxDevTools = () => {
  useEffect(() => {
    const connection = (window as any).__REDUX_DEVTOOLS_EXTENSION__?.connect({
      name: "Counter Store",
    });
    connection?.init(useCounterStore.getState());
    useCounterStore.subscribe((newState) => {
      connection?.send("State", newState);
    });
  }, []);
};

export default useReduxDevTools;
