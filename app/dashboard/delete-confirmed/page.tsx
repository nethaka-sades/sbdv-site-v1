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
 *  Created on Sun Feb 16 2025
 *
 */

import { ArrowLeft, LogOut } from "lucide-react";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { ModBtn } from "@/components/mod-btn";
import { signOutAction } from "@/app/actions";
import ErrorComp from "@/components/error-comp";

export default async function delete_confirmed_page() {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return redirect("/sign-in");
    }
  } catch {
    return <ErrorComp />;
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen text-center px-10">
      <h1 className="text-5xl font-bold text-red-600 mb-1">Account Deleted</h1>
      <p className="text-gray-400 text-lg">
        You account is being deleted from our system.
      </p>
      <form>
        <ModBtn
          className="my-5"
          variant={"destructive"}
          formAction={signOutAction}
          pendingText="Requesting..."
        >
          <LogOut />
          Back to Login
        </ModBtn>
      </form>
    </main>
  );
}
