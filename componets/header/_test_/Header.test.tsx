import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../../../test-utils/createMockRouter';
import '@testing-library/jest-dom/extend-expect';
import Header from '../Header';

describe('Header componet test', () => {
  test('logo rendering', () => {
    render(
      <RouterContext.Provider value={createMockRouter({ pathname: '/' })}>
        <Header />
        );
      </RouterContext.Provider>
    );

    const logo = screen.getByAltText(/logo/i);

    expect(logo).toBeInTheDocument();
  });

  test('avatar rendering', () => {
    render(
      <RouterContext.Provider value={createMockRouter({ pathname: '/' })}>
        <Header />
        );
      </RouterContext.Provider>
    );

    const avatar = screen.getByAltText(/avatar/i);
    expect(avatar).toBeInTheDocument();
  });

  test('the right home link  icon is active', () => {
    render(
      <RouterContext.Provider value={createMockRouter({ pathname: '/' })}>
        <Header />
        );
      </RouterContext.Provider>
    );

    const homeLink = screen.getByLabelText(/home_icon/i);

    expect(homeLink).toHaveClass('active');
  });

  test('the right moviea link icon is active', () => {
    render(
      <RouterContext.Provider value={createMockRouter({ pathname: '/movies' })}>
        <Header />
        );
      </RouterContext.Provider>
    );

    const moviesLink = screen.getByLabelText(/movies_icon/i);

    expect(moviesLink).toHaveClass('active');
  });
});
