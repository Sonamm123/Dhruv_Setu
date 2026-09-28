import {
  ArrowRight,
  BookOpen,
  Clock3,
} from "lucide-react";
import type { LearnItem } from "../../data/learn";

type LearnCardProps = {
  item: LearnItem;
};

const levelStyles = {
  Beginner: "bg-emerald-50 text-emerald-700",
  Intermediate: "bg-amber-50 text-amber-700",
  Advanced: "bg-indigo-50 text-indigo-700",
};

export default function LearnCard({ item }: LearnCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-semibold ${levelStyles[item.level]}`}
        >
          {item.level}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold text-indigo-700">
            {item.category}
          </span>

          <span className="flex items-center gap-1 text-[11px] text-slate-400">
            <Clock3 size={12} />
            {item.duration}
          </span>
        </div>

        <h3 className="mt-3 text-base font-semibold text-slate-900 group-hover:text-indigo-700">
          {item.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
          {item.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-500"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-indigo-700">
          <BookOpen size={14} />
          Start learning
          <ArrowRight
            size={13}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </article>
  );
}