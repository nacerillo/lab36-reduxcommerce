import React from "react";
import { AppBar, Toolbar, Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { addProductToCart } from "../../store/cart";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button
            edge="start"
            className={classes.button}
            color="inherit"
            aria-label="menu"
          >
            MY STORE
          </Button>
          <Button className={classes.cartbutton} component={Link} to="/cart">
            Cart({props.cartReducer.cart.length})
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

const mapStateToProps = (state) => ({
  cartReducer: state.cartReducer,
});
const mapDispatchToProps = { addProductToCart };
export default connect(mapStateToProps, mapDispatchToProps)(Header);
//export default Header;
