"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const linkClass = (path) => {
    return path == pathname
      ? "font-extrabold text-blue-500"
      : "font-light text-gray-500";
  };
  
  return (
    <div className="flex justify-center gap-5 bg-gray-900 py-8">
      <Link href={"/"} className={linkClass("/")}>
        Home
      </Link>
      <Link href={"/about"} className={linkClass("/about")}>
        About
      </Link>
      <Link href={"/contact"} className={linkClass("/contact")}>
        Contact
      </Link>
      {/* <Link
        href={"/userData"}
        className={
          pathname.startsWith("/userData")
            ? "font-extrabold text-blue-500"
            : "font-light text-gray-500"
        }
      >
        UserData
      </Link> */}
      <Link href={"/projects"} className={pathname.startsWith("/projects")?"font-extrabold text-blue-500":"font-light text-gray-500"}>Projects</Link>
      <Link href={"/products"}
      className={pathname.startsWith("/products") ? "font-extrabold text-blue-500" : "font-light text-gray-500"}
      >Products</Link>
    </div>
  );
};

export default Navbar;
