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
 *  Created on Sat Mar 22 2025
 *
 */

import Image from "next/image";
import image1 from "@/public/images/p13.webp";
import image2 from "@/public/images/p14.webp";
import image3 from "@/public/images/p17.webp";

export default function pgp() {
  return (
    <main>
      <section className="px-5 py-32 z-10">
        <div className="container text-center">
          <Image
            src={image1}
            fill
            alt="jsut"
            className="object-cover -z-10 overflow-hidden opacity-[.02] blur-sm"
          />
          <div className="mx-auto flex max-w-screen-lg flex-col gap-2">
            <h1 className="text-3xl text-primary font-extrabold font-special lg:text-5xl">
              Prefects Guild Projects
            </h1>
            <p>
              These are a series of projects that are carried out by the
              Prefects Guild of Sri Bodhiraja Dhamma School. These projects are
              aimed at improving the environment and providing students with a
              better experience
            </p>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-3 px-20">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <Image
              src={image1}
              alt="hero"
              className="max-h-96 w-full rounded-md object-cover"
            />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h1 className="text-2xl font-extrabold lg:text-2xl">
                Annual Badge Ceremony
              </h1>
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg font-plain">
                The Annual Badge Ceremony is an event that is held every year to
                award the badges of the Prefects Guild to the new batch of
                prefects. The new batch of prefects is selected based on their
                academic performance, discipline, and leadership qualities. The
                badges are awarded to the prefects by the school principal, and
                the event is followed by a cultural show and refreshments. The
                Annual Badge Ceremony is an important event in the school
                calendar, and it is eagerly awaited by the students and
                teachers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-3 px-20">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <Image
              src={image2}
              alt="hero"
              className="max-h-96 w-full rounded-md object-cover"
            />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h1 className="text-2xl font-extrabold lg:text-2xl">
                Teachers Day Celebration
              </h1>
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg font-plain">
                Teachers' Day is a special day for the appreciation of teachers,
                celebrated in our Dhamma School. The day is dedicated to
                teachers, who play a crucial role in shaping the future of
                students. The Prefects Guild of Sri Bodhiraja Dhamma School
                organizes a special event on Teachers' Day to honor the teachers
                of the school. The event includes speeches, cultural
                performances, and the presentation of gifts to the teachers. The
                Teachers' Day celebration is a way for the students to express
                their gratitude and appreciation for the hard work and
                dedication of their teachers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-3 px-20">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <Image
              src={image3}
              alt="hero"
              className="max-h-96 w-full rounded-md object-cover"
            />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h1 className="text-2xl font-extrabold lg:text-2xl">
                Annual Esala Perahara
              </h1>
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg font-plain">
                Every year, the Esala Maha Perahera, a grand religious and
                cultural festival organized by the Bellanwila Raja Maha
                Viharaya, brings together devotees and well-wishers in a
                profound expression of faith and tradition. The prefects of Sri
                Bodhiraja Dhamma School along with students play a vital role in
                the successful execution of this sacred event, offering their
                dedicated support and active participation in numerous
                preparations and ceremonial proceedings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
