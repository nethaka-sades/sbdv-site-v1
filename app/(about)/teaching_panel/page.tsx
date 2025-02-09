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
import grppic from "@/public/images/teacher_grp_pic.webp";

const teachers_names = [
  "Ven Bellanvila Sangarathana Thera",
  "Ven Wagawatte Wimalawansha Thera",
  "Ven Thalawe Panchcharansi Thera",
  "Ven Okkampitiye Vidyananda Thera",
  "Ven Balangoda Ananda Thera",
  "Ven Shanthabadra Thera",
  "Ven Pattiyawela Chandaloka Thera",
  "Mrs. U.K.K. Gunasekara",
  "Mrs. G. Siriyawathi",
  "Prof. Wasantha Mendis",
  "Mrs. Inoka Thushari",
  "Mr. K. Jayananda",
  "Mr. Channa Deshapriya",
  "Mrs. A. Priyalatha",
  "Mrs. Kema Nanayakkara",
  "Mrs. P. Suneetha",
  "Mrs. Padmini Vitharana",
  "Mrs. D. Shamali Samarathunga",
  "Mr. Idunil Udesh",
  "Mrs. Jayawathi Ariyarathna",
  "Mrs. Senani Dilrukshi",
  "Mrs. Anoma Udeni",
  "Mrs. Suvinitha Perera",
  "Mr. Supun Chandu Akalanka",
  "Mrs. Ruvini Lasantha",
  "Mr. Shamil Samarasinghe",
  "Mrs. K. Sunethra",
  "Mrs. Sachini Buddhika",
  "Mrs. Viduranshi Sajeewani",
  "Mrs. Bimalka Vidarshani",
  "Mrs. Deepthika Nilmini",
  "Miss. Thilini Puurnima",
  "Mrs. Nadeeka Chathurani",
  "Mrs. Maheesha Nadee",
  "Miss. Inoli Prathiba",
  "Miss. Anurada Perera",
  "Mrs. K. Kumuduni",
  "Mrs. Kanthi Wijerathna",
  "Mrs. Jesmine Vikramathilaka",
  "Mrs. Somalatha Mahawewa",
  "Miss. Supuni Udeshika",
  "Miss. Bavani Thisanka",
  "Mrs. Ruvangi Murage",
  "Mrs. S. Pahalawanniarachchi",
  "Mrs. Chathumini Murage",
  "Mrs. Imali Fernando",
  "Mrs. Chandrika Subashini",
  "Mrs. Suseema Chathurani",
  "Mrs. Thilanka Sudarshani",
  "Mrs. Champika Deepthi",
  "Miss. J. Samanthi",
  "Mrs. Ishani Pathirana",
  "Mrs. Keshala Ruwanmali",
  "Mrs. Nalini Abesinghe",
  "Mrs. Yomal Malitha",
  "Mrs. Nilushika Madushani",
  "Mrs. Jayamini Apsara",
];

export default function TeachingPanel() {
  return (
    <main>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-zinc-950/100 -z-20"></div>
      <Image
        src={grppic}
        alt="bg-img-1"
        fill
        className="object-cover overflow-hidden blur-sm -z-30 opacity-5"
      />
      <section className="pt-32 px-10">
        <div className="container flex flex-col items-center text-center">
          <h2 className="my-5 text-orange-600 text-pretty text-2xl font-special font-bold lg:text-7xl">
            Teaching Panel<br className="block md:hidden"></br> 2024/25
          </h2>
          <p className="mb-8 max-w-5xl text-muted-foreground font-plain text-sm lg:text-xl">
            At Sri Bodhiraja Dhamma School, our dedicated team of teachers plays
            a pivotal role in nurturing the spiritual and moral growth of our
            students. With deep knowledge of Buddhist teachings and a commitment
            to fostering ethical values, our educators guide students on their
            journey of self-discovery and mindfulness. Each teacher brings a
            unique perspective, blending traditional wisdom with modern teaching
            methods to create an engaging and supportive learning environment.
            Together, they inspire the next generation to embrace the principles
            of Dhamma and contribute positively to society. These teachers not
            only educate students on Buddhist doctrines but also inspire them to
            apply these values in their daily lives. Dhamma school teachers
            often go beyond academics, fostering a sense of community and
            encouraging students to grow into compassionate and responsible
            individuals. Their contribution is invaluable in preserving and
            passing down the timeless wisdom of Buddhism to future generations.
          </p>
        </div>
      </section>

      <section className="px-10 mt-5 relative max-w-5xl mx-auto">
        <Image src={grppic} className="rounded-xl" alt="Image Description" />
      </section>

      <section className="px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-full text-center">
          {teachers_names.map((name, index) => (
            <div
              key={index}
              className="text-md text-muted-foreground font-plain p-2"
            >
              {name}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

/*
Ven Bellanvila Sangarathana Thera 
Ven Wagawatte Wimalawansha Thera -
Ven Thalawe Panchcharansi Thera -
Ven Okkampitiye Vidyananda Thera
Ven Balangoda Ananda Thera
Ven Shanthabadra Thera 
Ven Pattiyawela Chandaloka Thera
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
Mrs. Jayamini Apsara
*/
