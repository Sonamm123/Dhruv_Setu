import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
} from "lucide-react";
import { Link, useParams } from "react-router";
import { expeditionData } from "../../data/expeditions";

const statusStyles = {
  Upcoming: "bg-amber-50 text-amber-700",
  Ongoing: "bg-emerald-50 text-emerald-700",
  Completed: "bg-slate-100 text-slate-600",
};

export default function ExpeditionDetail() {
  const { id } = useParams();

  const expedition = expeditionData.find(
    (item) => item.id === id,
  );

  if (!expedition) {
    return (
      <div className="px-5 py-20 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">
          Expedition not found
        </h1>

        <Link
          to="/expeditions"
          className="mt-4 inline-block text-sm font-medium text-indigo-700"
        >
          Back to Expeditions
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-6 lg:px-7">
      <Link
        to="/expeditions"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-700"
      >
        <ArrowLeft size={16} />
        Back to Expeditions
      </Link>

      <div className="mt-6 overflow-hidden rounded-2xl bg-slate-900">
        <img
          src={expedition.image}
          alt={expedition.title}
          className="h-[320px] w-full object-cover opacity-80 md:h-[440px]"
        />
      </div>

      <div className="grid gap-8 py-8 lg:grid-cols-[1fr_320px]">
        <main>
          <span
            className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${statusStyles[expedition.status]}`}
          >
            {expedition.status}
          </span>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            {expedition.title}
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600">
            {expedition.description}
          </p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Research Objectives
            </h2>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {expedition.objectives.map((objective) => (
                <div
                  key={objective}
                  className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-indigo-600"
                  />

                  <span className="text-sm leading-6 text-slate-600">
                    {objective}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-slate-900">
              Expedition Timeline
            </h2>

            <div className="mt-5 space-y-4">
              {expedition.timeline.map((item, index) => (
                <div
                  key={item.phase}
                  className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-700">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.phase}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold text-slate-900">
            Expedition Information
          </h2>

          <div className="mt-5 space-y-5">
            <div className="flex gap-3">
              <MapPin className="text-indigo-600" size={18} />

              <div>
                <p className="text-[11px] text-slate-400">
                  Location
                </p>

                <p className="mt-1 text-sm font-medium text-slate-800">
                  {expedition.location}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CalendarDays
                className="text-indigo-600"
                size={18}
              />

              <div>
                <p className="text-[11px] text-slate-400">
                  Period
                </p>

                <p className="mt-1 text-sm font-medium text-slate-800">
                  {expedition.date}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock3 className="text-indigo-600" size={18} />

              <div>
                <p className="text-[11px] text-slate-400">
                  Duration
                </p>

                <p className="mt-1 text-sm font-medium text-slate-800">
                  {expedition.duration}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}