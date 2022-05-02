import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MovieCard from '../MovieCard';

describe('MovieCard component testing', () => {
  test('MovieCard is rendering', async () => {
    render(
      <MovieCard
        image="./assets/thumbnails/beyond-earth/trending/small.jpg"
        movieTitle="Beyond Earth"
        width="470"
        isBooked={true}
      />
    );

    const movieCard = await screen.findByLabelText('movie-card');
    expect(movieCard).toBeInTheDocument();
  });

  test('Rendering main bg image', async () => {
    render(
      <MovieCard
        image="./assets/thumbnails/beyond-earth/trending/small.jpg"
        movieTitle="Beyond Earth"
        width="470"
        isBooked={true}
      />
    );

    const bgImage = await screen.findByAltText(/Beyond Earth/i);
    expect(bgImage).toBeInTheDocument();
  });

  test('Rendering play button', async () => {
    render(
      <MovieCard
        image="./assets/thumbnails/beyond-earth/trending/small.jpg"
        movieTitle="Beyond Earth"
        width="470"
        isBooked={true}
      />
    );

    const playBtn = await screen.getByLabelText(/play-button/i);
    expect(playBtn).toBeInTheDocument();
  });

  test('Rendering full marke icon if it is bookmarked', async () => {
    render(
      <MovieCard
        image="./assets/thumbnails/beyond-earth/trending/small.jpg"
        movieTitle="Beyond Earth"
        width="470"
        isBooked={true}
      />
    );

    const markIcon = await screen.getByTestId(/full-mark/i);
    expect(markIcon).toBeInTheDocument();
  });

  test('Rendering empty marke icon if it is not bookmarked', async () => {
    render(
      <MovieCard
        image="./assets/thumbnails/beyond-earth/trending/small.jpg"
        movieTitle="Beyond Earth"
        width="470"
        isBooked={false}
      />
    );

    const markIcon = await screen.getByTestId(/empty-mark/i);
    expect(markIcon).toBeInTheDocument();
  });
});
