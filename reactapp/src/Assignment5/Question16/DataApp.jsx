//Question16
// Develop an HOC named withDataFetching that fetches data from an API and passes it as props to a component.
// Use this HOC to retrieve and display data in a component.

import React from "react";
import Display from "./Display";
const DataApp = () => {
  return (
    <div>
      <Display />
    </div>
  );
};

export default DataApp;
