import React from "react";

const GraphqlUi = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>code</th>
            <th>Name</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.code} </td>
              <td>{item.name} </td>
              <td>{item.currency} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GraphqlUi;
