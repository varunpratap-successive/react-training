import React from "react";

const Ui = ({ data }) => {
  return (
    <div className="divclass">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id} </td>
              <td>{item.title} </td>
              <td>{item.completed && "✔️"} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ui;
