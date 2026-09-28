import { ArrowUpRight } from "lucide-react";
import type { ProfileStat } from "../../data/profile";

type StatCardProps = {
  stat: ProfileStat;
};

export default function StatCard({ stat }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-slate-500">
            {stat.label}
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {stat.value}
          </p>
        </div>

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
          <ArrowUpRight size={15} />
        </div>
      </div>

      <p className="mt-2 text-[11px] text-slate-400">
        {stat.description}
      </p>
    </div>
  );
}