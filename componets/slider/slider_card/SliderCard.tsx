import React from 'react';

import { IMovie } from '../../../@types/types';
import useWindowWidth from '../../../hooks/useWindowWidth';

import MovieCard from '../../UI/movie_card/MovieCard';
import MovieDetails from '../../UI/movie_details/MovieDetails';

const SliderCard: React.FC<{ data: IMovie }> = ({ data }) => {
  const windowWidth = useWindowWidth();

  let imageSrc = data.thumbnail.trending.large;
  if (windowWidth! < 650) imageSrc = data.thumbnail.trending.small;

  return (
    <MovieCard
      image={imageSrc}
      movieTitle={data.title}
      width={windowWidth! > 650 ? '470' : '240'}
      entertaimentId={data._id}
    >
      <MovieDetails data={data} type="trending" />
    </MovieCard>
  );
};

export default SliderCard;
