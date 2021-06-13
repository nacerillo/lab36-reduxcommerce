import React, { useState } from "react";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { removeProductFromCart } from "../../store/cart.js";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const SimpleCart = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton className="cart-btn" aria-label="cart" onClick={handleClick}>
        <StyledBadge color="secondary">
          <ShoppingCartIcon />({props.cartReducer.cart.length})
        </StyledBadge>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        onClose={handleClose}
      >
        {props.cartReducer.cart.map((item) => {
          return (
            <MenuItem>
              <ListItemIcon>
                <DeleteOutlinedIcon
                  onClick={() => props.removeProductFromCart(item)}
                />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

const mapStateToProps = (state) => ({
  cartReducer: state.cartReducer,
});

const mapDispathToProps = { removeProductFromCart };
export default connect(mapStateToProps, mapDispathToProps)(SimpleCart);
//export default Header;
