import Link from "next/link";

const EXPLORE_LINKS = [
  { href: "/calculator", label: "Horoscope Calculator" },
  { href: "/zodiac", label: "Zodiac Signs" },
  { href: "/about", label: "About Us" },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/dmca", label: "DMCA Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#0d0b1e]/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-lg font-bold text-white">
              CE<span className="text-violet-400">GEN</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
              Your personal cosmic guide. Discover what the stars have in store for you.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-violet-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">Legal</p>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-violet-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="mailto:support@cegen.org" className="transition hover:text-violet-300">
                  support@cegen.org
                </a>
              </li>
              <li>
                <a href="mailto:legal@cegen.org" className="transition hover:text-violet-300">
                  legal@cegen.org
                </a>
              </li>
              <li>
                <a href="mailto:dmca@cegen.org" className="transition hover:text-violet-300">
                  dmca@cegen.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} CEGEN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
