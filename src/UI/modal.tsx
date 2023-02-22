import { Fragment, FC, ReactNode } from "react";

import { createPortal } from "react-dom";

import Backdrop from "./backdrop";

import ModalOverlay from "./modal-overlay";

type props = {
  children?: ReactNode;
  onClose: () => void;
};

const Modal: FC<props> = ({ onClose, children }) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onClick={onClose} />,
        document.getElementById("backdrop") as HTMLElement
      )}
      {createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById("overlay") as HTMLElement
      )}
    </Fragment>
  );
};
export default Modal;
