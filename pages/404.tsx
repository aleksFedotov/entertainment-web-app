import React from 'react';

import {
  NotFoundWrapper,
  NotFoundContent,
} from '../componets/404/NotFoundStyles.';

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundContent>
        <h1>404</h1>
        <p>Sorry, that page can&apos;t be found</p>
      </NotFoundContent>
    </NotFoundWrapper>
  );
};

export default NotFound;
