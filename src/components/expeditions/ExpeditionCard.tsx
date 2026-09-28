import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router";
import type { Expedition } from "../../data/expeditions";

type ExpeditionCardProps = {
  expedition: Expedition;
};

const statusStyles = {
  Upcoming: "bg-amber-50 text-amber-700",
  Ongoing: "bg-emerald-50 text-emerald-700",
  Completed: "bg-slate-100 text-slate-600",
};

export default function ExpeditionCard({
  expedition,
}: ExpeditionCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/expeditions/${expedition.id}`}>
        <div className="relative h-52 overflow-hidden bg-slate-100">
          <img
            src={expedition.image}
            alt={expedition.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <span
            className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-[11px] font-semibold ${statusStyles[expedition.status]}`}
          >
            {expedition.status}
          </span>
        </div>

        <div className="p-5">
          <div className="flex flex-wrap gap-4 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <MapPin size={13} />
              {expedition.location}
            </span>

            <span className="flex items-center gap-1">
              <CalendarDays size={13} />
              {expedition.date}
            </span>
          </div>

          <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-700">
            {expedition.title}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
            {expedition.description}
          </p>

          <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-indigo-700">
            View expedition
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </div>
        </div>
      </Link>
    </article>
  );
}