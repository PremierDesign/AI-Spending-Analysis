import React from "react";
import "../style.css";
import Transactions from "./Transactions";
import Graphs from "./Graphs";
import Add from "./Add";
import Analysis from "./Analysis";

export default function Main({ items, onCsvUpload, csvData }) {
  return (
    <div className="Main d-flex w-100">
      <div>
        <Add onCsvUpload={onCsvUpload} />
        <Transactions items={items} csvData={csvData} />
      </div>
      <div>
        <Graphs />
        <Analysis csvData={csvData} />
      </div>
    </div>
  );
}
