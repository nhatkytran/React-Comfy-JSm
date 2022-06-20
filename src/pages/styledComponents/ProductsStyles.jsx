import styled from "styled-components";

export const ProductsStyles = styled.div`
  .products-container {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 30px;

    width: 100%;
    color: var(--main-text);
    padding: 40px 20px;

    @media screen and (max-width: 768px) {
      gap: 15px;
    }

    @media screen and (max-width: 668px) {
      grid-template-columns: 1fr;
    }
  }
`;
