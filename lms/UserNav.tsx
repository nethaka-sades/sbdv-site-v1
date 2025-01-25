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
 *  Created on Sun Jan 26 2025
 *  
 */

"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LayoutDashboard, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthContext } from "@/app/_context/AuthContext";
import { useRouter } from "next/navigation";

export default function UserNav() {
  const { user } = useAuthContext();
  const { logout } = useAuthContext();
  const router = useRouter();

  const signout = async (event: React.FormEvent) => {
    event.preventDefault();

    const isLoggedOut = await logout();
    if (isLoggedOut.success) {
      router.push("/");
    } else {
        console.error(isLoggedOut.error);
      //setErrorMessage("Logout Failed" + isLoggedOut.error);
    }
  };

  const toDash = async (event: React.FormEvent) => {
    event.preventDefault();

    router.push("/lms/dashboard");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded text-orange-500 w-full">
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user?.displayName}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={toDash}>
          <LayoutDashboard />
            Dashboard
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signout}>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
