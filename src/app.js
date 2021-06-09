import React from "react";
import Categories from "./components/storefront/categories";
import Products from "./components/storefront/products";
import Header from "./components/header/header";
import SimpleCart from "./components/cart/simplecart";
function App() {
  return (
    <>
      <Header />
      <Categories />
      <SimpleCart />
      <Products />
    </>
  );
}

export default App;
