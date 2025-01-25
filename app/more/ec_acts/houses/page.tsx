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

import Image from "next/image";
import image1 from "@/public/images/p11.webp";
import image2 from "@/public/images/p12.webp";
import image3 from "@/public/images/p10.webp";

export default function houses() {
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
              The House System
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
                Marking a significant milestone in Dhamma education, the house
                system introduced by Bellanwila Sri Bodhiraja Dhamma School has
                evolved into a comprehensive framework for nurturing the
                spiritual, intellectual, and personal development of students.
                The three houses—Pragna (Wisdom), Weerya (Effort), and Shraddha
                (Faith)—symbolize core Buddhist values and serve as a foundation
                for the school’s dynamic inter-house competitions and active
                participation in temple-organized events such as the grand Esala
                Perahera. Through these houses, students are encouraged to
                cultivate essential qualities such as leadership, teamwork,
                discipline, and dedication, which are vital for their holistic
                growth.
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
                The annual inter-house competitions provide a platform for
                students to explore their potential and develop hidden talents.
                Activities such as Dhamma knowledge contests, essay writing,
                Buddhist art, poetry recitation, public speaking, storytelling,
                and devotional singing are organized for students across all
                grades, from the pre-primary to the Dharmacharya level. Younger
                students gain practical knowledge of the Dhamma, while older
                students refine their skills and are prepared to compete in
                district and national-level contests, including the prestigious
                Shasanarakshaka Mandalaya and All-Island competitions. These
                opportunities help them achieve remarkable successes, bringing
                honor to the school and fostering a strong sense of achievement.
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
                The house system also facilitates students' active involvement
                in significant cultural and religious events such as the Esala
                Perahera, which serves as a vibrant and immersive learning
                experience. By participating in temple preparations, carrying
                flags, and engaging in devotional activities, students deepen
                their connection to Buddhist traditions while strengthening
                their bond with the temple and the community. Over the years,
                the house system has become an integral part of the school’s
                identity, fostering a sense of belonging and pride among
                students. It creates a nurturing environment where they can
                enhance their Dhamma knowledge, develop life skills, and prepare
                themselves to be future leaders with a deep understanding of
                Buddhist values and principles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
