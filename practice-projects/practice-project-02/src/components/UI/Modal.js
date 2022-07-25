import { Fragment } from 'react';
import React from 'react-dom';
import Overlay from './Overlay';
import ModalOverlay from './ModalOverlay';

function Modal(props) {
  const overlayElement = document.getElementById('overlays');

  return (
    <Fragment>
      {React.createPortal(<Overlay onClick={props.onClose} />, overlayElement)}
      {React.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayElement
      )}
    </Fragment>
  );
}

export default Modal;
