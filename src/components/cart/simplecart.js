import React from "react";
import { AppBar, Toolbar, Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { addProductToCart } from "../../store/cart";
import { connect } from "react-redux";
import { When } from "react-if";
const SimpleCart = (props) => {
  console.log(props);
  return (
    <>
      <When condtion={props.cartReducer.cart.length > 1}>
        {console.log("THIS IS WORKING")}
        <div>HELLO!!!!</div>
      </When>
    </>
  );
};

const mapStateToProps = (state) => ({
  cartReducer: state.cartReducer,
});
const mapDispatchToProps = { addProductToCart };
export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
//export default Header;
