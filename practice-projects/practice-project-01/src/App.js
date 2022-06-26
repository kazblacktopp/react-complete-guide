import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import ErrorModal from './components/UI/ErrorModal';

function App() {
  const [usersList, setUsersList] = useState([]);
  const [error, setError] = useState();

  function addUserHandler(newUsername, newUserAge) {
    setUsersList(prevUsersList => {
      const newUsersList = [...prevUsersList];
      newUsersList.push({
        username: newUsername,
        age: +newUserAge,
        id: `User${newUsersList.length + 1}`,
      });
      return newUsersList;
    });
  }

  function onErrorHandler(errorDataObj) {
    setError(errorDataObj);
  }

  function exitModalHandler() {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={exitModalHandler}
        />
      )}
      <div>
        <AddUser onAddUser={addUserHandler} onError={onErrorHandler} />
      </div>
      {usersList.length > 0 && <UsersList users={usersList} />}
    </div>
  );
}

export default App;
