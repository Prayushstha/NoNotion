import './tasksection.css'

export function TasksSection() {
    return (
        <div className="tasks-section">
            <div className="tasks-heading">
                <h1>Tasks:</h1>
            </div>
            <div className="tasks-section-sub-header">
                <div className="buttons">
                    <button className="time-switch-btn">Weekly</button>
                    <button className="time-switch-btn">Monthly</button>
                </div>
            </div>
            <div className="task-cards-container">

            </div>
        </div>
    )
}