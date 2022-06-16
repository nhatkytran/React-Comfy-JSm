import styled from "styled-components";

export const ServicesStyles = styled.div`
  background-color: #dceeff;

  .services {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    min-height: 640px;
    text-align: left;
    padding: 80px 20px;

    .title {
      align-self: start;

      h2 {
        display: inline-block;
        color: var(--main-text);
        font-size: 32px;
        margin-bottom: 15px;

        position: relative;

        &::before {
          left: 0;
          bottom: 0;
        }
      }

      @media screen and (max-width: 800px) {
        margin-bottom: 40px;
      }
    }

    .cards {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      width: 100%;
      min-height: 300px;

      @media screen and (max-width: 800px) {
        flex-direction: column;
      }

      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        width: calc((100% - 40px) / 3);
        height: 100%;
        color: var(--main-text-dark);
        background: linear-gradient(
          135deg,
          var(--main-text-medium),
          var(--main-text-white)
        );
        text-align: center;
        padding: 40px;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

        @media screen and (max-width: 800px) {
          width: 100%;
          height: 250px !important;
          padding: 40px 80px;
        }

        @media screen and (max-width: 600px) {
          height: 250px !important;
          padding: 36px;
        }

        @media screen and (max-width: 502px) {
          height: 270px !important;
          padding: 36px;
        }

        @media screen and (max-width: 420px) {
          height: 280px !important;
          padding: 28px;
        }

        @media screen and (max-width: 360px) {
          height: 300px !important;
          padding: 28px;
        }

        &-icon {
          width: 50px;
          height: 50px;
          background-color: #dceeff;
          border-radius: 50%;

          position: relative;

          svg {
            font-size: 30px;

            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        h3 {
          font-size: 24px;
        }
      }
    }
  }
`;
