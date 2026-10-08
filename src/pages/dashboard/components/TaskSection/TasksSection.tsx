import "./tasksection.css";
import { TaskCard } from "./Components/TaskCard";
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

