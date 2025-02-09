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

import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    });

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value),
            );
            response = NextResponse.next({
              request,
            });
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options),
            );
          },
        },
      },
    );

    const user = await supabase.auth.getUser();

    if (request.nextUrl.pathname.startsWith("/dashboard") && user.error) {
      return NextResponse.redirect(new URL("/lms_access", request.url));
    }

    if (request.nextUrl.pathname === "/lms_access" && !user.error) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (request.nextUrl.pathname === "/sign-in" && !user.error) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (request.nextUrl.pathname === "/sign-up" && !user.error) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return response;
};