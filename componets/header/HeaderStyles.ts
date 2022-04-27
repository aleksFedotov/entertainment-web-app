import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';

export const HeaderWrapper = styled.div`
  width: 9.6rem;

  height: inherit;
  max-height: 96rem;

  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.2rem;
  background-color: var(--color-semi-dark-blue);

  img.logo {
    cursor: pointer;
  }

  ${media.tablet} {
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1.6rem;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 7.5rem;

  svg {
    cursor: pointer;

    &.active {
      path {
        fill: var(--color-white);
      }
    }
  }

  svg:hover {
    path {
      fill: var(--color-red);
    }
  }
  ${media.tablet} {
    margin-top: 0;
    margin-top: 0.3rem;
    gap: 3.2rem;
  }
`;

export const Avatar = styled.div`
  width: 4rem;
  height: 4rem;
  border: 1px solid var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-top: auto;

  img {
    width: 100%;
    height: 100%;
  }

  ${media.tablet} {
    width: 3.2rem;
    height: 3.2rem;
  }
`;
