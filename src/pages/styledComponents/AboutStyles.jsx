import styled from "styled-components";
import niceDesk from "../../imgs/nice-desk.jpeg";

export const AboutStyles = styled.div`
  .about-content {
    display: flex;
    align-items: start;
    gap: 30px;

    width: 100%;
    height: 100%;
    padding: 80px 20px;

    @media screen and (max-width: 900px) {
      flex-direction: column;
    }

    .about-content-image {
      flex: 1;
      width: 100%;
      height: 100%;

      div {
        height: 550px;
        background-image: url(${niceDesk});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        border-radius: 2px;
        box-shadow: 3px 3px 6px var(--main-text-white),
          -3px -3px 6px var(--main-text-white);

        @media screen and (max-width: 900px) {
          height: 650px;
          background-position: bottom center;
        }

        @media screen and (max-width: 760px) {
          height: 550px;
          background-position: bottom center;
        }
      }
    }

    .about-content-story {
      flex: 1;

      height: 100%;
      color: var(--main-text);
      text-align: left;
      padding: 0 20px 20px;

      @media screen and (max-width: 900px) {
        padding: 0;
      }

      h2 {
        display: inline-block;
        font-size: 40px;
        margin-bottom: 20px;

        position: relative;

        ::before {
          bottom: 0;
          left: 0;
        }
      }
    }
  }
`;
