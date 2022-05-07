import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import EmptydMarkIcon from '../../../public/assets/icon-bookmark-empty.svg';
import FullMarkIcon from '../../../public/assets/icon-bookmark-full.svg';
import useHttp from '../../../hooks/useHttp';
import { RootState } from '../../../store/store';

import {
  Card,
  Ovaerlay,
  PlayBtn,
  ImgageWrapper,
  BookedMark,
} from './MovieCardStyle';

const MovieCard: React.FC<{
  entertaimentId: string;
  image: string;
  width: string;
  movieTitle: string;
  children?: React.ReactNode;
  isBooked: boolean;
}> = ({ image, width, movieTitle, children, isBooked, entertaimentId }) => {
  const { sendRequest, error, isLoading } = useHttp();
  const userId = useSelector((state: RootState) => state.auth.userId);
  const bookMarkHandler = () => {
    // try {
    //   const response = sendRequest({
    //     url: 'api/bookmark',
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       userId,
    //       entertaimentId,
    //     }),
    //   });
    // } catch (error) {}
  };

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
        <p>{error}</p>
        <p>{isLoading}</p>

        <PlayBtn aria-label="play-button">
          <img src="/assets/icon-play.svg" alt="play-icon"></img>Play
        </PlayBtn>
      </Ovaerlay>
      <BookedMark isBooked={isBooked} onClick={bookMarkHandler}>
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
