import styled from "styled-components";

export const CartItemStyles = styled.div`
  display: grid;
  grid-template-columns: 316px 1fr 1fr 1fr auto;

  padding: 20px 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 316px 1fr auto;
  }

  @media screen and (max-width: 568px) {
    grid-template-columns: 200px 1fr auto;
  }

  &:first-child {
    padding: 40px 0 20px;
  }

  &:last-child {
    padding: 20px 0 40px;
  }

  .item {
    justify-content: start;
    gap: 15px;

    .image {
      display: block;
      width: 100px;
      height: 75px;
      background-repeat: no-repeat;
      background-position: center bottom;
      background-size: cover;
      border-radius: 2px;
    }

    .content {
      text-align: left;

      & > * {
        line-height: 1.3;
      }

      p {
        font-size: 13px;
      }

      span {
        display: inline-block;
        width: 11px;
        height: 11px;
        border-radius: 2px;
        margin-left: 5px;

        position: relative;
        top: 1px;
      }

      .small-price {
        display: none;
        font-size: 13px;
        color: var(--main-text-light);

        @media screen and (max-width: 768px) {
          display: block;
        }
      }
    }
  }

  .price {
    span {
      color: var(--main-text-light);
    }
  }

  .quantity {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 70px;
    margin: 0 auto;

    @media screen and (max-width: 568px) {
      width: 60px;
    }

    &-number {
      font-size: 20px;

      @media screen and (max-width: 568px) {
        font-size: 16px;
      }
    }

    &-icon {
      font-size: 20px;
      transition: all linear 0.1s;
      cursor: pointer;

      @media screen and (max-width: 568px) {
        font-size: 16px;
      }

      &:hover {
        fill: var(--main-text-light);
      }
    }
  }

  .subtotal {
    span {
      color: var(--main-text-light);
    }
  }

  .trash-bin {
    .trash-bin-icon {
      width: 24px;
      height: 24px;
      border-radius: 2px;
      background-color: #ca0a0a;
      border-radius: 2px;
      cursor: pointer;

      svg {
        fill: #fff;
        font-size: 12px;
      }
    }
  }
`;
