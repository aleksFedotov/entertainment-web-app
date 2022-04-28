import styled from 'styled-components';
import { motion } from 'framer-motion';

import { media } from '../../../styles/GlobalStyles';

interface DetailsProps {
  type: string;
}

export const Details = styled(motion.div)<DetailsProps>`
  position: ${(props) => (props.type === 'trending' ? 'absolute' : 'static')};
  bottom: 2.4rem;
  left: 2.4rem;
  z-index: 2;
  color: rgba(255, 255, 255, 0.75);
  font-family: 'Outfit-Light';
  width: fit-content;

  div {
    display: flex;
    align-items: center;

    p {
      font-size: ${(props) =>
        props.type === 'trending'
          ? 'var(--font-size-body-m)'
          : 'var(--font-size-body-s)'};
    }
    span {
      height: 3px;
      width: 3px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.75);
      margin: 0 8px;
    }

    svg {
      margin-right: 0.7rem;
    }

    ${media.phone} {
      p {
        font-size: ${(props) =>
          props.type === 'trending' ? '1.2rem' : '1.1rem'};
      }
    }
  }

  h3 {
    font-size: ${(props) =>
      props.type === 'trending'
        ? 'var(--font-size-heading-m)'
        : 'var(--font-size-heading-s)'};
    color: var(--color-white);
    margin-top: 0.3rem;
  }

  ${media.phone} {
    bottom: 1.6rem;
    left: 1.6rem;
    h3 {
      font-size: ${(props) =>
        props.type === 'trending' ? '1.5rem' : '1.4rem'};
    }
  }
`;
