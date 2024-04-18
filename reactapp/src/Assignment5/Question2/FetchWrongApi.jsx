//Question2-
// Implement error handling for the fetch request.
// Display an error message if the request fails and provide a way for the user to retry the request.

import React, { useState, useEffect } from "react";

const FetchWrongApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const fetchData = () => {
    fetch("https://jsonplaceholder.typiode.com/todoss")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => setError(err.message));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        data.map((element, index) => {
          return (
            <div key={index}>
              {" "}
              ID {element.id} TITLE {element.title} COMPLETED{" "}
              {element.completed}
            </div>
          );
        })
      )}
    </div>
  );
};

export default FetchWrongApi;
