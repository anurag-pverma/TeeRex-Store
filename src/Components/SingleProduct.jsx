import React from "react";
import { CartState } from "../Context/Constex";
import "./CSS/singleProduct.css"

function SingleProduct({ prod }) {
  const {
    state: { cart },dispatch,} = CartState();
  const changeQty = ({id, quantity}) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        quantity,
      },
    });
  };
  return (
    <div>
      <div className="imageBox">
        {prod.name}{" "}
        <img
          src={prod.imageURL}
          style={{ width: "20vw", height: "50vh" }}
          alt={prod.name}
        />
        <b>Rs {prod.price}</b>
        {cart.some((p) => p.id === prod.id) ? (
          <div className="incr_decre" >
            <button onClick={()=>changeQty(prod.id, prod.quantity+1)}>+</button>
            <span>{Number(prod.quantity)}</span>
            <button onClick={()=>changeQty(prod.id, prod.quantity-1)}>-</button>
          </div>
        ) : (
          <button
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: {
                  id: prod.id,
                  imageURL: prod.imageURL,
                  name: prod.name,
                  type: prod.type,
                  price: prod.price,
                  currency: prod.currency,
                  color: prod.color,
                  gender: prod.gender,
                  quantity:prod.quantity,
                },
              });
            }}
            style={{ padding: "5px", margin: "2px",  }}
          >
            Add To Cart
          </button>

        
        )}
      </div>
    </div>
  );
}

export default SingleProduct;
