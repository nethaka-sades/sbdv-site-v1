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
 *
 */

import { Button } from "@/components/ui/button";
import { ArrowLeft, KeyRound, Trash, User } from "lucide-react";
import Link from "next/link";

export default function Settings() {
  return (
    <main className="py-32 min-h-screen max-w-[300px] mx-auto">
      <Link href={"/dashboard"} prefetch>
        <Button className="text-primary-foreground my-2" variant="link">
          <ArrowLeft />
          Back to Dashboard
        </Button>
      </Link>
      <div className="p-5 border rounded-md">
        <div className="mb-10 text-4xl font-bold text-center">Settings</div>
        <div className="flex flex-col items-center gap-y-5">
          <Link href={"/dashboard/update-profile"} prefetch>
            <Button variant={"outline"} className="text-primary-foreground">
              <User />
              Update Profile
            </Button>
          </Link>
          <Link href={"/dashboard/reset-password"} prefetch>
            <Button variant={"outline"} className="text-primary-foreground">
              <KeyRound />
              Update Password
            </Button>
          </Link>
          <Link href={"/dashboard/delete-request"} prefetch>
            <Button variant={"destructive"} className="text-primary-foreground">
              <Trash />
              Delete Account
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
