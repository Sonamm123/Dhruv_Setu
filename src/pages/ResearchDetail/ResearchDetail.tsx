import {
  ArrowLeft,
  CalendarDays,
  Share2,
  UserRound,
} from "lucide-react";
import { Link, useParams } from "react-router";
import { researchData } from "../../data/research";

export default function ResearchDetail() {
  const { id } = useParams();

  const research = researchData.find((item) => item.id === id);

  if (!research) {
    return (
      <div className="mx-auto max-w-4xl px-5 py-20 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">
          Research not found
        </h1>

        <Link
          to="/research"
          className="mt-4 inline-flex text-sm font-medium text-indigo-700"
        >
          ← Back to Research
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-6 lg:px-7">
      <Link
        to="/research"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-700"
      >
        <ArrowLeft size={16} />
        Back to Research
      </Link>

      <div className="mt-6 overflow-hidden rounded-2xl bg-slate-900">
        <img
          src={research.image}
          alt={research.title}
          className="h-[300px] w-full object-cover opacity-80 md:h-[420px]"
        />
      </div>

      <article className="mx-auto max-w-4xl py-8">
        <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
          {research.category}
        </span>

        <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
          {research.title}
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          {research.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-5 border-y border-slate-200 py-4 text-xs text-slate-500">
          <span className="flex items-center gap-2">
            <CalendarDays size={15} />
            {research.date}
          </span>

          <span className="flex items-center gap-2">
            <UserRound size={15} />
            {research.author}
          </span>

          <button
            type="button"
            className="flex items-center gap-2 hover:text-indigo-700"
          >
            <Share2 size={15} />
            Share
          </button>
        </div>

        <div className="mt-8 space-y-6">
          {research.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-8 text-slate-700"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {research.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}