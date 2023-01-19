import React from "react";
import { CartState } from "../Context/Constex";
import "./CSS/filter.css";

function Filter() {
  const {
    productState: { bygender, sort, searchQuery },
    productdispatch,
  } = CartState();

  return (
    <div>
        <p className="filterpara">Color</p>
      <div className="sectionbox">
        <input
          type="checkbox"
          value="Red"
          name="Red"
          onChange={(e) => {
            productdispatch({
              type: "FILTER_BY_COLOR_RED",
              payload: e.target.value,
            });
          }}
        />
        <label>Red</label>
      </div>
      <div className="sectionbox">
        <input
          type="checkbox"
          value="Blue"
          name="Blue"
          onChange={(e) => {
            productdispatch({
              type: "FILTER_BY_COLOR_BLUE",
              payload: e.target.value,
            });
          }}
        />
        <label>Blue</label>
      </div>
      <div className="sectionbox">
        <input
          type="checkbox"
          value="Green"
          name="Green"
          onChange={(e) => {
            productdispatch({
              type: "FILTER_BY_COLOR_GREEN",
              payload: e.target.value,
            });
          }}
        />
        <label>Green</label>
      </div>
      <p className="filterpara">Gender</p>
      <div className="sectionbox">
        <input
          type="checkbox"
          value="Men"
          name="Men"
          onChange={(e) => {
            productdispatch({
              type: "FILTER_BY_GENDER_MEN",
              payload: e.target.value,
            });
          }}
        />
        <label>Men</label>
      </div>
      <div className="sectionbox">
        <input
          type="checkbox"
          value="Women"
          name="Women"
          onChange={(e) => {
            productdispatch({
              type: "FILTER_BY_GENDER_WOMEN",
              payload: e.target.value,
            });
          }}
        />
        <label>Women</label>
      </div>

      <p className="filterpara">Price</p>

      <div className="sectionbox">
        <input
          type="checkbox"
          value="250"
          name="250"
          onChange={() =>
            productdispatch({
              type: "SORT_BY_PRICE",
              payload: "250",
            })
          }
          checked={sort === "Rs250" }
        />
        <label>Rs 0-245</label>
      </div>
      <div className="sectionbox">
        <input
          type="checkbox"
          value="251-40"
          name="251"
          onChange={() =>
            productdispatch({
              type: "SORT_BY_PRICE",
              payload: "251",
            })
          }
          checked={sort === "251" }
        />
        <label>Rs 251-450</label>
      </div>
      <div className="sectionbox">
        <input
          type="checkbox"
          value="450"
          name="450"
          onChange={() =>
            productdispatch({
              type: "SORT_BY_PRICE",
              payload: "450",
            })
          }
          checked={sort === "450"}
        />
        <label>Rs450</label>
      </div>

      <p className="filterpara">Type</p>

      <div className="sectionbox">
        <input
          type="checkbox"
          value="Polo"
          name="Polo"
          onChange={(e) => {
            productdispatch({
              type: "FILTER_BY_TYPE_POLO",
              payload: e.target.value,
            });
          }}
        />
        <label>Polo</label>
      </div>
      <div className="sectionbox">
        <input
          type="checkbox"
          value="Hoodie"
          name="Hoodie"
          onChange={(e) => {
            productdispatch({
              type: "FILTER_BY_TYPE_HOODIE",
              payload: e.target.value,
            });
          }}
        />
        <label>Hoodie</label>
      </div>
      <div className="sectionbox">
        <input
          type="checkbox"
          value="Basic"
          name="Basic"
          onChange={(e) => {
            productdispatch({
              type: "FILTER_BY_TYPE_BASIC",
              payload: e.target.value,
            });
          }}
        />
        <label>Basic</label>
      </div>
    </div>
  );
}

export default Filter;
