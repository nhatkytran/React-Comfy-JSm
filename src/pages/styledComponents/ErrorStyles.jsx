import styled from "styled-components";

export const ErrorStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
