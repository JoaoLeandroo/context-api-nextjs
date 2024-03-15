"use client";

import { useContext } from "react";
import { AuthContext } from "@/context/auth";

const Button = () => {
  const { count, setCount, arr, setArr } = useContext(AuthContext);

  const update = () => {
    let x = Math.random();
    const items = []
    items.push(...arr, x)
    setArr(items);
  };

  const decrement = () => {
    if (count <= 0) return;

    setCount(count - 1);
  };

  const increment = () => {
    if (count >= 15) {
      alert("Número máximo de itens atingido!");
      return;
    }

    setCount(count + 1);
  };
  return (
    <div className="flex gap-3">
      <button
        className="p-3 rounded-xl border hover:bg-slate-400 transition duration-300"
        onClick={increment}
      >
        Incremente
      </button>
      <button
        className="p-3 rounded-xl border hover:bg-slate-400 transition duration-300"
        onClick={decrement}
      >
        Decrement
      </button>

      <button onClick={update}>Novo item array</button>
    </div>
  );
};

export default Button;
