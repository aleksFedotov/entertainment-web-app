import React from 'react';
import EmptydMarkIcon from '../../../public/assets/icon-bookmark-empty.svg';
import FullMarkIcon from '../../../public/assets/icon-bookmark-full.svg';

import {
  Card,
  Ovaerlay,
  PlayBtn,
  ImgageWrapper,
  BookedMark,
} from './MovieCardStyle';

const MovieCard: React.FC<{
  image: string;
  width: string;
  height: string;
  movieTitle: string;
  children?: React.ReactNode;
  isBooked: boolean;
}> = ({ image, width, height, movieTitle, children, isBooked }) => {
  return (
    <Card
      image={image}
      width={width}
      height={height}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
      <ImgageWrapper>
        <img src={image} alt="movieTitle" />
      </ImgageWrapper>
      <Ovaerlay>
        <PlayBtn>
          <img src="/assets/icon-play.svg" alt={movieTitle}></img>Play
        </PlayBtn>
      </Ovaerlay>
      <BookedMark isBooked={isBooked}>
        {isBooked ? <FullMarkIcon /> : <EmptydMarkIcon />}
      </BookedMark>
    </Card>
  );
};

export default MovieCard;
