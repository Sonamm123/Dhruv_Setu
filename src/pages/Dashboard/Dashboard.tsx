import DashboardHeader from "../../components/dashboard/DashboardHeader";
import FeaturedExpeditions from "../../components/dashboard/FeaturedExpeditions";
import FeaturedHighlights from "../../components/dashboard/FeaturedHighlights";
import HeroBanner from "../../components/dashboard/HeroBanner";
import QuickAccess from "../../components/dashboard/QuickAccess";
import RecommendedContent from "../../components/dashboard/RecommendedContent";

export default function Dashboard() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 py-6 lg:px-7">
      <DashboardHeader />

      <HeroBanner />

      <QuickAccess />

      <FeaturedHighlights />
       <RecommendedContent />
       <FeaturedExpeditions />
    </div>
  );
}