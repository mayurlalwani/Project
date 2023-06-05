import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../actions/productActions";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {products &&
          products?.map((product) => (
            <>
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>Rs.{product.price}</td>
                <td>
                  <img
                    height="100px"
                    width="100px"
                    src={product.thumbnail}
                    alt="Thumbnail"
                  />
                </td>
                <td>
                  <button onClick={() => handleDelete(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            </>
          ))}
      </tbody>
    </table>
  );
};

export default ProductList;
