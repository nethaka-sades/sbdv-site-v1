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
 *  Created on Sun Jan 19 2025
 *  
 */


"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";
import imageb from "@/public/images/p6.webp";
import { useAuthContext } from "@/app/context/AuthContext";

export default function signin() {
  const { login } = useAuthContext(); // Access login function from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  // Handle form submission
  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();

    const loginResult = await login(email, password);
    if(loginResult.success){
      setErrorMessage("");
      router.push("/lms/dashboard");
    } else {
      setErrorMessage("Login Failed : " + loginResult.error);
    }
  };

  return (
    <main>
      <section className="px-10 py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-zinc-950/100 -z-20"></div>
        <Image
          src={imageb}
          alt="bg-img-1"
          fill
          className="object-cover overflow-hidden blur-sm -z-30 opacity-5"
        />
        <div className="container flex flex-col items-center text-center">
          <div className="">
            <h1 className="pb-10 text-4xl font-special font-extrabold tracking-tight lg:text-5xl">
              Access Your Account
            </h1>

            <form onSubmit={handleForm}>
              <div className="mb-4">
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <Input onChange={( e ) => setEmail( e.target.value )} required type="email" id="email" placeholder="Email" />
              </div>
              <div className="mb-4">
                <Label htmlFor="password" className="sr-only">
                  Password
                </Label>
                <Input onChange={( e ) => setPassword( e.target.value )} required type="password" id="password" placeholder="Password" />
              </div>
              {errorMessage && <div className="text-red-700 py-3">{errorMessage}</div>}
              <div className="grid">
                <Button type="submit">Login</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
