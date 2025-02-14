"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Zoom, Navigation, Pagination } from 'swiper/modules';
import { FcCamera } from "react-icons/fc";
import { FixedGallery } from "@/components";

export default function Gallery() {

  return (
    <section id="galería" className="bg-black py-10">
      <h2 className="text-4xl text-white pb-10 font-bold flex items-center gap-2 justify-center"><FcCamera size={40} /> Galería</h2>
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
            <img src="/img/planta_1.jpg" alt='planta_1' fetchPriority="low" loading='lazy' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/img/planta_2.jpg" alt='planta_2' fetchPriority="low" loading='lazy' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/img/planta_3.jpg" alt='planta_3' fetchPriority="low" loading='lazy' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/img/planta_4.jpg" alt='planta_4' fetchPriority="low" loading='lazy' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/img/planta_5.jpg" alt='planta_5' fetchPriority="low" loading='lazy' />
          </div>
        </SwiperSlide>
      </Swiper>
      <FixedGallery />
    </section>
  );
}
