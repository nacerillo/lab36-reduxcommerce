import { connect } from "react-redux";
//import { selectCategory } from "../../store/categories.js";
import {
  selectCategory,
  addProductToCart,
  getProducts,
} from "../../store/products.js";
//import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Products = (props) => {
  console.log("Props on Product", props.productReducer);
  useEffect(() => {
    console.log("HELLO PRODUCTS");
    props.getProducts();
  }, []);
  //console.log("Props of Category", props.productReducer.activeCat);
  const classes = useStyles();
  return (
    <>
      <h2>{props.productReducer.activeCat}</h2>
      <section className="product_container">
        {props.productReducer.products.map((product) => {
          if (product.category === props.productReducer.activeCat) {
            return (
              <Card className={classes.root} key={product._id}>
                <CardActionArea>
                  <CardMedia className={classes.media} title={product.name} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Description: {product.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      In Stock: {product.inStock}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Price: {product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => props.addProductToCart(product)}
                  >
                    Add To Cart
                  </Button>
                  <Route path="product/:id">
                    <Details />
                  </Route>
                </CardActions>
              </Card>
            );
          }
        })}
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  productReducer: state.productReducer,
});

const mapDispathToProps = { selectCategory, addProductToCart, getProducts };
export default connect(mapStateToProps, mapDispathToProps)(Products);
