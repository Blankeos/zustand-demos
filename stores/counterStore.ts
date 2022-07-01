import create from "zustand";

type State = {
  // States
  count: number;
  // Actions
  increase: (by: number) => void;
  decrease: (by: number) => void;
};

export const useCounterStore = create<State>((set) => ({
  // States
  count: 1,
  // Actions
  increase: (by) => set((state) => ({ count: state.count + by })),
  decrease: (by) => set((state) => ({ count: state.count - by })),
}));
