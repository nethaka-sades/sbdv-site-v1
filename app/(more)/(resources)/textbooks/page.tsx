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
 *  distributed under the License is distributed on an 'AS IS' BASIS, *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 *
 *
 *
 *  Created on Fri Nov 29 2024
 *
 */

import ErrorComp from "@/components/error-comp";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function TextbookDownloadPage() {
  var textbooks = null;
  try {
    const supabase = await createClient();

    const { data: textbooks_g, error: textbook_error } = await supabase
      .from("textbooks")
      .select("*")
      .order("order", { ascending: true });

    if (textbook_error) {
      <ErrorComp />;
    } else {
      textbooks = textbooks_g;
    }
  } catch {
    return <ErrorComp />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-12 px-10">
      {textbooks && textbooks.length > 0 ? (
        textbooks.map((textbook) => (
          <Link href={textbook.link} key={textbook.id}>
            <div className="p-3 max-w-sm rounded overflow-hidden shadow-lg border border-neutral-600 cursor-pointer hover:bg-orange-600">
              <div className="p-4">
                <h3 className="text-xl font-semibold">{textbook.name}</h3>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>No textbooks found.</p>
      )}
      <p className="pt-10">
        This website uses{" "}
        <a
          href={"https://www.pastpapers.wiki"}
          target="_blank"
          className="text-blue-300"
        >
          pastpapers.wiki
        </a>{" "}
        as resource provider.
      </p>
    </div>
  );
}
