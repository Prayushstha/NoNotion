import { useEffect, useRef, useState } from "react";
import {
  BarChart2,
  CheckSquare,
  FileText,
  FolderOpen,
  LayoutDashboard,
  Plus,
  Search,
  Settings2,
  X,
} from "lucide-react";
import type { sidebar } from "../types";
import { SidebarUserPopup } from "./sidebarUserPopup";
import "./sidebar.css";

export function SideBar({ sidebar, setSidebar, theme, setTheme }: sidebar) {
  const [userSettings, setUserSettings] = useState(false);
  const [themePopup, setThemePopup] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const themePopupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const clickedWrapper = wrapperRef.current?.contains(event.target as Node);
      const clickedThemePopup = themePopupRef.current?.contains(
        event.target as Node,
      );

      if (!clickedWrapper && !clickedThemePopup) {
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
          <button
            className="sidebar-close"
            type="button"
            aria-label="Close sidebar"
            onClick={() => setSidebar(false)}
          >
            <X size={16} color="currentColor" />
          </button>
        </div>
      </div>

      <div className="pages-nav">
        <h3 className="sidebar-highlight">Pages</h3>
        <div className="navigations">
          <div
            className={`nav-link ${activeLink === "dashboard" ? "active" : ""}`}
            onClick={() => setActiveLink("dashboard")}
          >
            <LayoutDashboard size={16} color="currentColor" />
            Dashboard
          </div>
          <div
            className={`nav-link ${activeLink === "habits" ? "active" : ""}`}
            onClick={() => setActiveLink("habits")}
          >
            <CheckSquare size={16} color="currentColor" />
            My Habits
          </div>
          <div
            className={`nav-link ${activeLink === "insights" ? "active" : ""}`}
            onClick={() => setActiveLink("insights")}
          >
            <BarChart2 size={16} color="currentColor" />
            Insights
          </div>
          <div
            className={`nav-link ${activeLink === "settings" ? "active" : ""}`}
            onClick={() => setActiveLink("settings")}
          >
            <Settings2 size={16} color="currentColor" />
            Settings
          </div>
        </div>
      </div>

      <div className="projects-nav">
        <h3 className="sidebar-highlight project-heading">
          <FolderOpen size={16} color="currentColor" />
          Your Projects
        </h3>
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
          >
            <FileText size={16} color="currentColor" />
            Daily Routine
          </div>
          <div
            className={`project-nav-link ${activeLink === "work-life" ? "active" : ""}`}
            onClick={() => setActiveLink("work-life")}
          >
            <FileText size={16} color="currentColor" />
            Work Life
          </div>
          <div
            className={`project-nav-link ${activeLink === "finance-management" ? "active" : ""}`}
            onClick={() => setActiveLink("finance-management")}
          >
            <FileText size={16} color="currentColor" />
            Finance Management
          </div>
          <div
            className={`project-nav-link ${activeLink === "reminders" ? "active" : ""}`}
            onClick={() => setActiveLink("reminders")}
          >
            <FileText size={16} color="currentColor" />
            Reminders
          </div>
          <div
            className={`project-nav-link add-new-btn ${activeLink === "add-new" ? "active" : ""}`}
            onClick={() => setActiveLink("add-new")}
          >
            <Plus size={16} color="currentColor" />
            Add New
          </div>
        </div>
      </div>

      <div className="user-area-wrapper" ref={wrapperRef}>
        <div className={`sidebar-user-popup ${userSettings ? "open" : ""}`}>
          <SidebarUserPopup
            themePopupRef={themePopupRef}
            themePopup={themePopup}
            setThemePopup={setThemePopup}
            theme={theme}
            setTheme={setTheme}
          />
        </div>
        <div
          className="user-area"
          onClick={() => setUserSettings(!userSettings)}
        >
          <div className="user-avatar">P</div>
          <div className="user-info">
            <span className="user-name">Prayush</span>
            <span className="user-sub">Personal workspace</span>
          </div>
        </div>
      </div>
    </div>
  );
}
