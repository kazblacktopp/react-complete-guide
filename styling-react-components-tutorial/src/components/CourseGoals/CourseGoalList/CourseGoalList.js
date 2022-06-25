import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import styles from './CourseGoalList.module.css';

function CourseGoalList(props) {
  return (
    <ul className={styles['goal-list']}>
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
}

export default CourseGoalList;
