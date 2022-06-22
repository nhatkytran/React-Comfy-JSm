import styled from "styled-components";

export const SingleProductStyles = styled.div`
  .single-product {
    width: 100%;
    padding: 40px 20px;

    .btn-single-product-container {
      text-align: left;
    }

    .btn-single-product {
      display: inline-block;
      margin-bottom: 40px;
      transition: all linear 0.1s;

      &:hover {
        background-color: var(--main-text-light);
      }
    }

    .single-product-main {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      width: 100%;
      min-height: 640px;

      @media screen and (max-width: 1100px) {
        flex-direction: column;
        align-items: center;
      }

      &-right {
        flex: 1;
        width: 100%;
        color: var(--main-text);
        text-align: left;
        padding: 0 20px;

        & > * {
          margin-bottom: 10px;
        }

        h2 {
          font-size: 32px;

          @media screen and (max-width: 500px) {
            font-size: 26px;
          }
        }

        .price {
          color: var(--main-text-light);
          font-size: 20px;
          font-weight: bold;
          margin-top: 10px;
        }

        p {
          margin-bottom: 20px;
        }
      }
    }
  }
`;
