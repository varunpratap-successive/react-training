import React from "react";
import { useContext } from "react";
import { ShoppingContext } from "./ShoppingApp";
import "./Shopping.css";
function DisplayCart() {
  const { cart, setCart } = useContext(ShoppingContext);
  const { price, setPrice } = useContext(ShoppingContext);
  const Removefromcart = (element, index) => {
    const filterArr = cart.filter((element, i) => i !== index);
    setCart([...filterArr]);
    setPrice(price - element.phoneprice);
  };

  return (
    <>
      <div id="cartid">
        <h1 id="h1tagid">Cart:{cart.length}</h1>
        <br />
        {cart.map((element, index) => {
          return (
            <div key={index} id="divid">
              <p>{element.phonename}</p>
              <p>{element.phoneprice}</p>

              <button onClick={() => Removefromcart(element, index)}>
                Remove this item{" "}
              </button>
            </div>
          );
        })}
        <br />
        <p>Total Price of Cart is {price}</p>
      </div>
    </>
  );
}

export default DisplayCart;
