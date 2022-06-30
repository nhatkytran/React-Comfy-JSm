import React from "react";
import { Link } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import { BiLogIn, BiLogOut } from "react-icons/bi";

import {
  useStructureContext,
  useCartContext,
  useUserContext,
} from "../context";

import {
  CartButtonsStyles,
  CartButtonsSidebarStyles,
} from "./styledComponents";

function CartButtons({ kindof }) {
  const { closeSidebar } = useStructureContext();
  const { cart, totalItems, clearCart } = useCartContext();
  const { appUser, loginWithRedirect, logout } = useUserContext();

  function handleLogin() {
    closeSidebar();
    loginWithRedirect();
  }

  function handleLogout() {
    closeSidebar();
    clearCart();
    logout({
      returnTo: window.location.origin,
    });
  }

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
              <span>{totalItems}</span>
            </span>
          )}
        </span>
      </Link>
      {!appUser && (
        <button
          className="cart-buttons-login center-flex-display"
          onClick={handleLogin}
        >
          Login <BiLogIn />
        </button>
      )}
      {appUser && (
        <button
          className="cart-buttons-logout center-flex-display"
          onClick={handleLogout}
        >
          Logout <BiLogOut />
        </button>
      )}
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
