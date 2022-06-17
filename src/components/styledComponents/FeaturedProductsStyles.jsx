import styled from "styled-components";

export const FeaturedProductsStyles = styled.div`
  .fp-loader,
  .fp-error,
  .featured-products {
    width: 100%;
    min-height: 640px;
    padding: 40px 20px;
  }

  .featured-products {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h2 {
      align-self: flex-start;
      display: inline-block;
      color: var(--main-text);
      font-size: 32px;
      margin-bottom: 15px;

      position: relative;

      &::before {
        left: 0;
        bottom: 0;
      }
    }

    .fp-products {
      flex: 1;

      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
      gap: 20px;

      width: 100%;

      article {
        .img {
          width: 100%;
          height: 220px;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          border-radius: 2px;

          position: relative;

          &-overlay {
            background-color: rgba(16, 42, 66, 0.4);
            transition: all ease 0.2s;
            cursor: pointer;

            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            opacity: 0;

            &:hover {
              opacity: 1;
            }

            svg {
              font-size: 36px;
              fill: var(--main-text-white);

              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }

        .info {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-top: 5px;

          p {
            color: var(--main-text);
          }

          .name {
            text-transform: uppercase;
          }

          .price {
            color: var(--main-text-light);
          }
        }
      }
    }

    .btn-all-products {
      align-self: start;
      margin-top: 15px;
      transition: all linear 0.1s;

      &:hover {
        background-color: var(--main-text-light);
      }
    }
  }
`;
