import "./App.css";
import { useState, useEffect } from "react";
import { Dashboard } from "./pages/dashboard/dashboard";
import { SideBar } from "./components/sidebar";
import { Header } from "./components/header";

import { BrowserRouter, Routes, Route } from "react-router";
import { Habits } from "./pages/habits/habits";
import { Insights } from "./pages/insights/insights";
import { Settings } from "lucide-react";
function App() {
  const [theme, setTheme] = useState<boolean>(true);
  const [sidebar, setSidebar] = useState<boolean>(true);
  const [activeLink, setActiveLink] = useState<string | null>("Dashboard");

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="main-container">
        <SideBar
          sidebar={sidebar}
          setSidebar={setSidebar}
          theme={theme}
          setTheme={setTheme}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <div className="content-wrapper">
          <Header activeLink={activeLink} />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/habits" element={<Habits />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
