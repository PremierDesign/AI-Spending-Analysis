import React from "react";
import "../style.css";

export default function Header() {
  return (
    <div className="Header p-3 d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-between align-items-end">
        <img src="icon.jpg" style={{ borderRadius: "12px" }}></img>
        <p className="ps-1">Financial Assistant</p>
      </div>
      <div d-flex justify-content-end>
        <button type="button" className="btn btn-outline-light btn-sm">
          Home
        </button>
        <button className="btn btn-outline-light btn-sm m-2">Login</button>
      </div>
    </div>
  );
}
