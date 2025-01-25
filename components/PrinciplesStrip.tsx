/*
 *  
 *   Copyright 2025 Nethaka De Saram
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
 *  Created on Sun Jan 26 2025
 *  
 */


"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const data = [
  {
    id: "p-1",
    title: "Name",
    summary:
      "year",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "p-2",
    title: "Name",
    summary:
      "year",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "p-3",
    title: "Name",
    summary:
      "year",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "p-4",
    title: "Name",
    summary:
      "year",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "p-5",
    title: "Name",
    summary:
      "year",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
];

export default function PrinciplesStrip() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className="py-24 px-10">
      <div className="container">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <h2 className="mb-3 text-center md:text-start text-5xl font-semibold md:mb-4 md:text-6xl font-special lg:mb-6">
              Past Principles
            </h2>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="">
            {data.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-[20px] md:max-w-[300px]"
              >
                <div>
                  <div className="flex aspect-[3/2] overflow-clip rounded-xl">
                    <div className="flex-1">
                      <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="aspect-square object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line-clamp-3 break-words pt-4 text-lg font-medium md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                  {item.title}
                </div>
                <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
                  {item.summary}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
