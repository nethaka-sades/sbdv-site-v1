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

          <div className="mt-12 md:mt-20 w-full">
            <ul className="divide-y divide-border border-y border-border">
              <li className="group">
                <div className="flex items-center py-6">
                  <div>
                    <div className="font-medium md:text-4xl font-special">
                      Senior Section
                    </div>
                    <div className="flex flex-row space-x-5 max-w-full">
                      <div className="text-md text-muted-foreground md:mt-1 md:text-md font-plain">Prof. Wasantha Mendis</div>
                      <div className="text-md text-muted-foreground md:mt-1 md:text-md font-plain">Prof. Wasantha Mendis</div>
                      <div className="text-md text-muted-foreground md:mt-1 md:text-md font-plain">Prof. Wasantha Mendis</div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-center py-6">
                  <div>
                    <div className="font-medium md:text-4xl font-special">
                      Junior Section
                    </div>
                    <div className="flex flex-row space-x-5 max-w-full">
                      <div className="text-md text-muted-foreground md:mt-1 md:text-md font-plain">Prof. Wasantha Mendis</div>
                      <div className="text-md text-muted-foreground md:mt-1 md:text-md font-plain">Prof. Wasantha Mendis</div>
                      <div className="text-md text-muted-foreground md:mt-1 md:text-md font-plain">Prof. Wasantha Mendis</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

/*
Ven Bellanvila Sangarathana Thera 
Ven Wagawatte Wimalawansha Thera
Ven Thalawe Panchcharansi Thera
Ven Okkampitiye Vidyananda Thera
Ven Balangoda Ananda Thera
Ven Shanthabadra Thera

Mrs. U.K.K. Gunasekara
Mrs. G. Siriyawathi
Prof. Wasantha Mendis
Mrs. Inoka Thushari
Mr. K. Jayananda
Mr. Channa Deshapriya
Mrs. A. Priyalatha
Mrs. Kema Nanayakkara
Mrs. P. Suneetha
Mrs. Padmini Vitharana
Mrs. D. Shamali Samarathunga
Mr. Idunil Udesh

Mrs. Jayawathi Ariyarathna
Mrs. Senani Dilrukshi
Mrs. Anoma Udeni
Mrs. Suvinitha Perera
Mr. Supun Chandu Akalanka
Mrs. Ruvini Lasantha
Mr. Shamil Samarasinghe
Mrs. K. Sunethra
Mrs. Sachini Buddhika
Mrs. Viduranshi Sajeewani
Mrs. Bimalka Vidarshani
Mrs. Deepthika Nilmini
Miss. Thilini Puurnima
Mrs. Nadeeka Chathurani
Mrs. Maheesha Nadee
Miss. Inoli Prathiba
Miss. Anurada Perera
Mrs. K. Kumuduni
Mrs. Kanthi Wijerathna
Mrs. Jesmine Vikramathilaka
Mrs. Somalatha Mahawewa
Miss. Supuni Udeshika
Miss. Bavani Thisanka
Mrs. Ruvangi Murage
Mrs. S. Pahalawanniarachchi
Mrs. Chathumini Murage
Mrs. Imali Fernando
Mrs. Chandrika Subashini
Mrs. Suseema Chathurani
Mrs. Thilanka Sudarshani
Mrs. Champika Deepthi
Miss. J. Samanthi
Mrs. Ishani Pathirana
Mrs. Keshala Ruwanmali
Mrs. Nalini Abesinghe
Mrs. Yomal Malitha
Mrs. Nilushika Madushani
*/
