// actions/productActions.js
import axios from "axios";

export const fetchProducts = () => {
  return (dispatch) => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log({ response });
        dispatch({
          type: "FETCH_PRODUCTS",
          payload: response.data.products
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product
  };
};

export const updateProduct = (product) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: product
  };
};

export const deleteProduct = (productId) => {
  return {
    type: "DELETE_PRODUCT",
    payload: productId
  };
};
