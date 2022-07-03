import React, { useState } from "react";
import Layout from "../../components/Layout";
import useHasMounted from "../../hooks/hasMounted";
import { useCounterStore } from "../../stores/counterStore";

const IncrementBy = () => {
  const [incrementBy, setIncrementBy] = useState<number>(1);
  const [decrementBy, setDecrementBy] = useState<number>(1);

  const count = useCounterStore((state) => state.count);
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);
  const hasMounted = useCounterStore((state) => state._hasMounted);
  return (
    <>
      <Layout>
        <div className="max-w-5xl w-full mx-auto my-10 ">
          <h1 className="text-center font-bold text-4xl text-gray-800 mb-5">
            Zustand Counter Demo with Increment By
          </h1>
          <p className="text-gray-400 text-center mb-5">
            🐻 Simple complex state management
          </p>
          <hr className="" />
        </div>
        <div className="grid place-items-center h-52">
          <h1 className="text-3xl font-bold">{count}</h1>
          <div className="flex gap-x-5 mt-5">
            <input
              className="border rounded-md w-10 p-1"
              type="number"
              value={decrementBy}
              onChange={(e) => setDecrementBy(e.target.valueAsNumber)}
            />
            <button
              className="px-4 py-2 hover:bg-gray-100 rounded-md text-gray-700"
              onClick={() => decrease(decrementBy)}
            >
              - Decrease
            </button>
            <button
              className="px-4 py-2 hover:bg-gray-100 rounded-md text-gray-700"
              onClick={() => increase(incrementBy)}
            >
              Increase +
            </button>
            <input
              className="border rounded-md w-10 p-2"
              type="number"
              value={incrementBy}
              onChange={(e) => setIncrementBy(e.target.valueAsNumber)}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IncrementBy;
