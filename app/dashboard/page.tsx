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

import { createClient } from "@/utils/supabase/server";
import { LogOut, Settings2 } from "lucide-react";
import { redirect } from "next/navigation";
import { signOutAction } from "@/app/actions";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import LoadingScreen from "@/components/LoadingScreen";
import { ModBtn } from "@/components/mod-btn";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const { data, error, status } = await supabase
    .from("profiles")
    .select(`full_name, admin_year, admin_no, address, phone_no, whatsapp_no, verified, deletion_req, deletion_req_date, deletion_confirmed`)
    .eq("id", user?.id)
    .single();

  if (error && status !== 406) {
    console.log(error);
    throw error;
  }

  if(data?.deletion_confirmed){
    return redirect("/dashboard/delete-confirmed");
  }

  if(data?.deletion_req){
    return redirect("/dashboard/delete-request");
  }
  
  if(!data?.verified){
    return redirect("/dashboard/verification");
  }

  const { data: notices, error: notices_error } = await supabase
    .from("notices")
    .select("*")
    .order("created_at", { ascending: false }); // Order by creation time, newest first

  if (notices_error) {
    console.log(notices_error);
    throw notices_error;
  }

  const { data: marks_data, error: marks_data_error } = await supabase
    .from("marks")
    .select(`first_term, second_term, third_term`)
    .eq("id", user?.id)
    .single();

  if (marks_data_error?.code == "PGRST116") {
    marks_data?.first_term == "-";
    marks_data?.second_term == "-";
    marks_data?.third_term == "-";
  } else if (marks_data_error) {
    console.log(marks_data_error);
  }

  return (
    <main className="text-white min-h-screen">
      <LoadingScreen />
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row justify-between space-y-5 items-center mb-8">
          <h1 className="text-3xl lg:text-5xl font-bold font-special ">
            Welcome
          </h1>
          <form>
          <ModBtn
            variant={"outline"}
            className="rounded-md border-red-600 hover:bg-red-600"
            onClick={signOutAction}
          >
            <LogOut />
            Logout
          </ModBtn>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="md:col-span-full">
            <div className="border p-6 rounded-lg w-full">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col space-y-3 md:flex-row justify-between items-center w-full">
                  <div className="flex flex-col">
                    <h2 className="text-xl lg:text-3xl font-bold">
                      {data?.full_name}
                    </h2>
                    <p className="text-orange-400">{user?.email}</p>
                  </div>
                  <Link href={"/dashboard/settings"}>
                    <Button
                      variant={"outline"}
                      className="rounded-md hover:bg-orange-600"
                    >
                      <Settings2 />
                      Settings
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col pt-5 space-y-3 text-sm">
                <div className="flex flex-row gap-x-8">
                  <div>
                    <div className="text-gray-400">Admission No</div>
                    <div className="text-xl text-white font-bold">
                      {data?.admin_no}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Admission Year</div>
                    <div className="text-xl text-white font-bold">
                      {data?.admin_year}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-gray-400">Address</div>
                  <div className="text-xl text-white font-bold">
                    {data?.address}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400">Phone No</div>
                  <div className="text-xl text-white font-bold">
                    {data?.phone_no}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400">WhatsaApp No</div>
                  <div className="text-xl text-white font-bold">
                    {data?.whatsapp_no}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border p-6 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">Notices</h3>
            <ScrollArea className="h-32">
              {notices && notices.length > 0 ? (
                notices.map((notice) => (
                  <div key={notice.id}>
                    <div>
                      <h4 className="font-semibold">{notice.title}</h4>
                      <p className="text-orange-400 text-sm">
                        {new Date(notice.created_at).toLocaleDateString()}{" "}
                      </p>
                      <p className="text-sm mt-1">{notice.message}</p>
                    </div>
                    <Separator className="my-5" />
                  </div>
                ))
              ) : (
                <p>No notices found.</p>
              )}
            </ScrollArea>
          </div>

          <div className="border p-6 rounded-lg">
            <h3 className="text-lg text-center lg:text-start lg:text-3xl font-bold mb-4">
              Your Exam Marksheet
            </h3>
            <div className="mt-10 grid gap-x-5 gap-y-8 md:grid-cols-1 lg:grid-cols-3 text-center">
              <div className="flex flex-col gap-2 lg:border-r">
                <p>First Term</p>
                <div className="text-6xl font-bold">
                  {marks_data?.first_term}
                </div>
              </div>
              <div className="flex flex-col gap-2 lg:border-r">
                <p>Second Term</p>
                <div className="text-6xl font-bold">
                  {marks_data?.second_term}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>Third Term</p>
                <div className="text-6xl font-bold">
                  {marks_data?.third_term}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
