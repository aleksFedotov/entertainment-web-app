import React, { useRef } from 'react';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useDispatch } from 'react-redux';
import { searchActions } from '../../store';

import {
  AuthWrapper,
  AuthForm,
  AuthInput,
  AuthInputWrapper,
  ErrorMessage,
} from './AuthStyles';

import { Button } from '../UI/button/ButtonStyles';
import useInput from '../../hooks/useInput';

type FormValues = {
  email: string;
  password: string;
  repeatedPassword?: string;
};

const Auth: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = useRef({});
  password.current = watch('password', '');

  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.search.isLogin);

  const submitHandler = handleSubmit((data) => {
    console.log({ email: data.email, password: data.password });
  });

  return (
    <AuthWrapper data-testid="auth">
      <Link href={'/'} passHref>
        {/* eslint-disable-next-line */}
        <img src={'/assets/logo.svg'} alt="logo" className="logo" />
      </Link>
      <AuthForm onSubmit={submitHandler}>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <AuthInputWrapper>
          <label id="email">
            <AuthInput
              placeholder="Email address"
              type="text"
              aria-label="email"
              {...register('email', {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
          </label>
          {errors.email && <ErrorMessage>{'Invalid email'}</ErrorMessage>}
        </AuthInputWrapper>
        <AuthInputWrapper>
          <label id="password">
            <AuthInput
              placeholder="Password"
              type="password"
              {...register('password', {
                required: true,
              })}
              aria-label="password"
            />
          </label>
          {errors.password && <ErrorMessage>{"Can't be empty"}</ErrorMessage>}
        </AuthInputWrapper>
        {!isLogin && (
          <AuthInputWrapper>
            <label id="repeted-password">
              <AuthInput
                placeholder="Repeat password"
                type="password"
                {...register('password_repeate', {
                  validate: (value) => value === password.current,
                })}
                aria-label="password_repeate"
              />
            </label>
            {errors.password_repeate && (
              <ErrorMessage>{'The passwords do not match'}</ErrorMessage>
            )}
          </AuthInputWrapper>
        )}
        <Button>
          {isLogin ? 'Login to your account' : 'Create an account'}
        </Button>
        <p>
          {isLogin ? 'Don’t have an account?' : 'Already have an account?'}{' '}
          <span
            onClick={() => dispatch(searchActions.toggleLogin())}
            aria-label="login-toggle"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </AuthForm>
    </AuthWrapper>
  );
};

export default Auth;
