import React, { useState } from "react";
import ComposeMethod from "./ComposeMethod";
import ReduxPracties from "./ReduxPracties";
import SelectedCountry from "./SelectedCountry";
import WorldCup from "./WorldCup";

function App() {
  const [result, setResult] = useState("");
  const handleResult = (country) => {
    setResult(country);
  };
  return (
    <>
      <SelectedCountry handleResult={handleResult} />
      <WorldCup showResult={result} />
      <ComposeMethod />
      <ReduxPracties />
    </>
  );
}

export default App;
