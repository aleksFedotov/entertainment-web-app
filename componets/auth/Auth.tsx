import React, { useState } from 'react';
import Link from 'next/link';

import {
  AuthWrapper,
  AuthForm,
  AuthInput,
  AuthInputWrapper,
  ErrorMessage,
} from './AuthStyles';
import { Button } from '../UI/button/ButtonStyles';
import useInput from '../../hooks/useInput';

const isNotEmpty = (value: string) => value.trim() !== '';
const isValidEmail = (value: string) => {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
};

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    if (isLogin) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  };

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isValidEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isNotEmpty);

  const {
    value: repeatPasswordValue,
    isValid: repeatPasswordIsValid,
    hasError: repeatPasswordHasError,
    valueChangeHandler: repeatPasswordChangeHandler,
    inputBlurHandler: repeatPasswordBlurHandler,
    reset: resetRepeatPassword,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid && repeatPasswordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    const data = {
      email: emailValue,
      password: passwordValue,
    };

    console.log(data);

    resetEmail();
    resetPassword();
    resetRepeatPassword();
  };

  return (
    <AuthWrapper>
      <Link href={'/'} passHref>
        {/* eslint-disable-next-line */}
        <img src={'/assets/logo.svg'} alt="logo" className="logo" />
      </Link>
      <AuthForm onSubmit={submitHandler}>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <AuthInputWrapper>
          <AuthInput
            placeholder="Email address"
            type="text"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && <ErrorMessage>{'Invalid email'}</ErrorMessage>}
        </AuthInputWrapper>
        <AuthInputWrapper>
          <AuthInput
            placeholder="Password"
            type="password"
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordHasError && <ErrorMessage>{"Can't be empty"}</ErrorMessage>}
        </AuthInputWrapper>
        {!isLogin && (
          <AuthInputWrapper>
            <AuthInput
              placeholder="Repeat password"
              type="password"
              value={repeatPasswordValue}
              onChange={repeatPasswordChangeHandler}
              onBlur={repeatPasswordBlurHandler}
            />
            {(repeatPasswordHasError ||
              repeatPasswordValue !== passwordValue) && (
              <ErrorMessage>
                {repeatPasswordValue == passwordValue
                  ? "Can't be empty"
                  : 'Passwords does not match'}
              </ErrorMessage>
            )}
          </AuthInputWrapper>
        )}
        <Button>
          {isLogin ? 'Login to your account' : 'Create an account'}
        </Button>
        <p>
          {isLogin ? 'Don’t have an account?' : 'Already have an account?'}{' '}
          <span onClick={toggleAuth}>{isLogin ? 'Sign Up' : 'Login'}</span>
        </p>
      </AuthForm>
    </AuthWrapper>
  );
};

export default Auth;
