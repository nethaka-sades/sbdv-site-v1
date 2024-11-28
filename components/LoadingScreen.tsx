/*
 *  
 *   Copyright 2024 Nethaka De Saram
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
 *  Created on Fri Nov 29 2024
 *  
 */


'use client'

import { useState, useEffect } from "react";
import clsx from "clsx"; // For conditional class merging (optional)

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => setIsFadingOut(false), 100); // Start fade-in
    const fadeOutTimer = setTimeout(() => setIsFadingOut(true), 1100); // Start fade-out after 2s
    const hideTimer = setTimeout(() => setIsVisible(false), 1500); // Fully remove after fade-out

    return () => {
        clearTimeout(fadeInTimer);
        clearTimeout(fadeOutTimer);
        clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={clsx(
        "fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-500",
        isFadingOut ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="animate-spin h-9 w-9 border-2 border-t-orange-500 border-gray-950 rounded-full"></div>
    </div>
  );
}
