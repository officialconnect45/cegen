import HoroscopeForm from "@/components/HoroscopeForm";

export const metadata = {
  title: "Horoscope Calculator — CEGEN",
  description: "Enter your birth details and get a personalized horoscope reading.",
};

export default function CalculatorPage() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Horoscope Calculator
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Your Cosmic Reading Awaits
          </h1>
          <p className="mt-4 text-slate-400">
            Fill in your birth details below. We&apos;ll determine your zodiac sign
            and generate a unique horoscope just for you.
          </p>
        </div>
        <HoroscopeForm />
      </div>
    </section>
  );
}
