'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
  <Image
    src="/logo_lets_go_buddy.png"   // place logo file in /public
    alt="Lets Go Buddy"
    width={32}
    height={32}
    className="rounded-full"
  />
  <span className="font-semibold tracking-tight"></span>
</Link>
          <span className="font-semibold tracking-tight">Lets Go Buddy</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/tours" className="hover:text-indigo-600">
            Explore
          </Link>
          <Link href="/about" className="hover:text-indigo-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-indigo-600">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
