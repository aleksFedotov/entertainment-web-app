import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 4.8rem;
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
