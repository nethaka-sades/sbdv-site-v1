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

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import imageb from "@/public/images/p5.webp";

import hp1 from "@/public/images/hp-1.jpg";
import hp2 from "@/public/images/hp-2.jpg";

import dhp4 from "@/public/images/dhp-4.jpg";

import sample from "@/public/images/sample.jpg";

const hps = [
  {
    id: "hp-1",
    name: "Lakwan Lonidu",
    role: "Head Prefect",
    avatar: hp1.src,
  },
  {
    id: "hp-2",
    name: "Selini Dulwanya",
    role: "Head Prefect",
    avatar: hp2.src,
  },
];

const sdhp = [
  {
    id: "sdhp-1",
    name: "Sahas Karunaratna",
    role: "Senior Deputy Head Prefect",
    avatar: sample.src,
  },
  {
    id: "sdhp-2",
    name: "Denethi Kaushalya",
    role: "Senior Deputy Head Prefect",
    avatar: sample.src,
  },
];

const dhp = [
  {
    id: "dhp-1",
    name: "Nethaka De Saram",
    role: "Deputy Head Prefect",
    avatar: sample.src,
  },
  {
    id: "dhp-2",
    name: "Thisen Viruja",
    role: "Deputy Head Prefect",
    avatar: sample.src,
  },
  {
    id: "dhp-3",
    name: "Samudi Manodya",
    role: "Deputy Head Prefect",
    avatar: sample.src,
  },
  {
    id: "dhp-4",
    name: "Kavindi Nethmi",
    role: "Deputy Head Prefect",
    avatar: dhp4.src,
  },
];

export default function pg() {
  return (
    <div>
      <main>
        <section className="pt-20 px-10">
          <div className="container flex flex-col items-center text-center">
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-zinc-950/100 -z-20"></div>
            <Image
              src={imageb}
              alt="bg-img-1"
              fill
              className="object-cover overflow-hidden blur-sm -z-30 opacity-5"
            />
            <h2 className="my-3 text-pretty text-2xl font-special font-bold text-orange-600 lg:text-5xl">
              Prefects Guild<br className="block md:hidden"></br> 2024/25
            </h2>
            <p className="mb-8 max-w-7xl text-muted-foreground lg:text-xl font-plain">
              The Prefects' Guild at Sri Bodhiraja Dhamma School represents the
              pinnacle of student leadership and responsibility. As role models
              and ambassadors of the school's values, prefects uphold
              discipline, foster unity, and inspire their peers to follow the
              path of Dhamma. Chosen for their exceptional dedication,
              leadership qualities, and integrity, these student leaders work
              closely with teachers and the administration to ensure a
              harmonious and enriching environment. The Prefects' Guild is not
              just a position of honor but a platform for personal growth and a
              commitment to serving the school community.
            </p>
          </div>
        </section>

        <section className="pt-12 pb-12">
          <div className="container grid gap-y-10 md:grid-cols-1 lg:grid-cols-2">
            {hps.map((hps) => (
              <div key={hps.id} className="flex flex-col items-center">
                <Avatar className="mb-4 size-28 border md:mb-5 lg:size-24">
                  <AvatarImage src={hps.avatar} />
                  <AvatarFallback>{hps.name}</AvatarFallback>
                </Avatar>
                <p className="text-center font-medium">{hps.name}</p>
                <p className="text-center text-muted-foreground">{hps.role}</p>
              </div>
            ))}
          </div>

          <div className="container mt-16 grid gap-x-60 gap-y-10 md:grid-cols-1 lg:grid-cols-2">
            {sdhp.map((sdhp) => (
              <div key={sdhp.id} className="flex flex-col items-center">
                <Avatar className="mb-4 size-24 border md:mb-5 lg:size-24">
                  <AvatarImage src={sdhp.avatar} />
                  <AvatarFallback>{sdhp.name}</AvatarFallback>
                </Avatar>
                <p className="text-center font-medium">{sdhp.name}</p>
                <p className="text-center text-muted-foreground">{sdhp.role}</p>
              </div>
            ))}
          </div>

          <div className="container mt-16 grid gap-y-10 grid-cols-1 lg:grid-cols-4">
            {dhp.map((dhp) => (
              <div key={dhp.id} className="flex flex-col items-center">
                <Avatar className="mb-4 size-20 border md:mb-5 lg:size-24">
                  <AvatarImage src={dhp.avatar} />
                  <AvatarFallback>{dhp.name}</AvatarFallback>
                </Avatar>
                <p className="text-center font-medium">{dhp.name}</p>
                <p className="text-center text-muted-foreground">{dhp.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="py-5 flex flex-col items-center">
            <p className="text-center font-medium">Executive Prefects</p>
            <p className="text-center text-muted-foreground">Hasali Methsala</p>
            <p className="text-center text-muted-foreground">Tharushi Vihangana</p>
            <p className="text-center text-muted-foreground">Thathsari Lithumiya</p>
            <p className="text-center text-muted-foreground">Kuluni Sneha</p>
            <p className="text-center text-muted-foreground">Minasha Pirisi</p>
          </div>
        </section>

        <section className="py-5">
          <div className="container grid gap-y-5 md:grid-cols-2 lg:grid-col-2">
            <div className="flex flex-col items-center">
              <p className="text-center font-medium">Senior Prefects</p>
              <p className="text-center text-muted-foreground">
                Navam Prashastha
              </p>
              <p className="text-center text-muted-foreground">
                Sasen Nethsuka
              </p>
              <p className="text-center text-muted-foreground">
                Yenula Vindiya
              </p>
              <p className="text-center text-muted-foreground">Adeesh Yomal</p>
              <p className="text-center text-muted-foreground">
                Nadun Neranjana
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-center font-medium">Senior Prefects</p>
              <p className="text-center text-muted-foreground">
                Ginuri Sehansa
              </p>
              <p className="text-center text-muted-foreground">
                Senuthmi Dilanika
              </p>
              <p className="text-center text-muted-foreground">
                Thehara Methnadi
              </p>
              <p className="text-center text-muted-foreground">Tharushi Kavindya</p>
              <p className="text-center text-muted-foreground">
                Kithmi Tamasha
              </p>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container grid gap-y-5 md:grid-cols-2 lg:grid-col-2">
            <div className="flex flex-col items-center">
              <p className="text-center font-medium">Junior Prefects</p>
              <p className="text-center text-muted-foreground">
                Thisen Thewmika
              </p>
              <p className="text-center text-muted-foreground">
                Movindu Minsara
              </p>
              <p className="text-center text-muted-foreground">
                Yumeth Mindeepa
              </p>
              <p className="text-center text-muted-foreground">sadaru Sudassana</p>
              <p className="text-center text-muted-foreground">
                Lasiru Thivanka
              </p>
              <p className="text-center text-muted-foreground">
                Kavija Anusara
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-center font-medium">Junior Prefects</p>
              <p className="text-center text-muted-foreground">
                Posha Sanudi
              </p>
              <p className="text-center text-muted-foreground">
                Nethuki Linara
              </p>
              <p className="text-center text-muted-foreground">
                Shamudi Thejaani
              </p>
              <p className="text-center text-muted-foreground">Methuki Thedasna</p>
              <p className="text-center text-muted-foreground">
                Jenuli Senurima
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
