import styled from "styled-components";

import desk from "../../imgs/nice-desk.jpeg";

export const ImagesStyles = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  .main-image {
    display: block;
    width: 100%;
    height: 500px;

    background-image: url(${desk});
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

    img {
      width: 100px;
      height: 75px;
      border-radius: 2px;
      transition: all ease 0.2s;
      cursor: pointer;

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
