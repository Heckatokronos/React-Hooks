import React, { useState, useEffect, useReducer, useContext, useRef } from 'react'

import emailReducer from './reducers/emailReducer'
import passwordReducer from './reducers/passwordReducer'

import AuthContext from '../../entities/Auth/auth-context';
import Button from '../../shared/UI/Button/Button'
import Card from '../../shared/UI/Card/Card';
import classes from './Login.module.css'
import Input from '../../shared/UI/Input/Input';

const Login = (props) => {

  const authCtx = useContext(AuthContext)

  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  const [formIsValid, setFormIsValid] = useState(false)

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  })

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null
  })

  const { isValid: emailIsValid } = emailState
  const { isValid: passwordIsValid } = passwordState

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: 'USER_EMAIL',
      val: event.target.value
    })
  }

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: 'USER_PASSWORD',
      val: event.target.value
    })
  }

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'EMAIL_BLUR'
    })
  }

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: 'PASSWORD_BLUR'
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value)
    } else if (!emailIsValid) {
      emailInputRef.current.focus()
    } else {
      passwordInputRef.current.focus()
    }
  }

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id='email'
          ref={emailInputRef}
          label='E=mail'
          type='email'
          value={emailState.value}
          isValid={emailIsValid}
          onBlur={validateEmailHandler}
          onChange={emailChangeHandler}
        />
        <Input
          id='password'
          ref={passwordInputRef}
          label='Password'
          type='password'
          value={passwordState.value}
          isValid={passwordIsValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default Login
