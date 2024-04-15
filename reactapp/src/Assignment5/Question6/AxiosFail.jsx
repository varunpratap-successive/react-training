//Question6
// Modify the previous assignment to implement error handling using Axios.
// Display an error message if the request fails and provide a way for the user to retry the request.

import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosFail = () => {
  const [axiosdata, setAxiosdata] = useState([]);
  const [error, setError] = useState(null);
  const getApidata = async () => {
    try {
      const res = await axios.get("https://api.exampl.com/data");
      setAxiosdata(res.data);
    } catch (error) {
      if (error.response) {
        console.log("Status code:", error.response.status);
        console.log("Error data:", error.response.data);
        console.log("Response headers:", error.response.headers);
      } else console.log("Network error:", error.message);
      setError(error);
    }
  };

  useEffect(() => {
    getApidata();
  }, []);

  return (
    <div>
      {error ? (
        <p>{error.message}</p>
      ) : (
        axiosdata &&
        axiosdata.map((element, index) => {
          <div key={index}>
            {" "}
            ID {element.id} TITLE {element.title} COMPLETED {element.completed}
          </div>;
        })
      )}
    </div>
  );
};

export default AxiosFail;
