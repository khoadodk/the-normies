import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  EffectCards,
  Navigation,
  Pagination,
  Autoplay,
} from 'swiper';

import img1 from '../assets/Nfts/bighead-1.svg';
import img2 from '../assets/Nfts/bighead-2.svg';
import img3 from '../assets/Nfts/bighead-3.svg';
import img4 from '../assets/Nfts/bighead-4.svg';
import img5 from '../assets/Nfts/bighead-5.svg';
import img6 from '../assets/Nfts/bighead-6.svg';
import img7 from '../assets/Nfts/bighead-7.svg';
import img8 from '../assets/Nfts/bighead-8.svg';
import Arrow from '../assets/Arrow.svg';

const ContainerWrapper = styled.div`
  width: 25vw;
  height: 70vh;
  .swiper {
    width: 100%;
    height: 80%;
  }
  .swiper-slide {
    background-color: ${(props) => props.theme.carouselColor};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination {
    color: ${(props) => props.theme.text};
  }

  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    width: 4rem;
    &::after {
      display: none;
    }
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    left: 0;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    width: 4rem;
    &::after {
      display: none;
    }
  }
`;

const Carousel = () => {
  return (
    <ContainerWrapper>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ type: 'fraction' }}
        navigation={true}
        scrollbar={{ draggable: true }}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="" />
        </SwiperSlide>
      </Swiper>
    </ContainerWrapper>
  );
};

export default Carousel;
