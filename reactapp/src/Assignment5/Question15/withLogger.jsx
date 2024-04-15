
import React, { useEffect } from "react";

const withLogger = (WrappedComponent) => {
  const WithLogger = (props) => {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} mounted.`);
      console.log(`Component ${WrappedComponent.name} updated.`)
      return () => {
        console.log(`Component ${WrappedComponent.name} unmounted.`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithLogger;
};

export default withLogger;
