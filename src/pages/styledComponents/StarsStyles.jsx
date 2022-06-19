import styled from "styled-components";

export const StarsStyles = styled.div`
  span {
    svg {
      fill: #fdb902;
      margin-right: 5px;
    }
  }

  .stars,
  .reviews {
    position: relative;
    top: -2px;
  }

  .stars {
    color: #fdb902;
    font-weight: bold;
  }

  .reviews {
    margin-left: 15px;
  }
`;
