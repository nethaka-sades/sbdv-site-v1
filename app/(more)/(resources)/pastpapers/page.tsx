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
 *  Created on Mon Feb 03 2025
 *
 */

import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function PastPapersDownloadPage() {
  const supabase = await createClient();

  const { data: pastpapers_first, error: error1 } = await supabase
    .from("pastpapers_first")
    .select("*")
    .order("order", { ascending: true });

  const { data: pastpapers_second, error: error2 } = await supabase
    .from("pastpapers_second")
    .select("*")
    .order("order", { ascending: true });

  const { data: pastpapers_third, error: error3 } = await supabase
    .from("pastpapers_third")
    .select("*")
    .order("order", { ascending: true });

  if (error1 || error2 || error3) {
    console.log(error1 || error2 || error3);
    throw error1 || error2 || error3;
  }

  return (
    <main className="py-12 px-10">
      <section className="py-5">
        <h1 className="py-5 font-plain text-5xl">First Term</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pastpapers_first && pastpapers_first.length > 0 ? (
            pastpapers_first.map((pastpaper) => (
              <Link
                href={pastpaper.link}
                key={pastpaper.id}
              >
                <div className="p-3 max-w-sm rounded overflow-hidden shadow-lg border border-neutral-600 cursor-pointer hover:bg-orange-600">
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">
                      {pastpaper.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No Past Papers found.</p>
          )}
        </div>
      </section>

      <section className="py-5">
        <h1 className="py-5 font-plain text-5xl">Second Term</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pastpapers_second && pastpapers_second.length > 0 ? (
            pastpapers_second.map((pastpaper) => (
              <Link
                href={pastpaper.link}
                key={pastpaper.id}
              >
                <div className="p-3 max-w-sm rounded overflow-hidden shadow-lg border border-neutral-600 cursor-pointer hover:bg-orange-600">
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">
                      {pastpaper.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No Past Papers found.</p>
          )}
        </div>
      </section>

      <section className="py-5">
        <h1 className="py-5 font-plain text-5xl">Third Term</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pastpapers_third && pastpapers_third.length > 0 ? (
            pastpapers_third.map((pastpaper) => (
              <Link
                href={pastpaper.link}
                key={pastpaper.id}
              >
                <div className="p-3 max-w-sm rounded overflow-hidden shadow-lg border border-neutral-600 cursor-pointer hover:bg-orange-600">
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">
                      {pastpaper.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No Past Papers found.</p>
          )}
        </div>
      </section>
    </main>
  );
}
