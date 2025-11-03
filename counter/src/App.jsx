import React, { useState } from "react";

const App = () => {
  
  const [count, setCount] = useState(0);

  return (
    <div className=" flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Counter App</h1>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
        >
          -
        </button>

        <span className="text-3xl font-semibold">{count}</span>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
        >
          +
        </button>
      </div>

      <button
        onClick={() => setCount(0)}
        className="mt-6 bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg"
      >
        Reset
      </button>
    </div>
  );
};

export default App;