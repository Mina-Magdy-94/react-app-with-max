import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
    const dataPointValues=dataPoints.map((singleDataPoint)=>singleDataPoint.value)
    const totalMaximum=Math.max(...dataPointValues)
  return (
    <div className="chart">
      {dataPoints.map((singleDataPoint) => {
        console.log({label:singleDataPoint.label,value:singleDataPoint.value})
            return <ChartBar
            key={singleDataPoint.label}
            value={singleDataPoint.value}
            maxValue={totalMaximum}
            label={singleDataPoint.label}
          />
        })
      }
        
        
      
    </div>
  );
};

export default Chart;
