import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import GraphqlUi from "./GraphqlUi";
import Pagination from "./Pagination";

const GET_COUNTRY = gql`
  query Query {
    countries {
      code
      name
      currency
    }
  }
`;

function GraphqlPaginationApp() {
  const [apidata, setApidata] = useState([]);
  const [apiloading, setApiloading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const { loading, error, data } = useQuery(GET_COUNTRY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.countries.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(apidata.length / recordsPerPage);
  return (
    <div>
      <h1>Country List</h1>
      <GraphqlUi data={currentRecords} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default GraphqlPaginationApp;
