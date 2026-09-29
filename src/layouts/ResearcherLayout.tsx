import { Outlet } from "react-router";

import ResearcherSidebar from "../components/researcher/ResearcherSidebar";
import ResearcherTopBar from "../components/researcher/ResearcherTopBar";
import { ResearcherEntryProvider } from "../context/ResearcherEntryContext";

export default function ResearcherLayout() {
  return (
    <ResearcherEntryProvider>
      <div className="flex h-screen overflow-hidden bg-slate-50">
        <ResearcherSidebar />

        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <ResearcherTopBar />

          <main className="min-h-0 flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </ResearcherEntryProvider>
  );
}