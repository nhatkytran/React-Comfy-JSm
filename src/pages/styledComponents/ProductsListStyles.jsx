import styled from "styled-components";

export const ProductsListStyles = styled.div`
  display: grid;
  margin-top: 20px;

  // Grid template
  &.grid-layout {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    @media screen and (max-width: 968px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 15px;
    }
  }

  .product-grid {
    width: 100%;

    .img-container {
      position: relative;

      img {
        width: 100%;
        height: 175px;
        object-fit: cover;
        object-position: center;
        border-radius: 2px;

        @media screen and (max-width: 768px) {
          height: 200px;
        }
      }

      .overlay {
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

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .price {
        color: var(--main-text-light);
      }
    }
  }

  // List template
  &.list-layout {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .product-list {
    display: flex;
    align-items: center;

    @media screen and (max-width: 968px) {
      flex-direction: column;
      align-items: flex-start;
    }

    .image {
      display: block;
      width: 300px;
      height: 200px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      border-radius: 2px;

      position: relative;

      .overlay {
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

    &-content {
      text-align: left;
      padding: 0 20px;

      @media screen and (max-width: 968px) {
        padding: 10px 20px 20px 0;
      }

      .price {
        color: var(--main-text-light);
      }

      .btn-details {
        margin-top: 10px;
        padding: 2px 4px;
        transition: all linear 0.1s;

        &:hover {
          background-color: var(--main-text-light);
        }
      }
    }
  }
`;
