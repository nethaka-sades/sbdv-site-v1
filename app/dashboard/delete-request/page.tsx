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
import {
  cancel_request_deletion,
  request_deletion,
  signOutAction,
} from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CircleX, LogOut, Trash } from "lucide-react";
import { ModBtn } from "@/components/mod-btn";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function delete_request_page(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const { data, error, status } = await supabase
    .from("profiles")
    .select(`deletion_req`)
    .eq("id", user?.id)
    .single();

  if (error && status !== 406) {
    console.log(error);
    throw error;
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen text-center px-10">
      <div>
        {data?.deletion_req ? (
          <div>
            <div className="my-5 text-red-500 font-semibold text-2xl">
              Deletion Request Sent
            </div>
            <div className="flex flex-col items-center space-y-5">
              <form>
              <ModBtn
                variant={"outline"}
                formAction={cancel_request_deletion}
                pendingText="Requesting..."
              >
                <CircleX />
                Cancel Request
              </ModBtn>
              </form>
              <form>
              <ModBtn
                className="my-5"
                variant={"destructive"}
                formAction={signOutAction}
                pendingText="Requesting..."
              >
                <LogOut />
                Logout
              </ModBtn>
              </form>
            </div>
            <FormMessage message={searchParams} />
          </div>
        ) : (
          <div>
            <h1 className="text-5xl font-bold text-red-600 mb-1">Caution</h1>
            <p className="text-gray-400 text-lg">
              You are about to request for deleting your account which means all
              the data assosiated with the account will be deleted.
            </p>
            <form>
            <ModBtn
              className="my-5"
              variant={"destructive"}
              formAction={request_deletion}
              pendingText="Requesting..."
            >
              <Trash />
              Delete Account
            </ModBtn>
            </form>
            <FormMessage message={searchParams} />
            <Link href={"/dashboard"}>
              <Button className="text-primary-foreground my-2" variant="link">
                <ArrowLeft />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
