import styled from "styled-components";

export const AddToCartStyles = styled.div`
  .colors {
    margin-right: 20px;
  }

  .color-circles {
    position: relative;
    top: 4px;
  }

  .color-circle {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 5px;
    opacity: 0.5;
    cursor: pointer;

    position: relative;

    &.active {
      opacity: 1;
    }

    .arrow {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .quantity {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 80px;
    margin: 25px 0;

    &-number {
      font-weight: bold;
      font-size: 20px;
    }

    svg {
      fill: var(--main-text);
      transition: all linear 0.1s;
      cursor: pointer;

      &:hover {
        fill: var(--main-text-light);
      }
    }
  }
`;
