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

import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import { get } from '@vercel/edge-config';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  try {
    const [siteStatus, lmsStatus, learningStatus] = await Promise.all([
      get('site_status'),
      get('lms_status'),
      get('learning_status'),
    ]);

    // Global maintenance mode
    if (siteStatus === false) {
      return NextResponse.redirect(new URL('/maintenance', request.url));
    }

    // Route-specific blocking
    const path = request.nextUrl.pathname;
    if (path.startsWith('/dashboard') && lmsStatus === false) {
      return NextResponse.redirect(new URL('/unavailable', request.url));
    }
    if (path.startsWith('/learning_materials') && learningStatus === false) {
      return NextResponse.redirect(new URL('/unavailable', request.url));
    }
  } catch (error) {
    console.error('Edge Config failed (falling through):', error);
    // Proceed to session logic if Edge Config fails
  }
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};