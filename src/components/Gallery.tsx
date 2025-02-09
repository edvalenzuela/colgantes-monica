"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';

export default function Gallery() {

  return (
    <section id="galería" className="h-auto bg-black/50 py-10">
      <h2 className="text-5xl text-white pb-10 font-bold text-center">Galería</h2>
      <Swiper
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/img/planta_1.jpg" alt='planta_1' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/img/planta_2.jpg" alt='planta_2' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/img/planta_3.jpg" alt='planta_3' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/img/planta_4.jpg" alt='planta_4' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/img/planta_5.jpg" alt='planta_5' />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
