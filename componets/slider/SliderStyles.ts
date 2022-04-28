import styled from 'styled-components';

import { media } from '../../styles/GlobalStyles';

export const SliderWrapper = styled.section`
  margin-bottom: 4.8rem;
  h2 {
    color: var(--color-white);
    font-size: var(--font-size-heading-l);
    margin-bottom: 2.4rem;
  }

  ${media.tablet} {
    margin-bottom: 4rem;
  }

  ${media.phone} {
    h2 {
      font-size: 2rem;
    }
  }
`;
