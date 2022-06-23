import styled from "styled-components";

export const CartStyles = styled.div`
  color: var(--main-text);

  hr {
    height: 1px;
    background-color: #bcccdb;
    border: none;
  }

  .empty-cart {
    width: 100%;
    padding: 40px 20px;

    p {
      margin-bottom: 15px;
    }

    .btn {
      transition: all linear 0.1s;

      &:hover {
        background-color: var(--main-text-light);
      }
    }
  }

  .cart {
    width: 100%;
    padding: 40px 20px;

    .titles-row {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;

      padding: 20px 0;

      span {
        display: block;
        width: 20px;
        height: 20px;
      }
    }

    .handle {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-top: 20px;

      @media screen and (max-width: 568px) {
        flex-direction: column;
      }

      button {
        transition: all linear 0.1s;

        @media screen and (max-width: 568px) {
          width: 100%;
          margin-bottom: 10px;
        }
      }

      .continue {
        &:hover {
          background-color: var(--main-text-light);
        }
      }

      .clear {
        background-color: #ca0a0a;

        &:hover {
          background-color: #e10b0b;
        }
      }
    }
  }
`;
