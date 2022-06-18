import styled from "styled-components";

export const ErrorStyles = styled.div`
  flex-direction: column;
  gap: 10px;

  background-color: #efefef;

  h2 {
    color: var(--main-text);
  }

  a,
  a:visited,
  a:active {
    color: var(--main-text);
    background-color: var(--main-bg);
    text-decoration: none;
    padding: 10px;
    border-radius: 2px;
  }
`;
