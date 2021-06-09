import React from "react";
import { MenuItem, Menu } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { display } from "@material-ui/system";
import { makeStyles } from "@material-ui/core/styles";
import { addProductToCart } from "../../store/cart";
import { connect } from "react-redux";
import { If, Then } from "react-if";

const SimpleCart = (props) => {
  //console.log(props);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <If condition={props.cartReducer.cart.length > 0}>
        <Then>
          <Menu id="simple-menu" open={true}>
            {props.cartReducer.cart.map((product) => {
              console.log(product);
              return (
                <MenuItem>
                  {product.name}
                  <Button>Remove</Button>
                </MenuItem>
              );
            })}
          </Menu>
        </Then>
      </If>
    </>
  );
};

const mapStateToProps = (state) => ({
  cartReducer: state.cartReducer,
});
const mapDispatchToProps = { addProductToCart };
export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
//export default Header;
