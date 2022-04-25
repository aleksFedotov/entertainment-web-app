import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IMovie } from '../../../@types/types';
import 'swiper/css';
import { FreeMode } from 'swiper';

import SliderCard from './slider_card/SliderCard';

const Slider: React.FC<{ data: IMovie[] }> = ({ data }) => {
  return (
    <section>
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
    </section>
  );
};

export default Slider;
