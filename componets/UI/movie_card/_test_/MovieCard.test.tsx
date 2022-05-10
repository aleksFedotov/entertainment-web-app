import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../../../store/store';

import MovieCard from '../MovieCard';

const MockMovieCardComponent = () => {
  return (
    <Provider store={store}>
      <MovieCard
        image="./assets/thumbnails/beyond-earth/trending/small.jpg"
        movieTitle="Beyond Earth"
        width="470"
        entertaimentId="1"
      />
    </Provider>
  );
};

jest.mock('next/image', () => ({
  // eslint-disable-next-line
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));
describe('MovieCard component testing', () => {
  test('MovieCard is rendering', async () => {
    render(<MockMovieCardComponent />);

    const movieCard = await screen.findByLabelText('movie-card');
    expect(movieCard).toBeInTheDocument();
  });

  test('Rendering main bg image', async () => {
    render(<MockMovieCardComponent />);

    const bgImage = await screen.findByAltText(/Beyond Earth/i);
    expect(bgImage).toBeInTheDocument();
  });

  test('Rendering play button', async () => {
    render(<MockMovieCardComponent />);

    const playBtn = await screen.getByLabelText(/play-button/i);
    expect(playBtn).toBeInTheDocument();
  });
});
