import "./App.css";
import { useState, useEffect } from "react";
import { Dashboard } from "./pages/dashboard/dashboard";
import { SideBar } from "./components/sidebar";

function App() {
  const [theme, setTheme] = useState<boolean>(true);
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);
  return (
    <div className="main-container">
      <SideBar />
      <div className="main-content">
      <Dashboard theme={theme} setTheme={setTheme} />
      </div>
    </div>
  )
}


export default App;
