'use client'

import { useState } from 'react';

import Body from './components/body';
import Header from './components/header';
import Product from './components/product';
import Shop from './components/shop';

export default function Index() {
  
  const [count, setCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState("hidden");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickMenu = () => {
    if (!isMenuOpen) {
      setMenuOpen("hidden")
    }
    else {
      setMenuOpen("visible")
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickBuy = () => {
    setCount(count + 1)
  };

  const handleClickRemove = () => {
    if (count === 0) {
      setCount(0);
    } else {
    setCount(count - 1)
    }
  };

  return (<>
    <div>
      <div className="bg-black fixed w-full">
        <Header>
          <a 
            className="flex flex-col border border-white px-2 py-2 rounded cursor-pointer hover:bg-white group" 
            onClick={handleClickMenu}
          >
              <span className="w-4 h-[2px] bg-white inline-block group-hover:bg-black" />
              <span className="w-4 h-[2px] mt-[2px] bg-white inline-block group-hover:bg-black" />
              <span className="w-4 h-[2px] mt-[2px] bg-white inline-block group-hover:bg-black" />
          </a>
          <img src="https://placekitten.com/100/50" />
          <h1 className="pl-20 font-black">Cat Shop</h1>
          <form className="ml-auto flex flex-row gap-5">
            <input className="pl-1 h-8 text-black text-left rounded-[5px]" type="text" placeholder="Search"/>
            <h1>Shopping</h1>
            <h1 className="bg-white w-20 h-auto cursor-default text-black px-2 pt-1">{count} Cats</h1>
          </form>
        </Header>
      </div>
      <div className={menuOpen}>
        <div className="w-[300px] h-full bg-black fixed  flex flex-col text-black items-center justify-start py-10">
          <button 
            className="w-[30px] h-[30px] text-white font-black ml-[200px] mb-[30px] border-[4px] border-white"
            onClick={handleClickMenu}
          >
            X
          </button>
          <button className="bg-white w-[100px] h-[50px] border-2 border-black mb-3">Home</button>
          <button className="bg-white w-[100px] h-[50px] border-2 border-black mb-3">Shop</button>
          <button className="bg-white w-[100px] h-[50px] border-2 border-black mb-3">Contact</button>'
        </div>
      </div>
        <Body>
        <div className="bg-white"></div>
          <Shop>
            <Product>
            <img className="border-4 border-black" src="https://placekitten.com/200/200" />
            <h2 className="text-black">Kitten: 1</h2>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickBuy}
            >
              Add to cart
            </button>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickRemove}
            >
              Remove
            </button>
            </Product>
            <Product>
            <img className="border-4 border-black" src="https://placekitten.com/200/200" />
            <h2 className="text-black">Kitten: 2</h2>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickBuy}
            >
              Add to cart
            </button>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickRemove}
            >
              Remove
            </button>
            </Product>
            <Product>
            <img className="border-4 border-black" src="https://placekitten.com/200/200" />
            <h2 className="text-black">Kitten: 3</h2>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickBuy}
            >
              Add to cart
            </button>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickRemove}
            >
              Remove
            </button>
            </Product>
            <Product>
            <img className="border-4 border-black" src="https://placekitten.com/200/200" />
            <h2 className="text-black">Kitten: 4</h2>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickBuy}
            >
              Add to cart
            </button>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickRemove}
            >
              Remove
            </button>
            </Product>
            <Product>
            <img className="border-4 border-black" src="https://placekitten.com/200/200" />
            <h2 className="text-black">Kitten: 5</h2>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black" 
              onClick={handleClickBuy}
            >
              Add to cart
            </button>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickRemove}
            >
              Remove
            </button>
            </Product>
            <Product>
            <img className="border-4 border-black" src="https://placekitten.com/200/200" />
            <h2 className="text-black">Kitten: 1</h2>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickBuy}
            >
              Add to cart
            </button>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickRemove}
            >
              Remove
            </button>
            </Product>
            <Product>
            <img className="border-4 border-black" src="https://placekitten.com/200/200" />
            <h2 className="text-black">Kitten: 1</h2>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickBuy}
            >
              Add to cart
            </button>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickRemove}
            >
              Remove
            </button>
            </Product>
            <Product>
            <img className="border-4 border-black" src="https://placekitten.com/200/200" />
            <h2 className="text-black">Kitten: 1</h2>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickBuy}
            >
              Add to cart
            </button>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickRemove}
            >
              Remove
            </button>
            </Product>
            <Product>
            <img className="border-4 border-black" src="https://placekitten.com/200/200" />
            <h2 className="text-black">Kitten: 1</h2>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickBuy}
            >
              Add to cart
            </button>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickRemove}
            >
              Remove
            </button>
            </Product>
            <Product>
            <img className="border-4 border-black" src="https://placekitten.com/200/200" />
            <h2 className="text-black">Kitten: 1</h2>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickBuy}
            >
              Add to cart
            </button>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickRemove}
            >
              Remove
            </button>
            </Product>
            <Product>
            <img className="border-4 border-black" src="https://placekitten.com/200/200" />
            <h2 className="text-black">Kitten: 3</h2>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickBuy}
            >
              Add to cart
            </button>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickRemove}
            >
              Remove
            </button>
            </Product>
            <Product>
            <img className="border-4 border-black" src="https://placekitten.com/200/200" />
            <h2 className="text-black">Kitten: 3</h2>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickBuy}
            >
              Add to cart
            </button>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickRemove}
            >
              Remove
            </button>
            </Product>
            <Product>
            <img className="border-4 border-black" src="https://placekitten.com/200/200" />
            <h2 className="text-black">Kitten: 3</h2>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickBuy}
            >
              Add to cart
            </button>
            <button 
              className="w-[100px] border-2 border-black rounded-xl text-black text-[12px] font-black"
              onClick={handleClickRemove}
            >
              Remove
            </button>
            </Product>
          </Shop>
        </Body>
      </div>
  </>)
}