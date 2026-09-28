import {
  ArrowRight,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { Link } from "react-router";
import { expeditionData } from "../../data/expeditions";

export default function FeaturedExpeditions() {
  const featuredExpeditions = expeditionData.slice(0, 2);

  return (
    <section className="mt-8">
      {/* Section Header */}
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Featured Expeditions
          </h2>

          <p className="mt-0.5 text-xs text-slate-500">
            Explore expeditions and India's polar journey
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

      {/* Featured Expedition Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {featuredExpeditions.map((expedition) => (
          <Link
            key={expedition.id}
            to={`/expeditions/${expedition.id}`}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-indigo-200 hover:shadow-md"
          >
            {/* Image */}
            <div className="relative h-44 overflow-hidden bg-slate-100">
              <img
                src={expedition.image}
                alt={expedition.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />

              {/* Status */}
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-indigo-700 shadow-sm backdrop-blur">
                {expedition.status}
              </span>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-indigo-700">
                {expedition.title}
              </h3>

              {/* Meta Information */}
              <div className="mt-2 flex flex-wrap gap-4 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <MapPin size={12} />
                  {expedition.location}
                </span>

                <span className="flex items-center gap-1">
                  <CalendarDays size={12} />
                  {expedition.date}
                </span>
              </div>

              {/* Description */}
              <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
                {expedition.description}
              </p>

              {/* CTA */}
              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-indigo-700">
                View expedition

                <ArrowRight
                  size={13}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}