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
 *  Created on Mon Feb 03 2025
 *
 */

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import LoadingScreen from "@/components/LoadingScreen";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import imageb from "@/public/images/p6.webp";

export default function more_res() {
  return (
    <main className="h-dvh">
      <section className="pt-24 lg:pt-32">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-zinc-950/100 -z-20"></div>
        <Image
          src={imageb}
          alt="bg-img-1"
          fill
          className="object-cover overflow-hidden blur-sm -z-30 opacity-5"
        />
        <div className="container flex flex-col items-center text-center">
          <p className="text-muted-foreground font-plain text-sm md:text-md">
            Access
          </p>
          <h2 className="my-2 text-4xl lg:text-7xl font-special text-pretty">
            Learning Materials
          </h2>
          <p className="pt-1 px-10 text-pretty text-muted-foreground">
            Welcome to the Learning Materials page, Select your catagory & grade to find
            textbooks, study guides, and more to support your learning journey.
          </p>
        </div>
      </section>

      <section>
        <div className="container py-12 px-5">
          <div className="lg:px-60 grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="items-center">
              <CardHeader className="text-center pb-2">
                <span className="font-bold text-5xl mb-5">TextBooks</span>
              </CardHeader>
              <CardDescription className="text-center mb-5">
                Download your textbooks according to your grade
              </CardDescription>
              <CardFooter className="flex flex-col gap-3">
                <Link href={"/textbooks"}>
                  <Button className="w-80 bg-primary" variant={"outline"}>
                    Select Grade
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="items-center">
              <CardHeader className="text-center pb-2">
                <span className="font-bold text-5xl mb-5">Past Papers</span>
              </CardHeader>
              <CardDescription className="text-center mb-5">
                Download Past papers
              </CardDescription>
              <CardFooter className="flex flex-col gap-3">
                <Link href={"/pastpapers"}>
                  <Button className="w-80 bg-primary" variant={"outline"}>
                    Select Grade
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
