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

const people = [
  {
    id: "person-1",
    name: "Lakwan Lonidu",
    role: "Head Prefect",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
  },
  {
    id: "person-2",
    name: "Selini Dulwanya",
    role: "Head Prefect",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
  },
  {
    id: "person-3",
    name: "Name",
    role: "Role",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-3.webp",
  },
  {
    id: "person-4",
    name: "Name",
    role: "Role",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-4.webp",
  },
  {
    id: "person-5",
    name: "Name",
    role: "Role",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-5.webp",
  },
  {
    id: "person-6",
    name: "Name",
    role: "Role",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-6.webp",
  },
  {
    id: "person-7",
    name: "Name",
    role: "Role",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-7.webp",
  },
  {
    id: "person-8",
    name: "Name",
    role: "Role",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-8.webp",
  },
];

export default function teachers() {
  return (
    <div>
      <main>
        <section className="py-20 px-10">
          <div className="container flex flex-col items-center text-center">
            <h2 className="my-3 text-pretty text-2xl font-special font-bold lg:text-4xl">
              Teaching Panel<br className="block md:hidden"></br> 2024/25
            </h2>
            <p className="mb-8 max-w-5xl text-muted-foreground font-plain text-sm lg:text-xl">
              At Sri Bodhiraja Dhamma School, our dedicated team of teachers
              plays a pivotal role in nurturing the spiritual and moral growth
              of our students. With deep knowledge of Buddhist teachings and a
              commitment to fostering ethical values, our educators guide
              students on their journey of self-discovery and mindfulness. Each
              teacher brings a unique perspective, blending traditional wisdom
              with modern teaching methods to create an engaging and supportive
              learning environment. Together, they inspire the next generation
              to embrace the principles of Dhamma and contribute positively to
              society. These teachers not only educate students on Buddhist
              doctrines but also inspire them to apply these values in their
              daily lives. Dhamma school teachers often go beyond academics,
              fostering a sense of community and encouraging students to grow
              into compassionate and responsible individuals. Their contribution
              is invaluable in preserving and passing down the timeless wisdom
              of Buddhism to future generations.
            </p>
          </div>
          <div key="1" className="flex flex-col items-center pt-10">
            <Avatar className="mb-4 size-28 border md:mb-5 lg:size-32">
              <AvatarImage
                src={"https://www.shadcnblocks.com/images/block/avatar-8.webp"}
              />
              <AvatarFallback>Sangarathana Thero</AvatarFallback>
            </Avatar>
            <p className="text-center font-medium">Sangarathana Thero</p>
            <p className="text-center text-muted-foreground">Principle</p>
          </div>

          <div className="container mt-16 grid gap-x-8 gap-y-16 grid-cols-2 lg:grid-cols-6">
            {people.map((person) => (
              <div key={person.id} className="flex flex-col items-center">
                <Avatar className="mb-4 size-16 border md:mb-5 lg:size-24">
                  <AvatarImage src={person.avatar} />
                  <AvatarFallback>{person.name}</AvatarFallback>
                </Avatar>
                <p className="text-sm text-center font-medium">{person.name}</p>
                <p className="text-sm text-center text-muted-foreground">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
