import {
  CalendarDays,
  Image as ImageIcon,
  Play,
} from "lucide-react";
import type { MediaItem } from "../../data/media";

type MediaCardProps = {
  media: MediaItem;
};

export default function MediaCard({ media }: MediaCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg">
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <img
          src={media.image}
          alt={media.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Media type */}
        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-slate-700 shadow-sm backdrop-blur">
          {media.type === "Video" ? (
            <Play size={12} className="fill-current" />
          ) : (
            <ImageIcon size={12} />
          )}

          {media.type}
        </div>

        {/* Category */}
        <span className="absolute right-4 top-4 rounded-full bg-indigo-700/90 px-3 py-1.5 text-[10px] font-semibold text-white shadow-sm">
          {media.category}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
          <CalendarDays size={12} />
          {media.date}
        </div>

        <h3 className="mt-2 text-base font-semibold text-slate-900 group-hover:text-indigo-700">
          {media.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
          {media.description}
        </p>

        <div className="mt-4 text-xs font-semibold text-indigo-700">
          {media.type === "Video" ? "Watch media" : "View image"}
        </div>
      </div>
    </article>
  );
}