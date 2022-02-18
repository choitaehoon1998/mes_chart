import { useState } from "react";
import "./App.css";
import BarChartExample from "./chart/BarChart";
import LineChartExample from "./chart/LineChart";

function App() {
  const [chart, setChart] = useState({
    type: "bar",
  });
  const onChangeChart = (e) => {
    setChart({ ...chart, type: e.target.name });
  };
  return (
    <div>
      <button name="bar" onClick={onChangeChart}>
        Bar Chart
      </button>
      <button name="line" onClick={onChangeChart}>
        Line Chart
      </button>
      <button name="pie" onClick={onChangeChart}>
        Pie Chart
      </button>
      {chart.type === "bar" && <BarChartExample />}
      {chart.type === "line" && <LineChartExample />}
      {chart.type === "pie" && "pie"}
    </div>
  );
}

export default App;
