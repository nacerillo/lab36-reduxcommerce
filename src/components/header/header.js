import React from "react";
import { AppBar, Toolbar, Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { addProductToCart } from "../../store/cart";
import { connect } from "react-redux";
import SimpleCart from "../cart/simplecart";
import Grid from "@material-ui/core/Grid";
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
          <Grid item xs={11}>
            <Button
              edge="start"
              className={classes.button}
              color="inherit"
              aria-label="menu"
            >
              MY STORE
            </Button>
          </Grid>
          <Grid item xs={1}>
            <SimpleCart />
          </Grid>
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
