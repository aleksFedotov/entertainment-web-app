import styled from 'styled-components';

interface DetailsProps {
  type: string;
}

export const Details = styled.div<DetailsProps>`
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
  }

  h3 {
    font-size: ${(props) =>
      props.type === 'trending'
        ? 'var(--font-size-heading-m)'
        : 'var(--font-size-heading-s)'};
    font-size: var(--font-size-heading-m);
    color: var(--color-white);
    margin-top: 0.3rem;
  }
`;
