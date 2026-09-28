import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router";
import type { ResearchItem } from "../../data/research";

type ResearchCardProps = {
  research: ResearchItem;
};

export default function ResearchCard({ research }: ResearchCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/research/${research.id}`}>
        <div className="h-48 overflow-hidden bg-slate-100">
          <img
            src={research.image}
            alt={research.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-semibold text-indigo-700">
              {research.category}
            </span>

            <span className="flex items-center gap-1 text-[11px] text-slate-400">
              <CalendarDays size={12} />
              {research.date}
            </span>
          </div>

          <h3 className="mt-4 line-clamp-2 text-base font-semibold leading-6 text-slate-900 group-hover:text-indigo-700">
            {research.title}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
            {research.summary}
          </p>

          <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-indigo-700">
            Explore research
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