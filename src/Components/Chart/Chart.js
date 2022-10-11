import "./Chart.css";
import ChartBar from "./ChartBar";

const chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={null}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};

export default chart;
