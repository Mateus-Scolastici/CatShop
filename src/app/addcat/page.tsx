'use client'

import React, { useState } from 'react';
import Header from '../../components/header';
import { CatData } from '@/services/CatTypes';
import AddCatForm from '@/components/AddCatForm';

interface Props {
    setCats: React.Dispatch<React.SetStateAction<CatData[]>>;
}

const AddCat: React.FC<Props> = ({setCats}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const addCat = (catData: CatData) => {
        setCats((prevCats) => [...prevCats, catData]);
      };

    return(<>
        <Header setSearchTerm={setSearchTerm}/>
        <div className="h-screen flex flex-col justify-center items-center">
            <h1>Type for Add New Cats on the shop</h1>
            <AddCatForm onAddCat={addCat} setCats={setCats}/>
        </div>
    </>)
}

export default AddCat;