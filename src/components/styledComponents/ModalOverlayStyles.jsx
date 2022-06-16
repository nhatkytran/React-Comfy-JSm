import styled from "styled-components";

export const ModalOverlayStyles = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  transition: all ease 0.4s;
  z-index: 999;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
