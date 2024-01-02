import React, { useEffect, useState } from "react";
import styles from "./CarouselLeftNavigation.css";
import {ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";
import { useSwiper } from "swiper/react";

function CarouselLeftNavigation(){
   const swiper = useSwiper();
   const [isBeginning,setIsBeginning] =useState(swiper ?swiper.isBeginning : true);

   
  useEffect(() => {
    console.log("Swiper instance:", swiper);

    const handleSlideChange = () => {
      console.log("Slide change event triggered");
      setIsBeginning(swiper.isBeginning);
    };

    if (swiper) {
      swiper.on("slideChange", handleSlideChange);

      // Cleanup the event listener when component unmounts
      return () => {
        console.log("Cleanup");
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