import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import chroma from "chroma-js";

export default function Graphs({ csvData }) {
  const aggregateByCategory = (data) => {
    const result = {};
    data.forEach((item) => {
      if (result[item.Category]) {
        result[item.Category] += parseFloat(item.Amount);
      } else {
        result[item.Category] = parseFloat(item.Amount);
      }
    });
    return result;
  };

  const aggregetedCsvData = aggregateByCategory(csvData);

  const amounts = Object.values(aggregetedCsvData);
  const categories = Object.keys(aggregetedCsvData);

  const options = {
    maintainAspectRatio: true,
    responsive: true,
  };

  const colorScale = chroma
    .scale(["#fafa6e", "#2A4858"])
    .mode("lch")
    .colors(amounts.length);

  const chartData = {
    labels: categories,
    datasets: [
      {
        data: amounts,
        backgroundColor: colorScale,
      },
    ],
  };

  return (
    <div className="pt-3 pb-3" style={{ width: "200px" }}>
      <div className="list-group border border-secondary">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
}
