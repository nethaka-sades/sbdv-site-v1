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
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

// metadata
import type { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Sri Bodhiraja Dhamma School",
  description: "Official Web Portal of Sri Bodhiraja Dhamma School",
};

//fonts
import localFont from "next/font/local";
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

// vercel analytics and speed insights
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "@/components/theme-provider";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

import LoadingScreen from "@/components/LoadingScreen";
import AuthButton from "@/components/HeaderAuth";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const site_status = process.env.SITE_STATUS;
  console.log(site_status);
  

  return (
    <html
      lang="en"
      className={`${aclonica.variable} ${alatsi.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="SBDV" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {site_status === "true" ? (
            <main>
              <Navbar>
                <AuthButton />
              </Navbar>
              <LoadingScreen />
              {children}
              <Footer />
            </main>
          ) : (
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center space-y-6 p-6">
                <h1 className="text-4xl font-bold text-white">
                  Under Maintenance
                </h1>
                <p className="text-lg text-neutral-200 max-w-md">
                  We&apos;re performing some scheduled maintenance. We&apos;ll
                  be back online shortly.
                </p>
              </div>
            </div>
          )}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
