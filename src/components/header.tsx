import "./header.css";
import dayjs from "dayjs";
export function Header({
  activeLink
}: {
  activeLink: string | null;
}) {
  const todaysDateDeader = dayjs().format("dddd, MMMM D YYYY");

  return (
    <header className="header">
      <div className="nav-info">
        <div className="title" id="nav-info title">
          {'NoNotion'}
        </div>
        <div className="spacer">{" > "}</div>
        <div className="dashboard" id="nav-info dashboard">
          {activeLink}
        </div>
      </div>
      <div className="header-right">
        <div className="date-time">
          <p className="today-date-time">{todaysDateDeader}</p>
        </div>
      </div>
    </header>
  );
}
