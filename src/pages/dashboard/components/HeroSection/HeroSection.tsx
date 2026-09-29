import "./herosection.css";
export function HeroSection() {
  return (
    <div className="hero-section">
      <div className="overview-section">
        <div className="cover-image-container">
          <img src="./mock-img.jpg" alt="" className="cover-image" />
        </div>
        <div className="quick-info">
          <h1>Name</h1>
          <pre>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. 
          </pre>
        </div>
      </div>
      <div className="sub-hero-section">
        <div className="heading">
            <h2>Achieve Everything now!</h2>
        </div>
        <div className="quick-add-section">
            {/* List easy to do tasks */}
            <h2>Under Development</h2>
        </div>
      </div>
    </div>
  );
}
