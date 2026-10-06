import "./header.css";
export function Header({ todaysDate }: { todaysDate: string }) {
  return (
    <header className="header">
      <div className="nav-info">
        <div className="title" id="nav-info title">
          NoNotion
        </div>
        <div className="spacer">{" > "}</div>
        <div className="dashboard" id="nav-info dashboard">
          Dashboard
        </div>
      </div>
      <div className="header-right">
        <div className="date-time">
          <p className="today-date-time">{todaysDate}</p>
        </div>
      </div>
    </header>
  );
}
