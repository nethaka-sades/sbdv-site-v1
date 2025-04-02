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
 *  Created on Thu Apr 03 2025
 *  
 */

export default function ErrorComp(){
    return(
        <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6 p-6">
          <h1 className="text-4xl font-bold text-red-600">Error Occured</h1>
          <p className="text-lg text-neutral-200 max-w-md">
            Please refresh the page or contact support
          </p>
        </div>
      </div>
    );
}