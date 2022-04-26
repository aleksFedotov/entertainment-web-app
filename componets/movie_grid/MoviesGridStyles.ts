import styled from 'styled-components';

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
`;

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
