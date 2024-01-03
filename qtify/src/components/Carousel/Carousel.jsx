import { Navigation } from 'swiper';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from "./Carousel.css";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import 'swiper/css';

const Controls = ({ data })=>{
    const swiper =useSwiper();
    useEffect(()=>{
        swiper.slideTo(0);
    },[data, swiper]);
    return<></>
}
 
function Carousel({data,renderComponent}) {
    if (!data || data.length === 0) {
        // Optionally, you can render a message or a fallback UI when data is empty or undefined
        return <p></p>;
    }
  return (
    <div className={styles.wrapper}>
    <Swiper
      // install Swiper modules
      style={{padding: "0px 20px"}}
      initialSlide={0}
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={"auto"}
      allowTouchMove
      
    >
        <Controls data={data} />
        <CarouselRightNavigation />
        <CarouselLeftNavigation />
        {data.map((ele)=>(
                <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
        ))}
      
    </Swiper>
    </div>
  );
};

export default Carousel;