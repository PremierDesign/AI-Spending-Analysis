import React from "react";
import "../style.css";

export default function Transactions({ items, csvData }) {
  return (
    <div className="p-3 flex-fill">
      <ol className="list-group border border-secondary">
        {csvData.map((item) => {
          return (
            <>
              <li
                key={item.Amount}
                className="list-group-item d-flex={value.toString()}justify-content-between align-items-center"
              >
                <div>
                  <p className="company">{item.Description}</p>
                  <p className="date">
                    {new Date(item["Transaction Date"]).toUTCString()}
                  </p>
                </div>
                <div>
                  <p className="amount">{item.Amount * -1}</p>
                </div>
              </li>
            </>
          );
        })}
      </ol>
    </div>
  );
}
