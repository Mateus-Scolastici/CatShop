
import React from "react";
import { useCart } from "@/services/CartContext";

interface Props {
    img: string
    name: string
    price: number
    searchTerm: string;
  }


const Cats:React.FC<Props> = ({img, name, price, searchTerm}) => {
  const { addToCart } = useCart();

  const isMatched = name.toLowerCase().includes(searchTerm.toLowerCase())

  if (!isMatched) return null;

    return (
        <div className="text-black flex flex-col py-[8px] items-center">
            <img className="border-4 border-black rounded-[20px]" src={img} />
            <h2 className="text-black">
                {name}
            </h2>
            <h2 className="text-black">
                $ {price}
            </h2>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={() => addToCart(name)}
            >
              Add to cart
            </button>
        </div>
    )
}

export default Cats