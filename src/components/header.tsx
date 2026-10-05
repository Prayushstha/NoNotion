import "./header.css";

export function Header() {
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
    </header>
  );
}
