import {
  Bell,
  ChevronDown,
  MessageSquare,
  Search,
} from "lucide-react";

export default function AdminTopBar() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-5">
      <div className="relative w-full max-w-xl">
        <Search
          size={17}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search papers, expeditions, datasets, media and more..."
          className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:bg-white"
        />
      </div>

      <div className="ml-5 flex items-center gap-4">
        <button
          type="button"
          className="relative text-slate-500 hover:text-slate-900"
        >
          <Bell size={18} />
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <button
          type="button"
          className="text-slate-500 hover:text-slate-900"
        >
          <MessageSquare size={18} />
        </button>

        <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-700">
            AD
          </div>

          <div className="hidden sm:block">
            <p className="text-xs font-semibold text-slate-800">
              Admin
            </p>
            <p className="text-[10px] text-slate-400">
              Administrator
            </p>
          </div>

          <ChevronDown size={14} className="text-slate-400" />
        </div>
      </div>
    </header>
  );
}
