import styled from 'styled-components';

import { motion } from 'framer-motion';

export const MessageWrapper = styled(motion.div)`
  position: fixed;
  max-width: 30rem;
  padding: 0.8rem 1.6rem;
  background: var(--color-red);
  border-radius: 0.8rem;

  margin-top: 1rem;
  margin-right: 1rem;
  text-align: center;
  color: var(--color-white);
  z-index: 3;
  right: 0rem;
  top: 0;
`;
