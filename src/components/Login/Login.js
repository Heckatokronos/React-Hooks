import React, { useState, useEffect, useReducer } from 'react'

import emailReducer from './reducers/emailReducer'
import passwordReducer from './reducers/passwordReducer'

import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import classes from './Login.module.css'

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false)

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  })

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null
  })

  useEffect(() => {
    console.log('Yep')

    return () => {
      console.log('Cleanup')
    }
  }, [])

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Yep')
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     )
  //   }, 1000)

  //   return () => {
  //     console.log('Cleanup')
  //     clearTimeout(identifier)
  //   }
  // }, [enteredEmail, enteredPassword])

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: 'USER_EMAIL',
      val: event.target.value
    })

    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    )
  }

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: 'USER_PASSWORD',
      val: event.target.value
    })

    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    )
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
    props.onLogin(emailState.value, passwordState.value)
  }

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default Login