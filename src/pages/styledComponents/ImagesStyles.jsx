import styled from "styled-components";

export const ImagesStyles = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  @media screen and (max-width: 1100px) {
    width: 100%;
    margin-bottom: 20px;
  }

  .main-image {
    display: block;
    width: 100%;
    height: 500px;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
    border-radius: 2px;
  }

  .gallery {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    width: 100%;

    @media screen and (max-width: 1100px) {
      justify-content: center;
    }

    @media screen and (max-width: 700px) {
      gap: 10px;
    }

    @media screen and (max-width: 500px) {
      gap: 6px;
    }

    img {
      width: 100px;
      height: 75px;
      border-radius: 2px;
      transition: all ease 0.2s;
      cursor: pointer;

      @media screen and (max-width: 700px) {
        width: 80px;
        height: 60px;
      }

      @media screen and (max-width: 500px) {
        width: 52px;
        height: 39px;
      }

      &:hover {
        transform: translateY(-3px);
      }
    }

    .active {
      transform: translateY(-3px);
      box-shadow: 1px 1px 4px 1px var(--main-text);
    }
  }
`;
