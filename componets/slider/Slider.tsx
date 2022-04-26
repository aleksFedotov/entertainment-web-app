import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IMovie } from '../../@types/types';
import 'swiper/css';
import { FreeMode } from 'swiper';

import SliderCard from './slider_card/SliderCard';

import { SliderWrapper } from './SliderStyles';

const Slider: React.FC<{ data: IMovie[] }> = ({ data }) => {
  return (
    <SliderWrapper>
      <h2>Trending</h2>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={40}
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
