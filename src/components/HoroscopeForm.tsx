"use client";

import { useState } from "react";
import { generateHoroscope, getZodiacSign, type HoroscopeResult } from "@/lib/horoscope";

export default function HoroscopeForm() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [result, setResult] = useState<HoroscopeResult | null>(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!dob) return;

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const date = new Date(dob);
      const sign = getZodiacSign(date.getMonth() + 1, date.getDate());
      setResult(generateHoroscope(sign));
      setLoading(false);
    }, 1200);
  }

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="dob" className="mb-1.5 block text-sm font-medium text-slate-300">
              Date of Birth <span className="text-violet-400">*</span>
            </label>
            <input
              id="dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 [color-scheme:dark]"
            />
          </div>
          <div>
            <label htmlFor="birthTime" className="mb-1.5 block text-sm font-medium text-slate-300">
              Birth Time
            </label>
            <input
              id="birthTime"
              type="time"
              value={birthTime}
              onChange={(e) => setBirthTime(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 [color-scheme:dark]"
            />
          </div>
        </div>

        <div>
          <label htmlFor="birthPlace" className="mb-1.5 block text-sm font-medium text-slate-300">
            Birth Place
          </label>
          <input
            id="birthPlace"
            type="text"
            value={birthPlace}
            onChange={(e) => setBirthPlace(e.target.value)}
            placeholder="City, Country"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          />
        </div>

        <button
          type="submit"
          disabled={loading || !dob}
          className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:from-violet-500 hover:to-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Reading the stars...
            </span>
          ) : (
            "Reveal My Horoscope"
          )}
        </button>
      </form>

      {result && (
        <div className="mt-10 animate-fade-in rounded-2xl border border-violet-500/30 bg-gradient-to-b from-violet-950/50 to-indigo-950/30 p-6 sm:p-8">
          <div className="text-center">
            <span className="text-5xl">{result.sign.symbol}</span>
            <h3 className="mt-2 text-2xl font-bold text-white">
              {name ? `${name}, you are ` : "You are "}
              <span className="text-violet-300">{result.sign.name}</span>
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              {result.sign.element} Sign · {result.sign.dates}
            </p>
            <p className="mt-2 text-lg text-amber-300">{result.mood}</p>
          </div>

          <div className="mt-8 space-y-5">
            <ReadingCard title="Overall" icon="🌟" text={result.overall} />
            <div className="grid gap-5 sm:grid-cols-2">
              <ReadingCard title="Love" icon="💕" text={result.love} />
              <ReadingCard title="Career" icon="💼" text={result.career} />
              <ReadingCard title="Health" icon="🌿" text={result.health} />
              <ReadingCard title="Advice" icon="🔮" text={result.advice} />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 rounded-xl bg-white/5 p-4 text-center">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400">Lucky Number</p>
              <p className="mt-1 text-2xl font-bold text-amber-300">{result.luckyNumber}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400">Lucky Color</p>
              <p className="mt-1 text-sm font-semibold text-violet-300">{result.luckyColor}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400">Compatibility</p>
              <p className="mt-1 text-sm font-semibold text-pink-300">{result.compatibility}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              const date = new Date(dob);
              const sign = getZodiacSign(date.getMonth() + 1, date.getDate());
              setResult(generateHoroscope(sign));
            }}
            className="mt-6 w-full rounded-xl border border-violet-500/30 py-3 text-sm font-medium text-violet-300 transition hover:bg-violet-500/10"
          >
            Generate New Reading
          </button>
        </div>
      )}
    </div>
  );
}

function ReadingCard({ title, icon, text }: { title: string; icon: string; text: string }) {
  return (
    <div className="rounded-xl bg-white/5 p-4">
      <p className="flex items-center gap-2 text-sm font-semibold text-violet-300">
        <span>{icon}</span> {title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{text}</p>
    </div>
  );
}
