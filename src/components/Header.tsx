"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-black/[.06] animate-fade-in">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/corro_logo.png" alt="Corra Club" width={56} height={56} />
          <span className="font-semibold tracking-tight text-lg">Corra Club</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="#about" className="hover:underline">
            About Corra Club
          </Link>
          <Link href="#brands" className="hover:underline">
            Explore Brands
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-md bg-green-700 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-green-800"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}


