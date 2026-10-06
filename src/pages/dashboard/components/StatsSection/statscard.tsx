import { Flame, Clock, TrendingUp, Timer } from "lucide-react";
export function StatsCard({
  header,
  icon,
  highlight,
  subtitle,
}: {
  header: string;
  icon: string;
  highlight: string;
  subtitle: string;
}) {
  return (
    <div className="stat-card">
      <div className="stat-card-header">
        {header}
        {icon === "Flame" ? (
          <Flame size={14} />
        ) : icon === "Clock" ? (
          <Clock size={14} />
        ) : icon === "TrendingUp" ? (
          <TrendingUp size={14} />
        ) : (
          <Timer size={14} />
        )}
      </div>
      <div className="stat-card-value">{highlight}</div>
      <div className="stat-card-label">{subtitle}</div>
    </div>
  );
}
