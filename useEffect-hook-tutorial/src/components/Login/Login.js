import React, {
  // useState,
  // useEffect,
  useReducer,
  useContext,
  useRef,
} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../contexts/auth-context';

function emailReducer(state, action) {
  if (action.type === 'USER_INPUT') {
    return { value: action.value, isValid: action.value.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
}

function passwordReducer(state, action) {
  if (action.type === 'USER_INPUT') {
    return { value: action.value, isValid: action.value.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
}

const Login = () => {
  // const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const authContext = useContext(AuthContext);

  // useEffect(() => {
  //   const timeOutFn = setTimeout(() => {
  //     setFormIsValid(emailIsValid && passwordIsValid);
  //   }, 500);

  //   return () => {
  //     clearTimeout(timeOutFn);
  //   };
  // }, [emailIsValid, passwordIsValid]);

  const emailInput = useRef();
  const passwordInput = useRef();

  function emailChangeHandler(event) {
    dispatchEmail({ type: 'USER_INPUT', value: event.target.value });
  }

  function passwordChangeHandler(event) {
    dispatchPassword({ type: 'USER_INPUT', value: event.target.value });
  }

  function validateEmailHandler() {
    dispatchEmail({ type: 'INPUT_BLUR' });
  }

  function validatePasswordHandler() {
    dispatchPassword({ type: 'INPUT_BLUR' });
  }

  function submitHandler(event) {
    event.preventDefault();
    if (!emailIsValid) {
      emailInput.current.focus();
    } else if (!passwordIsValid) {
      passwordInput.current.focus();
    } else authContext.onLogin(emailState.value, passwordState.value);
  }

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInput}
          label="E-mail"
          id="email"
          type="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailIsValid}
        />
        <Input
          ref={passwordInput}
          label="Password"
          id="password"
          type="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordIsValid}
        />
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            // disable={formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
