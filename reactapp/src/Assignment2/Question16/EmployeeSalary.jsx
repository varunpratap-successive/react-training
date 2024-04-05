//Question16
// Create a functional component named EmployeeSalary that displays the average salary of a list of employees.
// Define an array of employee objects, where each object has a name and salary property.
// Use the useMemo hook to calculate the average salary of employees.
// Ensure that the useMemo hook has a dependency on the employee data so that it recalculates when the employee data changes.
// Render the average salary on the screen.
// Include a button that, when clicked, updates the employee data with new salaries.
import React, { useMemo, useState } from "react";
import "./EmpSalary.css";

const initialArray = [
  { name: "Varun", salary: 25000 },
  { name: "Tarun", salary: 40000 },
  { name: "Dhoni", salary: 5000 },
  { name: "Rohit", salary: 6000 },
];

function EmployeeSalary() {
  const [name1, setName1] = useState("");
  const [salary1, setSalary1] = useState("");
  const [employeeArr, setEmployeeArr] = useState(initialArray);

  const modify = () => {
    const updatedArr = employeeArr.map((element, index) => {
      if (element.name === name1) return { salary: Number(salary1) };
      if (index === employeeArr.length - 1)
        return { name: name1, salary: Number(salary1) };
      return element;
    });

    setEmployeeArr(updatedArr);
  };

  const avgSalary = useMemo(() => {
    const average = employeeArr.reduce((acc, curr) => (acc += curr.salary), 0);
    return average / employeeArr.length;
  }, [employeeArr]);
  return (
    <div id="divsalary">
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Salary"
        onChange={(e) => setSalary1(e.target.value)}
      />
      <button onClick={modify}>Add</button>

      <h3>AverageSalary:{avgSalary}</h3>
    </div>
  );
}

export default EmployeeSalary;
