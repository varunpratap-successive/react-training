//Question3
// Add a loading indicator (e.g., a spinner) to the component. Display it while the data
// is being fetched and hide it once the data is loaded.

import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
const Spinner = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result.splice(0, 5));
    } catch (error) {
      console.error("Error fetching data of API:", error.message);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 5000);
  }, []);

  return (
    <div>
      {data ? (
        <p>
          {data.map((element, index) => (
            <div key={index}>
              ID {element.id} TITLE {element.title} COMPLETED{" "}
              {element.completed}
            </div>
          ))}
        </p>
      ) : (
        <p>
          <CircularProgress />
        </p>
      )}
    </div>
  );
};

export default Spinner;
