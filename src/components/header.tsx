'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import cart from '../assets/cart.png';
import { CartProvider, useCart } from "@/services/CartContext";

interface HeaderProps {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ setSearchTerm }) => {
    //Define state menu
    const [menuOpen, setMenuOpen] = useState("hidden");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    //Define State Cart
    const [cartOpen, setCartOpen] = useState("hidden");
    const [isCartOpen, setIsCartOpen] = useState(false);

    const router = useRouter();

    const { cartItems, removeFromCart } = useCart();


    //Define open/close menu function
    const handleClickMenu = () => {
      if (!isMenuOpen) {
        setMenuOpen("hidden")
      }
      else {
        setMenuOpen("visible")
      }
      setIsMenuOpen(!isMenuOpen);
    };

    const handleClickCart = () => {
        if (!isCartOpen) {
            setCartOpen("hidden")
          }
          else {
            setCartOpen("visible")
          }
        setIsCartOpen(!isCartOpen);
    }

    return (<>
        <div className="bg-black fixed w-full h-[80px]">
            <header className="text-white flex h-20 items-center gap-x-5 px-10">
                <a 
                className="flex flex-col border border-white px-2 py-2 rounded cursor-pointer hover:bg-white group" 
                onClick={handleClickMenu}
            >
                <span className="w-4 h-[2px] bg-white inline-block group-hover:bg-black" />
                <span className="w-4 h-[2px] mt-[2px] bg-white inline-block group-hover:bg-black" />
                <span className="w-4 h-[2px] mt-[2px] bg-white inline-block group-hover:bg-black" />
            </a>
            <h1 className="ml-[300px] font-black">Cat Shop</h1>
            <form className="ml-auto flex flex-row gap-5">
                <input 
                    className="pl-1 h-8 text-black text-left rounded-[5px]" 
                    type="text" 
                    placeholder="Search"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={cart.src} className="w-auto h-[30px] cursor-pointer" onClick={handleClickCart}/>
            </form>
            </header>
        </div>
        <div className={menuOpen}>
            <div className="w-[300px] h-full bg-black fixed  flex flex-col text-black items-center justify-start py-10">
            <button 
                className="w-[30px] h-[30px] text-white font-black ml-[200px] mb-[30px] border-[4px] border-white"
                onClick={handleClickMenu}
            >
                X
            </button>
            <button 
                className="bg-white w-[100px] h-[50px] border-2 border-black mb-3"
                onClick={() => router.push('/')}
            >
                Home
            </button>
            <button 
                className="bg-white w-[100px] h-[50px] border-2 border-black mb-3"
                onClick={() => router.push('/cats')}
            >
                Shop
            </button>
            <button 
                className="bg-white w-[100px] h-[50px] border-2 border-black mb-3"
                onClick={() => router.push('/contact')}
            >
                Contact
            </button>
            <button 
                className="bg-white w-[100px] h-[50px] border-2 border-black mb-3"
                onClick={() => router.push('/addcat')}
            >
                Add a new Cat
            </button>
            </div>
        </div>
        <div className="ml-[1050px] pt-[70px]">
            <div className={cartOpen}>
                <div className="w-[300px] h-[400px] bg-black fixed flex flex-col text-black items-center justify-start py-2">
                    <button 
                        className="w-[30px] h-[30px] text-white font-black ml-[200px] mb-[30px] border-[4px] border-white"
                        onClick={handleClickCart}
                    >
                        X
                    </button>
                    <ul className="text-white max-h-[300px] overflow-y-auto">
                        {cartItems.map((catName, index) => (
                            <li key={index}>
                                {catName}
                                <button
                                    className="w-[20px] h-[20px] text-white font-black text-[12px] rounded border-2 mx-[50px] border-white"
                                     onClick={() => removeFromCart(index)}
                                    >
                                    X
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>    
            </div>
        </div>
    </>)
}

export default Header;