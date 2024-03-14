"use client"
import { AuthContext } from "@/context/auth"
import { useContext } from "react";

const Header = () => {
    const { count, setCount } = useContext(AuthContext)
    
    return ( 
        <header className="mx-auto h-16 w-full bg-red-300 flex px-20 py-2 justify-around items-center">
            <span>My Header</span>

            <span>{count}</span>
        </header>
     );
}
 
export default Header;