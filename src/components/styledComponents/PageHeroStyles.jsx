import styled from "styled-components";

export const PageHeroStyles = styled.div`
  display: flex;
  align-items: center;

  height: 17vh;
  color: var(--main-text-white);
  background: linear-gradient(
    to right,
    var(--main-text),
    var(--main-text-light)
  );
  font-size: 20px;

  .page-hero-content {
    text-align: start;
    padding-left: 40px;

    span {
      margin: 0 5px;
    }

    a,
    a:visited,
    a:active {
      color: var(--main-text-white);
      text-decoration: none;
    }
  }
`;
