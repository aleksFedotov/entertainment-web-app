import React from 'react';
import { IMovie } from '../../@types/types';

import { MovieGridWrapper, Grid, MovieWrapper } from './MoviesGridStyles';
import MovieCard from '../UI/movie_card/MovieCard';
import MovieDetails from '../UI/movie_details/MovieDetails';

const MoviesGrid: React.FC<{ data: IMovie[]; header: string }> = ({
  data,
  header,
}) => {
  return (
    <MovieGridWrapper>
      <h1>{header}</h1>
      <Grid>
        {data.map((movie, index) => (
          <MovieWrapper key={index}>
            <MovieCard
              image={movie.thumbnail.regular.large}
              movieTitle={movie.title}
              width="280"
              height="174"
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
