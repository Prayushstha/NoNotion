import "./barsection.css";
import { BarChart, Bar, XAxis, Cell, ResponsiveContainer } from "recharts";

import { Trophy } from "lucide-react";
import "./rythmsection.css";
export function ChartSection() {
  return (
    <div className="rhythm-section">
      <BarChartSection />
      <RhythmSection />
    </div>
  );
}

function BarChartSection() {
  const data = [
    { day: "M", value: 80 },
    { day: "T", value: 90 },
    { day: "W", value: 60 },
    { day: "T", value: 100 },
    { day: "F", value: 75 },
    { day: "S", value: 85 },
    { day: "S", value: 70 },
  ];

  const todayIndex = 3;
  const average = Math.round(
    data.reduce((sum, d) => sum + d.value, 0) / data.length,
  );
  return (
    <div className="bar-chart-container2">
      <div className="bar-chart">
        <div className="bar-header">
          <p>Your rhythm</p>
        </div>
        <div className="bar-sub-header">
          <p>Completion over the last 7 days</p>
        </div>
        <div className="bar-graph">
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={data} barCategoryGap="20%">
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {data.map((_, index) => (
                  <Cell
                    key={index}
                    fill={
                      index === todayIndex
                        ? "var(--chart-1)"
                        : "var(--foreground)"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bar-footer">
          <span>Average completion</span>
          <span>{average}%</span>
        </div>
      </div>
    </div>
  );
}
function RhythmSection() {
  return (
    <div className="milestone-card">
      <div className="milestone-header">
        <span>Next milestone</span>
        <Trophy size={16} />
      </div>
      <div className="milestone-title">Two more days</div>
      <div className="milestone-desc">
        Reach a 14-day streak and unlock your steady hand badge.
      </div>
      <div className="milestone-progress">
        <div className="milestone-bar">
          <div className="milestone-bar-fill" style={{ width: "85%" }} />
        </div>
        <span className="milestone-label">12 of 14 days</span>
      </div>
      <button className="milestone-link">See all milestones</button>
    </div>
  );
}
