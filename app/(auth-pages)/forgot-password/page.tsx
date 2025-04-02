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

import { forgotPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { ModBtn } from "@/components/mod-btn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import imageb from "@/public/images/p6.webp";

export default async function ForgotPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <main className="py-32 px-10 min-h-screen">
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-zinc-950/100 -z-20"></div>
        <Image
          src={imageb}
          alt="bg-img-1"
          fill
          className="object-cover overflow-hidden blur-sm -z-30 opacity-5"
        />
        <form className="flex flex-col min-w-64 max-w-lg mx-auto">
        <h1 className="text-4xl lg:text-5xl font-special tracking-tight text-center font-medium">Forgot Password?</h1>
        <p className="text-md text-foreground text-center font-plain my-3">
        Already have an account?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in" prefetch>
            Sign in
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <ModBtn formAction={forgotPasswordAction} pendingText="Requesting">
            Reset Password
          </ModBtn>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </main>
  );
}
