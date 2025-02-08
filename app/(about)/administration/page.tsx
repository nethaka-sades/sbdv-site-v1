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
import bg_pic from "@/public/images/p8.webp";
import st_pic from "@/public/images/dp-admin-structure.png";

export default function admin() {
  return (
    <main>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-zinc-950/100 -z-20"></div>
      <Image
        src={bg_pic}
        alt="bg-img-1"
        fill
        className="object-cover overflow-hidden blur-sm -z-30 opacity-5"
      />
      <section className="pt-32 px-10 min-h-screen">
        <div className="container flex flex-col items-center text-center">
          <h2 className="my-5 text-orange-600 text-pretty text-2xl font-special font-bold lg:text-7xl">
            Administration
          </h2>
          <p className="mb-8 max-w-5xl text-muted-foreground font-plain text-sm lg:text-xl">
            The administration of Bellanwila Sri Bodhiraja Dhamma School plays a
            vital role in upholding the institution’s values and ensuring the
            smooth functioning of its educational and spiritual activities.
            Guided by a team of dedicated monks, experienced educators, and
            committed staff, the administration oversees academic programs,
            student development, and the organization of religious and cultural
            events. Their collective efforts help maintain the school's esteemed
            reputation while fostering an environment where students can thrive
            in their Dhamma education. With a strong focus on discipline,
            leadership, and moral guidance, the administration remains dedicated
            to shaping the future of young learners with wisdom and compassion.
          </p>
        </div>
      </section>

      <section>
      <Image
        src={st_pic}
        alt="bg-img-1"
        className="5"
      />
      </section>
    </main>
  );
}
