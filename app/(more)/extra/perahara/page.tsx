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
import image9 from "@/public/images/p9.webp";
import image16 from "@/public/images/p16.webp";
import image17 from "@/public/images/p17.webp";

export default function apg() {
  return (
    <main>
      <section className="px-5 py-32 z-10">
        <div className="container text-center">
          <Image
            src={image9}
            fill
            alt="jsut"
            className="object-cover -z-10 overflow-hidden opacity-[.02] blur-sm"
          />
          <div className="mx-auto flex max-w-screen-lg flex-col gap-2">
            <h1 className="text-3xl text-primary font-extrabold font-special lg:text-5xl">
              Annual Esala Perahara
            </h1>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-3 px-20">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <Image
              src={image9}
              alt="hero"
              className="max-h-96 w-full rounded-md object-cover"
            />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg font-plain">
                Every year, the Esala Maha Perahera, a grand religious and
                cultural festival organized by the Bellanwila Raja Maha
                Viharaya, brings together devotees and well-wishers in a
                profound expression of faith and tradition. The students of Sri
                Bodhiraja Dhamma School play a vital role in the successful
                execution of this sacred event, offering their dedicated support
                and active participation in numerous preparations and ceremonial
                proceedings.
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
                Students contribute meaningfully to various aspects of the
                Perahera, including the Devadūta Perahera, Kumbal Perahera,
                Flower Perahera, Ransivili, and the final Randoli Perahera.
                Their involvement includes assisting with pre-procession duties
                such as the cleaning and preparation of the temple premises,
                ensuring that the sacred space is purified and ready for Dhamma
                sermons and Pirith chanting. Through these tasks, students not
                only offer service but also gain invaluable exposure to Buddhist
                rituals, traditions, and temple practices.
              </p>
            </div>
            <Image
              src={image16}
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
              src={image17}
              alt="hero"
              className="max-h-96 w-full rounded-md object-cover"
            />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg font-plain">
                Moreover, students are entrusted with the honorable
                responsibility of accompanying the venerable monks during
                processions, a practice that reinforces their understanding of
                reverence, discipline, and spiritual duty. Their annual
                participation in the Esala Maha Perahera not only strengthens
                their bond with the temple but also allows them to internalize
                the teachings of the Buddha through lived experiences. As such,
                the Dhamma School continues to uphold its commitment to
                instilling Buddhist values in students while nurturing a deep
                connection with the spiritual heritage of the Bellanwila Raja
                Maha Viharaya.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
