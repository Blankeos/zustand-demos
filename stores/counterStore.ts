import create, { SetState } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IState {
  // States
  count: number;
  // No Need to include actions
}
const store = (set: SetState<IState>) => ({
  // States
  count: 0,
  // Actions
  increase: (by: number) =>
    set((state: IState) => ({ count: state.count + by })),
  decrease: (by: number) =>
    set((state: IState) => ({ count: state.count - by })),
});

export const useCounterStore = create(
  devtools(persist(store, { name: "counter_store" }))
);
