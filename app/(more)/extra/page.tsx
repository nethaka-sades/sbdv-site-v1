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

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import image1 from "@/public/images/p6.webp";
import image3 from "@/public/images/p10.webp";
import image4 from "@/public/images/p5.webp";
import image5 from "@/public/images/p15.webp";
import image6 from "@/public/images/p16.webp";
import image7 from "@/public/images/p19.webp";
import image8 from "@/public/images/p22.webp";

export default function Extra() {
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
              Beyond Education
            </h1>
            <p className="text-balance font-plain text-muted-foreground lg:text-lg">
              At Sri Bodhiraja Dhamma School, extra-curricular activities play a
              pivotal role in fostering holistic development among students. One
              of the most notable initiatives is the organization of house
              competitions, which are designed to encourage active engagement
              with Buddhist teachings while promoting camaraderie and healthy
              competition. The houses are often named after key Buddhist virtues
              such as Shraddha (faith), Weerya (effort), and Pragna (wisdom),
              symbolizing essential qualities on the path to enlightenment.
              These competitions encompass a variety of activities, including
              Dhamma quizzes, storytelling, devotional chanting, debates, art
              exhibitions, and creative performances, all deeply rooted in
              Buddhist principles. Students not only gain a deeper understanding
              of the Dhamma but also cultivate discipline, teamwork, leadership,
              and critical thinking. Additionally, other activities such as
              meditation programs, Buddhist cultural events, and community
              service projects provide students with opportunities to embody
              spiritual values while contributing meaningfully to society. These
              activities create a vibrant and inspiring environment where
              learning transcends the classroom, making the Dhamma school
              experience truly enriching and memorable.
            </p>
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
              <h1 className="pb-5 text-pretty text-4xl font-bold lg:text-6xl font-special">
                House System
              </h1>
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg font-plain">
                At Bellanwila Sri Bodhiraja Dhamma School, the house system
                plays a vital role in nurturing students' spiritual and personal
                growth. Through houses named Pragna, Weerya, and Shraddha,
                students engage in competitions and temple events like the Esala
                Perahera, discovering talents and enhancing leadership skills.
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Link href="/extra/houses" prefetch>
                  <Button
                    variant={"outline"}
                    className="border-orange-600 w-full sm:w-auto hover:bg-orange-600 rounded"
                  >
                    Learn More
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-3 px-20">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <Image
              src={image5}
              alt="hero"
              className="max-h-96 w-full rounded-md object-cover"
            />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h1 className="pb-5 text-pretty text-4xl font-bold lg:text-6xl font-special">
                Annual Prize Giving
              </h1>
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg font-plain">
                The Annual Prize Giving ceremony at Bellanwila Sri Bodhiraja
                Dhamma School is a highly anticipated event that celebrates the
                achievements and dedication of its students. This grand occasion
                not only recognizes academic excellence and outstanding
                performance in Dhamma education but also highlights
                accomplishments in extra-curricular activities and inter-house
                competitions.
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Link href="/extra/apg" prefetch>
                  <Button
                    variant={"outline"}
                    className="border-orange-600 w-full sm:w-auto hover:bg-orange-600 rounded"
                  >
                    Learn More
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-3 px-20">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <Image
              src={image6}
              alt="hero"
              className="max-h-96 w-full rounded-md object-cover"
            />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h1 className="pb-5 text-pretty text-4xl font-bold lg:text-6xl font-special">
                Annual Esala Perahara
              </h1>
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg font-plain">
                One of the most significant avenues of student involvement is
                their dedicated participation in the annual Esala Maha Perahera
                — a revered cultural and religious celebration. Through selfless
                service and active engagement in the temple’s sacred duties,
                students are given the opportunity to deepen their understanding
                of Buddhist values while contributing to one of Sri Lanka’s most
                honored traditions.
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Link href="/extra/perahara" prefetch>
                  <Button
                    variant={"outline"}
                    className="border-orange-600 w-full sm:w-auto hover:bg-orange-600 rounded"
                  >
                    Learn More
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-3 px-20">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <Image
              src={image7}
              alt="hero"
              className="max-h-96 w-full rounded-md object-cover"
            />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h1 className="pb-5 text-pretty text-4xl font-bold lg:text-6xl font-special">
                Duty in Devotion
              </h1>
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg font-plain">
                Students of the Sri Bodhiraja Dhamma School actively take part
                in the monthly Poya Day religious observances organized by the
                Bellanwila Raja Maha Viharaya. Through these duties, they deepen
                their spiritual understanding while contributing meaningfully to
                temple traditions.
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Link href="/extra/poya" prefetch>
                  <Button
                    variant={"outline"}
                    className="border-orange-600 w-full sm:w-auto hover:bg-orange-600 rounded"
                  >
                    Learn More
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-3 px-20">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <Image
              src={image4}
              alt="hero"
              className="max-h-96 w-full rounded-md object-cover"
            />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h1 className="pb-5 text-pretty text-4xl font-bold lg:text-6xl font-special">
                Prefects Guild's Projects
              </h1>
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg font-plain">
                Projects done by the Prefects Guild of the Sri Bodhiraja Dhamma
                School in the year 2024/25
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Link href="/extra/prefects_guild_projects" prefetch>
                  <Button
                    variant={"outline"}
                    className="border-orange-600 w-full sm:w-auto hover:bg-orange-600 rounded"
                  >
                    Learn More
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-3 px-20">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <Image
              src={image8}
              alt="hero"
              className="max-h-96 w-full rounded-md object-cover"
            />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h1 className="pb-5 text-pretty text-4xl font-bold lg:text-6xl font-special">
                Our Achievements
              </h1>
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg font-plain">
                See Our Achievements with in the Dhamma School and Outside it.
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Link href="/extra/achs" prefetch>
                  <Button
                    variant={"outline"}
                    className="border-orange-600 w-full sm:w-auto hover:bg-orange-600 rounded"
                  >
                    Learn More
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
