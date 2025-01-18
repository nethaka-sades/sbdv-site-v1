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

export default function UserNotVerified() {
  const { logout } = useAuthContext();

  const handleLogout = async () => {
    const response = await logout();
    if (response.success) {
      window.location.href = "/lms"; // Redirect to login page
    } else {
      alert("Error logging out: " + response.error);
    }
  };

  return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Account is not verified
        </h1>
        <p className="text-gray-700 mb-6">
          Your account is still not verified. Please wait until we verify your
          account to access this service.
        </p>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
  );
}
