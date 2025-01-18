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
import { useState } from "react";

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

  const deleteAcc = async (event: React.FormEvent) => {
    event.preventDefault();

    const result = await deleteAccount();
    if (result.success) {
      setErrorMessage("Deletion Successful");
      router.push("/");
    } else {
      setErrorMessage("Deleting of Your Account Failed" + result.error);
    }
  };

  return (
    <AuthGuard>
      <main>
        <h1>Only logged-in users can view this page</h1>
        <h1>Welcome, {user?.displayName || "User"}!</h1>
        {user?.email && <p>Email: {user.email}</p>}
        {user?.role && <p>Email: {user.role}</p>}
        <br></br>
        <Button onClick={signout}>Delete Account</Button>
        <Button onClick={signout}>Logout</Button>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      </main>
    </AuthGuard>
  );
}
