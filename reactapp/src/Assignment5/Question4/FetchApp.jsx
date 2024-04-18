//Question4
// Fetch a large dataset from an API and implement pagination.
// Display a limited number of items per page and provide navigation controls to load more pages of data

import React, { useState, useEffect } from "react";
import axios from "axios";
import Ui from "./Ui";
import Pagination from "./Pagination";

function FetchApp() {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        alert("There was an error while retrieving the data");
      });
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(data.length / recordsPerPage);

  return (
    <div>
      <h2> Pagination </h2>
      <Ui data={currentRecords} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default FetchApp;
