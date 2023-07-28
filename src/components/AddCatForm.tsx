import { CatData } from "@/services/CatTypes";
import React, { useState } from "react";

interface AddCatFormProps {
    onAddCat: (catData: CatData) => void; // Defina o tipo do parâmetro catData
    setCats: React.Dispatch<React.SetStateAction<CatData[]>>;
  }

const AddCatForm: React.FC<AddCatFormProps> = ({ onAddCat }) => {
  const [catData, setCatData] = useState({
    img: "",
    name: "",
    price: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCatData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddCat(catData);
    setCatData({ img: "", name: "", price: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          name="img"
          value={catData.img}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={catData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={catData.price}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Cat</button>
    </form>
  );
};

export default AddCatForm;
