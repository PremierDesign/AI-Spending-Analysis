import { useState } from "react";
import Container from "./components/Container";
import { v4 as uuidV4 } from "uuid";

function App() {
  const [items, setItems] = useState([
    //   {
    //     // id: uuidV4(),
    //     company: "Company XYZ",
    //     date: Date.now(),
    //     amount: "$21.56",
    //   },
    //   {
    //     // id: uuidV4(),
    //     company: "Company ABC",
    //     date: Date.now(),
    //     amount: "$56.78",
    //   },
    //   {
    //     // id: uuidV4(),
    //     company: "Company CBD",
    //     date: Date.now(),
    //     amount: "$36.78",
    //   },
  ]);

  const [csvData, setCsvData] = useState([]);

  const handleCsvData = (data) => {
    setCsvData(data);
    console.log(data);
  };

  return (
    <div className="html">
      <Container items={items} onCsvUpload={handleCsvData} csvData={csvData} />
    </div>
  );
}

export default App;
