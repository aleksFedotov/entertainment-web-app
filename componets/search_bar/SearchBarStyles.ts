import styled from 'styled-components';

export const SearchBarWrapper = styled.form`
  margin-top: 3.2rem;
  width: 100%;
  display: flex;
  gap: 2.2rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  font-family: inherit;
  font-size: var(--font-size-heading-m);
  padding-bottom: 2rem;
  color: var(--color-white);
  caret-color: var(--color-red);

  &:focus {
    border-bottom: 1px solid var(--color-greyish-blue);
    outline: none;
  }

  &:-webkit-autofill {
    border: none;
    -webkit-text-fill-color: var(--color-white);
    -webkit-box-shadow: 0 0 0px 1000px #10141e inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
