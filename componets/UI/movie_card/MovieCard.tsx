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
  movieTitle: string;
  children?: React.ReactNode;
  isBooked: boolean;
}> = ({ image, width, movieTitle, children, isBooked }) => {
  return (
    <Card
      image={image}
      width={width}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="movie-card"
    >
      {children}
      <ImgageWrapper>
        <img src={image} alt={movieTitle} />
      </ImgageWrapper>
      <Ovaerlay>
        <PlayBtn aria-label="play-button">
          <img src="/assets/icon-play.svg" alt="play-icon"></img>Play
        </PlayBtn>
      </Ovaerlay>
      <BookedMark isBooked={isBooked}>
        {isBooked ? (
          <FullMarkIcon data-testid="full-mark" />
        ) : (
          <EmptydMarkIcon data-testid="empty-mark" />
        )}
      </BookedMark>
    </Card>
  );
};

export default MovieCard;
