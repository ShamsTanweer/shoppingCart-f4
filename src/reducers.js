const initialState = {
    cart: [],
    products: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      case "SET_PRODUCTS":
        return {
          ...state,
          products: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  