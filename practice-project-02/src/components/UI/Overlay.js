import classes from './Overlay.module.css';

function Overlay(props) {
  return <div className={classes.backdrop} onClick={props.onClick} />;
}

export default Overlay;
