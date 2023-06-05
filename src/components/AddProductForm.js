import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/productActions";

const AddProductForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      title,
      description,
      price,
      thumbnail: "https://example.com/thumbnail.jpg" // Replace with appropriate value
    };

    dispatch(addProduct(newProduct));

    setTitle("");
    setDescription("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddProductForm;
