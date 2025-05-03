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
 *  Created on Sun May 04 2025
 *
 */

import Image from "next/image";
import image1 from "@/public/images/p19.webp";
import image2 from "@/public/images/p20.webp";
import image3 from "@/public/images/p21.webp";

export default function apg() {
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
              Duty in Devotion
            </h1>
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
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg font-plain">
                On every Poya Day, a series of religious observances and
                ceremonies are held at the temple, and the students of the
                Dhamma School render invaluable support throughout the day. From
                early morning until the conclusion of the evening Buddha Pooja,
                students assist in numerous duties such as preparing offerings,
                arranging spaces for devotees, and maintaining the sacred
                atmosphere essential for the smooth functioning of the rituals.
                Their dedication and sense of purpose demonstrate how religious
                service can become an enriching and educational experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-3 px-20">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg font-plain">
                A notable feature of this involvement is that each month, the
                evening Buddha Pooja is fully organized by a specific grade or
                class of the Dhamma School. This responsibility allows students
                to develop leadership, cooperation, and mindfulness while
                carrying out spiritual duties. Through this rotation-based
                system, every student eventually gains firsthand experience in
                managing religious events and understanding the deep meaning
                behind traditional practices.
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

      <section className="pt-10 pb-3 px-20">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <Image
              src={image3}
              alt="hero"
              className="max-h-96 w-full rounded-md object-cover"
            />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg font-plain">
                Such sustained participation nurtures discipline, humility, and
                gratitude within the students. It also strengthens the
                connection between the temple and the Dhamma School community,
                reinforcing the values of respect and devotion that are central
                to Buddhist education. This monthly engagement serves as both a
                spiritual offering and a profound educational journey for every
                child involved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
