import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import EmptydMarkIcon from '../../../public/assets/icon-bookmark-empty.svg';
import FullMarkIcon from '../../../public/assets/icon-bookmark-full.svg';
import useHttp from '../../../hooks/useHttp';
import { RootState } from '../../../store/store';
import { authActions } from '../../../store/authSlice';
import { messageActions } from '../../../store/messageSlice';
import Image from 'next/image';

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
  isTrending?: boolean;
}> = ({ image, width, movieTitle, children, entertaimentId, isTrending }) => {
  const { sendRequest } = useHttp();
  const { userId, bookmarks, token } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  const isBooked = bookmarks.includes(entertaimentId);

  const bookMarkHandler = () => {
    if (!userId) {
      dispatch(messageActions.showLoginMessage());
      return;
    }

    try {
      sendRequest({
        url: '/api/bookmark',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId,
          entertaimentId,
          operation: isBooked ? 'pull' : 'push',
        }),
      });

      dispatch(
        authActions.updateBookmarks({
          eId: entertaimentId,
          operation: isBooked ? 'remove' : 'add',
        })
      );
    } catch (error) {}
  };

  return (
    <Card
      width={width}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="movie-card"
    >
      {children}
      <ImgageWrapper>
        <Image
          src={image}
          alt={movieTitle}
          width={isTrending ? 470 : 280}
          height={isTrending ? 230 : 174}
          priority={true}
        />
      </ImgageWrapper>
      <Ovaerlay>
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
