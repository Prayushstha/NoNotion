import type { Dispatch, SetStateAction } from "react";
export type ThemeProps = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};
export interface sidebar {
  sidebar: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
}
export type UnionThemeSidebar = {
  theme?: boolean;
  setTheme?: React.Dispatch<React.SetStateAction<boolean>>;
  sidebar?: boolean;
  setSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
};
