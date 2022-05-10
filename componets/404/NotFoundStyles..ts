import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';

export const NotFoundWrapper = styled.section`
  width: 100%;
  max-height: 88rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const NotFoundContent = styled.div`
  color: var(--color-white);
  text-align: center;

  h1 {
    font-size: 4rem;
    margin-bottom: 1.6rem;
  }

  ${media.tablet} {
    margin-top: 10rem;
  }

  ${media.phone} {
    margin-top: 6rem;
    h1 {
      font-size: 3.2rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;
