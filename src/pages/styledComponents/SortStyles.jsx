import styled from "styled-components";

export const SortStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .views {
    display: flex;
    align-items: center;

    span {
      margin-right: 5px;
      padding: 4px;
      border-radius: 2px;
      border: 1px solid var(--main-text);
    }

    .found {
      margin-left: 30px;
    }
  }

  .bar {
    flex: 1;
    margin: 0 30px;

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
