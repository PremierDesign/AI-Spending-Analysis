import { useState } from "react";
import Papa from "papaparse";

export default function Add({ onCsvUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);
  // const [parsedData, setParasedData] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      Papa.parse(selectedFile, {
        complete: (result) => {
          //console.log("Parced:", result.data);
          // setParasedData(result.data);
          if (onCsvUpload) {
            onCsvUpload(result.data);
            //console.log(result.data);
          }
        },
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
      });
    } else {
      alert("Please select a file first");
    }
  };

  return (
    <div className="ps-3 pe-3 pt-3">
      <div>
        <input
          className="form-control newEntry mb-2"
          id="inputGroupFile02"
          type="file"
          accept=".csv"
          // style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>

      <button
        className="btn btn-outline-dark btn-sm w-100 newEntry"
        onClick={handleFileUpload}
      >
        Upload
      </button>
    </div>
  );
}
