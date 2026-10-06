import "./herosection.css";
import dayjs from "dayjs";
export function HeroSection() {
  const heroDate = dayjs().format("dddd, MMM D");
  return (
    <div className="hero-section">
      <p className="date-hero">{heroDate}</p>
      <div className="hero-card">
        <div className="text-area">
          <div className="progress-text">Today . 67% completed</div>
          <div className="heading-text">
            <h2>Achieve Everything! Start Now!</h2>
          </div>
          <div className="motivation-para">
            <p>You can achive everything that you desire frfr bro.</p>
          </div>
          <div className="link-to-habits">
            <a href="#">View your habits</a>
          </div>
        </div>
      </div>
    </div>
  );
}
