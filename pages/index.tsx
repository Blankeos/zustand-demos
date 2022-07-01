import type { NextPage } from "next";
import Head from "next/head";
import create from "zustand";

type State = {
  // States
  count: number;
  // Actions
  increase: (by: number) => void;
  decrease: (by: number) => void;
};

const useStore = create<State>((set) => ({
  // States
  count: 1,
  // Actions
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

const Home: NextPage = () => {
  const count = useStore((state) => state.count);
  const increase = useStore((state) => state.increase);
  const decrease = useStore((state) => state.decrease);
  return (
    <div>
      <Head>
        <title>Counter App | Zustand Demo</title>
        <meta name="description" content="Zustand Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="max-w-5xl w-full mx-auto my-10 ">
          <h1 className="text-center font-bold text-4xl text-gray-800 mb-5">
            Zustand Counter Demo
          </h1>
          <p className="text-gray-400 text-center mb-5">
            🐻 Simple complex state management
          </p>
          <hr className="" />
        </div>
        <div className="grid place-items-center h-52">
          <h1 className="text-3xl font-bold">{count}</h1>
          <div className="flex gap-x-5 mt-5">
            <button
              className="px-4 py-2 hover:bg-gray-100 rounded-md text-gray-700"
              onClick={() => decrease(1)}
            >
              - Decrease
            </button>
            <button
              className="px-4 py-2 hover:bg-gray-100 rounded-md text-gray-700"
              onClick={() => increase(1)}
            >
              Increase +
            </button>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
