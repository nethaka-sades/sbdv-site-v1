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
import image1 from "@/public/hero-images/1.webp"

export default function bt() {
  return (
    <div>
      <LoadingScreen />
      <main className="px-5">
      <Image
          src={image1}
          fill
          alt="jsut"
          className="object-cover -z-10 overflow-hidden opacity-5 blur-sm"
        />
      <div className="relative overflow-hidden py-24 lg:py-32">
        <div className="container">
          <div className="max-w-3xl text-center mx-auto">
            <p className="pb-3 font-normal text-muted-foreground">About</p>
            <h1 className="scroll-m-30 text-4xl font-extrabold font-special tracking-tight lg:text-5xl">
              Bellanvila Raja Maha Viharaya
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
            Bellanwila Raja Maha Viharaya is one of Sri Lanka's most spiritually significant Buddhist temples, attracting thousands of devotees annually.
            </p>
          </div>
          <div className="mt-10 relative max-w-5xl mx-auto">
            <Image
              src={image1}
              className="rounded-xl"
              alt="Image Description"
            />
          </div>
        </div>
      </div>
      {/* End Hero */}
      </main>
    </div>
  );
}
