"use client";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext<any>({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([22]);

  useEffect(() => {
    console.log(arr);
  }, [arr]);

  return (
    <AuthContext.Provider value={{ count, setCount, arr, setArr }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
