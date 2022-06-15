import React, { useEffect, useState } from "react";

const arr = ["Uzbekistan", "Eron", "Avgonistan", "Australiya", "Yaponiya"];

function SelectedCountry({ handleResult }) {
  const [country, setCountry] = useState("");

  useEffect(() => {
    handleResult(country);
  }, [country]);

  return (
    <>
      <ul>
        {arr.map((value, index) => {
          return (
            <li key={index} onClick={() => setCountry(value)}>
              {value}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SelectedCountry;
