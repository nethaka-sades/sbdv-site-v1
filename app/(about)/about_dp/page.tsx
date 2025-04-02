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
import aboutCarosel from "@/components/PrinciplesStrip";
import PrinciplesStrip from "@/components/PrinciplesStrip";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import image1 from "@/public/images/p6.webp";
import image2 from "@/public/images/p8.webp";
import image3 from "@/public/images/p1.webp";
import image4 from "@/public/images/p9.webp";
import teachers_grp_pic from "@/public/images/teacher_grp_pic.webp";
import s_pic from "@/public/images/sangarathana_thero.png";
import Link from "next/link";

export default function Aboutdp() {
  return (
    <div>
      <main className="">
        <Image
          src={image2}
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
                <p className="mb-2 max-w-2xl text-muted-foreground lg:text-lg font-plain">
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
            <div className="pt-5 flex flex-row items-center justify-center space-x-20 lg:space-x-48 lg:pt-10 font-plain">
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  more than
                </p>
                <p className="pt-2 text-7xl font-semibold lg:pt-1">2000</p>
                <p className="text-2xl text-muted-foreground">students</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  with around
                </p>
                <p className="pt-2 text-7xl font-semibold lg:pt-1">100</p>
                <p className="text-2xl text-muted-foreground">teachers</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pt-10 pv-6">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <p className="mb-16 max-w-4xl px-8 font-medium font-special lg:text-3xl">
                &ldquo;The teachings imparted at the Dhamma School guide
                students to practice compassion, generosity, and ethical
                conduct, nurturing a generation that upholds Buddhist principles
                in their daily lives.&rdquo;
              </p>
            </div>
          </div>
        </section>

        <section className="px-10 relative overflow-hidden container">
          <div className="max-w-7xl text-center pt-12 pb-12 lg:pt-8 lg:pb-8 mx-auto font-plain">
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-zinc-950/100 -z-20"></div>
            <Image
              src={image3}
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
            <p className="mt-5 text-sm md:text-lg text-muted-foreground leading-4 md:leading-snug">
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
            <p className="mt-5 text-sm md:text-lg text-muted-foreground leading-4 md:leading-snug">
              Currently, the school thrives under the leadership of the Most
              Venerable Bellanwila Sangharathana Thera, a renowned scholar and
              spiritual leader. His efforts have continued the legacy of his
              predecessors while ensuring that the institution remains relevant
              in modern times.
            </p>
            <p className="mt-5 text-sm md:text-lg text-muted-foreground leading-4 md:leading-snug">
              Over the decades, Sri Bodhiraja Dhamma School has grown into a
              respected educational institution, deeply rooted in the Buddhist
              tradition while adapting to the evolving needs of society. The
              school's humble beginnings, with just 50 students, have blossomed
              into a thriving center of learning, fostering spiritual growth and
              moral values among its students.
            </p>
            <p className="mt-5 text-sm md:text-lg text-muted-foreground leading-4 md:leading-snug">
              This enduring legacy of Sri Bodhiraja Dhamma School reflects its
              commitment to promoting Buddhist education, preserving the noble
              teachings of the Dhamma, and nurturing a new generation of
              individuals dedicated to upholding Buddhist values.
            </p>
          </div>
        </section>

        <section className="px-5 py-10">
          <div className="container">
            <div className="grid items-center lg:grid-cols-2 border-gray-700 border  bg-black bg-opacity-10 p-8 rounded-3xl shadow-md">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <h1 className="pb-5 text-pretty text-xl font-bold lg:text-xl font-special">
                  Message from the Principal Thero
                </h1>
                <p className="mb-2 max-w-2xl text-muted-foreground lg:text-lg font-plain">
                  It can be humbly stated that Sri Bodhiraja Dharma Vidyalaya,
                  which began in 1957 with limited facilities and a small group
                  of children, has today grown into one of the leading Dharma
                  Vidyalayas in Sri Lanka. With a broad vision, it continues to
                  provide the enlightenment of the Dhamma to thousands of
                  children. The credit for this achievement belongs to all the
                  past principal theros and Dhamma teachers who have dedicated
                  themselves to the progress of our Dharma Vidyalaya over the
                  years. In today's world, running a Dharma Vidyalaya has become
                  an increasingly challenging task. The intense demands of
                  school education and the early focus on achieving material
                  success have led to a diminished emphasis on Buddhism—a
                  subject that nurtures human civilization. However, at a time
                  when moral values in society are rapidly eroding, the guidance
                  and spiritual foundation provided by the Dharma Vidyalaya have
                  played a crucial role in preserving these timeless virtues. In
                  response to these challenges, our Dharma Vidyalaya is more
                  than just another school that imparts textbook knowledge.
                  Instead, we strive to provide children with a deeper
                  understanding of Buddhist customs, rituals, religious
                  practices, and mindfulness through meditation. Our goal is not
                  only to educate but also to shape well-rounded individuals who
                  uphold the values of Buddhism in their daily lives. I would
                  also like to express my deep gratitude to my teacher, the
                  Chief Incumbent of Bellanwila Rajamaha Viharaya, Venerable
                  Bellanwila Dhammarathana Thero, whose unwavering guidance and
                  encouragement have been instrumental in making these efforts a
                  success. 
                  <br />
                  <br />
                  Ven. Bellanwila Sangharathana Thero Principal Thero,<br />
                  Sri Bodhiraja Dharma Vidyalaya (Bachelor of Arts – Honours)
                </p>
              </div>
              <Image
                src={s_pic}
                alt="hero"
                className="w-full rounded-md object-cover"
              />
            </div>
          </div>
        </section>

        <section className="pb-3 px-20">
          <div className="container">
            <div className="grid items-center gap-5 lg:grid-cols-2">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <h1 className="pb-5 text-pretty text-4xl font-bold lg:text-6xl font-special">
                  Teaching Panel
                </h1>
                <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg font-plain">
                  Dhamma school teachers play a vital role in shaping the moral
                  and spiritual foundation of young minds. They serve as guides,
                  imparting the teachings of the Buddha, including principles
                  such as compassion, mindfulness, and right conduct.
                </p>
                <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                  <Link href="/teaching_panel" prefetch>
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
              <Image
                src={teachers_grp_pic}
                alt="hero"
                className="max-h-96 w-full rounded-md object-cover"
              />
            </div>
          </div>
        </section>

        <section className="pt-10 pb-3 px-20">
          <div className="container">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="hidden lg:block">
                <Image
                  src={image4}
                  alt="hero"
                  className="max-h-96 w-full rounded-md object-cover"
                />
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <h1 className="pb-5 text-pretty text-4xl font-bold lg:text-6xl font-special">
                  Extra-Curricular Activities
                </h1>
                <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg font-plain">
                  Sri Bodhiraja Dhamma School nurtures students’ spiritual and
                  personal growth through a variety of enriching
                  extra-curricular activities. From engaging house competitions
                  inspired by Buddhist virtues to creative performances and
                  meditation programs, these activities create a vibrant
                  learning atmosphere
                </p>
                <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                  <Link href="/extra" prefetch>
                    <Button
                      variant={"outline"}
                      className="border-orange-600 w-full sm:w-auto hover:bg-orange-600 rounded"
                    >
                      Discover
                      <ArrowRight className="size-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="block lg:hidden">
                <Image
                  src={image4}
                  alt="hero"
                  className="max-h-96 w-full rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-10 relative overflow-hidden container">
          <div className="max-w-7xl text-center pt-12 lg:pt-8 pb-3 mx-auto font-plain">
            <div className="absolute inset-0 bg-zinc-950 bg-opacity-75 -z-20"></div>
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-zinc-950/100 -z-30"></div>
            <Image
              src={image1}
              alt="bg-img-1"
              fill
              className="object-cover overflow-hidden blur-sm -z-40 opacity-10"
            />
            <p className="mt-5 text-sm md:text-xl text-muted-foreground leading-4 md:leading-snug">
              Sri Bodhiraja Dhamma School shares a deep and enduring connection
              with the historic Bellanwila Temple, serving as both its spiritual
              foundation and cultural hub. The Dhamma school actively
              participates in and supports the temple’s annual and religious
              functions, creating a harmonious blend of education, devotion, and
              community service. Key events like Vesak Day and Poson Poya Day
              are celebrated with great reverence, incorporating Dhamma
              discussions, processions, sil observances, and devotional
              chanting. Students also play an integral role during the Esala
              Perahera, where their participation in flag-bearing, chanting, and
              assisting with preparations fosters discipline, devotion, and
              community spirit.
            </p>
            <p className="mt-5 text-sm md:text-xl text-muted-foreground leading-4 md:leading-snug">
              The temple’s annual Kathina ceremony offers students the
              opportunity to practice generosity and gratitude by engaging in
              almsgiving and robe offerings to the Sangha. Additionally, Poya
              Days, sil observances, and almsgiving are marked by cultural
              performances, competitions, and charity projects, bringing the
              temple and school community closer together. Through these shared
              traditions and events, students not only deepen their
              understanding of Buddhist teachings but also gain a strong sense
              of belonging and spiritual connection with Bellanwila Temple,
              enriching their moral and cultural growth.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
