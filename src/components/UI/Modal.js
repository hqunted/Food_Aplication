import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import Backdrop from "./Backdrop.js";
import ModalOverlay from "./ModalOverlay.js";

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
