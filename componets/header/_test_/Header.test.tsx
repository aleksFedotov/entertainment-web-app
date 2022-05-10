import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../../../test-utils/createMockRouter';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import '@testing-library/jest-dom/extend-expect';

import Header from '../Header';

const MockHeaderComponent: React.FC<{ pathname: string }> = ({ pathname }) => {
  return (
    <Provider store={store}>
      <RouterContext.Provider value={createMockRouter({ pathname: pathname })}>
        <Header />
      </RouterContext.Provider>
    </Provider>
  );
};

describe('Header componet test', () => {
  test('logo rendering', () => {
    render(<MockHeaderComponent pathname="/" />);

    const logo = screen.getByAltText(/logo/i);

    expect(logo).toBeInTheDocument();
  });

  test('avatar rendering', () => {
    render(<MockHeaderComponent pathname="/" />);

    const avatar = screen.getByAltText(/avatar/i);
    expect(avatar).toBeInTheDocument();
  });

  test('the right home link  icon is active', () => {
    render(<MockHeaderComponent pathname="/" />);

    const homeLink = screen.getByLabelText(/home_icon/i);

    expect(homeLink).toHaveClass('active');
  });

  test('the right moviea link icon is active', () => {
    render(<MockHeaderComponent pathname="/movies" />);

    const moviesLink = screen.getByLabelText(/movies_icon/i);

    expect(moviesLink).toHaveClass('active');
  });
});
