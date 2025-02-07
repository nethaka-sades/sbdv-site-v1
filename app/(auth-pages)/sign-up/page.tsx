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

import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import imageb from "@/public/images/p6.webp";
import { Separator } from "@/components/ui/separator";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

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
        <h1 className="text-4xl lg:text-5xl font-special tracking-tight text-center font-medium">
          Create a New Account
        </h1>
        <p className="text-md text-foreground text-center font-plain my-3">
          Already have an account?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Sign in
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="display_name">Name</Label>
          <Input name="display_name" placeholder="Your Name" required />
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Create a password"
            minLength={6}
            required
          />
          <Separator className="my-5" />
          <Label htmlFor="admin_no">Admission Number</Label>
          <Input name="admin_no" placeholder="Your Admission Number" required />
          <Label htmlFor="admin_year">Admission Year</Label>
          <Input name="admin_year" placeholder="Your Admission Year" required />
          <Label htmlFor="address">Address</Label>
          <Input name="address" placeholder="Your Address" required />
          <Label htmlFor="phone_no">Telephone Number</Label>
          <Input name="phone_no" placeholder="Your Telephone Number" required />
          <Label htmlFor="whatsapp_no">WhatsApp Number</Label>
          <Input name="whatsapp_no" placeholder="Your WhatsApp Number" required />
          <p className="text-center">I confirm that above information are accurate upto date.</p>
          <SubmitButton formAction={signUpAction} pendingText="Signing up...">
            Sign up
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </div>
  );
}
