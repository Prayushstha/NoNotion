import "./header.css";
import type { ThemeProps } from "../types";
export function DashboardHeader({ theme, setTheme }: ThemeProps) {
  return (
    <header className="dashboard-header">
      <div className="tool-bar">
        <div className="tool">
            {/* Sidebar Toggle Button */}
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </div>

        {/* ---- */}
        <div className="tool">Placeholder2</div>
        <div className="tool">Placeholder3</div>
      </div>
      <div className="header-right">
        <input id="check" type="checkbox" />
        <label
          className="switch"
          htmlFor="check"
          onClick={() => setTheme(!theme)}
        >
          <svg viewBox="0 0 212.4992 84.4688" overflow="visible">
            <path
              pathLength="360"
              fill="none"
              stroke="currentColor"
              d="M 42.2496 0 A 42.24 42.24 90 0 0 0 42.2496 A 42.24 42.24 90 0 0 42.2496 84.4688 A 42.24 42.24 90 0 0 84.4992 42.2496 A 42.24 42.24 90 0 0 42.2496 0 A 42.24 42.24 90 0 0 0 42.2496 A 42.24 42.24 90 0 0 42.2496 84.4688 L 170.2496 84.4688 A 42.24 42.24 90 0 0 212.4992 42.2496 A 42.24 42.24 90 0 0 170.2496 0 A 42.24 42.24 90 0 0 128 42.2496 A 42.24 42.24 90 0 0 170.2496 84.4688 A 42.24 42.24 90 0 0 212.4992 42.2496 A 42.24 42.24 90 0 0 170.2496 0 L 42.2496 0"
            ></path>
          </svg>
        </label>
      </div>
    </header>
  );
}
