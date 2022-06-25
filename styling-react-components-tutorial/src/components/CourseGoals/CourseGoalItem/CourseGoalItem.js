import styles from './CourseGoalItem.module.css';

function CourseGoalItem(props) {
  // const [deleteText, setDeleteText] = useState('');

  function deleteHandler() {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  }

  return (
    <li className={styles['goal-item']} onClick={deleteHandler}>
      {props.children}
    </li>
  );
}

export default CourseGoalItem;
