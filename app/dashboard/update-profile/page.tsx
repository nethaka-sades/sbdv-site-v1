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
import { updateProfileAction } from "@/app/actions";
import ErrorComp from "@/components/error-comp";
import { FormMessage, Message } from "@/components/form-message";
import { ModBtn } from "@/components/mod-btn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/utils/supabase/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function UpdateProfile(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  var O_data = null;
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const {
      data: O_data_g,
      error: O_error,
      status: O_status,
    } = await supabase
      .from("profiles")
      .select(`full_name, admin_year, admin_no, address, phone_no, whatsapp_no`)
      .eq("id", user?.id)
      .single();

    if (O_error && O_status !== 406) {
      return <ErrorComp />;
    } else {
      O_data = O_data_g;
    }
  } catch {
    return <ErrorComp />;
  }

  return (
    <main className="min-h-screen px-20 py-20 lg:max-w-2xl mx-auto">
      <Link href={"/dashboard"} prefetch>
        <Button className="text-primary-foreground my-2" variant="link">
          <ArrowLeft />
          Back to Dashboard
        </Button>
      </Link>
      <div className="border p-6 rounded-lg w-full">
        <form className="flex flex-col min-w-64 max-w-2xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-center">
            Update Your Profile
          </h1>
          <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
            <Label htmlFor="display_name">Name</Label>
            <Input name="display_name" placeholder={O_data?.full_name} />
            <Label htmlFor="address">Address</Label>
            <Input name="address" placeholder={O_data?.address} />
            <Label htmlFor="phone_no">Telephone Number</Label>
            <Input name="phone_no" placeholder={O_data?.phone_no} />
            <Label htmlFor="whatsapp_no">WhatsApp Number</Label>
            <Input name="whatsapp_no" placeholder={O_data?.whatsapp_no} />

            <Label htmlFor="admin_year">Admin Year</Label>
            <Input name="admin_year" placeholder={O_data?.admin_year} />
            <Label htmlFor="admin_no">Admin Number</Label>
            <Input name="admin_no" placeholder={O_data?.admin_no} />
            <div className="text-center text-red-300">
              Please note that after you update the data you have to be in
              waitlist again
            </div>
            <ModBtn formAction={updateProfileAction} pendingText="Updating...">
              Update
            </ModBtn>
            <FormMessage message={searchParams} />
          </div>
        </form>
      </div>
    </main>
  );
}
