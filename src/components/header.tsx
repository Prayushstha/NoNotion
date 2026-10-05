import "./header.css";
import type { UnionThemeSidebar } from "../types";
export function Header({
  theme = true,
  setTheme,
  sidebar,
  setSidebar,
}: UnionThemeSidebar) {
  return (
    <header className="header">
      <div className="tool-bar">
        <div className="tool">
          {/* Sidebar Toggle Button */}
          {!sidebar && (
            <>
              <input
                type="checkbox"
                id="checkbox"
                onClick={() => setSidebar?.(!sidebar)}
              />
              <label htmlFor="checkbox" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
              </label>
            </>
          )}
        </div>
  
        {/* ---- */}
      </div>
       <div className="nav-info">
            <div className="title" id="nav-info title">
              NoNotion
            </div>
            <div className="spacer"> {'>'} </div>
             <div className="dashboard" id="nav-info dashboard">
              Dashboard
            </div>
          </div>
      <div className="header-right">
        <input id="check" type="checkbox" />
        <label
          className="switch"
          htmlFor="check"
          onClick={() => setTheme?.(!theme)}
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
