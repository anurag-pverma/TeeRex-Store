import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

import { cartReducer, productReducer } from "./cartReducer";

const Cart = createContext();
function Constex({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });
  // console.log(state);
  const fetchProducts = async () => {
    const response = await fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    const data = await response.json()
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data,
    });
  };

  useEffect(()=>{
    fetchProducts();
  },[])


  const [productState, productdispatch] = useReducer(productReducer, {
    searchQuery:"",
    byColorRed:"",
    byColorBlue:"",
    byColorGreen:"",
    bygenderMen:"",
    bygenderWomen:"",
    checkTypePolo:"",
    checkTypeHoodie:"",
    checkTypeBasic:"",
  });

  return <Cart.Provider value={{ state, dispatch, productState , productdispatch}}>{children}</Cart.Provider>;
}

export default Constex;
export const CartState = () => {
  return useContext(Cart);
};
