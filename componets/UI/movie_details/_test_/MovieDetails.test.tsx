import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MovieDetails from '../MovieDetails';

const DataMovie = {
  _id: '1',
  title: 'Beyond Earth',
  thumbnail: {
    trending: {
      small: './assets/thumbnails/beyond-earth/trending/small.jpg',
      large: './assets/thumbnails/beyond-earth/trending/large.jpg',
    },
    regular: {
      small: './assets/thumbnails/beyond-earth/regular/small.jpg',
      medium: './assets/thumbnails/beyond-earth/regular/medium.jpg',
      large: './assets/thumbnails/beyond-earth/regular/large.jpg',
    },
  },
  year: 2019,
  category: 'Movie',
  rating: 'PG',
  isBookmarked: false,
  isTrending: true,
};

const DataTv = {
  _id: '1',
  title: 'Beyond Earth',
  thumbnail: {
    trending: {
      small: './assets/thumbnails/beyond-earth/trending/small.jpg',
      large: './assets/thumbnails/beyond-earth/trending/large.jpg',
    },
    regular: {
      small: './assets/thumbnails/beyond-earth/regular/small.jpg',
      medium: './assets/thumbnails/beyond-earth/regular/medium.jpg',
      large: './assets/thumbnails/beyond-earth/regular/large.jpg',
    },
  },
  year: 2019,
  category: 'TV Series',
  rating: 'PG',
  isBookmarked: false,
  isTrending: true,
};

describe('MovieDetails component testing', () => {
  test('MovieDetails component rendering', async () => {
    render(<MovieDetails data={DataMovie} type="regular" />);

    const details = await screen.getByLabelText(/movie-details/i);

    expect(details).toBeInTheDocument();
  });

  test('Right year rendering', async () => {
    render(<MovieDetails data={DataMovie} type="regular" />);

    const year = await screen.getByText(/2019/i);

    expect(year).toBeInTheDocument();
  });

  test('Right rating rendering', async () => {
    render(<MovieDetails data={DataMovie} type="regular" />);

    const rating = await screen.getByText(/PG/i);

    expect(rating).toBeInTheDocument();
  });
  test('Right rating rendering', async () => {
    render(<MovieDetails data={DataMovie} type="regular" />);

    const title = await screen.getByText(/Beyond Earth/i);

    expect(title).toBeInTheDocument();
  });
  test('Right movie icon rendering', async () => {
    render(<MovieDetails data={DataMovie} type="regular" />);

    const movieIcon = await screen.getByTestId(/movie-icon/i);

    expect(movieIcon).toBeInTheDocument();
  });
  test('Right tv icon rendering', async () => {
    render(<MovieDetails data={DataTv} type="regular" />);

    const tvIcon = await screen.getByTestId(/tv-icon/i);

    expect(tvIcon).toBeInTheDocument();
  });
});
