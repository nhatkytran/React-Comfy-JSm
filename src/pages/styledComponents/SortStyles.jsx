import styled from "styled-components";

export const SortStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .views {
    display: flex;
    align-items: center;

    .view-btn {
      margin-right: 5px;
      padding: 4px;
      border-radius: 2px;
      border: 1px solid var(--main-text);
      cursor: pointer;

      svg {
        fill: var(--main-text);
      }

      &.active {
        background-color: var(--main-text);

        svg {
          fill: #fff;
        }
      }
    }

    .found {
      margin-left: 30px;

      @media screen and (max-width: 868px) {
        margin-left: 20px;
      }

      @media screen and (max-width: 768px) {
        margin-left: 15px;
      }
    }
  }

  .bar {
    flex: 1;
    margin: 0 30px;

    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 10px 0;
    }

    hr {
      margin: 0;

      position: relative;
      top: 2px;
    }
  }

  .sort {
    &-select {
      margin-left: 10px;
      border: none;
    }
  }
`;
