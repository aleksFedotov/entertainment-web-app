import styled from 'styled-components';

import { media } from '../../styles/GlobalStyles';

export const MovieGridWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 124rem;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 4rem;
  }

  h1 {
    font-family: 'Outfit-Light';
    font-size: var(--font-size-heading-l);
    color: var(--color-white);
  }

  ${media.phone} {
    gap: 2.4rem;

    &:not(:last-child) {
      margin-bottom: 2.4rem;
    }
    h1 {
      font-size: 2rem;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 4rem;
  row-gap: 3.2rem;

  ${media.desktop_m} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }

  ${media.phone} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
