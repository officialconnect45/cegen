import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#0d0b1e]/60">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-white">
              CE<span className="text-violet-400">GEN</span>
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Your personal cosmic guide. Discover what the stars have in store for you.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">Explore</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><Link href="/calculator" className="hover:text-violet-300">Horoscope Calculator</Link></li>
              <li><Link href="/zodiac" className="hover:text-violet-300">Zodiac Signs</Link></li>
              <li><Link href="/about" className="hover:text-violet-300">About Us</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">Disclaimer</p>
            <p className="mt-3 text-sm text-slate-400">
              For entertainment purposes only. Horoscope readings are randomly generated and not intended as professional advice.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} CEGEN. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
