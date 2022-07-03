import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import useHasMounted from "../../hooks/hasMounted";
import { useCounterStore } from "../../stores/counterStore";

const Single = () => {
  const count = useCounterStore((state) => state.count);
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);

  useEffect(() => {
    console.log(count);
  }, [count]);
  const hasMounted = useHasMounted();

  if (!hasMounted) return "Loading...";
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
};

export default Single;
