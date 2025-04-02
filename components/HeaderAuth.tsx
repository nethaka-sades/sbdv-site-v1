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
import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton() {
  var user = null;
  try {
    const supabase = await createClient();

    const {
      data: { user: user_g },
    } = await supabase.auth.getUser();
    user = user_g;
  } catch {
    return <div className="text-red-300">Error</div>;
  }

  return user ? (
    <div className="flex">
      <Button
        asChild
        size="sm"
        variant={"outline"}
        className="rounded text-orange-500 w-full"
      >
        <Link href="/dashboard" prefetch>
          Dashboard
        </Link>
      </Button>
    </div>
  ) : (
    <div className="flex">
      <Button
        asChild
        size="sm"
        variant={"outline"}
        className="rounded text-orange-500 w-full"
      >
        <Link href="/lms_access" prefetch>
          Access LMS
        </Link>
      </Button>
    </div>
  );
}
