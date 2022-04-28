import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IMovie } from '../../@types/types';
import 'swiper/css';
import { FreeMode } from 'swiper';
import useWindowWidth from '../../hooks/useWindowWidth';

import SliderCard from './slider_card/SliderCard';
import { SliderWrapper } from './SliderStyles';

const Slider: React.FC<{ data: IMovie[] }> = ({ data }) => {
  const windowWidth = useWindowWidth();

  return (
    <SliderWrapper>
      <h2>Trending</h2>
      <Swiper
        slidesPerView={windowWidth! > 650 ? 2.5 : 1.5}
        spaceBetween={windowWidth! > 650 ? 40 : 16}
        freeMode={true}
        modules={[FreeMode]}
      >
        {data.map((movie, index) => (
          <SwiperSlide className="swiper_slide" key={index}>
            <SliderCard data={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
};

export default Slider;
