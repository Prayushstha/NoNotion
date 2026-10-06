import "./App.css";
import { useState, useEffect } from "react";
import { Dashboard } from "./pages/dashboard/dashboard";
import { SideBar } from "./components/sidebar";
import { Header } from "./components/header";
function App() {
  const [theme, setTheme] = useState<boolean>(true);
  const [sidebar, setSidebar] = useState<boolean>(true);
  const [activeLink, setActiveLink] = useState<string | null>('Dashboard');
  
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  return (
    <div className="main-container">
      <SideBar sidebar={sidebar} setSidebar={setSidebar} theme={theme}
          setTheme={setTheme}
          activeLink={activeLink} 
          setActiveLink={setActiveLink}
          />
          
      <div className="content-wrapper">
        <Header  activeLink={activeLink} />
        <div className="main-content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
