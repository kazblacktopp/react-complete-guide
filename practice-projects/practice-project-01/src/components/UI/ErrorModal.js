import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

function ErrorModal(props) {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onClick} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={props.onClick}>
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
