import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../../store/store';

import Auth from '../Auth';

describe('Auth component testing', () => {
  test('Auth component rendering', () => {
    render(
      <Provider store={store}>
        <Auth />
      </Provider>
    );

    const auth = screen.getByTestId('auth');
    expect(auth).toBeInTheDocument();
  });
  test('When in login mode right header, button text and inputs renders', () => {
    render(
      <Provider store={store}>
        <Auth />
      </Provider>
    );
    const heading = screen.getByRole('heading', { level: 1 });
    const button = screen.getByRole('button');
    const meassage = screen.getByText(/Don’t have an account/i);
    const emailInput = screen.getByLabelText('email');
    const passwordInput = screen.getByLabelText('password');

    expect(heading).toHaveTextContent(/login/i);
    expect(button).toHaveTextContent(/Login to your account/i);
    expect(meassage).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('When in singup mode right header, button text and inputs renders', () => {
    render(
      <Provider store={store}>
        <Auth />
      </Provider>
    );
    const loginToggler = screen.getByLabelText(/login-toggle/i);
    fireEvent.click(loginToggler);

    const heading = screen.getByRole('heading', { level: 1 });
    const button = screen.getByRole('button');
    const meassage = screen.getByText(/Already have an account?/i);
    const emailInput = screen.getByLabelText('email');
    const passwordInput = screen.getByLabelText('password');
    const repeatedPasswordInput = screen.getByLabelText('password_repeate');

    expect(heading).toHaveTextContent(/Sign Up/i);
    expect(button).toHaveTextContent(/Create an account/i);
    expect(meassage).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(repeatedPasswordInput).toBeInTheDocument();
  });

  test('Error messages desplaying', () => {
    render(
      <Provider store={store}>
        <Auth />
      </Provider>
    );
    const submitBtn = screen.getByRole('button');
    fireEvent.click(submitBtn);

    const emailErrorMessage = screen.findByText('Invalid email');
    const passwordErrorMessage = screen.findByText("Can't be empty");
    const ReppeatedPasswordErrorMessage = screen.findByText(
      'The passwords do not match'
    );
  });
});
