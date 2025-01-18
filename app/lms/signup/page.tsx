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
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import imageb from "@/public/images/p6.webp";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuthContext } from "@/app/context/AuthContext";

export default function signup() {
  const { register } = useAuthContext();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [adminYear, setAdminYear] = useState("");
  const [adminNo, setAdminNo] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [termsAccepted, setTermsAccepted] = useState<"indeterminate" | boolean>(
    false
  );
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  // Handle form submission
  const handleForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    } else {
      setErrorMessage("");
    }

    if (!termsAccepted) {
      setErrorMessage("You must agree to the terms and conditions.");
      return;
    } else {
      setErrorMessage("");
    }

    const regResult = await register(
      email,
      password,
      displayName,
      adminYear,
      adminNo,
      address,
      phoneNo
    );
    if (regResult.success) {
      setErrorMessage("");
      router.push("/lms/dashboard");
    } else {
      setErrorMessage("Registering Failed : " + regResult.error);
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
              Create New Account
            </h1>

            <form onSubmit={handleForm}>
              <div className="mb-4">
                <Label htmlFor="displayName" className="sr-only">
                  Your Name
                </Label>
                <Input
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                  type="text"
                  id="displayName"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="password" className="sr-only">
                  Password
                </Label>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="confirmPassword" className="sr-only">
                  Confirm Password
                </Label>
                <Input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                />
              </div>
              <Separator asChild className="my-6">
                <div className="py-3 flex items-center text-xs text-muted-foreground uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:before:border-gray-700 dark:after:border-gray-700">
                  Basic Details
                </div>
              </Separator>
              <div className="mb-4">
                <Label htmlFor="adminYear" className="sr-only">
                  Your Admission Year
                </Label>
                <Input
                  onChange={(e) => setAdminYear(e.target.value)}
                  required
                  type="text"
                  id="adminYear"
                  placeholder="Your Admission Year"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="adminNo" className="sr-only">
                  Your Admission Number
                </Label>
                <Input
                  onChange={(e) => setAdminNo(e.target.value)}
                  required
                  type="text"
                  id="adminNo"
                  placeholder="Your Admission Number"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="address" className="sr-only">
                  Your Address
                </Label>
                <Input
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  type="text"
                  id="address"
                  placeholder="Your Address"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="phoneNo" className="sr-only">
                  Your Telephone Number
                </Label>
                <Input
                  onChange={(e) => setPhoneNo(e.target.value)}
                  required
                  type="text"
                  id="phoneNo"
                  placeholder="Your Telephone Number"
                />
              </div>
              <div className="flex items-center mb-4">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) =>
                    setTermsAccepted(checked === true)
                  }
                />
                <Label htmlFor="terms" className="ml-2">
                  I confirm that above information are accurate and true.
                </Label>
              </div>
              {errorMessage && (
                <p className="text-red-500 mb-4">{errorMessage}</p>
              )}
              <div className="grid">
                <Button type="submit" disabled={!termsAccepted}>
                  Register
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
