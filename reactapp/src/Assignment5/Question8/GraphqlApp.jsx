
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import GraphqlUi from './GraphqlUi';

const GET_COUNTRY = gql`
query Query {
    countries {
      code
      name
      currency
    }
  }
  
`;

function GraphqlApp() {
  const { loading, error, data } = useQuery(GET_COUNTRY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <div>
      <h1>Country List</h1>
      <GraphqlUi data={data.countries.slice(0,5)}/>
    </div>
  );
}

export default GraphqlApp;