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
 *  Created on Wed Dec 11 2024
 *  
 */


import main_logo from "@/public/main_logo.webp"
import Link from "next/link";
import Image from "next/image";

const sections = [
  {
    title: 'About',
    links: [
      { name: 'Sri Bodhiraja Dhamma School', href: '/about' },
      { name: 'Bellanvila Temple', href: '/about/bt' },
      { name: 'Administration', href: '/about/administration' },
      { name: 'Teaching Panel', href: '/about/teachers' },
    ],
  },
  {
    title: 'Prefects Guild',
    links: [
      { name: 'Board of Officials 2024/25', href: '/pg' },
      { name: 'History', href: '/pg/pg_history' },
    ],
  },
  {
    title: 'More',
    links: [
      { name: 'Extra-Curricular Activities', href: '/more/ec_acts' },
      { name: 'Resources', href: '/more/more_res' },
      { name: 'Gallery', href: '/more/gallary' },
      { name: 'About LMS', href: '/more/about_lms' },
    ],
  },
];

const Footer = () => {
  return (
    <section className="pt-5 pb-5 px-5">
      <div className="container">
        <footer>
          <div className="border-t pt-5 flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <span className="flex items-center justify-center gap-4 lg:justify-start">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src={main_logo} alt="main_pic" className="w-[300px]" />
                    </Link>
                </span>
                <p className="mt-6 text-sm font-medium text-muted-foreground">
                  Official Web Portal of Sri Bodhiraja Dhamma School
                </p>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-3 gap-3 lg:gap-10">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-3 font-bold">{section.title}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 text-center border-t pt-5 text-sm">
            <span className="font-medium text-muted-foreground">
                Developed by{" "}
                <Link href="https://github.com/nethaka-sades" className="text-gray-300 hover:text-primary">Nethaka De Saram</Link>
            </span>
            <p className="text-gray-400">Coordinated by Lakwan Lonidu & Selini Dulwanya</p>
            <p className="text-gray-400">© 2024 Prefects Guild of Sri Bodhiraja Dhamma School 2024/25. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
