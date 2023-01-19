import React, { useEffect, useState } from "react";
import {AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { CartState } from "../Context/Constex";
import './CSS/filter.css'

function Cart() {
  const navigate = useNavigate();
  const {
    state: { products, cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState(0)
  useEffect(()=>{
    setTotal(cart.reduce((acc, curr)=> acc + (curr.price)* curr.quantity,  0))
  }, [cart])

  return (
    <div>
      <nav className="navbar">
        <p className="logo">Tree Store</p>
        <span>
          <span className="links">Products</span>
          <span>
            <button onClick={() => navigate("/cart")}>
              {" "}
              <AiOutlineShoppingCart /> <sup>{cart.length}</sup>
            </button>
          </span>
        </span>
      </nav>


      {
        cart.length>0?(
          <>
          {
            cart.map((prod)=>(
              <div key={prod.id} className="cartContainer">
                <img src={prod.imageURL} alt={prod.name} className="imgs" />

                <b>{prod.name}</b>
                <div className="qtybox">{prod.quantity}</div>

                <button onClick={()=>{dispatch({
                    type:"REMOVE_FROM_CART",
                    payload:prod
                })}} className="deletebtn">Delete</button>
              </div>
            ))
          }
          </>
        ):(<span>Cart is Empty</span>)
      }

        <div className="totalcontainer">

        <hr className="underline" />

         <span> <strong>Total</strong> {total} </span>
        </div>


    </div>
  );
}

export default Cart;
