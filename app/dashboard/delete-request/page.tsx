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
import { signOutAction } from "@/app/actions";
import LoadingScreen from "@/components/LoadingScreen";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export default function verification() {

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-10">
      <LoadingScreen />
      <h1 className="text-5xl font-bold text-red-600 mb-1">
        Caution
      </h1>
      <p className="text-gray-400 text-lg">
        You are about to request for deleting your account which means all the data assosiated with the account will be deleted.
      </p>
      <Button
        variant={"destructive"}
        onClick={signOutAction}
        className=" text-white rounded-md hover:bg-red-600 transition mt-5"
      >
        <Trash />
        Delete Account
      </Button>
    </div>
  );
}