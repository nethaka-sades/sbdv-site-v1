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
    "Grade 1 - 2023 - First Term (With Answers)": 'https://pastpapers.wiki/download/27109/grade-01/70460/grade-01-daham-pasal-1st-term-test-paper-with-answers-2023.pdf',
    "Grade 2 - 2023 - First Term (With Answers)": 'https://pastpapers.wiki/download/27114/grade-02/70465/grade-02-daham-pasal-1st-term-test-paper-with-answers-2023.pdf',
    "Grade 3 - 2023 - First Term (With Answers)": 'https://pastpapers.wiki/download/27118/grade-03/70470/grade-03-daham-pasal-1st-term-test-paper-with-answers-2023.pdf',
    "Grade 4 - 2023 - First Term (With Answers)": 'https://pastpapers.wiki/download/27123/grade-04/70476/grade-04-daham-pasal-1st-term-test-paper-with-answers-2023.pdf',
    "Grade 5 - 2023 - First Term (With Answers)": 'https://pastpapers.wiki/download/27126/grade-05/70481/grade-05-daham-pasal-1st-term-test-paper-with-answers-2023.pdf',
    "Grade 6 - 2023 - First Term (With Answers)": 'https://pastpapers.wiki/download/27129/grade-06/70486/grade-06-daham-pasal-1st-term-test-paper-with-answers-2023.pdf',
    "Grade 7 - 2023 - First Term (With Answers)": 'https://pastpapers.wiki/download/27132/grade-07/70491/grade-07-daham-pasal-1st-term-test-paper-with-answers-2023.pdf',
    "Grade 8 - 2023 - First Term (With Answers)": 'https://pastpapers.wiki/download/27136/grade-08/70497/grade-08-daham-pasal-1st-term-test-paper-with-answers-2023.pdf',
    "Grade 9 - 2023 - First Term (With Answers)": 'https://pastpapers.wiki/download/27140/grade-09/70503/grade-09-daham-pasal-1st-term-test-paper-with-answers-2023.pdf',
    "Grade 10 - 2023 - First Term (With Answers)": 'https://pastpapers.wiki/download/27143/grade-10/70507/grade-10-daham-pasal-1st-term-test-paper-with-answers-2023.pdf',
    "Final Certificate Examination – Pali Abhidharma - 1996 to 2020": 'https://pastpapers.wiki/download/26389/daham-pasal/67638/daham-pasal-final-exam-past-papers-pali-abhidharma-1996-to-2020.pdf',
    "Final Certificate Examination – Buddha Sanskruthiya - 1996 to 2020": 'https://pastpapers.wiki/download/26389/daham-pasal/67629/daham-pasal-final-exam-past-papersbuddha-sanskruthiya-1996-to-2020.pdf',
    "Final Certificate Examination – Shasana Ithihasaya - 1996 to 2020": 'https://pastpapers.wiki/download/26389/daham-pasal/67646/daham-pasal-final-exam-past-papers-shasana-ithihasaya-1996-to-2020.pdf',
    "Daham Pasal Dharmacharya – Abhidharmaya - 2003 to 2022": 'https://pastpapers.wiki/download/26389/daham-pasal/81211/dharmacharya-past-papers-with-answers-abhidharmaya-2003-to-2022-p.pdf',
    "Daham Pasal Dharmacharya – Abhidharmaya - 2015 to 2019 (With Answers)": 'https://pastpapers.wiki/download/26389/daham-pasal/81213/dharmacharya-past-papers-with-answers-abhidharmaya-2003-to-2022-a.pdf',
    "Daham Pasal Dharmacharya – Baudda Ithihasaya Sanskruthiya - 2005 to 2022": 'https://pastpapers.wiki/download/26389/daham-pasal/81225/dharmacharya-past-papers-with-answers-baudda-ithihasaya-sanskruthiya-2005-to-2022.pdf',
    "Daham Pasal Dharmacharya – Baudda Ithihasaya Sanskruthiya - 2005 to 2022 (Answers)": 'https://pastpapers.wiki/download/26389/daham-pasal/81226/dharmacharya-past-papers-with-answers-baudda-ithihasaya-sanskruthiya-2005-to-2022-a.pdf',
    "Daham Pasal Dharmacharya – Pali - 2006 to 2022": 'https://pastpapers.wiki/download/26389/daham-pasal/81230/dharmacharya-past-papers-with-answers-pali-2006-to-2022-p.pdf',
    "Daham Pasal Dharmacharya – Pali - 2006 to 2022 (Answers)": 'https://pastpapers.wiki/download/26389/daham-pasal/81231/dharmacharya-past-papers-with-answers-pali-2006-to-2022-a.pdf',
    "Daham Pasal Dharmacharya – Samaja Dharshanaya - 2003 to 2022": 'https://pastpapers.wiki/download/26389/daham-pasal/81235/dharmacharya-past-papers-with-answers-samaja-dharshanaya-2003-to-2022.pdf',
    "Daham Pasal Dharmacharya – Therawadi Dharmaya - 2003 to 2022": 'https://pastpapers.wiki/download/26389/daham-pasal/81218/dharmacharya-past-papers-with-answers-therawadi-dharmaya-2003-to-2022-p.pdf',
    "Daham Pasal Dharmacharya – Therawadi Dharmaya - 2015 to 2019 (With Answers)": 'https://pastpapers.wiki/download/26389/daham-pasal/81219/dharmacharya-past-papers-with-answers-therawadi-dharmaya-2003-to-2022-a.pdf',
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

