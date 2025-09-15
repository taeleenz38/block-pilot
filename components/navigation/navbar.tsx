import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 p-10 w-44 h-screen bg-primary border-r-2 border-primary-border z-50 flex flex-col justify-between">
      <div>
        <Link href="/" className="w-full flex justify-center mb-12">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
        </Link>
        <div className="flex flex-col gap-6 font-semibold text-xl">
          <Link href="/dashboard" className="hover:text-blue-300 duration-150">
            Dashboard
          </Link>
          <div className="border-t border-primary-border"></div>
          <Link href="/portfolio" className="hover:text-blue-300 duration-150">
            Portfolio
          </Link>
          <div className="border-t border-primary-border"></div>
          <Link href="/education" className="hover:text-blue-300 duration-150">
            Education
          </Link>
          <div className="border-t border-primary-border"></div>
          <Link href="/news" className="hover:text-blue-300 duration-150">
            News
          </Link>
        </div>
      </div>
      <Link href="/" className="opacity-50 hover:opacity-100 duration-150">
        taelee.dev
      </Link>
    </div>
  );
};

export default Navbar;
