//Question5-
// Create a React component that fetches data from a public API (e.g., JSONPlaceholder) using Axios and displays it on the page.

import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosFetch = () => {
  const [axiosdata, setAxiosdata] = useState([]);

  const getApidata = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setAxiosdata(res.data.splice(0, 3));
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getApidata();
  }, []);

  return (
    <div>
      {axiosdata.map((element, index) => (
        <div key={index}>
          ID {element.id} TITLE {element.title} COMPLETED {element.completed}
        </div>
      ))}
    </div>
  );
};

export default AxiosFetch;
