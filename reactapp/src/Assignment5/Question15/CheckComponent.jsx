//Question15
// Build an HOC called withLogger that logs the events of a component (e.g., mounting, unmounting, updating).
//  Apply this HOC to a component and display the logs in the browser console.

import React from "react";
import withLogger from "./withLogger";

const CheckComponent = () => {
  return <div>Checking Component</div>;
};

const EnhancedComponent = withLogger(CheckComponent);

export default EnhancedComponent;