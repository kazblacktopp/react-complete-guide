import { Component } from 'react';
import classes from './User.module.css';

export default class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// function User (props) {
//   return <li className={classes.user}>{props.name}</li>;
// };

// export default User;
