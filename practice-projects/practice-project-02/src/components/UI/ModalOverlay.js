import classes from './ModalOverlay.module.css';

function ModalOverlay(props) {
  return <div className={classes.modal}>{props.children}</div>;
}

export default ModalOverlay;
