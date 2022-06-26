import { Fragment, useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

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

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 && <UsersList users={usersList} />}
    </Fragment>
  );
}

export default App;
