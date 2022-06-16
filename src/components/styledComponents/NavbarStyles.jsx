import styled from "styled-components";

export const NavbarStyles = styled.div`
  padding: 0 20px;
  background-color: var(--main-bg);

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    ul {
      display: flex;
      align-items: center;

      list-style: none;

      li {
        margin: 0 10px;

        a,
        a:visited,
        a:active {
          color: var(--main-text);
          text-decoration: none;
          padding: 6px;
          border-radius: 2px;
          transition: all linear 0.1s;

          &:hover {
            background-color: var(--main-bg-medium);
          }
        }
      }
    }

    &-icon svg {
      font-size: 26px;
      cursor: pointer;
    }
  }
`;
