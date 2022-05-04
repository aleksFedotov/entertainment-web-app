import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchActions } from '../../../store';
import { useRouter } from 'next/router';

import { EntryWrapper } from './EntryStyles';
import { Button } from '../../UI/button/ButtonStyles';

const Entry: React.FC<{ closeEntryHandler: () => void }> = ({
  closeEntryHandler,
}) => {
  const [isLogedin, setIsLogedin] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const label = e.currentTarget.attributes[0].nodeValue;
    if (label === 'login') {
      dispatch(searchActions.setAuthMode('login'));
      router.push('/auth');
    } else if (label === 'sign_in') {
      dispatch(searchActions.setAuthMode('sign_in'));
      router.push('/auth');
    } else {
      console.log('logout');
    }

    closeEntryHandler();
  };

  return (
    <EntryWrapper>
      {!isLogedin ? (
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
