import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartContextType {
    cartItems: string[];
    addToCart: (catName: string) => void;
    removeFromCart: (catIndex: number) => void;
}

const CartContext = createContext<CartContextType>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
})

export function useCart() {
    return useContext(CartContext);
}

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<string[]>([]);

    const addToCart = (catName: string) => {
        setCartItems((prevItems) => [...prevItems, catName]);
    }

    const removeFromCart = (catIndex: number) => {
        setCartItems((prevItems) => prevItems.filter((name, index) => index !== catIndex));
      };    

    return(
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}