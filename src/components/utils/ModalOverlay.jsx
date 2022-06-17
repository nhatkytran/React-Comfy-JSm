import { useStructureContext } from "../../context";
import { ModalOverlayStyles } from "../styledComponents";

function ModalOverlay() {
  const { isModalOverlayOpen, closeSidebar } = useStructureContext();

  return (
    <ModalOverlayStyles
      className={isModalOverlayOpen ? "show" : "unshown"}
      onClick={closeSidebar}
    />
  );
}

export default ModalOverlay;
