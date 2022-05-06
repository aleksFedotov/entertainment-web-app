import styled from 'styled-components';

type TErorr = {
  error: boolean;
};

export const AuthWrapper = styled.div`
  max-width: 40rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 7.8rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;

  img {
    cursor: pointer;
  }
`;

export const AuthForm = styled.form`
  position: relative;
  width: 100%;
  background-color: var(--color-semi-dark-blue);
  padding: 4.2rem 3.2rem 3.5rem;
  border-radius: 2rem;

  h1 {
    font-family: 'Outfit-Light';
    font-weight: 300;
    color: var(--color-white);
    margin-bottom: 4rem;
  }

  p {
    text-align: center;
    color: var(--color-white);
    font-weight: 300;
    span {
      color: var(--color-red);
      cursor: pointer;
      margin-left: 0.8rem;
    }
  }

  button {
    margin-top: 1.7rem;
    margin-bottom: 2.4rem;
  }
`;

export const AuthInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--color-greyish-blue);
  font-family: 'Outfit-Medium';
  font-weight: 500;
  font-size: var(--font-size-body-m);
  padding-bottom: 2rem;
  color: var(--color-white);
  caret-color: var(--color-red);
  margin-bottom: 2.3rem;
  text-indent: 1.4rem;

  &::placeholder {
    color: var(--color-greyish-blue);
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid var(--color-white);
  }

  &:-webkit-autofill {
    border: none;
    -webkit-text-fill-color: var(--color-white);
    -webkit-box-shadow: 0 0 0px 1000px #10141e inset;
    box-shadow: 0 0 0px 1000px #10141e inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const AuthInputWrapper = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: 0.3rem;
  right: 1.4rem;
  color: var(--color-red) !important;
  font-size: var(--font-size-body-s);
  font-family: 'Outfit-Light';
`;

export const AuthError = styled.p<TErorr>`
  color: var(--color-red);
  visibility: ${(props) => (props.error ? 'visible' : 'hiden')};
`;
