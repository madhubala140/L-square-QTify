import React, { useEffect, useState } from "react";
import styles from "./CarouselRightNavigation.css";
import {ReactComponent as RightArrow }from "../../../assets/RightArrow.svg";
import { useSwiper } from "swiper/react";

function CarouselRightNavigation(){
   const swiper = useSwiper();
   const [isEnd,setIsEnd] =useState(swiper? swiper.isEnd : true);

   useEffect(() => {
    if (swiper) {
        swiper.on("slideChange", function () {
            setIsEnd(swiper.isEnd);
        });
    }
}, [swiper]);

   return(
    <div className={styles.rightNavigation}>
        {!isEnd &&  swiper && <RightArrow onClick={()=> swiper.slideNext()} />}
    </div>
   )

}
export default CarouselRightNavigation;
