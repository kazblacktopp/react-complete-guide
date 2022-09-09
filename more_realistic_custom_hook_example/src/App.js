import { Fragment, useEffect, useState, useCallback } from 'react';
import useAJAX from './hooks/use-ajax';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const { isLoading, error, sendRequest } = useAJAX();

  const API_URL =
    'https://react-http-621d6-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json';

  const fetchTasks = useCallback(async () => {
    await sendRequest(
      {
        url: API_URL,
      },
      loadTasks
    );
  }, []);

  function loadTasks(tasksObj) {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks);
  }

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  function taskAddHandler(task) {
    setTasks(prevTasks => prevTasks.concat(task));
  }

  return (
    <Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </Fragment>
  );
}
