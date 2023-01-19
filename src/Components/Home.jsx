import React, { useEffect } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import "./CSS/home.css";
import { CartState } from "../Context/Constex";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const {
    state: { products, cart },
    dispatch,
    productState:{byColorRed,byColorBlue,byColorGreen,bygenderWomen, bygenderMen,checkTypeHoodie,checkTypeBasic,checkTypePolo,searchQuery, sort},
    productdispatch
  } = CartState();
  // console.log(products)
  // checkTypePolo:"",
  // checkTypeHoodie:"",
  // checkTypeBasic:"",

  const transFormProducts=()=>{
      var sortedproducts = products;
      if(sort==="250"){
        sortedproducts= sortedproducts.filter((prod)=>prod.price <= 250 
        )
      }
      else if(sort==="251"){
        sortedproducts= sortedproducts.filter((prod)=>prod.price > 250 && prod.price <=449 
        )
      }
      else if(sort==="450"){
        sortedproducts= sortedproducts.filter((prod)=>prod.price > 450
        )
      }
      if(byColorRed){
        sortedproducts = sortedproducts.filter((prod)=>prod.color==="Red")
      }
      else if(byColorBlue){
        sortedproducts = sortedproducts.filter((prod)=>prod.color==="Blue" )
      }
      else if(byColorGreen){
        sortedproducts = sortedproducts.filter((prod)=>prod.color==="Green" )
      }
      if(bygenderWomen){
        sortedproducts= sortedproducts.filter((prod)=>prod.gender==="Women")
      }
      else if(bygenderMen){
        sortedproducts= sortedproducts.filter((prod)=>prod.gender==="Men")
      }
      if(checkTypePolo){
        sortedproducts=sortedproducts.filter((prod)=>prod.type==="Basic")
      }
      else if(checkTypeHoodie){
        sortedproducts=sortedproducts.filter((prod)=>prod.type==="Hoodie")
      }
      else if(checkTypeBasic){
        sortedproducts=sortedproducts.filter((prod)=>prod.type==="Polo")
      }
      if(searchQuery){
        sortedproducts= sortedproducts.filter((prod)=>
        prod.name.toLowerCase().includes(searchQuery)|| prod.color.toLowerCase().includes(searchQuery)||prod.type.toLowerCase().includes(searchQuery)
        )
      }

      return sortedproducts;
  }



   useEffect(()=>{
    transFormProducts()
   },[products])

  return (
    <div>
      <nav className="navbar">
        <p className="logo">Tree Store</p>
        <span>
          <button className="links">Products</button>
          <span>
            <button className="cartno" onClick={() => navigate("/cart")}>
              {" "}
              <AiOutlineShoppingCart /> <sup>{cart.length}</sup>
            </button>
          </span>
        </span>
      </nav>

      <div className="searchbar">
        <input
          type="text"
          placeholder="Search for products..."
          className="searchinput"
          onChange={(e)=>{productdispatch({
            type:"FILTER_BY_SEARCH",
            payload:e.target.value
          })}}
        />
        <span>
          <AiOutlineSearch />
        </span>
      </div>

      {/* ******************producct****** */}
      <aside id="leftside">
        <Filter />
      </aside>

      <div id="rightSide">
        <div className="productContainer">
          {transFormProducts().map((prod) => {
              return <SingleProduct prod={prod} key={prod.id}/>;
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
