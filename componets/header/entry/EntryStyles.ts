import styled from 'styled-components';
import { media } from '../../../styles/GlobalStyles';

export const EntryWrapper = styled.div`
  position: absolute;
  width: 20rem;

  background-color: var(--color-semi-dark-blue);
  border-radius: 0.8rem;
  color: var(--color-white);
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  right: -22rem;
  bottom: 2rem;
  z-index: 4;

  ${media.tablet} {
    right: 2rem;
    bottom: -17rem;
  }
`;
