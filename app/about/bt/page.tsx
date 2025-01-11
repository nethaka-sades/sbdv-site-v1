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

import LoadingScreen from "@/components/LoadingScreen";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import image1 from "@/public/hero-images/1.webp";
import image2 from "@/public/images/p1.webp";

export default function bt() {
  return (
    <div>
      <LoadingScreen />
      <main className="">
        <section className="relative overflow-hidden container">
          <Image
            src={image1}
            alt="bg-img-1"
            fill
            className="object-cover overflow-hidden -z-10 blur-sm opacity-5"
          />
          <div className="max-w-3xl text-center pt-24 lg:pt-32 mx-auto">
            <p className="pb-3 font-normal text-muted-foreground">About</p>
            <h1 className="scroll-m-30 text-4xl font-extrabold font-special tracking-tight lg:text-5xl">
              Bellanvila Raja Maha Viharaya
            </h1>
            <p className="mt-3 font-plain text-sm md:text-xl text-muted-foreground">
              Bellanwila Raja Maha Viharaya is one of Sri Lanka's most
              spiritually significant Buddhist temples, attracting thousands of
              devotees annually.
            </p>
          </div>
          <div className="mt-10 relative max-w-5xl mx-auto pb-10 lg:pb-12">
            <Image
              src={image1}
              className="rounded-xl"
              alt="Image Description"
            />
          </div>
        </section>

        <section className="relative overflow-hidden container pt-24">
          <Image
            src={image2}
            alt="bg-img-1"
            fill
            className="object-cover overflow-hidden blur-sm opacity-5"
          />
          <p className="font-plain text-sm md:text-xl text-muted-foreground max-w-3xl md:max-w-5xl text-center mx-auto">
            Bellanwila Raja Maha Viharaya, located near Colombo, Sri Lanka, is a
            renowned Buddhist temple celebrated for its sacred Bodhi tree, a
            sapling from the revered Jaya Sri Maha Bodhi in Anuradhapura.
            Steeped in history, this iconic temple attracts thousands of
            devotees seeking blessings and spiritual solace. Bellanwila is also
            famous for its vibrant Esala Perahera, a grand cultural procession
            showcasing Sri Lanka's rich traditions. As a prominent landmark, the
            temple serves as a hub for religious, cultural, and community
            activities. Visit Bellanwila Temple to experience its spiritual
            ambiance, historical significance, and architectural beauty.
          </p>

          <section className="pt-10 px-24 pb-24">
          <div className="container">
            <div className="grid items-center gap-5 lg:grid-cols-2 bg-black bg-opacity-95 p-8 rounded-3xl shadow-md">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <p className="mb-2 max-w-xl text-muted-foreground lg:text-lg">
                The Bellanwila Temple is not only a spiritual haven but also a masterpiece of Sri Lankan art and architecture. The temple premises feature intricately designed statues, murals, and carvings that depict scenes from Buddhist teachings and local folklore. Visitors are welcomed by the majestic stupa, serene Buddha statues, and the tranquil surroundings that foster mindfulness and peace. The temple’s sacred rituals and daily offerings create a deeply spiritual experience for devotees and tourists alike. Bellanwila Raja Maha Viharaya stands as a testament to Sri Lanka's enduring Buddhist traditions and its role in preserving cultural and spiritual heritage.
                </p>
              </div>
              <Image
                src={image2}
                alt="hero"
                className="max-h-96 w-full rounded-md object-cover"
              />
            </div>
          </div>
        </section>
        </section>
      </main>
    </div>
  );
}
