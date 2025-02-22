"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Zoom, Navigation, Pagination,  } from 'swiper/modules';    
import { FcCamera } from "react-icons/fc";
import { FixedGallery } from "@/components";

export default function Gallery() {

  const imageCount = 32;
  const images = Array.from({ length: imageCount }, (_, i) => `/img/swiper/planta_${i + 1}.jpg`);

  return (
    <section id="galería" className="bg-black py-24">
      <h2 className="text-4xl text-white pb-10 font-bold flex items-center gap-2 justify-center"><FcCamera size={40} /> Galería</h2>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        autoHeight={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        grabCursor={true}
        zoom={true}
        navigation={true}
        pagination={{
          type: 'fraction',
          clickable: true,
        }}
        modules={[Autoplay, Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        {
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container">
                <img src={image} alt={`planta_${index + 1}`} fetchPriority="low" loading="lazy" />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <FixedGallery />
    </section>
  );
}
