import { useEffect, useState } from "react";
import create, { SetState } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IState {
  // States
  _hasMounted: boolean;
  count: number;
  // No Need to include actions
}
const store = (set: SetState<IState>) => ({
  // Initial States
  _hasMounted: false,
  count: 0,
  // Actions
  increase: (by: number) =>
    set((state: IState) => ({ ...state, count: state.count + by })),
  decrease: (by: number) =>
    set((state: IState) => ({ ...state, count: state.count - by })),
  setHasMounted: (bool: boolean) =>
    set((state: IState) => ({ ...state, _hasMounted: bool })),
});

export const useCounterStore = create(
  devtools(
    persist(store, {
      name: "counter_store",
    })
  )
);
