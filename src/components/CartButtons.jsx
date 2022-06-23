import React from "react";
import { Link } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";

import { useStructureContext, useCartContext } from "../context";

import {
  CartButtonsStyles,
  CartButtonsSidebarStyles,
} from "./styledComponents";

function CartButtons({ kindof }) {
  const { closeSidebar } = useStructureContext();
  const { cart } = useCartContext();

  const cartButtonsContent = (
    <React.Fragment>
      <Link
        to="/cart"
        className="cart-buttons center-flex-display"
        onClick={closeSidebar}
      >
        <span>
          Cart <BsCartCheckFill />
          {cart.length > 0 && (
            <span className="quantity center-flex-display">
              <span>{cart.length}</span>
            </span>
          )}
        </span>
      </Link>
      <Link
        to="/login"
        className="cart-buttons-login center-flex-display"
        onClick={closeSidebar}
      >
        Login <BiLogIn />
      </Link>
    </React.Fragment>
  );

  if (kindof === "navbar")
    return <CartButtonsStyles>{cartButtonsContent}</CartButtonsStyles>;
  if (kindof === "sidebar")
    return (
      <CartButtonsSidebarStyles>{cartButtonsContent}</CartButtonsSidebarStyles>
    );
}

export default CartButtons;
