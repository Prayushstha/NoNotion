import { StatsCard } from './statscard';
import './statssection.css'
export function StatsSection() {

  return (
    <div className="stats-section">
      <StatsCard header={'Current streak'} icon={'Flame'} highlight={'12 Days'} subtitle={'Personal best: 10'}/>
      <StatsCard header={'Today'} icon={'Clock'} highlight={'4 / 6'} subtitle={'Tasks Completed'}/>
      <StatsCard header={'This week'} icon={'TrendingUp'} highlight={'82%'} subtitle={'+14% from last week'}/>
      <StatsCard header={'Focus Minute'} icon={'Timer'} highlight={'146'} subtitle={'of 240 planned'}/>
    </div>
  );
}
