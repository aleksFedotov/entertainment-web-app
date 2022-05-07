import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { HeaderWrapper, Navigation, Avatar } from './HeaderStyles';
import Entry from './entry/Entry';

import HomeIcon from '../../public/assets/icon-nav-home.svg';
import MovieIcon from '../../public/assets/icon-nav-movies.svg';
import SeriesIcon from '../../public/assets/icon-nav-tv-series.svg';
import BookMarkIcon from '../../public/assets/icon-nav-bookmark.svg';

const Header: React.FC = () => {
  const [isEntryOpened, setIsEntryOpened] = useState<boolean>(false);
  const token = useSelector((state: RootState) => state.auth.token);
  const router = useRouter();

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
          <Link href={'/bookmarked'} passHref>
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
