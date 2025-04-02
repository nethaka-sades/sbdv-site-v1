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
 *  Created on Sat Nov 23 2024
 *
 */

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
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

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/about_dp"); // Replace with your desired route
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <div className="flex justify-center items-center w-full h-screen font-plain">
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
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-55 z-20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/80 z-30"></div>
        <div className="absolute w-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-40 text-center">
          <p className="text-gray-400 sm:hidden">
            <span className="text-gray-300">Welcome</span> to the
            <br />
            Official <span className="text-gray-300">Web Portal</span> of
          </p>
          <p className="text-gray-400 hidden sm:block">
            <span className="text-gray-300">Welcome</span> to the Official{" "}
            <span className="text-gray-300">Web Portal</span> of
          </p>

          <div className="mt-3 text-white">
            <h1 className="font-special text-4xl font-extrabold lg:text-5xl">
              Sri Bodhiraja
              <br />
              Dhamma School
            </h1>
          </div>

          <div className="mt-5">
            <p className="text-base text-muted-foreground sm:hidden">
              Bellanvila Sri Bodhiraja Dhamma School
              <br />
              is a leading Dhamma School
              <br />
              in Sri Lanka since 1957
            </p>
            <p className="text-lg text-muted-foreground hidden sm:contents">
              Bellanvila Sri Bodhiraja Dhamma School is a leading Dhamma School
              <br />
              in Sri Lanka since 1957
            </p>
          </div>

          <div className="mt-8">
            <Button
              className="text-lg text-white rounded-2xl border-gray-500 border-[0.025px] bg-transparent shadow-md backdrop-blur-xl hover:border-none"
              size={"lg"}
              onClick={handleNavigation}
            >
              Explore
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
