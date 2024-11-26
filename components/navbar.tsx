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
 *  Created on Wed Nov 27 2024
 *  
 */

"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import main_logo from "@/public/main_logo.webp";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const more_components: { title: string; href: string; description: string }[] =
  [
    {
      title: "Extra-Curricular Activites",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Resources",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Gallary",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "About LMS",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
  ];

const pg_components: { title: string; href: string; description: string }[] = [
  {
    title: "Board of Officials 2024/25",
    href: "/docs/primitives/hover-card",
    description:
      "Board of Officials of Sri Bodhiraja Dhamma School's Prefects Guild.",
  },
  {
    title: "History",
    href: "/docs/primitives/progress",
    description: "Unfold the Legacy.",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 ml-8 mr-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 md:16 items-center">
        <div className="flex items-center space-x-4 lg:space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={main_logo} alt="main_pic" className="w-[150px]" />
          </Link>
        </div>
        <div className="flex flex-1 items-center ml-8 space-x-2">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-orange-400">About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              About
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              About Sri Bodhiraja Dhamma School
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Bellanvila Temple">
                        Introduction to Bellanvila Temple.
                      </ListItem>
                      <ListItem
                        href="/docs/installation"
                        title="Administration"
                      >
                        Structure and Administration of Sri Bodhiraja Dhamma
                        School.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Teaching Panel"
                      >
                        Our Resource Persons, Our Guide.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-orange-400">Prefects Guild</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {pg_components.map((pg_component) => (
                        <ListItem
                          key={pg_component.title}
                          title={pg_component.title}
                          href={pg_component.href}
                        >
                          {pg_component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-orange-400">More</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {more_components.map((more_component) => (
                        <ListItem
                          key={more_component.title}
                          title={more_component.title}
                          href={more_component.href}
                        >
                          {more_component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex rounded text-orange-500 hover:text-slate-100">
            Access LMS
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="pr-0">
              <SheetTitle></SheetTitle>
              <MobileLink
                href="/"
                className="flex items-center"
                onOpenChange={setIsOpen}
              >
                <Image src={main_logo} alt="main_pic" className="w-[150px]" />
              </MobileLink>
              <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-3">
                  <MobileLink href="/docs" onOpenChange={setIsOpen}>
                    About
                  </MobileLink>
                  <MobileLink href="/docs" onOpenChange={setIsOpen} className="ml-6 text-slate-500">
                    Bellanvila Temple
                  </MobileLink>
                  <MobileLink href="/docs" onOpenChange={setIsOpen} className="ml-6 text-slate-500">
                    Sri Bodhiraja Dhamma School
                  </MobileLink>
                  <MobileLink href="/docs" onOpenChange={setIsOpen} className="ml-6 text-slate-500">
                    Administration
                  </MobileLink>
                  <MobileLink href="/docs" onOpenChange={setIsOpen} className="ml-6 text-slate-500">
                    Teaching Panal
                  </MobileLink>
                  <MobileLink href="/docs/components" onOpenChange={setIsOpen}>
                    Prefects Guild
                  </MobileLink>
                  <MobileLink href="/docs" onOpenChange={setIsOpen} className="ml-8 text-slate-500">
                    Board of Officials 2024/25
                  </MobileLink>
                  <MobileLink href="/docs" onOpenChange={setIsOpen} className="ml-8 text-slate-500">
                    Our Legacy
                  </MobileLink>
                  <MobileLink href="/themes" onOpenChange={setIsOpen}>
                    More
                  </MobileLink>
                  <MobileLink href="/docs" onOpenChange={setIsOpen} className="ml-8 text-slate-500">
                    Extra-Curricular Activities
                  </MobileLink>
                  <MobileLink href="/docs" onOpenChange={setIsOpen} className="ml-8 text-slate-500">
                    Resources
                  </MobileLink>
                  <MobileLink href="/docs" onOpenChange={setIsOpen} className="ml-8 text-slate-500">
                    Gallary
                  </MobileLink>
                  <MobileLink href="/docs" onOpenChange={setIsOpen} className="ml-8 text-slate-500">
                    About LMS
                  </MobileLink>
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <Button
                  variant="outline"
                  className="w-full text-orange-400"
                  onClick={() => setIsOpen(false)}
                >
                  Access LMS
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

interface MobileLinkProps extends React.PropsWithChildren {
  href: string;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
