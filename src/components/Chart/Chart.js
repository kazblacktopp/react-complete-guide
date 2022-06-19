import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {
  const barValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const maxBarValue = Math.max(...barValues);

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxBarValue}
        />
      ))}
    </div>
  );
}

export default Chart;
