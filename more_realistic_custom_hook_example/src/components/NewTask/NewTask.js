import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

export default function NewTask({ onAddTask }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function enterTaskHandler(taskText) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://react-http-621d6-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
        {
          method: 'POST',
          body: JSON.stringify({ text: taskText }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      onAddTask(createdTask);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
}
