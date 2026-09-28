import { Outlet } from "react-router";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

export default function AuthenticatedLayout() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-50">
      <Navbar />

      <div className="flex min-h-0 flex-1">
        <Sidebar />

        <main className="min-w-0 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}