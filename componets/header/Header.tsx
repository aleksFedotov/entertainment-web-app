import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/authSlice';
import { searchActions } from '../../store/searchSlice';

import { HeaderWrapper, Navigation, Avatar } from './HeaderStyles';
import Entry from './entry/Entry';

import HomeIcon from '../../public/assets/icon-nav-home.svg';
import MovieIcon from '../../public/assets/icon-nav-movies.svg';
import SeriesIcon from '../../public/assets/icon-nav-tv-series.svg';
import BookMarkIcon from '../../public/assets/icon-nav-bookmark.svg';

interface IStoredData {
  userId: string;
  token: string;
  expiration: string;
  bookmarks: string[];
}

const Header: React.FC = () => {
  const [isEntryOpened, setIsEntryOpened] = useState<boolean>(false);
  const { token, userId } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  // To clear search state for all pages during pages change
  useEffect(() => {
    const resetSearch = () => {
      dispatch(searchActions.resetSearch());
    };
    router.events.on('routeChangeStart', resetSearch);
  }, [dispatch, router.events]);

  // To hydrate states after reload
  useEffect(() => {
    const storedData: IStoredData | null = JSON.parse(
      // @ts-ignore
      localStorage.getItem('userData')
    );
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      dispatch(
        authActions.login({
          userId: storedData.userId,
          token: storedData.token,
          tokenExpirationDate: new Date(storedData.expiration),
          bookmarks: storedData.bookmarks,
        })
      );
    }
  }, [dispatch]);

  const avatarClickHandler = () => {
    setIsEntryOpened((prevState) => !prevState);
  };

  return (
    <HeaderWrapper>
      <Link href={'/'} passHref>
        {/* eslint-disable-next-line */}
        <img src={'/assets/logo.svg'} alt="logo" className="logo" />
      </Link>
      <Navigation>
        <Link href={'/'} passHref>
          <a>
            <HomeIcon
              className={router.pathname === '/' ? 'active' : ''}
              aria-label="home_icon"
            />
          </a>
        </Link>
        <Link href={'/movies'} passHref>
          <a>
            <MovieIcon
              className={router.pathname === '/movies' ? 'active' : ''}
              aria-label="movies_icon"
            />
          </a>
        </Link>
        <Link href={'/series'} passHref>
          <a>
            <SeriesIcon
              className={router.pathname === '/series' ? 'active' : ''}
              aria-label="series_icon"
            />
          </a>
        </Link>

        {token && (
          <Link href={`/bookmarked/${userId}`} passHref>
            <a>
              <BookMarkIcon
                className={router.pathname === '/bookmarked' ? 'active' : ''}
                aria-label="bookmared_icon"
              />
            </a>
          </Link>
        )}
      </Navigation>
      <Avatar onClick={avatarClickHandler}>
        <img src="/assets/user.png" alt="avatar" />
      </Avatar>
      {isEntryOpened && <Entry closeEntryHandler={avatarClickHandler} />}
    </HeaderWrapper>
  );
};

export default Header;
