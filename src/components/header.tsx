import "./header.css";
import type { UnionThemeSidebar } from "../types";
export function Header({
  sidebar,
  setSidebar,
}: UnionThemeSidebar) {
  return (
    <header className="header">
        <div className={!sidebar? 'tool' : 'tool-open'}>
          {/* Sidebar Toggle Button */}
          {!sidebar && (
            <>
              <input
                type="checkbox"
                id="checkbox"
                onClick={() => setSidebar?.(!sidebar)}
              />
              <label htmlFor="checkbox" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
              </label>
            </>
          )}
  
        {/* ---- */}
      </div>
       <div className="nav-info">
            <div className="title" id="nav-info title">
              NoNotion
            </div>
            <div className="spacer"> {'>'} </div>
             <div className="dashboard" id="nav-info dashboard">
              Dashboard
            </div>
          </div>
     
    </header>
  );
}
