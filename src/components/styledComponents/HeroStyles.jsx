import styled from "styled-components";

export const HeroStyles = styled.div`
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px;

    & > div {
      flex: 1;
    }
  }
`;
