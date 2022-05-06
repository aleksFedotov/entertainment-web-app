import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { authActions } from '../../../store/authSlice';
import { useRouter } from 'next/router';

import { EntryWrapper } from './EntryStyles';
import { Button } from '../../UI/button/ButtonStyles';

const Entry: React.FC<{ closeEntryHandler: () => void }> = ({
  closeEntryHandler,
}) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const router = useRouter();

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const label = e.currentTarget.attributes[0].nodeValue;
    if (label === 'login') {
      dispatch(authActions.setAuthMode('login'));
      router.push('/auth');
    } else if (label === 'sign_in') {
      dispatch(authActions.setAuthMode('sign_in'));
      router.push('/auth');
    } else {
      dispatch(authActions.logout());
    }

    closeEntryHandler();
  };

  return (
    <EntryWrapper>
      {!isLoggedIn ? (
        <>
          <Button onClick={clickHandler} aria-label="login">
            Login
          </Button>
          <Button aria-label="sign_in" onClick={clickHandler}>
            Sign Up
          </Button>
        </>
      ) : (
        <Button aria-label="logout" onClick={clickHandler}>
          Logout
        </Button>
      )}
    </EntryWrapper>
  );
};

export default Entry;
