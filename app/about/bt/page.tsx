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

import LoadingScreen from "@/components/LoadingScreen";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import image1 from "@/public/hero-images/1.webp";
import image2 from "@/public/images/p1.webp";
import image3 from "@/public/images/p3.webp";

export default function bt() {
  return (
    <div>
      <LoadingScreen />
      <main className="">
        <section className="relative overflow-hidden container">
          <div className="max-w-3xl text-center pt-24 lg:pt-32 mx-auto">
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-zinc-950/100 -z-20"></div>
            <Image
              src={image1}
              alt="bg-img-1"
              fill
              className="object-cover overflow-hidden blur-sm -z-30 opacity-5"
            />
            <p className="pb-3 font-normal text-muted-foreground">About</p>
            <h1 className="scroll-m-30 text-4xl font-extrabold font-special tracking-tight lg:text-5xl">
              Bellanvila Raja Maha Viharaya
            </h1>
            <p className="mt-3 font-plain text-sm md:text-xl text-muted-foreground">
              Bellanwila Raja Maha Viharaya is one of Sri Lanka's most
              spiritually significant Buddhist temples, attracting thousands of
              devotees annually.
            </p>
          </div>
          <div className="mt-10 relative max-w-5xl mx-auto pb-10 lg:pb-12">
            <Image
              src={image1}
              className="rounded-xl"
              alt="Image Description"
            />
          </div>
        </section>

        <section className="relative overflow-hidden container pt-24">
          <p className="font-plain text-sm md:text-xl text-muted-foreground max-w-3xl md:max-w-5xl text-center mx-auto">
            Bellanwila Raja Maha Viharaya, located near Colombo, Sri Lanka, is a
            renowned Buddhist temple celebrated for its sacred Bodhi tree, a
            sapling from the revered Jaya Sri Maha Bodhi in Anuradhapura.
            Steeped in history, this iconic temple attracts thousands of
            devotees seeking blessings and spiritual solace. Bellanwila is also
            famous for its vibrant Esala Perahera, a grand cultural procession
            showcasing Sri Lanka's rich traditions. As a prominent landmark, the
            temple serves as a hub for religious, cultural, and community
            activities. Visit Bellanwila Temple to experience its spiritual
            ambiance, historical significance, and architectural beauty.
          </p>

          <section className="pt-10 px-24 pb-24">
            <div className="container">
              <div className="grid items-center gap-5 lg:grid-cols-2 bg-black bg-opacity-95 p-8 rounded-3xl shadow-md">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <p className="mb-2 max-w-xl text-muted-foreground lg:text-lg">
                    The Bellanwila Temple is not only a spiritual haven but also
                    a masterpiece of Sri Lankan art and architecture. The temple
                    premises feature intricately designed statues, murals, and
                    carvings that depict scenes from Buddhist teachings and
                    local folklore. Visitors are welcomed by the majestic stupa,
                    serene Buddha statues, and the tranquil surroundings that
                    foster mindfulness and peace. The temple’s sacred rituals
                    and daily offerings create a deeply spiritual experience for
                    devotees and tourists alike. Bellanwila Raja Maha Viharaya
                    stands as a testament to Sri Lanka's enduring Buddhist
                    traditions and its role in preserving cultural and spiritual
                    heritage.
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
        </section>

        <section className="relative overflow-hidden container">
          <div className="max-w-7xl text-center pt-12 lg:pt-16  pb-12 mx-auto ">
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-zinc-950/100 -z-20"></div>
            <Image
              src={image3}
              alt="bg-img-1"
              fill
              className="object-cover overflow-hidden blur-sm -z-30 opacity-10"
            />
            <h1 className="scroll-m-30 text-4xl font-extrabold font-special tracking-tight lg:text-5xl">
              History
            </h1>
            <p className="mt-5 text-sm md:text-lg text-muted-foreground leading-3">
              There is literary evidence in ancient texts such as the Sinhala
              Bodhivamsaya which records that the Bodhi-tree in Bellanwila as
              one of the thirty-two saplings that sprang from the sacred Jaya
              Sri Maha Bodhi at Anuradhapura planted in the 3rd century BC.
              Bellanwila is also mentioned in the literary works of the 15th
              century, when Kotte, which is located close to Bellanwila, became
              the capital of the country. In the Kotte period Buddhism rose to
              great heights with the royal patronage of King Parakramabahu VI
              &#40;1412-1467&#41;, who was the last native sovereign to unify
              all of Sri Lanka under one rule before the European colonial
              invasions.
            </p>
            <p className="mt-5 text-sm md:text-lg text-muted-foreground leading-3">
              The story of the revival of Bellanwila Viharaya is closely linked
              with Attidiya, a village adjoining Bellanwila. This sacred place
              was abandoned after the Portuguese invasion of the country’s
              coastal areas. It was rediscovered by an adventurous monk known as
              Thengodagedara Hamuduruwo, who is said to be the founder of
              Galauda Viharaya. One day in 1850, when he was traveling by boat
              along the Katu-ela stream towards Pepiliyana, it is said that he
              heard the sound of drums from a nearby thicket. Being inquisitive,
              he left the boat and walked towards the sounds. As he approached,
              the drum sounds faded away and he was surprised to see a
              Bodhi-tree. Subsequently, he came to discover that this was one of
              the thirty-two saplings from the sacred Bodhi-tree at
              Anuradhapura. With the help of villagers, Thengodagedara thera
              cleared the land around the tree and built a modest shelter for
              monks. With this modest and mysterious beginning, Bellanwila began
              to attract the attention of Buddhist devotees in the
              neighbourhood.
            </p>
            <p className="mt-5 text-sm md:text-lg text-muted-foreground leading-3">
              Since Thengodagedara thera rediscovered Bellanwila, the temple has
              had a succession of chief monks such as Udugampola Sri Ratanapala
              thera, Udugampola Sri Dammakkhandha thera, Abhidhammika Weboda Sri
              Sangharatana thera, Asgiriye Devarakkhita thera and Bellanwila Sri
              Somaratana thera. It is Ven. Bellanwila Sri Somaratana thera, who
              became the chief incumbent of the temple in 1947 must be given the
              credit for raising Bellanwila Rajamaha Vihara to its present
              status. He began the task of developing the temple and he himself
              designed the structural concept of the temple complex taking the
              image house of Polonnaruwa as the model. After the demise of
              Bellanwila Sri Somaratana thera, his pupil prof. Bellanwila
              Wimalaratne Thera has continued the development work of the
              temple.
            </p>
            <p className="mt-5 text-sm md:text-lg text-muted-foreground leading-3">
              A recent addition to the temple is a set of murals, that adorn the
              inner walls of the shrine hall &#40Budu-Ge@#41. These murals which were
              painted by artist Somabandu Vidyapathy, depict in different
              strokes the life of the Buddha and Buddhism. In addition to the
              main shrine hall there are shrines dedicated to popular deities of
              Sri Lanka such as Vishnu, Katharagama, Saman, Vibheeshana, Suniam,
              Dedimunda, Natha and Pattini Matha, housing their symbolic images.
              These shrines which are situated right round the Bodhi tree, also
              depict the architecture of Polonnaruwa period.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
