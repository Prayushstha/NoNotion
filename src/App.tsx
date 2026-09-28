import "./App.css";
import { useState, useEffect } from "react";
import { Dashboard } from "./pages/dashboard/dashboard";
function App() {
  const [theme, setTheme] = useState<boolean>(true);
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);
  return <Dashboard theme={theme} setTheme={setTheme} />;
}

export default App;
