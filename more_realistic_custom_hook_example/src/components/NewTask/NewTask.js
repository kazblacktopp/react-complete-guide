import useAJAX from '../../hooks/use-ajax';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

export default function NewTask({ onAddTask }) {
  const { isLoading, error, sendRequest } = useAJAX();

  const API_URL =
    'https://react-http-621d6-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json';

  async function enterTaskHandler(taskText) {
    await sendRequest(
      {
        url: API_URL,
        options: {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: { text: taskText },
        },
      },
      createTask.bind(null, taskText)
    );
  }

  function createTask(taskText, taskObj) {
    const generatedId = taskObj.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    onAddTask(createdTask);
  }

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
}
