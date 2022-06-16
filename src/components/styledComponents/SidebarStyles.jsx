import styled from "styled-components";

export const SidebarStyles = styled.aside`
  width: 100%;
  height: 100%;
  max-width: 500px;
  background-color: #fff;
  box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.2);
  transform: translateX(-100%);
  transition: all ease 0.4s;
  z-index: 1000;

  position: fixed;
  top: 0;
  left: 0;

  &.show {
    transform: translateX(0);
  }

  .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--main-bg);
    padding: 0 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    &-close {
      padding: 5px;
      cursor: pointer;

      svg {
        font-size: 24px;
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: start;

    list-style: none;
    margin: 0 0 10px;
    padding: 0;

    li {
      width: 100%;

      a,
      a:visited,
      a:active {
        display: block;

        width: 100%;
        color: var(--main-text);
        text-decoration: none;
        text-align: start;
        padding: 12px 10px 12px 20px;
        transition: all linear 0.1s;

        &:hover {
          background-color: var(--main-bg);
        }
      }
    }
  }
`;
