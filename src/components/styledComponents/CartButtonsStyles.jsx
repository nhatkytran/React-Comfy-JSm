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
  .cart-buttons-login {
    gap: 5px;
    padding: 10px;
    border-radius: 2px;
    transition: all linear 0.1s;
    cursor: pointer;

    &:hover {
      background-color: var(--main-bg-medium);
    }

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
  .cart-buttons-login {
    justify-content: start;

    padding-left: 20px;

    &:hover {
      background-color: var(--main-bg);
    }
  }
`;
