import { useState, useEffect, useRef } from "react";
import type { Sidebar } from "../types";
import "./sidebar.css";
import { SidebarUserPopup } from "./sidebarUserPopup";
export function SideBar({ sidebar, setSidebar }: Sidebar) {
  const [userSettings, setUserSettings] = useState(false);
  const [themePopup, setThemePopup] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const themePopupRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const clickedWrapper = wrapperRef.current?.contains(e.target as Node);
      const clickedThemePopup = themePopupRef.current?.contains(
        e.target as Node,
      );

      if (!clickedWrapper && !clickedThemePopup) {
        setUserSettings(false);
        setThemePopup(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const [activePage, setActivePage] = useState(false);
  return (
    <div className={`sidebar ${sidebar ? "open" : ""}`}>
      <div className="top">
        <h3 className="sidebar-highlight">NoNotion</h3>
        <div className="sidebar-toggle">
          <input
            type="checkbox"
            id="checkbox"
            checked={sidebar}
            onClick={() => setSidebar?.(!sidebar)}
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
            className={`nav-link ${activePage ? "active" : ""}`}
            onClick={() => {
              setActivePage(!activePage);
            }}
          >
            Dashboard
          </div>
          <div className="nav-link">My Habits</div>
          <div className="nav-link">Insights</div>
          <div className="nav-link">Settings</div>
        </div>
      </div>

      <div className="projects-nav">
        <h3 className="sidebar-highlight">Your Projects</h3>
        <div className="searchbar">
          <div className="group">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
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
          <div className="project-nav-link">Daily Routine</div>
          <div className="project-nav-link">Work Life</div>
          <div className="project-nav-link">Finance Management</div>
          <div className="project-nav-link">Reminders</div>
          <div className="project-nav-link add-new-btn">Add New + </div>
        </div>
      </div>
      <div className="user-area-wrapper" ref={wrapperRef}>
        <div className={`sidebar-user-popup ${userSettings ? "open" : ""}`}>
          <SidebarUserPopup
            themePopupRef={themePopupRef}
            themePopup={themePopup}
            setThemePopup={setThemePopup}
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
