//Question1
// Create a React component that fetches data from a public API (e.g., JSONPlaceholder)
// and displays it on the page. Use the fetch function to make the request.

import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [apidata, setApidata] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setApidata(data.splice(0, 5)))
      .catch((err) => console.log("Error is ", err.message));
  }, []);
  return (
    <div>
      {apidata.map((element, index) => (
        <div key={index}>
          ID {element.id} TITLE {element.title} COMPLETED {element.completed}
        </div>
      ))}
    </div>
  );
};

export default FetchData;
