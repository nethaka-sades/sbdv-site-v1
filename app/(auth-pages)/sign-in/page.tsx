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
 *  Created on Sat Feb 08 2025
 *  This file use original nextjs-supabase boilerplate repo code
 */

import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import imageb from "@/public/images/p6.webp";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <div className="py-32 px-10 min-h-screen">
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-zinc-950/100 -z-20"></div>
        <Image
          src={imageb}
          alt="bg-img-1"
          fill
          className="object-cover overflow-hidden blur-sm -z-30 opacity-5"
        />
      <form className="flex flex-col min-w-64 max-w-lg mx-auto">
        <h1 className="text-4xl lg:text-5xl font-special tracking-tight text-center font-medium">Access Your Account</h1>
        <p className="text-md text-foreground text-center font-plain my-3">
          Don't have an account?{" "}
          <Link className="text-primary font-medium underline" href="/sign-up">
            Sign up
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              className="text-xs text-foreground underline"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            required
          />
          <SubmitButton formAction={signInAction} pendingText="Signing in...">
            Sign in
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </div>
  );
}

{
  /*
  <main>
      <section className="px-10 py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-zinc-950/100 -z-20"></div>
        <Image
          src={imageb}
          alt="bg-img-1"
          fill
          className="object-cover overflow-hidden blur-sm -z-30 opacity-5"
        />
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl lg:text-5xl font-special font-medium my-2">
            Sign in
          </h1>
          <form className="max-w-sm w-full">
            <p className="text-sm text-foreground">
              Don't have an account?{" "}
              <Link
                className="text-foreground font-medium underline"
                href="/sign-up"
              >
                Sign up
              </Link>
            </p>
            <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
              <div className="flex flex-col gap-2 items-start">
                <Label htmlFor="email">
                  Email
                </Label>
                <Input name="email" placeholder="you@example.com" required />
              </div>
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  className="text-xs text-foreground underline"
                  href="/forgot-password"
                >
                  Forgot Password?
                </Link>
              </div>
              <Input
                type="password"
                name="password"
                placeholder="Your password"
                required
              />
              <SubmitButton
                pendingText="Signing In..."
                formAction={signInAction}
              >
                Sign in
              </SubmitButton>
              <FormMessage message={searchParams} />
            </div>
          </form>
        </div>
      </section>
    </main>
  */
}
