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
import image1 from "@/public/images/p15.webp";
import image2 from "@/public/images/p12.webp";
import image3 from "@/public/images/p10.webp";

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
              Annual Prize Giving Ceremony
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
                The Annual Prize Giving Ceremony of Bellanwila Sri Bodhiraja
                Dhamma School is a prestigious event dedicated to recognizing
                and celebrating students’ academic and extracurricular
                achievements. This grand occasion highlights the dedication and
                hard work of students who have excelled in Dhamma education,
                inter-house competitions, and other skill-based contests. It
                serves as an inspiring moment where students are rewarded for
                their perseverance, discipline, and commitment to learning,
                motivating them to strive for even greater accomplishments in
                the future. The presence of esteemed monks, teachers, parents,
                and the school community makes this event even more special, as
                it reflects the collective efforts in nurturing well-rounded
                individuals.
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
                A key highlight of the ceremony is the House Championship
                Awards, which honor the houses that have demonstrated
                exceptional performance throughout the year. The house that
                secures the highest cumulative score across various competitions
                is awarded the Championship Trophy, while the First Runner-Up
                Award is presented to the house with the second-highest points.
                Additionally, a Special Recognition Award is granted to the
                house that has secured the most first-place victories in
                individual competitions. These awards not only promote healthy
                competition among students but also foster a sense of teamwork,
                leadership, and unity within the house system, making it a core
                aspect of student life at the Dhamma school.
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
                In addition to house awards, the Annual Prize Giving Ceremony
                also recognizes students who have excelled in their final and
                Dharmacharya examinations. Those who achieve the highest marks
                in these rigorous assessments are honored with special awards,
                including the prestigious Bellanwila Somarathana Nayaka Thero
                Memorial Award, which is presented to students who demonstrate
                outstanding academic excellence. This moment of recognition
                serves as a source of encouragement for all students,
                reinforcing the importance of diligence and dedication in their
                Dhamma education. By celebrating both academic and
                extracurricular achievements, the Annual Prize Giving Ceremony
                continues to be a cornerstone event, inspiring students to
                embrace their potential while upholding the values of Buddhist
                learning and discipline.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
