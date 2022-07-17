import { useEffect, useState } from "react";
import create, { SetState } from "zustand";
import { devtools, persist } from "zustand/middleware"; // to connect to dev tools

interface IState {
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
});

export const useCounterStore = create(
  devtools(
    persist(store, {
      name: "counter_store",
    })
  )
);
