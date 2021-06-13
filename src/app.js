import React from "react";
import Categories from "./components/storefront/categories";
import Products from "./components/storefront/products";
import Header from "./components/header/header";
import SimpleCart from "./components/cart/simplecart";
import Grid from "@material-ui/core/Grid";
import Details from "./components/products/details";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Switch>
            <Route exact path="/">
              <Categories />
              <Products />
            </Route>
            <Route path="/product/id">
              <Details />
            </Route>
          </Switch>
        </Grid>
      </BrowserRouter>
    </>
  );
}

export default App;
