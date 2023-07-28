'use client'

import { CartProvider } from '@/services/CartContext';
import Header from '../../components/header';
import Shop from '../../components/shop';
import Cats from '@/components/cats';
import { useState } from 'react';
import AddCatForm from "@/components/AddCatForm";
import { CatData } from '@/services/CatTypes';


export default function CatShop() {
  const [searchTerm, setSearchTerm] = useState("");

  const [cats, setCats] = useState<CatData[]>([
    {img: "https://placekitten.com/200/200", name: "Kitten 1",  price: 25},
    {img: "https://placekitten.com/200/201", name: "Kitten 2",  price: 40},
    {img: "https://placekitten.com/200/202", name: "Kitten 3",  price: 15},
    {img: "https://placekitten.com/200/203", name: "Kitten 4",  price: 70},
    {img: "https://placekitten.com/200/204", name: "Kitten 5",  price: 80},
    {img: "https://placekitten.com/200/205", name: "Kitten 6",  price: 50},
    {img: "https://placekitten.com/200/206", name: "Kitten 7",  price: 45},
    {img: "https://placekitten.com/200/207", name: "Kitten 8",  price: 20},
    {img: "https://placekitten.com/200/208", name: "Kitten 9",  price: 40},
    {img: "https://placekitten.com/200/209", name: "Kitten 10",  price: 10},
    {img: "https://placekitten.com/200/210", name: "Kitten 11",  price: 50},
    {img: "https://placekitten.com/200/211", name: "Kitten 12",  price: 65},
  ]);

  return (<>
    <CartProvider>
      <Header setSearchTerm={setSearchTerm}/>
      <Shop>
        {cats.map(cat => <Cats img={cat.img} name={cat.name} price={cat.price} searchTerm={searchTerm}/>)}
      </Shop>
    </CartProvider>
    </>)
}