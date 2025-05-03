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
 *  Created on Sun May 04 2025
 *  
 */


import Image from "next/image";
import image1 from "@/public/images/p22.webp";
import image2 from "@/public/images/p14.webp";
import image3 from "@/public/images/p17.webp";

export default function pgp() {
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
              Our Achievements
            </h1>
            <p>
              These are a our achievements during the past years.
            </p>
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
              <h1 className="text-2xl font-extrabold lg:text-2xl">
                Kesbewa Zonal Competitions 2023
              </h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
