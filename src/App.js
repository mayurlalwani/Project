import React from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./actions/productActions";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Add Product</h1>
      <AddProductForm />
      <h1>Product List</h1>
      <ProductList />
    </div>
  );
};

export default App;
