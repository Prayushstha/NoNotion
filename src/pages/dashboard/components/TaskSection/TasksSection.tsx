import "./tasksection.css";

export function TasksSection() {
  return (
    <div className="tasks-section">
      <div className="tasks-heading">
        <h3>Today's Tasks</h3>
      </div>
      <div className="tasks-sub-heading">
        <p>Lets lock in.</p>
        <p className="manage-tasks">Manage tasks</p>
      </div>
      <div className="tasks-grid">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
}
function TaskCard(){
  return <div className="task-card">
          <div className="task-left">
            <span className="task-check">✓</span>
            <div className="task-info">
              <span className="task-name">Drink a glass of water</span>
              <span className="task-meta">Morning · 2 min</span>
            </div>
          </div>
          <span className="task-status done">Done</span>
        </div>
}
