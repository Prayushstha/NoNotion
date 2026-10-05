import "./sidebaruserpopup.css";
import { createPortal } from "react-dom";
import type { ThemeProps } from "../types";
import {
  Accessibility,
  Bell,
  Monitor,
  Moon,
  Paintbrush,
  Settings2,
  Sun,
  User,
} from "lucide-react";

interface SidebarUserPopupProps extends ThemeProps {
  themePopupRef: React.RefObject<HTMLDivElement | null>;
  themePopup: boolean;
  setThemePopup: (value: boolean) => void;
}

export function SidebarUserPopup({
  themePopupRef,
  themePopup,
  setThemePopup,
  setTheme,
}: SidebarUserPopupProps) {
  return (
    <div className="popup-container">
      {themePopup &&
        createPortal(
          <div className="second-popup-menu" ref={themePopupRef}>
            <button className="value" onClick={() => setTheme(true)}>
              <Monitor size={16} color="currentColor" />
              Auto
            </button>
            <button className="value" onClick={() => setTheme(false)}>
              <Sun size={16} color="currentColor" />
              Light
            </button>
            <button className="value" onClick={() => setTheme(true)}>
              <Moon size={16} color="currentColor" />
              Dark
            </button>
          </div>,
          document.body,
        )}
      <div className="popup-menu">
        <button className="value">
          <User size={16} color="currentColor" />
          Profile
        </button>
        <button className="value" onClick={() => setThemePopup(!themePopup)}>
          <Paintbrush size={16} color="currentColor" />
          Appearance
        </button>
        <button className="value">
          <Accessibility size={16} color="currentColor" />
          Accessibility
        </button>
        <button className="value">
          <Bell size={16} color="currentColor" />
          Notifications
        </button>
        <button className="value">
          <Settings2 size={16} color="currentColor" />
          Settings
        </button>
      </div>
    </div>
  );
}
