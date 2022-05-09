import React, { useRef } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import useHttp from '../../hooks/useHttp';
import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/authSlice';

import {
  AuthWrapper,
  AuthForm,
  AuthInput,
  AuthInputWrapper,
  ErrorMessage,
  AuthError,
} from './AuthStyles';

import { Button } from '../UI/button/ButtonStyles';
import LoadingSpinner from '../UI/loading-spinner/LoadingSpinner';

const Auth: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { isLoading, error, sendRequest, clearError } = useHttp();
  const router = useRouter();

  const password = useRef({});
  password.current = watch('password', '');

  const dispatch = useDispatch();
  const isLoggingMode = useSelector(
    (state: RootState) => state.auth.isLoggingMode
  );

  const submitHandler = handleSubmit(async (data) => {
    if (isLoggingMode) {
      try {
        const response = await sendRequest({
          url: '/api/login',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        });
        const tokenExpirationDate = new Date(
          new Date().getTime() + 1000 * 60 * 60
        );
        console.log(response);

        dispatch(
          authActions.login({
            userId: response.userId,
            token: response.token,
            bookmarks: response.bookmarks,
            tokenExpirationDate,
          })
        );
        router.push('/');
      } catch (err) {}
    } else {
      try {
        const response = await sendRequest({
          url: '/api/signin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        });
        const tokenExpirationDate = new Date(
          new Date().getTime() + 1000 * 60 * 60
        );

        dispatch(
          authActions.login({
            userId: response.userId,
            token: response.token,
            bookmarks: response.bookmarks,
            tokenExpirationDate,
          })
        );
        router.push('/');
      } catch (err) {}
    }
  });

  return (
    <AuthWrapper data-testid="auth">
      <Link href={'/'} passHref>
        {/* eslint-disable-next-line */}
        <img src={'/assets/logo.svg'} alt="logo" className="logo" />
      </Link>
      <AuthError error={error}>{error}</AuthError>
      <AuthForm onSubmit={submitHandler}>
        {isLoading && <LoadingSpinner asOverlay text="Wait for it..." />}
        <h1>{isLoggingMode ? 'Login' : 'Sign Up'}</h1>
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
        {!isLoggingMode && (
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
          {isLoggingMode ? 'Login to your account' : 'Create an account'}
        </Button>
        <p>
          {isLoggingMode
            ? 'Don’t have an account?'
            : 'Already have an account?'}{' '}
          <span
            onClick={() => dispatch(authActions.toggleLogin())}
            aria-label="login-toggle"
          >
            {isLoggingMode ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </AuthForm>
    </AuthWrapper>
  );
};

export default Auth;
