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
 *  Created on Tue Feb 04 2025
 *  
 */

import { signOutAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function verification() {

  return (
    <div className="flex flex-col space-y-3 items-center justify-center h-screen text-center px-10">
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        Please Wait, You're in the waitlist
      </h1>
      <p className="text-gray-400 text-lg mb-1">
        The information related to your account is being verified. Please wait
        in the waitlist until that information processed.
      </p>
      <p className="text-red-500 mb-6">
        If you think the entered information are inacurate please remove
        yourself from the waitlist and register again.
      </p>
      <Button
        variant={"outline"}
        onClick={signOutAction}
        className=" text-white rounded-md hover:bg-red-600 transition"
      >
        Remove From the Waitlist
      </Button>
      <Button
        onClick={signOutAction}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
      >
        Logout
      </Button>
    </div>
  );
}