import React, { useState } from "react";

export default function Analysis({ csvData }) {
  const [analysisResult, setAnalysisResult] = useState("");
  const [spendingData, setSpendingData] = useState(csvData);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyzeClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8020/analyze-spending", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(spendingData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      setAnalysisResult(result.analysis);
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="Analyze me-3">
      <button
        className="btn btn-outline-dark btn-sm mb-3"
        onClick={handleAnalyzeClick}
      >
        Analyze Spending
      </button>

      <div>{isLoading && <p>Loading...</p>}</div>
      {analysisResult && (
        <div className="analysisResponse me-2 border-secondary border-thick rounded-lg p-3">
          <strong>Analysis:</strong>
          {analysisResult}
        </div>
      )}
    </div>
  );
}
