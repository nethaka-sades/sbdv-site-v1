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
import { useAuthContext } from "@/app/context/AuthContext";
import AuthGuard from "@/app/context/AuthGuard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { LogOut, Settings, Settings2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function dashboard() {
  const { logout } = useAuthContext();
  const { deleteAccount } = useAuthContext();
  const { user } = useAuthContext();
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const signout = async (event: React.FormEvent) => {
    event.preventDefault();

    const isLoggedOut = await logout();
    if (isLoggedOut.success) {
      router.push("/");
    } else {
      setErrorMessage("Logout Failed" + isLoggedOut.error);
    }
  };

  const notices = [
    {
      id: "1",
      title: "Shadcn UI Kit Application UI v2.0.0",
      date: "January 13th, 2022",
      description:
        "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
    },
    {
      id: "2",
      title: "Shadcn UI Kit Figma v1.3.0",
      date: "December 7th, 2021",
      description:
        "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
    },
    {
      id: "3",
      title: "Shadcn UI Kit Figma v1.3.0",
      date: "December 7th, 2021",
      description:
        "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
    },
    {
      id: "4",
      title: "Shadcn UI Kit Figma v1.3.0",
      date: "December 7th, 2021",
      description:
        "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
    },
    {
      id: "5",
      title: "Shadcn UI Kit Figma v1.3.0",
      date: "December 7th, 2021",
      description:
        "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
    },
  ];

  return (
    <main className="text-white min-h-screen">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-bold font-special">Welcome</h1>
          <Button
            variant={"outline"}
            className="rounded-md hover:bg-orange-600"
          >
            <LogOut />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="md:col-span-full">
            <div className="border p-6 rounded-lg w-full">
              <div className="flex items-center space-x-4">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-col">
                    <h2 className="text-3xl font-bold">{user?.displayName}</h2>
                    <p className="text-orange-400">{user?.email}</p>
                  </div>
                  <Button
                    variant={"outline"}
                    className="rounded-md hover:bg-orange-600"
                  >
                    <Settings2 />
                    Update
                  </Button>
                </div>
              </div>
              <div className="flex flex-col pt-5 space-y-3 text-sm">
                <div className="flex flex-row gap-x-8">
                  <div>
                    <div className="text-gray-400">Admission No</div>
                    <div className="text-xl text-white font-bold">
                      {user?.adminNo}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Admission Year</div>
                    <div className="text-xl text-white font-bold">
                      {user?.adminYear}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-gray-400">Address</div>
                  <div className="text-xl text-white font-bold">
                    {user?.address}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400">Phone No</div>
                  <div className="text-xl text-white font-bold">
                    {user?.phoneNo}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="md:col-span-2 space-y-6">
            <div className="border p-6 rounded-lg">
              <h3 className="text-3xl font-bold mb-4">Notices</h3>
              <ScrollArea className="h-32">
                {notices.map((activity) => (
                  <div key={activity.id}>
                    <div>
                      <h4 className="font-semibold">{activity.title}</h4>
                      <p className="text-gray-400 text-sm">{activity.date}</p>
                      <p className="text-sm mt-1">{activity.description}</p>
                    </div>
                    <Separator className="my-5" />
                  </div>
                ))}
                </ScrollArea>
            </div>

            <div className="border p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">About Me</h3>
              <p className="text-gray-400">
                Hi I'm Anna Adame, It will be as simple as Occidental; in fact,
                it will be Occidental. To an English person, it will seem like
                simplified English, as a skeptical Cambridge friend of mine told
                me what Occidental is European languages are members of the same
                family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
