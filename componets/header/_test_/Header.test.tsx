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

    const logo = screen.getAllByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });
});
