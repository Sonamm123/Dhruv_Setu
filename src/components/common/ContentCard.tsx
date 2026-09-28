import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router";
import type { PersonalizedContent } from "../../data/personalized";

type ContentCardProps = {
  content: PersonalizedContent;
};

export default function ContentCard({ content }: ContentCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md">
      <Link to={`/research/${content.id}`}>
        <div className="h-40 overflow-hidden bg-slate-100">
          <img
            src={content.image}
            alt={content.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between gap-2">
            <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold text-indigo-700">
              {content.category}
            </span>

            <span className="flex items-center gap-1 text-[10px] text-slate-400">
              <CalendarDays size={11} />
              {content.date}
            </span>
          </div>

          <h3 className="mt-3 line-clamp-2 text-sm font-semibold leading-5 text-slate-900 group-hover:text-indigo-700">
            {content.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
            {content.description}
          </p>

          <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-indigo-700">
            Read more
            <ArrowRight
              size={13}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </div>
        </div>
      </Link>
    </article>
  );
}