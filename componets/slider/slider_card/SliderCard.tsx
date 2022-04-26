import React from 'react';

import { IMovie } from '../../../@types/types';

import MovieCard from '../../UI/movie_card/MovieCard';
import MovieDetails from '../../UI/movie_details/MovieDetails';

const SliderCard: React.FC<{ data: IMovie }> = ({ data }) => {
  return (
    <MovieCard
      image={data.thumbnail.trending.large}
      movieTitle={data.title}
      width="470"
      height="230"
      isBooked={data.isBookmarked}
    >
      <MovieDetails data={data} type="trending" />
    </MovieCard>
  );
};

export default SliderCard;
