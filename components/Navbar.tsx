"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "About Me",
    path: "/about",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "contact me",
    path: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-7">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-primary"  // condition for checking active class
            } capitalize text-xs hover:text-primary`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  )
}

export default Navbar
