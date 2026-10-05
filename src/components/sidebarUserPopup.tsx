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
  open: boolean;
  userAreaRef: React.RefObject<HTMLDivElement | null>;
  userPopupRef: React.RefObject<HTMLDivElement | null>;
  appearanceButtonRef: React.RefObject<HTMLButtonElement | null>;
  themePopupRef: React.RefObject<HTMLDivElement | null>;
  themePopup: boolean;
  setThemePopup: (value: boolean) => void;
}

export function SidebarUserPopup({
  open,
  userAreaRef,
  userPopupRef,
  appearanceButtonRef,
  themePopupRef,
  themePopup,
  setThemePopup,
  setTheme,
}: SidebarUserPopupProps) {
  const userAreaRect = userAreaRef.current?.getBoundingClientRect();
  const userPopupWidth = 200;
  const userPopupStyle = userAreaRect
    ? {
        left: `${
          window.innerWidth - userAreaRect.right >= userPopupWidth + 16
            ? userAreaRect.right + 8
            : Math.max(8, userAreaRect.left - userPopupWidth - 8)
        }px`,
        bottom: `${window.innerHeight - userAreaRect.top + 8}px`,
      }
    : undefined;
  const themeTriggerRect = appearanceButtonRef.current?.getBoundingClientRect();
  const themePopupStyle = themeTriggerRect
    ? {
        left: `${
          window.innerWidth - themeTriggerRect.right >= 186
            ? themeTriggerRect.right + 8
            : Math.max(8, themeTriggerRect.left - 178)
        }px`,
        top: `${Math.min(themeTriggerRect.top, window.innerHeight - 150)}px`,
      }
    : undefined;

  return (
    <>
      {open &&
        createPortal(
          <div
            className="sidebar-user-popup open"
            ref={userPopupRef}
            style={userPopupStyle}
          >
            <div className="popup-menu">
              <button className="value">
                <User size={16} color="currentColor" />
                Profile
              </button>
              <button
                className="value"
                ref={appearanceButtonRef}
                onClick={() => setThemePopup(!themePopup)}
              >
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
          </div>,
          document.body,
        )}
      {themePopup &&
        createPortal(
          <div
            className="second-popup-menu"
            ref={themePopupRef}
            style={themePopupStyle}
          >
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
    </>
  );
}
