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

import Image from "next/image";
import image1 from "@/public/hero-images/1.webp";
import aboutCarosel from "@/components/PrinciplesStrip";
import PrinciplesStrip from "@/components/PrinciplesStrip";

export default function Aboutdp() {
  return (
    <div>
      <main className="">
        <Image
          src={image1}
          fill
          alt="jsut"
          className="object-cover -z-10 overflow-hidden opacity-5 blur-sm"
        />

        <section className="px-5 py-32 z-10">
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

        <section className="px-5 pt-10">
          <div className="container">
            <div className="grid items-center lg:grid-cols-2 border-gray-700 border  bg-black bg-opacity-10 p-8 rounded-3xl shadow-md">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <p className="mb-2 max-w-2xl text-muted-foreground lg:text-md font-special">
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
                  principles in their daily lives. Beyond education, the dhamma
                  school holds immense social value. It serves as a hub for
                  community engagement, bringing together people from all walks
                  of life to participate in spiritual activities and cultivate
                  harmonious relationships.
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

        <section className="px-5 py-5">
          <div className="container">
            <div className="pt-5 flex flex-row items-center justify-center space-x-48 lg:pt-10">
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
                <p className="pt-2 text-7xl font-semibold lg:pt-1">100</p>
                <p className="text-2xl font-semibold text-muted-foreground">
                  teachers
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pt-10 pv-6">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <p className="mb-16 max-w-4xl px-8 font-medium lg:text-3xl">
                &ldquo;The teachings imparted at the Dhamma School guide
                students to practice compassion, generosity, and ethical
                conduct, nurturing a generation that upholds Buddhist principles
                in their daily lives.&rdquo;
              </p>
            </div>
          </div>
        </section>

        <section className="px-10 relative overflow-hidden container">
          <div className="max-w-7xl text-center pt-12 lg:pt-8  pb-12 mx-auto ">
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-zinc-950/100 -z-20"></div>
            <Image
              src={image1}
              alt="bg-img-1"
              fill
              className="object-cover overflow-hidden blur-sm -z-30 opacity-5"
            />
            <p className="mt-5 text-sm md:text-lg text-muted-foreground leading-4 md:leading-snug">
              Sri Bodhiraja Dhamma School was founded on May 20, 1957, under the
              leadership of the Most Venerable Bellanwila Somarathana Thera. The
              inauguration ceremony was marked by the official opening conducted
              by the Most Venerable Kotagama Wachissara Thera, adding a
              significant milestone to the history of Buddhist education in Sri
              Lanka. The first principal of the school was the Most Venerable
              Dr. Medagama Vajiranana Thera, a highly respected scholar monk who
              played a crucial role in shaping the institution's early years. At
              its inception, the school welcomed 50 students, marking the
              beginning of a long and fruitful journey in imparting Dhamma
              education.
            </p>
            <p className="mt-5 text-sm md:text-lg text-muted-foreground leading-4 md:leading-snu">
              Since its establishment, Sri Bodhiraja Dhamma School has been
              guided by a series of distinguished principals who have
              contributed immensely to its growth and success. Among these
              visionary leaders were the Most Venerable Dr. Bellanwila
              Dhammarathana Thera, the Most Venerable Shastrapathi
              Athapaththukande Ananda Thera, the Most Venerable Dr. Bellanwila
              Premarathana Thera, and the Most Venerable Dr. Udugampola Hemarama
              Thera. Their dedication ensured that the school maintained its
              reputation as a beacon of Buddhist education, inspiring
              generations of students to embrace the teachings of the Buddha.
            </p>
            <p className="mt-5 text-sm md:text-lg text-muted-foreground leading-4 md:leading-snu">
              Currently, the school thrives under the leadership of the Most
              Venerable Bellanwila Sangharathana Thera, a renowned scholar and
              spiritual leader. His efforts have continued the legacy of his
              predecessors while ensuring that the institution remains relevant
              in modern times.
            </p>
            <p className="mt-5 text-sm md:text-lg text-muted-foreground leading-4 md:leading-snu">
              Over the decades, Sri Bodhiraja Dhamma School has grown into a
              respected educational institution, deeply rooted in the Buddhist
              tradition while adapting to the evolving needs of society. The
              school's humble beginnings, with just 50 students, have blossomed
              into a thriving center of learning, fostering spiritual growth and
              moral values among its students.
            </p>
            <p className="mt-5 text-sm md:text-lg text-muted-foreground leading-4 md:leading-snu">
              This enduring legacy of Sri Bodhiraja Dhamma School reflects its
              commitment to promoting Buddhist education, preserving the noble
              teachings of the Dhamma, and nurturing a new generation of
              individuals dedicated to upholding Buddhist values.
            </p>
          </div>
        </section>

        <section className="px-5 pt-10">
          <div className="container">
            <div className="grid items-center lg:grid-cols-2 border-gray-700 border  bg-black bg-opacity-10 p-8 rounded-3xl shadow-md">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <p className="mb-2 max-w-2xl text-muted-foreground lg:text-md font-special">
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
                  principles in their daily lives. Beyond education, the dhamma
                  school holds immense social value. It serves as a hub for
                  community engagement, bringing together people from all walks
                  of life to participate in spiritual activities and cultivate
                  harmonious relationships.
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

        <PrinciplesStrip />
      </main>
    </div>
  );
}
