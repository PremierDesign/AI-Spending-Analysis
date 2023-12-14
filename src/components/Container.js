import React from "react";
import "../style.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function Container({ items, onCsvUpload, csvData }) {
  return (
    <div className="Container">
      <Header />
      <Main items={items} onCsvUpload={onCsvUpload} csvData={csvData} />
      <Footer />
    </div>
  );
}
