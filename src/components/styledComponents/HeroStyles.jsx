import styled from "styled-components";
import mainGallery from "../../imgs/nice-desk.jpeg";
import subGallery from "../../imgs/hero.jpeg";

export const HeroStyles = styled.div`
  background-color: #dceeff;

  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    width: 100%;
    height: 640px;
    padding: 40px 20px;

    & > div {
      flex: 1;
    }

    &-content {
      color: var(--main-text);
      text-align: left;
      padding: 20px 60px 20px 0;

      @media screen and (max-width: 968px) {
        padding: 0 60px 0 0;
      }

      @media screen and (max-width: 768px) {
        padding: 0;
      }

      h2 {
        display: inline-block;
        font-size: 32px;
        margin-bottom: 15px;

        position: relative;

        ::before {
          bottom: 0;
          left: 0;
        }
      }

      .btn-shownow {
        margin-top: 10px;
        transition: all linear 0.1s;

        &:hover {
          background-color: var(--main-text-light);
        }
      }
    }

    &-gallery {
      width: 100%;
      height: 100%;

      position: relative;

      @media screen and (max-width: 968px) {
        display: none;
      }

      &-main {
        width: calc(100% - 30px);
        background-image: url(${mainGallery});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        border-radius: 2px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2),
          -1px -1px 1px rgba(0, 0, 0, 0.2);

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;

        &::before {
          content: "";
          width: 30px;
          height: calc(60%);
          background-color: var(--main-text-light);
          border-top-left-radius: 6px;
          position: absolute;
          left: -30px;
          bottom: 0;
        }
      }
      &-sub {
        width: 250px;
        height: 30%;
        background-image: url(${subGallery});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        border-radius: 2px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2),
          -1px -1px 1px rgba(0, 0, 0, 0.2);

        position: absolute;
        left: -20%;
        bottom: 0;
      }
    }
  }
`;
