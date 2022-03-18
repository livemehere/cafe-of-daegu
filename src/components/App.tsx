import React from "react";
import data from "../data/data.json";

function App() {
  return (
    <div className="App">
      {data.map((i) => {
        return (
          <div key={i["연번"]}>
            <h4>{i["소재지(도로명)"]}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;
