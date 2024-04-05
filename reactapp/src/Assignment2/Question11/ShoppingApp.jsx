//Question11
// Build a shopping cart application using the useContext hook.
// Set up a context to manage the state of the shopping cart.
// Create components to display products and a shopping cart.
// Use the useContext hook to access the cart state and update it.
// Allow users to add and remove items from the cart.
// Display the total price of items in the cart.

import {createContext,useState } from "react";
import DisplayProducts from "./DisplayProducts";
import DisplayCart from "./DisplayCart";

export const ShoppingContext=createContext(null);

function ShoppingApp() {
  const [cart, setCart] = useState([]);
const[price,setPrice]=useState(0);
  return (
    <>
      <ShoppingContext.Provider value={{ cart, setCart,price,setPrice}}  >
        <DisplayCart/>
        <br/>
        <DisplayProducts/>
      </ShoppingContext.Provider>
    </>
  );
}

export default ShoppingApp;
