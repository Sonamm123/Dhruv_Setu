import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router";

import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
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
      <h1 className="text-2xl font-semibold">Page Not Found</h1>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route element={<AuthenticatedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/personalized" element={<Personalized />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:id" element={<ResearchDetail />} />
          <Route path="/expeditions" element={<Expeditions />} />
  <Route
    path="/expeditions/:id"
    element={<ExpeditionDetail />}
  />
       <Route path="/media" element={<Media />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/map" element={<Map />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}