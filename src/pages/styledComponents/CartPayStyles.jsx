import styled from "styled-components";

export const CartPayStyles = styled.div`
  padding: 10px 20px;

  .pay {
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    width: 100%;

    @media screen and (max-width: 568px) {
      align-items: center;
    }

    &-content {
      width: 320px;
      padding: 20px 40px;
      border: 1px solid #bcccdb;

      @media screen and (max-width: 568px) {
        width: 100%;
      }

      div {
        display: grid;
        grid-template-columns: 160px 1fr;

        text-align: left;

        .bold {
          font-weight: bold;
        }
      }

      hr {
        margin: 15px 0 20px;
      }

      .total {
        font-size: 18px;
      }
    }

    button,
    a {
      width: 320px;
      margin: 10px 0 40px;
      transition: all linear 0.1s;

      @media screen and (max-width: 568px) {
        width: 100%;
      }

      &:hover {
        background-color: var(--main-text-light);
      }
    }
  }
`;
