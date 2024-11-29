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
 *  Created on Sat Nov 23 2024
 *
 */

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

const aclonica = localFont({
  src: "./fonts/Aclonica-Regular.woff2",
  variable: "--font-aclonica",
  display: "swap",
});
const alatsi = localFont({
  src: "./fonts/Alatsi-Regular.woff2",
  variable: "--font-alatsi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SBDV",
  description: "Official Web Portal of Sri Bodhiraja Dhamma School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${aclonica.variable} ${alatsi.variable}`}> 
      <body className="antialiased">
        <ThemeProvider 
        attribute="class"
        defaultTheme="dark"
        enableSystem
        >
        <Navbar />
        {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
