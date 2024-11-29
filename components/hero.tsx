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

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Image sources
  const images = [
    "/hero-images/3.webp",
    "/hero-images/1.webp",
    "/hero-images/2.webp",
    "/hero-images/4.webp",
  ];

  // Cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Hero */}
      <div className="font-normal">
        <div className="absolute inset-0 z-10">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentIndex === index ? "opacity-100 -z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={src}
                alt={`Background image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0} // Prioritize the first image
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-55 z-20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/80 z-30"></div>
        {/* Gradients
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
          <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" />
        </div>
         End Gradients */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-40">
          <div className="">
            <div className="text-center mx-auto">
              <p className="text-muted-foreground">
                Welcome to the Official Web Portal of
              </p>
              {/* Title */}
              <div className="mt-3">
                <h1 className="font-special text-4xl font-extrabold lg:text-5xl">
                  Sri Bodhiraja Dhamma School
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-3xl">
                <p className="text-xl text-muted-foreground">
                  Bellanvila Sri Bodhiraja Dhamma School is a leading Dhamma
                  School in <br /> Sri Lanka since 1957
                </p>
              </div>
              {/* Buttons */}
              <div className="mt-8">
                <Button className="text-lg text-white" size={"lg"}>
                  Explore
                  <ChevronRight />
                </Button>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
