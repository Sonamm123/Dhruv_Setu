import {
  Bell,
  ChevronDown,
  MessageSquare,
  Search,
  MoreVertical,
} from "lucide-react";

export default function ResearcherTopBar() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-5">
      <div className="relative w-full max-w-xl">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          type="text"
          placeholder="Search Anything"
          className="h-8 w-full rounded-full bg-indigo-950 pl-9 pr-4 text-xs text-white outline-none placeholder:text-slate-300"
        />
      </div>

      <div className="ml-5 flex items-center gap-4">
        <Bell size={17} className="text-indigo-950" />

        <MessageSquare size={17} className="text-indigo-950" />

        <MoreVertical size={17} className="text-indigo-950" />

        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-indigo-950">
            RK
          </div>

          <ChevronDown size={14} className="text-indigo-950" />
        </div>
      </div>
    </header>
  );
}
