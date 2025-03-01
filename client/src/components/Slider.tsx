import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

type SliderProps = {
  images: string[];
};

export default function Slider({ images }: SliderProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: false }}
      autoplay={{ delay: 5000 }}
      loop={true}
      className='w-[55rem] h-[550px] shadow-xl rounded-xl overflow-hidden'
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={`http://localhost:3000/${img}`}
            alt={`Image ${index + 1}`}
            className='w-full h-full object-cover'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

