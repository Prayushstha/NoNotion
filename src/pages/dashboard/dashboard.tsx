
import { HeroSection } from "./components/HeroSection/HeroSection";
import { TasksSection } from "./components/TaskSection/TasksSection";
import "./dashboard.css";
export function Dashboard() {
  return (
    <div className="dashboard">
        <div className="hero-section-container">
          <HeroSection />
        </div>
        <div className="main-dashboard-content">
            <TasksSection />
        </div>
    </div>
  );
}
