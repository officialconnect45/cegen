import Link from "next/link";

type LegalPageLayoutProps = {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export default function LegalPageLayout({
  title,
  subtitle,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">Legal</p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{title}</h1>
          <p className="mt-3 text-slate-400">{subtitle}</p>
          <p className="mt-2 text-xs text-slate-500">Last updated: {lastUpdated}</p>
        </div>

        <div className="space-y-8 text-slate-300">{children}</div>

        <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-slate-400">
            Have questions about this policy? Contact us at{" "}
            <a href="mailto:legal@cegen.org" className="text-violet-300 hover:underline">
              legal@cegen.org
            </a>
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <Link href="/privacy-policy" className="text-violet-300 hover:underline">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="text-violet-300 hover:underline">Terms & Conditions</Link>
            <Link href="/cookie-policy" className="text-violet-300 hover:underline">Cookie Policy</Link>
            <Link href="/dmca" className="text-violet-300 hover:underline">DMCA</Link>
            <Link href="/disclaimer" className="text-violet-300 hover:underline">Disclaimer</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-400">{children}</div>
    </div>
  );
}

export { Section };
