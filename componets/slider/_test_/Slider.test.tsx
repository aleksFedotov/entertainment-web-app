import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

const Data = [
  {
    _id: '1',
    title: 'Beyond Earth',
    thumbnail: {
      trending: {
        small: './assets/thumbnails/beyond-earth/trending/small.jpg',
        large: './assets/thumbnails/beyond-earth/trending/large.jpg',
      },
      regular: {
        small: './assets/thumbnails/beyond-earth/regular/small.jpg',
        medium: './assets/thumbnails/beyond-earth/regular/medium.jpg',
        large: './assets/thumbnails/beyond-earth/regular/large.jpg',
      },
    },
    year: 2019,
    category: 'Movie',
    rating: 'PG',
    isBookmarked: false,
    isTrending: true,
  },
  {
    _id: '2',
    title: 'Bottom Gear',
    thumbnail: {
      trending: {
        small: './assets/thumbnails/bottom-gear/trending/small.jpg',
        large: './assets/thumbnails/bottom-gear/trending/large.jpg',
      },
      regular: {
        small: './assets/thumbnails/bottom-gear/regular/small.jpg',
        medium: './assets/thumbnails/bottom-gear/regular/medium.jpg',
        large: './assets/thumbnails/bottom-gear/regular/large.jpg',
      },
    },
    year: 2021,
    category: 'Movie',
    rating: 'PG',
    isBookmarked: false,
    isTrending: true,
  },
  {
    _id: '3',
    title: 'Undiscovered Cities',
    thumbnail: {
      trending: {
        small: './assets/thumbnails/undiscovered-cities/trending/small.jpg',
        large: './assets/thumbnails/undiscovered-cities/trending/large.jpg',
      },
      regular: {
        small: './assets/thumbnails/undiscovered-cities/regular/small.jpg',
        medium: './assets/thumbnails/undiscovered-cities/regular/medium.jpg',
        large: './assets/thumbnails/undiscovered-cities/regular/large.jpg',
      },
    },
    year: 2019,
    category: 'TV Series',
    rating: 'E',
    isBookmarked: false,
    isTrending: true,
  },
  {
    _id: '4',
    title: '1998',
    thumbnail: {
      trending: {
        small: './assets/thumbnails/1998/trending/small.jpg',
        large: './assets/thumbnails/1998/trending/large.jpg',
      },
      regular: {
        small: './assets/thumbnails/1998/regular/small.jpg',
        medium: './assets/thumbnails/1998/regular/medium.jpg',
        large: './assets/thumbnails/1998/regular/large.jpg',
      },
    },
    year: 2021,
    category: 'Movie',
    rating: '18+',
    isBookmarked: false,
    isTrending: true,
  },
];

import Slider from '../Slider';
// class MockSwiper {
//   destroy = jest.fn();
// }

// jest.mock('swiper/react', () => ({
//   __esModule: true,
//   Swiper: jest.fn().mockImplementation(() => new MockSwiper()),
//   SwiperSlide: jest.fn().mockImplementation(() => new MockSwiper()),
//   Navigation: jest.fn(),
//   Mousewheel: jest.fn(),
//   Keyboard: jest.fn(),
//   Autoplay: jest.fn(),
//   Pagination: jest.fn(),
//   default: jest.fn().mockImplementation(() => new MockSwiper()),
// }));

describe('Slider testing', () => {
  test('Rendering right amout of cards', async () => {
    // render(<Slider data={Data} />);
    // const trendingCards = screen.getAllByTestId('trending-entertaiment');
    // expect(trendingCards).toHaveLength(4);
  });
});
