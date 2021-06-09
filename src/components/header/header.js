import React from "react";
import { AppBar, Toolbar, Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const Header = () => {
  const classes = useStyles();

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
            Cart
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
