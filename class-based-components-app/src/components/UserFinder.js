import React, { Fragment, Component } from 'react';
// import { Fragment, useState, useEffect } from 'react';
import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

export default class UserFinder extends Component {
  constructor() {
    // @ts-ignore
    super();

    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: '',
    };
  }

  searchChangeHandler(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter(user =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

// export default function UserFinder() {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

// useEffect(() => {
//   setFilteredUsers(DUMMY_USERS.filter(user => user.name.includes(searchTerm)));
// }, [searchTerm]);

//   const searchChangeHandler = event => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// }
