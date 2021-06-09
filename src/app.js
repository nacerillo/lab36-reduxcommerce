import React from "react";
import Categories from "./components/storefront/categories";
import Products from "./components/storefront/products";
import Header from "./components/header/header";
import SimpleCart from "./components/cart/simplecart";
import Grid from "@material-ui/core/Grid";
function App() {
  return (
    <>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Categories />
        <Products />
      </Grid>
    </>
  );
}

export default App;
