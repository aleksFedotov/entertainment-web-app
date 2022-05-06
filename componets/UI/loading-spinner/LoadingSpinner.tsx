import React from 'react';

import { SpinnerWrapper, SpinnerText, Spinner } from './LoadingSpinnerStyle';

const LoadingSpinner: React.FC<{ asOverlay: boolean; text: string }> = ({
  asOverlay,
  text,
}) => {
  return (
    <SpinnerWrapper className={asOverlay ? 'overlay' : ''}>
      <Spinner />
      <SpinnerText>{text}</SpinnerText>
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;
