import Link from "next/link";
import { ZODIAC_SIGNS } from "@/lib/horoscope";

export const metadata = {
  title: "Zodiac Signs — CEGEN",
  description: "Learn about all twelve zodiac signs, their elements, traits, and date ranges.",
};

const ELEMENT_COLORS: Record<string, string> = {
  Fire: "from-orange-500/20 to-red-500/20 border-orange-500/30 text-orange-300",
  Earth: "from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-300",
  Air: "from-sky-500/20 to-blue-500/20 border-sky-500/30 text-sky-300",
  Water: "from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-300",
};

export default function ZodiacPage() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Zodiac Guide
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            The Twelve Zodiac Signs
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Each sign carries unique energy shaped by its element and position in the cosmos.
            Find yours and explore what makes it special.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ZODIAC_SIGNS.map((sign) => {
            const colorClass = ELEMENT_COLORS[sign.element] ?? "";
            return (
              <div
                key={sign.name}
                className={`rounded-2xl border bg-gradient-to-br p-6 ${colorClass}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-4xl">{sign.symbol}</span>
                    <h2 className="mt-3 text-xl font-bold text-white">{sign.name}</h2>
                    <p className="text-sm text-slate-400">{sign.dates}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-300">
                    {sign.element}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {sign.traits.map((trait) => (
                    <span
                      key={trait}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400">Know your sign? Get your personalized reading.</p>
          <Link
            href="/calculator"
            className="mt-4 inline-block rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3 text-sm font-semibold text-white transition hover:from-violet-500 hover:to-indigo-500"
          >
            Get My Horoscope
          </Link>
        </div>
      </div>
    </section>
  );
}
