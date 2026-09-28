import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative min-h-[220px] overflow-hidden rounded-2xl bg-slate-900">
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1517783992600-8c5c2b9f1d67?auto=format&fit=crop&w=1600&q=80"
        alt="Polar landscape"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/55 to-slate-900/10" />

      {/* Content */}
      <div className="relative flex min-h-[220px] max-w-xl flex-col justify-center px-7 py-8 text-white">
        <span className="mb-3 w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
          Featured
        </span>

        <h2 className="text-2xl font-semibold leading-tight md:text-3xl">
          Dive Deeper into the Polar World
        </h2>

        <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
          Explore research, expeditions, discoveries and stories
          from India's polar journey.
        </p>

        <button
          type="button"
          className="mt-5 flex w-fit items-center gap-2 rounded-lg bg-indigo-700 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-800"
        >
          Explore now
          <ArrowRight size={15} />
        </button>
      </div>
    </section>
  );
}