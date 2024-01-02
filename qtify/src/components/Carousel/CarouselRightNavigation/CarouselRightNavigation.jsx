import React, { useEffect, useState } from "react";
import styles from "./CarouselRightNavigation.css";
import {ReactComponent as RightArrow }from "../../../assets/RightArrow.svg";
import { useSwiper } from "swiper/react";


function CarouselRightNavigation(){
   const swiper = useSwiper();
   const [isEnd,setIsEnd] =useState(swiper? swiper.isEnd : true);

   useEffect(() => {
    console.log("Swiper instance:", swiper);

    const handleSlideChange = () => {
      console.log("Slide change event triggered");
      setIsEnd(swiper.isEnd);
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
    <div className={styles.rightNavigation}>
        {!isEnd &&  swiper && <RightArrow onClick={()=> swiper.slideNext()} />}
    </div>
   )

}
export default CarouselRightNavigation;
