import React, { Component } from 'react';
import classes from './User.module.css';

/**
 * Class representing a user.
 * @extends Component
 * @prop {string} name - The name of the user
 * @returns {JSX.Element} An html list element
 */
export default class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// export default function User(props) {
//   return <li className={classes.user}>{props.name} </li>;
// }
