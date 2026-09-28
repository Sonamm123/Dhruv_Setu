import { ArrowRight, BookOpen, Clock3 } from "lucide-react";
import { Link } from "react-router";

const recommendedContent = [
  {
    id: 1,
    title: "Impact of Climate Change on Antarctic Ice Shelf",
    category: "Research",
    readTime: "8 min read",
    description:
      "Understand recent observations and research surrounding changes in Antarctic ice shelves.",
  },
  {
    id: 2,
    title: "Life and Ecosystems of the Polar Regions",
    category: "Knowledge",
    readTime: "6 min read",
    description:
      "Explore the unique ecosystems and species that survive in extreme polar environments.",
  },
  {
    id: 3,
    title: "India's Journey in Polar Research",
    category: "Research",
    readTime: "10 min read",
    description:
      "Learn about India's scientific presence and contributions to polar research.",
  },
];

export default function RecommendedContent() {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Recommended for You
          </h2>

          <p className="mt-0.5 text-xs text-slate-500">
            Content selected based on your interests
          </p>
        </div>

        <Link
          to="/research"
          className="hidden items-center gap-1 text-xs font-medium text-indigo-700 hover:text-indigo-900 sm:flex"
        >
          Explore all
          <ArrowRight size={13} />
        </Link>
      </div>

      <div className="space-y-3">
        {recommendedContent.map((content) => (
          <Link
            key={content.id}
            to={`/research/${content.id}`}
            className="group flex gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-indigo-200 hover:shadow-sm"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
              <BookOpen size={19} strokeWidth={1.8} />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-700">
                  {content.category}
                </span>

                <span className="flex items-center gap-1 text-[10px] text-slate-400">
                  <Clock3 size={11} />
                  {content.readTime}
                </span>
              </div>

              <h3 className="mt-1.5 text-sm font-semibold text-slate-900 group-hover:text-indigo-700">
                {content.title}
              </h3>

              <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
                {content.description}
              </p>
            </div>

            <ArrowRight
              size={16}
              className="mt-1 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-indigo-600"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}