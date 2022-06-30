import styled from "styled-components";

export const CheckoutStyles = styled.div`
  color: var(--main-text);

  .checkout-empty,
  .checkout-content {
    width: 100%;
    height: 100%;
    padding: 80px 20px;
  }

  .checkout-empty {
    .btn {
      display: inline-block;
      font-size: 13px;
      margin-top: 15px;
      transition: all linear 0.1s;

      &:hover {
        background-color: var(--main-text-light);
      }
    }
  }
`;
