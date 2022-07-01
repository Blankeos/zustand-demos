import { useEffect } from "react";
import { useCounterStore } from "./counterStore";

// Connect to Redux DevTools Extension
const useReduxDevTools = () => {
  useEffect(() => {
    const connection = window.__REDUX_DEVTOOLS_EXTENSION__?.connect({
      name: "Counter Store",
    });
    connection?.init(useCounterStore.getState());
    useCounterStore.subscribe((newState) => {
      connection?.send("State", newState);
    });
  }, []);

  return [1, 1];
};

export default useReduxDevTools;
