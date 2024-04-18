import React from "react";
import withDataFetching from "./WithDataFetching";

const Display = ({ axiosdata }) => {
  return (
    <div>
      {axiosdata.map((element, index) => (
        <div key={index}>
          ID
          {element.id} TITLE {element.title} COMPLETED {element.completed}
        </div>
      ))}
    </div>
  );
};

export default withDataFetching(Display);
