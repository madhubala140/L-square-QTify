import React, { useEffect, useState } from "react";
import styles from "./CarouselLeftNavigation.css";
import {ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";
import { useSwiper } from "swiper/react";

function CarouselLeftNavigation(){
   const swiper = useSwiper();
   const [isBeginning,setIsBeginning] =useState(swiper ?swiper.isBeginning : true);

   
  useEffect(() => {
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
    };

    if (swiper) {
      swiper.on("slideChange", handleSlideChange);

      // Cleanup the event listener when component unmounts
      return () => {
        swiper.off("slideChange", handleSlideChange);
      };
    }
  }, [swiper]);

   return(
    <div className={styles.leftNavigation}>
        {!isBeginning && swiper && <LeftArrow onClick={()=> swiper.slidePrev()} />}
    </div>
   )

}
export default CarouselLeftNavigation;