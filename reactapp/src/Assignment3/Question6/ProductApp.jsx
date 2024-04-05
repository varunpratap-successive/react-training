//Question6
// Create a list of items (e.g., products, articles) in your application.
// Implement dynamic routing to display details for each item when clicked.
// Create a route parameter that represents the item's ID in the URL (e.g., "/products/:id").
// Fetch item details based on the route parameter and display them on the detail page.
// Add a "Go Back" button on the detail page to return to the list.

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

import { createContext } from "react";
export const ProductContext = createContext();

function ProductApp() {
  const products = [
    {
      id: 1,
      name: "Apple Product",
      price: 50000,
      details: "All details about Apple Products",
    },
    {
      id: 2,
      name: "Realme Product",
      price: 20000,
      details: "All details about Realme Products",
    },
  ];
  return (
    <ProductContext.Provider value={{ products }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </ProductContext.Provider>
  );
}

export default ProductApp;
