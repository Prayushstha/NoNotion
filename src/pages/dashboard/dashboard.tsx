import { HeroSection } from "./components/HeroSection/HeroSection";
import { StatsSection } from "./components/StatsSection/StatsSection";
import { TasksSection } from "./components/TaskSection/TasksSection";
import "./dashboard.css";
export function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-main-container">
        <div className="hero-section-container">
          <HeroSection />
        </div>
        <div className="stats-section-container">
          <StatsSection />
        </div>
        <div className="main-dashboard-content">
          <TasksSection />
        </div>
      </div>
    </div>
  );
}
