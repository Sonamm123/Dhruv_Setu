import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router";

import Login from "./pages/Login/Login";

import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import ResearcherLayout from "./layouts/ResearcherLayout";
import AdminLayout from "./layouts/AdminLayout";

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

import ResearcherReview from "./pages/ResearcherReview/ResearcherReview";
import ResearcherSubmissions from "./pages/ResearcherSubmissions/ResearcherSubmissions";

import ResearcherReports from "./pages/ResearcherReports/ResearcherReports";
import ResearcherProfile from "./pages/ResearcherProfile/ResearcherProfile";

import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminResearcherVerification from "./pages/AdminResearcherVerification/AdminResearcherVerification";
import AdminSubmissionQueue from "./pages/AdminSubmissionQueue/AdminSubmissionQueue";
import AdminSubmissionReview from "./pages/AdminSubmissionReview/AdminSubmissionReview";
import AdminContent from "./pages/AdminContent/AdminContent";
import AdminUsers from "./pages/AdminUsers/AdminUsers";

function Landing() {
  return <Login />;
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
        {/* =========================
            LANDING
            ========================= */}
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

        {/* Existing standalone routes */}
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
            element={<ResearcherReports />}
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

          <Route
            path="/researcher/new-entry/review"
            element={<ResearcherReview />}
          />

          {/* My Submission */}
          <Route
            path="/researcher/submissions"
            element={<ResearcherSubmissions />}
          />

          {/* Researcher Profile */}
          <Route
            path="/researcher/profile"
            element={<ResearcherProfile />}
          />

          {/* Researcher Settings */}
          <Route
            path="/researcher/settings"
            element={<ResearcherPlaceholder />}
          />
        </Route>

        {/* =========================
            ADMIN PORTAL
            ========================= */}
        <Route element={<AdminLayout />}>
          <Route
            path="/admin"
            element={<AdminDashboard />}
          />
          <Route
    path="/admin/researcher-verification"
    element={<AdminResearcherVerification />}
  />
      <Route
  path="/admin/submission-queue"
  element={<AdminSubmissionQueue />}
/>

      <Route
    path="/admin/submission-review/:id"
    element={<AdminSubmissionReview />}
  />
     <Route path="/admin/content" element={<AdminContent />} />
      
      <Route path="/admin/users" element={<AdminUsers />} />
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