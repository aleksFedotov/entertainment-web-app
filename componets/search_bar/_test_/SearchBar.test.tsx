import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../../../test-utils/createMockRouter';
import { Provider } from 'react-redux';
import store from '../../../store/store';

import SearchBar from '../SearchBar';

describe('SearchBar component testing', () => {
  test('SearchBar rendering', () => {
    render(
      <Provider store={store}>
        <RouterContext.Provider value={createMockRouter({ pathname: '/' })}>
          <SearchBar />
        </RouterContext.Provider>
      </Provider>
    );

    const searchBar = screen.getByTestId('search-bar');
    expect(searchBar).toBeInTheDocument();
  });

  test("Whne on home page placeholder is 'Search for movies or TV series'", () => {
    render(
      <Provider store={store}>
        <RouterContext.Provider value={createMockRouter({ pathname: '/' })}>
          <SearchBar />
        </RouterContext.Provider>
      </Provider>
    );

    const input = screen.getByPlaceholderText(
      /Search for movies or TV series/i
    );

    expect(input).toBeInTheDocument();
  });
  test("Whne on movies page placeholder is 'Search for movies or TV series'", () => {
    render(
      <Provider store={store}>
        <RouterContext.Provider
          value={createMockRouter({ pathname: '/movies' })}
        >
          <SearchBar />
        </RouterContext.Provider>
      </Provider>
    );

    const input = screen.getByPlaceholderText(/Search for movies/i);

    expect(input).toBeInTheDocument();
  });
  test('Search icon rendering', () => {
    render(
      <Provider store={store}>
        <RouterContext.Provider
          value={createMockRouter({ pathname: '/movies' })}
        >
          <SearchBar />
        </RouterContext.Provider>
      </Provider>
    );

    const icon = screen.getByTestId(/search-icon/i);

    expect(icon).toBeInTheDocument();
  });
});
