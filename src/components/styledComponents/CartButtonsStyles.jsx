import styled from "styled-components";

export const CartButtonsStyles = styled.div.attrs({
  className: "hide",
})`
  display: flex;
  align-items: center;
  gap: 5px;

  a,
  a:visited,
  a:active {
    color: var(--main-text);
    text-decoration: none;
  }

  .cart-buttons,
  .cart-buttons-login,
  .cart-buttons-logout {
    outline: none;
    border: none;
    gap: 5px;
    width: 100%;
    background-color: transparent;
    font-size: 16px;
    padding: 10px;
    border-radius: 2px;
    transition: all linear 0.1s;
    cursor: pointer;

    &:hover {
      background-color: var(--main-bg-medium);
    }

    span {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  .cart-buttons {
    span {
      position: relative;

      svg {
        font-size: 24px;
        fill: var(--main-text);
      }

      .quantity {
        width: 20px;
        height: 20px;
        background-color: var(--main-text-light);
        border-radius: 50%;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);

        position: absolute;
        top: -8px;
        right: -10px;

        span {
          font-size: 12px;
          color: #fff;
        }
      }
    }
  }

  .cart-buttons-login,
  .cart-buttons-logout {
    svg {
      font-size: 24px;
      fill: var(--main-text);
    }
  }
`;

export const CartButtonsSidebarStyles = styled(CartButtonsStyles).attrs({
  className: "block-display",
})`
  .cart-buttons,
  .cart-buttons-login,
  .cart-buttons-logout {
    justify-content: start;

    padding-left: 20px;

    &:hover {
      background-color: var(--main-bg);
    }
  }
`;
