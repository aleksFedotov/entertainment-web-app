import React from 'react';
import { IMovie } from '../../@types/types';

import { MovieGridWrapper, Grid, MovieWrapper } from './MoviesGridStyles';
import MovieCard from '../UI/movie_card/MovieCard';
import MovieDetails from '../UI/movie_details/MovieDetails';
import useWindowWidth from '../../hooks/useWindowWidth';

interface IRegularImage {
  small: string;
  medium: string;
  large: string;
}

const MoviesGrid: React.FC<{ data: IMovie[]; header: string }> = ({
  data,
  header,
}) => {
  const windowWidth = useWindowWidth();

  let imageSize = 'large';
  if (windowWidth! <= 1200) {
    imageSize = 'medium';
  } else if (windowWidth! <= 650) {
    imageSize = 'small';
  }

  let width = '280';
  if (windowWidth! <= 800) {
    width = '220';
  } else if (windowWidth! < 650) {
    width = '164';
  }

  return (
    <MovieGridWrapper>
      <h1>{header}</h1>
      <Grid>
        {data.map((movie) => (
          <MovieWrapper key={movie._id} data-testid="regular-entertaiment">
            <MovieCard
              entertaimentId={movie._id}
              image={movie.thumbnail.regular[imageSize as keyof IRegularImage]}
              movieTitle={movie.title}
              width={width}
              isBooked={movie.isBookmarked}
            />
            <MovieDetails data={movie} type="regular" />
          </MovieWrapper>
        ))}
      </Grid>
    </MovieGridWrapper>
  );
};

export default MoviesGrid;
