import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { media } from '../../../styles/GlobalStyles';

interface ICardProps {
  width: string;
  height?: string;
}

type BookMarkProps = {
  isBooked: boolean;
};

export const Ovaerlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);

  z-index: 1;
  display: none;
`;

export const PlayBtn = styled.button`
  position: absolute;
  width: 11.7rem;
  height: 4.8rem;
  border-radius: 2.9rem;
  background: rgba(255, 255, 255, 0.25);
  border: none;
  color: var(--color-white);
  font-family: 'Outfit-Light';
  font-size: var(--font-size-heading-s);
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  ${media.tablet_s} {
    width: 6rem;
    height: 2.4rem;
    gap: 0.8rem;
    font-size: 1.1rem;
    img {
      width: 1.5rem;
    }
  }
`;

export const ImgageWrapper = styled.div`
  overflow: hidden;
  border-radius: 0.8rem;

  img {
    border-radius: 0.8rem;
    transition: transform 0.3s ease;
  }
`;

export const Card = styled(motion.div)<ICardProps>`
  position: relative;
  max-width: ${(props) => props.width}px;

  cursor: pointer;
  color: var(--color-white);
  overflow: hidden;

  &:hover {
    ${ImgageWrapper} {
      img {
        transform: scale(1.05);
      }
    }
    ${Ovaerlay} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const BookedMark = styled.div<BookMarkProps>`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color: rgba(16, 20, 30, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 2.4rem;
  top: 2.4rem;
  z-index: 2;
  cursor: pointer;

  &:hover {
    background-color: var(--color-white);

    ${(props) =>
      !props.isBooked
        ? css`
            svg {
              path {
                stroke: var(--color-dark-blue);
              }
            }
          `
        : css`
            svg {
              path {
                fill: var(--color-dark-blue);
              }
            }
          `}
  }

  ${media.phone} {
    right: 0.8rem;
    top: 0.8rem;
  }
`;
