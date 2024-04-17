import React, { useEffect, useRef, useState } from "react";

const withLogger = (WrappedComponent) => {
  const WithLogger = (props) => {
    const [data, setData] = useState();
    const isMounted = useRef(false);

    useEffect(() => {
      if (!isMounted.current) {
        console.log(`Component ${WrappedComponent.name} mounted`);
        isMounted.current = true;
      } else {
        console.log(`Component ${WrappedComponent.name} updated`);
      }

      return () => {
        console.log(`Component ${WrappedComponent.name} unmounted`);
      };
    });

    return (
      <div>
        <WrappedComponent {...props} />
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="enter aomething to update component"
        />
      </div>
    );
  };
  return WithLogger;
};

export default withLogger;
