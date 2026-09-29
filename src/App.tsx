import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router";

import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import ResearcherLayout from "./layouts/ResearcherLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import Personalized from "./pages/Personalized/Personalized";

import Research from "./pages/Research/Research";
import ResearchDetail from "./pages/ResearchDetail/ResearchDetail";

import Expeditions from "./pages/Expeditions/Expeditions";
import ExpeditionDetail from "./pages/ExpeditionDetail/ExpeditionDetail";

import Media from "./pages/Media/Media";
import Learn from "./pages/Learn/Learn";
import Map from "./pages/Map/Map";
import Profile from "./pages/Profile/Profile";

import ResearcherDashboard from "./pages/ResearcherDashboard/ResearcherDashboard";
import ResearcherPlaceholder from "./pages/ResearcherPlaceholder/ResearcherPlaceholder";

import ResearcherResearch from "./pages/ResearcherResearch/ResearcherResearch";
import ResearcherNewEntry from "./pages/ResearcherNewEntry/ResearcherNewEntry";

import ResearcherAddContent from "./pages/ResearcherAddContent/ResearcherAddContent";
import ResearcherLinkWork from "./pages/ResearcherLinkWork/ResearcherLinkWork";

function Landing() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <h1 className="text-3xl font-semibold text-slate-900">
        PolarConnect India
      </h1>
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-2xl font-semibold">
        Page Not Found
      </h1>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing */}
        <Route
          path="/"
          element={<Landing />}
        />

        {/* =========================
            USER / PUBLIC PORTAL
            ========================= */}
        <Route element={<AuthenticatedLayout />}>
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/personalized"
            element={<Personalized />}
          />

          <Route
            path="/research"
            element={<Research />}
          />

          <Route
            path="/research/:id"
            element={<ResearchDetail />}
          />

          <Route
            path="/expeditions"
            element={<Expeditions />}
          />

          <Route
            path="/expeditions/:id"
            element={<ExpeditionDetail />}
          />

          <Route
            path="/media"
            element={<Media />}
          />
        </Route>

        {/* These are existing routes from the current project */}
        <Route
          path="/learn"
          element={<Learn />}
        />

        <Route
          path="/map"
          element={<Map />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* =========================
            RESEARCHER PORTAL
            ========================= */}
        <Route element={<ResearcherLayout />}>
          {/* Researcher Dashboard */}
          <Route
            path="/researcher"
            element={<ResearcherDashboard />}
          />

          {/* Existing Research */}
          <Route
            path="/researcher/research"
            element={<ResearcherResearch />}
          />

          {/* Reports */}
          <Route
            path="/researcher/reports"
            element={<ResearcherPlaceholder />}
          />

          {/* New Entry */}
          <Route
            path="/researcher/new-entry"
            element={<ResearcherNewEntry />}
          />

          <Route
  path="/researcher/new-entry/content"
  element={<ResearcherAddContent />}
/>
<Route
  path="/researcher/new-entry/link-work"
  element={<ResearcherLinkWork />}
/>


          {/* My Submission */}
          <Route
            path="/researcher/submissions"
            element={<ResearcherPlaceholder />}
          />

          {/* Researcher Profile */}
          <Route
            path="/researcher/profile"
            element={<ResearcherPlaceholder />}
          />

          {/* Researcher Settings */}
          <Route
            path="/researcher/settings"
            element={<ResearcherPlaceholder />}
          />
        </Route>

        {/* =========================
            404
            ========================= */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}