import styled from 'styled-components';

import { media } from '../../styles/GlobalStyles';

export const MovieGridWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 124rem;
  width: 100%;

  h1 {
    font-family: 'Outfit-Light';
    font-size: var(--font-size-heading-l);
    color: var(--color-white);
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
`;

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
