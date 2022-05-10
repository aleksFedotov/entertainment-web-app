import React from 'react';

import { MessageWrapper } from './GlobalMessageStyles';

const msgVariants = {
  initial: { opacity: 0, x: 200 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 200, transition: { duration: 0.5 } },
};

const GlobalMessage: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <MessageWrapper
      initial="initial"
      animate="animate"
      exit="exit"
      variants={msgVariants}
    >
      {children}
    </MessageWrapper>
  );
};

export default GlobalMessage;
