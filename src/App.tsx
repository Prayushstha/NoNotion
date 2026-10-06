import "./App.css";
import { useState, useEffect } from "react";
import { Dashboard } from "./pages/dashboard/dashboard";
import { SideBar } from "./components/sidebar";
import { Header } from "./components/header";
import dayjs from "dayjs";
function App() {
  const [theme, setTheme] = useState<boolean>(true);
  const [sidebar, setSidebar] = useState<boolean>(true);

  const todaysDate = dayjs().format('dddd, MMM D YYYY' );
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
          setTheme={setTheme}/>
      <div className="content-wrapper">
        <Header todaysDate={todaysDate}/>
        <div className="main-content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
