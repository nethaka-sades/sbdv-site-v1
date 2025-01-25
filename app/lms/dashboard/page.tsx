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
import { useAuthContext } from "@/app/_context/AuthContext";
import AuthGuard from "@/app/_context/AuthGuard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LogOut, Settings2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import firebase_app from "@/firebase/config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "@firebase/firestore";
import { signOut } from "@firebase/auth";

const db = getFirestore(firebase_app);

type Notice = {
  id: string;
  title: string;
  message: string;
  createdAt: { seconds: number; nanoseconds: number }; // Firestore's Timestamp format
};


export default function dashboard() {
  const { logout } = useAuthContext();
  const { deleteAccount } = useAuthContext();
  const { user } = useAuthContext();
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const [notices, setNotices] = useState<Notice[]>([]);
  const [noticesRrrorMessage, setNoticesErrorMessage] = useState("");

  useEffect(() => {
    // Fetch notices from Firestore
    const fetchNotices = async () => {
      try {
        const noticesCollection = collection(db, "notices");
        const noticeDocs = await getDocs(noticesCollection);
        const fetchedNotices = noticeDocs.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Notice[];
        setNotices(fetchedNotices);
      } catch (error) {
        setNoticesErrorMessage("Error Fetching Notices");
      }
    };

    fetchNotices();
  }, []);

  const signout = async (event: React.FormEvent) => {
    event.preventDefault();

    const isLoggedOut = await logout();
    if (isLoggedOut.success) {
      router.push("/");
    } else {
      setErrorMessage("Logout Failed" + isLoggedOut.error);
    }
  };

  const updateProfile = async (event: React.FormEvent) => {
    event.preventDefault();

    router.push("/lms/dashboard/update_profile");
  };

  return (
    <AuthGuard>
    <main className="text-white min-h-screen">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row justify-between space-y-5 items-center mb-8">
          <h1 className="text-3xl lg:text-5xl font-bold font-special ">
            Welcome
          </h1>
          <Button
            variant={"outline"}
            className="rounded-md border-red-600 hover:bg-red-600"
            onClick={signout}
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
                <div className="flex flex-col space-y-3 md:flex-row justify-between items-center w-full">
                  <div className="flex flex-col">
                    <h2 className="text-xl lg:text-3xl font-bold">
                      {user?.displayName}
                    </h2>
                    <p className="text-orange-400">{user?.email}</p>
                  </div>
                  <Button
                    variant={"outline"}
                    className="rounded-md hover:bg-orange-600"
                    onClick={updateProfile}
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
                {notices.length === 0 ? (
                  <p>No notices found.</p>
                ) : (
                  notices.map((notice) => (
                    <div key={notice.id}>
                      <div>
                        <h4 className="font-semibold">{notice.title}</h4>
                        <p className="text-gray-400 text-sm">
                        {new Date(notice.createdAt.seconds * 1000).toLocaleDateString()}
                        </p>
                        <p className="text-sm mt-1">{notice.message}</p>
                      </div>
                      <Separator className="my-5" />
                    </div>
                  ))
                )}
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
    </AuthGuard>
  );
}
