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

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const people = [
  {
    id: "hp-1",
    name: "Lakwan Lonidu",
    role: "Head Prefect",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
  },
  {
    id: "hp-2",
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

export default function Home() {
  return (
    <div>
      <LoadingScreen />
      <main>
        <section className="py-20">
          <div className="container flex flex-col items-center text-center">
            <h2 className="my-3 text-pretty text-2xl font-special font-bold lg:text-4xl">
              Prefects Guild 2024/25
            </h2>
            <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>
          </div>
          <div className="container mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
            {people.map((person) => (
              <div key={person.id} className="flex flex-col items-center">
                <Avatar className="mb-4 size-20 border md:mb-5 lg:size-24">
                  <AvatarImage src={person.avatar} />
                  <AvatarFallback>{person.name}</AvatarFallback>
                </Avatar>
                <p className="text-center font-medium">{person.name}</p>
                <p className="text-center text-muted-foreground">
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
