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

"use client"

const PastpapersDownloadPage = () => {
  // Direct links to the textbooks (replace these URLs with your actual links)
  const textbookLinks: { [key: string]: string } = {
    "Grade 1": 'https://pastpapers.wiki/download/26389/daham-pasal/67505/grade-01-daham-pasal-text-book-updated-pdf.pdf',
    "Grade 2": 'https://pastpapers.wiki/download/26389/daham-pasal/67512/grade-02-daham-pasal-text-book-updated-pdf.pdf',
    "Grade 3": 'https://pastpapers.wiki/download/26389/daham-pasal/67518/grade-03-daham-pasal-text-book-updated-pdf.pdf',
    "Grade 4": 'https://pastpapers.wiki/download/26389/daham-pasal/67523/grade-04-daham-pasal-text-book-updated-pdf.pdf',
    "Grade 5": 'https://pastpapers.wiki/download/26389/daham-pasal/67530/grade-05-daham-pasal-text-book-updated-pdf.pdf',
    "Grade 6": 'https://pastpapers.wiki/download/26389/daham-pasal/67543/grade-06-daham-pasal-text-book-updated-pdf.pdf',
    "Grade 7": 'https://pastpapers.wiki/download/26389/daham-pasal/67548/grade-07-daham-pasal-text-book-updated-pdf.pdf',
    "Grade 8": 'https://pastpapers.wiki/download/26389/daham-pasal/67553/grade-08-daham-pasal-text-book-updated-pdf.pdf',
    "Grade 9": 'https://pastpapers.wiki/download/26389/daham-pasal/67563/grade-10-daham-pasal-text-book-updated-pdf.pdf',
    "Grade 10": 'https://pastpapers.wiki/download/26389/daham-pasal/67530/grade-05-daham-pasal-text-book-updated-pdf.pdf',
    "Final Certificate Examination – Pali Abhidharma": 'https://pastpapers.wiki/download/26389/daham-pasal/67589/daham-pasal-final-certificate-examination-textbook-pali-abhidharma.pdf',
    "Final Certificate Examination – Buddha Sanskruthiya": 'https://pastpapers.wiki/download/26389/daham-pasal/67594/daham-pasal-final-certificate-examination-textbook-buddha-sanskruthiya.pdf',
    "Final Certificate Examination – Shasana Ithihasaya": 'https://pastpapers.wiki/download/26389/daham-pasal/67598/daham-pasal-final-certificate-examination-textbook-shasana-ithihasaya.pdf',
    "Daham Pasal Dharmacharya – Abhidharmaya": 'https://pastpapers.wiki/download/26389/daham-pasal/67604/daham-pasal-dharmacharya-examination-textbook-abhidharmaya.pdf',
    "Daham Pasal Dharmacharya – Baudda Ithihasaya Sanskruthiya": 'https://pastpapers.wiki/download/26389/daham-pasal/67611/daham-pasal-dharmacharya-examination-textbook-baudda-ithihasaya-sanskruthiya.pdff',
    "Daham Pasal Dharmacharya – Pali": 'https://pastpapers.wiki/download/26389/daham-pasal/67616/daham-pasal-dharmacharya-examination-textbook-pali.pdf',
    "Daham Pasal Dharmacharya – Samaja Dharshanaya": 'https://pastpapers.wiki/download/26389/daham-pasal/67620/daham-pasal-dharmacharya-examination-textbook-samaja-dharshanaya.pdf',
    "Daham Pasal Dharmacharya – Therawadi Dharmaya": 'https://pastpapers.wiki/download/26389/daham-pasal/67625/daham-pasal-dharmacharya-examination-textbook-therawadi-dharmaya.pdf',
  };

  const downloadPDF = (grade: string) => {
    const link = textbookLinks[grade];
    if (link) {
      // Open the link in a new tab (or initiate a download directly)
      window.location.href = link; // or use `window.location.href = link;` for immediate download
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-12 px-10">
      {Object.keys(textbookLinks).map((grade) => (
        <div
          key={grade}
          className="p-3 max-w-sm rounded overflow-hidden shadow-lg border border-neutral-600 cursor-pointer hover:bg-orange-600"
          onClick={() => downloadPDF(grade)}
        >
          <div className="p-4">
            <h3 className="text-xl font-semibold">{grade}</h3>
          </div>
        </div>
      ))}
      <p className='pt-10'>This website uses <a href={"https://www.pastpapers.wiki"} target="_blank" className="text-blue-300">pastpapers.wiki</a> as resource provider.</p>
    </div>
  );
};

export default PastpapersDownloadPage;

