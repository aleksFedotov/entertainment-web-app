import styled from 'styled-components';

interface IEntry {
  entry?: boolean;
}

export const Button = styled.button<IEntry>`
  width: 100%;
  height: ${(props) => (props.entry ? '3rem' : '4.8rem')};
  border-radius: 0.6rem;
  background-color: var(--color-red);
  color: var(--color-white);
  font-family: inherit;
  font-size: var(--font-size-body-m);
  cursor: pointer;
  transition: transform 0.3s ease;
  border: none;

  &:hover {
    background-color: var(--color-white);
    color: var(--color-semi-dark-blue);
  }

  &:active {
    transform: scale(0.98);
  }
`;
