export function TaskCard() {
  return (
    <div className="task-card">
      <div className="task-left">
        <span className="task-check">✓</span>
        <div className="task-info">
          <span className="task-name">Drink a glass of water</span>
          <span className="task-meta">Morning · 2 min</span>
        </div>
      </div>
      <span className="task-status done">Done</span>
    </div>
  );
}