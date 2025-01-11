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
import Image from "next/image";
import image1 from "@/public/hero-images/1.webp";

export default function Aboutdp() {
  return (
    <div>
      <LoadingScreen />
      <main className="px-5">
        <Image
          src={image1}
          fill
          alt="jsut"
          className="object-cover -z-10 overflow-hidden opacity-5 blur-sm"
        />

        <section className="py-32 z-10">
          <div className="container text-center">
            <div className="mx-auto flex max-w-screen-lg flex-col gap-2">
              <p className="font-plain text-muted-foreground ">About</p>
              <h1 className="text-3xl text-primary font-extrabold font-special lg:text-5xl">
                Sri Bodhiraja Dharma Vidyalaya
              </h1>
              <p className="text-balance font-plain text-muted-foreground lg:text-lg">
                Sri Bodhiraja Dharma Vidyalaya, the Dhamma School at Bellanwila
                Raja Maha Viharaya, has been a vital institution for Buddhist
                education since 1957.
              </p>
            </div>
          </div>
        </section>

        <section className="pt-10">
          <div className="container">
            <div className="grid items-center gap-5 lg:grid-cols-2 bg-black bg-opacity-60 p-8 rounded-3xl shadow-md">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <p className="mb-2 max-w-xl text-muted-foreground lg:text-lg">
                  Conducted in both Sinhala and English mediums, the dhamma
                  school ensures accessibility for a diverse student body,
                  fostering a broader understanding of the Buddha's teachings.
                  It plays a crucial role in instilling moral values,
                  discipline, and mindfulness in its students, preparing them to
                  contribute positively to society. Beyond education, the dhamma
                  school holds immense social value. It serves as a hub for
                  community engagement, bringing together people from all walks
                  of life to participate in spiritual activities and cultivate
                  harmonious relationships. The teachings imparted at the dhamma
                  school guide students to practice compassion, generosity, and
                  ethical conduct, nurturing a generation that upholds Buddhist
                  principles in their daily lives.
                </p>
              </div>
              <Image
                src={image1}
                alt="hero"
                className="max-h-96 w-full rounded-md object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-2">
          <div className="container">
            <div className="grid gap-5 pt-5 md:grid-cols-2 lg:gap-0 lg:pt-10">
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  more than
                </p>
                <p className="pt-2 text-7xl font-semibold lg:pt-1">2000</p>
                <p className="text-2xl font-semibold text-muted-foreground">
                  students
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  with around
                </p>
                <p className="pt-2 text-7xl font-semibold lg:pt-1">100+</p>
                <p className="text-2xl font-semibold text-muted-foreground">
                  teachers
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <p className="mb-16 max-w-4xl px-8 font-medium lg:text-3xl">
                &ldquo;Beyond education, the dhamma school holds immense social
                value. It serves as a hub for community engagement, bringing
                together people from all walks of life to participate in
                spiritual activities and cultivate harmonious relationships. The
                teachings imparted at the dhamma school guide students to
                practice compassion, generosity, and ethical conduct, nurturing
                a generation that upholds Buddhist principles in
                their daily lives.&rdquo;
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
