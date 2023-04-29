import axios from "axios";

// Action types
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const RESET_CART = "RESET_CART";

// Action creators
export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const resetCart = () => ({
  type: RESET_CART,
});

// Async action creator
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const products = response.data;
    //   console.log(products);
      dispatch(fetchProductsSuccess(products));
      return(products)
    } catch (error) {
      console.error(error);
    }
    
  };
};


