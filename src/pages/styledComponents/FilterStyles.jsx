import styled from "styled-components";

export const FilterStyles = styled.div`
  .filter {
    text-align: left;

    position: sticky;
    top: 20px;

    input {
      outline: none;
      border: none;
      width: 100%;
      background-color: #dceeff;
      font-size: 16px;
      padding: 8px 12px;
      margin-bottom: 10px;
      border-radius: 2px;
    }

    .category {
      ul {
        list-style: none;

        li {
          margin-bottom: 4px;
          padding: 0 4px;
          border-radius: 2px;
          transition: all linear 0.1s;
          cursor: pointer;

          &:hover {
            background-color: #dceeff;
          }

          &.active {
            color: var(--main-text-light);
            font-weight: bold;
          }
        }
      }
    }

    select {
      outline: none;
      border: none;
      background-color: #dceeff;
      padding: 2px 4px;
      border-radius: 2px;

      &:active {
        outline: none;
        border: none;
      }
    }

    .colors {
      & > span {
        margin: 0 6px;
        cursor: pointer;

        &.active {
          color: var(--main-text-light);
          font-weight: bold;
          opacity: 1;

          .arrow {
            opacity: 1;
            pointer-events: all;
          }
        }
      }

      .color {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-right: 5px;
        opacity: 0.5;
        cursor: pointer;

        position: relative;
        top: 2px;

        .arrow {
          position: absolute;
          top: 70%;
          left: 50%;
          transform: translateX(-50%);

          opacity: 0;
          pointer-events: none;
        }
      }
    }

    .price {
      margin-top: 4px;

      p {
        margin: 0 4px;
      }

      &-range {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 200px;
      }

      input {
        padding: 0;
        width: 200px;
      }
    }

    .shipping {
      display: flex;
      align-items: center;

      & > * {
        cursor: pointer;
      }

      label {
        padding-right: 5px;
      }

      input {
        width: 20px;
        margin: 0 auto 0 0;
      }
    }

    .btn-clear-filters {
      background-color: #d91d1d;
      margin: 15px 0;
      padding: 4px 6px;
      transition: all linear 0.1s;

      &:hover {
        background-color: red;
      }
    }
  }
`;
