/*
 *  
 *   Copyright 2024 Nethaka De Saram
 *  
 *  Licensed under the Apache License, Version 2.0 (the 'License');
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  
 *      http://www.apache.org/licenses/LICENSE-2.0
 *  
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an 'AS IS' BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *  
 *  
 *  
 *  
 *  Created on Fri Nov 29 2024
 *  
 */


'use client'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import hero_1_img from "@/public/hero-images/1.webp";
import hero_2_img from "@/public/hero-images/2.webp";
import hero_3_img from "@/public/hero-images/3.webp";
import hero_4_img from "@/public/hero-images/4.webp";

export default function ImageCarousel() {

  return (
    <Swiper
      modules={[Navigation, EffectFade, Autoplay]}
      navigation
      effect="fade"
      loop
      autoplay={{ delay: 10000 }}
      className="h-full w-screen"
    >
        <SwiperSlide key={1}>
          <Image
            src={hero_1_img}
            alt={'1'}
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide key={2}>
          <Image
            src={hero_2_img}
            alt={'2'}
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide key={3}>
          <Image
            src={hero_3_img}
            alt={'3'}
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide key={4}>
          <Image
            src={hero_4_img}
            alt={'4'}
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
    </Swiper>
  );
}