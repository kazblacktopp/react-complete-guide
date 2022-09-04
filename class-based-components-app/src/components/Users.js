import React, { Component } from 'react';
// import { useState } from 'react';
import User from './User';

import classes from './Users.module.css';

export default class Users extends Component {
  constructor() {
    // @ts-ignore
    super();

    this.state = {
      showUsers: true,
    };
  }

  toggleUsersHandler() {
    this.setState(currState => {
      return { showUsers: !currState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map(user => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// export default function Users() {
//   const [showUsers, setShowUsers] = useState(true);

//   function toggleUsersHandler() {
//     setShowUsers(curState => !curState);
//   }

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map(user => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// }
