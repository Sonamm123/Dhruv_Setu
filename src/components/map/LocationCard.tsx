import {
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import type { PolarLocation } from "../../data/locations";

type LocationCardProps = {
  location: PolarLocation;
  selected: boolean;
  onSelect: () => void;
};

export default function LocationCard({
  location,
  selected,
  onSelect,
}: LocationCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full overflow-hidden rounded-2xl border bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
        selected
          ? "border-indigo-400 ring-2 ring-indigo-100"
          : "border-slate-200"
      }`}
    >
      <div className="relative h-40 overflow-hidden bg-slate-100">
        <img
          src={location.image}
          alt={location.name}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-indigo-700 shadow-sm">
          {location.region}
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              {location.name}
            </h3>

            <p className="mt-1 flex items-center gap-1 text-[11px] text-slate-400">
              <MapPin size={11} />
              {location.country}
            </p>
          </div>

          <ArrowUpRight
            size={16}
            className="shrink-0 text-slate-400"
          />
        </div>

        <p className="mt-3 line-clamp-2 text-xs leading-5 text-slate-500">
          {location.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {location.focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-500"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}