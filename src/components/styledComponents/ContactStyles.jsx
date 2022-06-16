import styled from "styled-components";

export const ContactStyles = styled.div`
  width: 100%;
  height: 600px;
  padding: 40px 20px;

  .contact {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    color: var(--main-text);

    h2 {
      font-size: 32px;
      margin-bottom: 15px;

      position: relative;

      &::before {
        left: 0;
        bottom: 0;
      }
    }

    p {
      width: 60%;
      text-align: left;
      padding-bottom: 15px;

      @media screen and (max-width: 1000px) {
        width: 80%;
      }

      @media screen and (max-width: 600px) {
        width: 100%;
      }
    }

    input {
      outline: none;
      border: none;
      width: 320px;
      background-color: #dceeff;
      font-size: 20px;
      padding: 16px 10px;
      margin-bottom: 10px;
      border-radius: 2px;
    }

    .btn-email {
      display: block;
      transition: all linear 0.1s;

      &:hover {
        background-color: var(--main-text-light);
      }
    }

    .message {
      margin-bottom: 6px;
      padding: 0;
    }
  }
`;
