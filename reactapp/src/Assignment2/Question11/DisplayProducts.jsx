import React, { useContext } from "react";
import { ShoppingContext } from "./ShoppingApp";
import "./Shopping.css";

function DisplayProducts() {
  const products = [
    {
      phonename: "OnePlus",
      phoneprice: 50000,
    },
    {
      phonename: "APPLE",
      phoneprice: 80000,
    },
  ];
  const { cart, setCart } = useContext(ShoppingContext);
  const { price, setPrice } = useContext(ShoppingContext);

  const addtocart = (element, index) => {
    setCart([...cart, element]);
    setPrice(price + element.phoneprice);
  };
  return (
    <>
      <div id="productlist">
        {products.map((element, index) => {
          return (
            <div key={index} id="divid">
              <p>{element.phonename}</p>
              <p>{element.phoneprice}</p>
              <button onClick={() => addtocart(element, index)}>
                Add this item{" "}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DisplayProducts;
