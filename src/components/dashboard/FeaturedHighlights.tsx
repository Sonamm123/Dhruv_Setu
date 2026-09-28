import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router";
import { featuredHighlights } from "../../data/dashboard";

export default function FeaturedHighlights() {
  return (
    <section className="mt-7">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Featured Highlights
          </h2>

          <p className="mt-0.5 text-xs text-slate-500">
            Discover stories and activities from the polar regions
          </p>
        </div>

        <Link
          to="/expeditions"
          className="hidden items-center gap-1 text-xs font-medium text-indigo-700 hover:text-indigo-900 sm:flex"
        >
          View all
          <ArrowRight size={13} />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featuredHighlights.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-md"
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />

              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-indigo-700 shadow-sm backdrop-blur">
                {item.type}
              </span>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                <CalendarDays size={12} />
                <span>2024</span>
              </div>

              <h3 className="mt-2 text-sm font-semibold leading-5 text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
                {item.description}
              </p>

              <Link
                to={
                  item.type === "Expedition"
                    ? `/expeditions/${item.id}`
                    : `/research/${item.id}`
                }
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-indigo-700 hover:text-indigo-900"
              >
                Explore
                <ArrowRight size={13} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}