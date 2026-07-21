import Link from "next/link";
import { ZODIAC_SIGNS } from "@/lib/horoscope";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-600/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Welcome to the Cosmos
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
            Discover What the{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Stars
            </span>{" "}
            Have in Store
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Enter your birth details and receive a personalized horoscope reading —
            love, career, health, and cosmic guidance tailored to your zodiac sign.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/calculator"
              className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:from-violet-500 hover:to-indigo-500"
            >
              Get Your Reading
            </Link>
            <Link
              href="/zodiac"
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-violet-500/50 hover:bg-white/5"
            >
              Explore Zodiac Signs
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            How It Works
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-slate-400">
            Three simple steps to unlock your cosmic destiny
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { step: "01", title: "Enter Your Details", desc: "Provide your date of birth, and optionally your birth time and place.", icon: "📝" },
              { step: "02", title: "Find Your Sign", desc: "We calculate your zodiac sign based on your birth date automatically.", icon: "♈" },
              { step: "03", title: "Receive Your Reading", desc: "Get a personalized horoscope with love, career, health insights and more.", icon: "✨" },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-violet-500/30 hover:bg-white/[0.07]"
              >
                <span className="text-3xl">{item.icon}</span>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-violet-400">{item.step}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            The Twelve Zodiac Signs
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {ZODIAC_SIGNS.map((sign) => (
              <Link
                key={sign.name}
                href="/zodiac"
                className="group rounded-xl border border-white/10 bg-white/5 p-4 text-center transition hover:border-violet-500/40 hover:bg-violet-500/10"
              >
                <span className="text-3xl transition-transform group-hover:scale-125">{sign.symbol}</span>
                <p className="mt-2 text-sm font-semibold text-white">{sign.name}</p>
                <p className="text-xs text-slate-500">{sign.element}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-950/40 to-indigo-950/40 p-8 text-center sm:p-12">
          <span className="animate-float inline-block text-4xl">🌙</span>
          <h2 className="mt-4 text-2xl font-bold text-white">Ready to Explore Your Destiny?</h2>
          <p className="mt-3 text-slate-400">
            The universe has a message waiting for you. Start your cosmic journey today.
          </p>
          <Link
            href="/calculator"
            className="mt-8 inline-block rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:from-violet-500 hover:to-indigo-500"
          >
            Start Now — It&apos;s Free
          </Link>
        </div>
      </section>
    </>
  );
}
