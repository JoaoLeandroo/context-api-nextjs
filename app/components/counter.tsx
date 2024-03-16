"use client";
import { AuthContext } from "@/context/auth";
import { useContext } from "react";

const Counter = () => {
  const { count } = useContext(AuthContext);
  return <span className="font-bold text-xl">{count}</span>;
};

export default Counter;
