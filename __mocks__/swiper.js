class MockSwiper {
  array = jest.fn();
}

const Swiper = jest.fn().mockImplementation(() => new MockSwiper());
const SwiperSlide = jest.fn().mockImplementation(() => new MockSwiper());
const Navigation = jest.fn();
const Mousewheel = jest.fn();
const Keyboard = jest.fn();
const Autoplay = jest.fn();
const Pagination = jest.fn();

export default Swiper;
export {
  Swiper,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
  Pagination,
  SwiperSlide,
};
