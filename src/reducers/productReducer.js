const initialState = {
  products: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case "UPDATE_PRODUCT":
      const updatedProducts = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
      return {
        ...state,
        products: updatedProducts
      };
    case "DELETE_PRODUCT":
      const filteredProducts = state.products.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        products: filteredProducts
      };
    default:
      return state;
  }
};

export default productReducer;
