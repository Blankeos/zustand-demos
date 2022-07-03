import create, { StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

interface State {
  // States
  count: number;
  // Actions
  increase: (by: number) => void;
  decrease: (by: number) => void;
}

const store: StateCreator<State, [["zustand/devtools", never]]> = (set) => ({
  // States
  count: 1,
  // Actions
  increase: (by) => set((state) => ({ count: state.count + by })),
  decrease: (by) => set((state) => ({ count: state.count - by })),
});

export const useCounterStore = create(devtools(store));
