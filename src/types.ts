export type ThemeProps = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};
export type Sidebar = {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};
export type UnionThemeSidebar = {
  theme?: boolean;
  setTheme?: React.Dispatch<React.SetStateAction<boolean>>;
  sidebar?: boolean;
  setSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
};
