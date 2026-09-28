import {
  Bell,
  ChevronDown,
  Search,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-5">
      {/* Brand */}
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-700 text-sm font-bold text-white">
          P
        </div>

        <span className="text-sm font-semibold text-slate-900">
          PolarConnect India
        </span>
      </div>

      {/* Search */}
      <div className="mx-6 hidden max-w-md flex-1 md:block">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="search"
            placeholder="Search anything..."
            className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm text-slate-700 outline-none transition focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-50 hover:text-slate-800"
          aria-label="Notifications"
        >
          <Bell size={18} strokeWidth={1.8} />

          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600" />
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-slate-50"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700">
            RK
          </div>

          <span className="hidden text-sm font-medium text-slate-700 md:block">
            R Kalu
          </span>

          <ChevronDown
            size={15}
            className="hidden text-slate-400 md:block"
          />
        </button>
      </div>
    </header>
  );
}