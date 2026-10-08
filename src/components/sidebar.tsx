import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import {
  BarChart2,
  CheckSquare,
  FileText,
  FolderOpen,
  LayoutDashboard,
  Plus,
  Search,
  Settings2,
} from "lucide-react";
import type { sidebar } from "../types";
import { SidebarUserPopup } from "./sidebarUserPopup";
import "./sidebar.css";
import { useNavigate } from "react-router";

export function SideBar({
  sidebar,
  setSidebar,
  theme,
  setTheme,
  activeLink,
  setActiveLink,
}: sidebar & {
  activeLink: string | null;
  setActiveLink: Dispatch<SetStateAction<string | null>>;
}) {
  const [userSettings, setUserSettings] = useState(false);
  const [themePopup, setThemePopup] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const userAreaRef = useRef<HTMLDivElement>(null);
  const userPopupRef = useRef<HTMLDivElement>(null);
  const appearanceButtonRef = useRef<HTMLButtonElement>(null);
  const themePopupRef = useRef<HTMLDivElement>(null);

  const sideNavigate = useNavigate();


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const clickedWrapper = wrapperRef.current?.contains(event.target as Node);
      const clickedThemePopup = themePopupRef.current?.contains(
        event.target as Node,
      );
      const clickedUserPopup = userPopupRef.current?.contains(
        event.target as Node,
      );

      if (!clickedWrapper && !clickedThemePopup && !clickedUserPopup) {
        setUserSettings(false);
        setThemePopup(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`sidebar ${sidebar ? "open" : ""}`}>
      <div className="top">
        <h3 className="sidebar-highlight">NoNotion</h3>
        <div className="sidebar-toggle">
          <input
            type="checkbox"
            id="checkbox"
            checked={sidebar}
            onChange={() => setSidebar(!sidebar)}
            aria-label={sidebar ? "Collapse sidebar" : "Expand sidebar"}
            title={sidebar ? "Collapse sidebar" : "Expand sidebar"}
          />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </div>
      </div>

      <div className="pages-nav">
        <h3 className="sidebar-highlight">Pages</h3>
        <div className="navigations">
          <div
            className={`nav-link ${activeLink === "Dashboard" ? "active" : ""}`}
            onClick={() => {setActiveLink("Dashboard"); sideNavigate("/")}}
            title="Dashboard"
          >
            <LayoutDashboard size={16} color="currentColor" />
            <span className="nav-label">Dashboard</span>
          </div>
          <div
            className={`nav-link ${activeLink === "Habits" ? "active" : ""}`}
            onClick={() => {setActiveLink("Habits");sideNavigate("/habits")}}
            title="My Habits"
          >
            <CheckSquare size={16} color="currentColor" />
            <span className="nav-label">My Habits</span>
          </div>
          <div
            className={`nav-link ${activeLink === "Insights" ? "active" : ""}`}
            onClick={() => {setActiveLink("Insights");sideNavigate("/insights")}}
            title="Insights"
          >
            <BarChart2 size={16} color="currentColor" />
            <span className="nav-label">Insights</span>
          </div>
          <div
            className={`nav-link ${activeLink === "Settings" ? "active" : ""}`}
            onClick={() => {setActiveLink("Settings");sideNavigate("/settings")}}
            title="Settings"
          >
            <Settings2 size={16} color="currentColor" />
            <span className="nav-label">Settings</span>
          </div>
        </div>
      </div>

      <div className="projects-nav">
        <h3 className="sidebar-highlight project-heading">
          <FolderOpen size={16} color="currentColor" />
          Your Projects
        </h3>
        <button
          className="collapsed-search-toggle"
          type="button"
          title="Search"
          aria-label="Open search"
          onClick={() => setSidebar(true)}
        >
          <Search size={16} color="currentColor" />
        </button>
        <div className="searchbar">
          <div className="group">
            <Search
              className="search-icon"
              size={16}
              color="currentColor"
              aria-hidden="true"
            />
            <input
              id="query"
              className="input"
              type="search"
              placeholder="Search..."
              name="searchbar"
            />
          </div>
        </div>
        <div className="navigation">
          <div
            className={`project-nav-link ${activeLink === "daily-routine" ? "active" : ""}`}
            onClick={() => setActiveLink("daily-routine")}
            title="Daily Routine"
          >
            <FileText size={16} color="currentColor" />
            <span className="nav-label">Daily Routine</span>
          </div>
          <div
            className={`project-nav-link ${activeLink === "work-life" ? "active" : ""}`}
            onClick={() => setActiveLink("work-life")}
            title="Work Life"
          >
            <FileText size={16} color="currentColor" />
            <span className="nav-label">Work Life</span>
          </div>
          <div
            className={`project-nav-link ${activeLink === "finance-management" ? "active" : ""}`}
            onClick={() => setActiveLink("finance-management")}
            title="Finance Management"
          >
            <FileText size={16} color="currentColor" />
            <span className="nav-label">Finance Management</span>
          </div>
          <div
            className={`project-nav-link ${activeLink === "reminders" ? "active" : ""}`}
            onClick={() => setActiveLink("reminders")}
            title="Reminders"
          >
            <FileText size={16} color="currentColor" />
            <span className="nav-label">Reminders</span>
          </div>
          <div
            className={`project-nav-link add-new-btn ${activeLink === "add-new" ? "active" : ""}`}
            onClick={() => setActiveLink("add-new")}
            title="Add New"
          >
            <Plus size={16} color="currentColor" />
            <span className="nav-label">Add New</span>
          </div>
        </div>
      </div>

      <div className="user-area-wrapper" ref={wrapperRef}>
        <div
          ref={userAreaRef}
          className="user-area"
          title={sidebar ? undefined : "User profile"}
          onClick={() => {
            setUserSettings((isOpen) => !isOpen);
            setThemePopup(false);
          }}
        >
          <div className="user-avatar">P</div>
          <div className="user-info">
            <span className="user-name">Prayush</span>
            <span className="user-sub">Personal workspace</span>
          </div>
        </div>
      </div>
      <SidebarUserPopup
        open={userSettings}
        userAreaRef={userAreaRef}
        userPopupRef={userPopupRef}
        appearanceButtonRef={appearanceButtonRef}
        themePopupRef={themePopupRef}
        themePopup={themePopup}
        setThemePopup={setThemePopup}
        theme={theme}
        setTheme={setTheme}
      />
    </div>
  );
}
