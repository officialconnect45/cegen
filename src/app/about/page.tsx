import Link from "next/link";

export const metadata = {
  title: "About — CEGEN",
  description: "Learn about CEGEN, your cosmic horoscope companion.",
};

export default function AboutPage() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            About CEGEN
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Your Gateway to the Stars
          </h1>
        </div>

        <div className="space-y-8 text-slate-300">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold text-white">What is CEGEN?</h2>
            <p className="mt-3 leading-relaxed text-slate-400">
              CEGEN is a cosmic horoscope generator that helps you explore the mysteries of
              astrology. By entering your date of birth, we determine your zodiac sign and
              provide a personalized reading covering love, career, health, and more.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold text-white">How It Works</h2>
            <p className="mt-3 leading-relaxed text-slate-400">
              Our calculator uses your birth date to identify your sun sign among the twelve
              zodiac constellations. Each reading is uniquely generated, drawing from a rich
              library of cosmic insights to deliver guidance that resonates with your sign&apos;s
              elemental energy.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold text-white">Our Mission</h2>
            <p className="mt-3 leading-relaxed text-slate-400">
              We believe everyone deserves a moment of reflection and wonder. CEGEN brings
              the ancient wisdom of astrology to the modern world — accessible, beautiful,
              and always free to use.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
            <h2 className="text-lg font-semibold text-amber-300">Disclaimer</h2>
            <p className="mt-3 leading-relaxed text-slate-400">
              CEGEN is designed for entertainment purposes only. Horoscope readings are
              randomly generated and should not be used as a substitute for professional
              medical, financial, or psychological advice. Always trust your own judgment
              when making important life decisions.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/calculator"
            className="inline-block rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white transition hover:from-violet-500 hover:to-indigo-500"
          >
            Try the Calculator
          </Link>
        </div>
      </div>
    </section>
  );
}
