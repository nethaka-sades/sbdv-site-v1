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
 *  Created on Mon Jan 13 2025
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

export default function Lms() {
  return (
    <div>
      <LoadingScreen />
      <main className="">
        <section className="pt-24 lg:pt-32">
          <div className="container flex flex-col items-center text-center">
            <p className="text-muted-foreground font-plain text-sm md:text-md">
              Access Our
            </p>
            <h2 className="my-2 text-4xl lg:text-7xl font-special text-pretty text-orange-600">
              Learning<br className="block md:hidden"></br> Management
              <br className="block md:hidden"></br> System
            </h2>
            <p className="pt-1 px-10 text-pretty text-muted-foreground">
              Explore our Learning Management System for seamless access to
              study materials, assignments, and progress tracking, anytime,
              anywhere!
            </p>
          </div>
        </section>

        <section>
          <div className="container py-12 px-5">
            {/* Grid */}
            <div className="lg:px-60 grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card */}
              <Card className="items-center">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="">I'm a</CardTitle>
                  <span className="font-bold text-5xl">Teacher</span>
                </CardHeader>
                <CardDescription className="text-center mb-5">
                  Access Portal for Teachers
                </CardDescription>
                <CardFooter className="flex flex-col gap-3">
                  <Link href={"/login"}>
                    <Button className="w-80 bg-primary" variant={"outline"}>
                      Login
                    </Button>
                  </Link>
                  <Button className="w-80" variant={"outline"}>
                    Register
                  </Button>
                </CardFooter>
              </Card>
              {/* End Card */}
              {/* Card */}
              <Card className="items-center">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="">I'm a</CardTitle>
                  <span className="font-bold text-5xl">Student</span>
                </CardHeader>
                <CardDescription className="text-center mb-5">
                  Access Portal for Students
                </CardDescription>
                <CardFooter className="flex flex-col gap-3">
                  <Button className="w-80 bg-primary" variant={"outline"}>
                    Login
                  </Button>
                  <Button className="w-80" variant={"outline"}>
                    Register
                  </Button>
                </CardFooter>
              </Card>
              {/* End Card */}
            </div>
            {/* End Grid */}
          </div>
        </section>
      </main>
    </div>
  );
}
