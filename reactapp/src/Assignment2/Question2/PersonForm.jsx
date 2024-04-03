//Question2->Create a functional component called PersonForm.
// Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
// Render three input fields for the user to enter their first name, last name, and age.
// As the user types, update the respective state variables.
// Display the entered information below the input fields.

import React, { useState } from "react";

function PersonForm(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");

  const printFirstname = (event) => {
    setFirstname(event.target.value);
  };
  const printLastname = (event) => {
    setLastname(event.target.value);
  };
  const printAge = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="enter firstName"
        onChange={printFirstname}
        value={firstname}
      />
      <input
        type="text"
        placeholder="enter lastName"
        onChange={printLastname}
        value={lastname}
      />
      <input
        type="text"
        placeholder="enter age"
        onChange={printAge}
        value={age}
      />
      <div>{firstname}</div>
      <div>{lastname}</div>
      <div>{age}</div>
    </>
  );
}
export default PersonForm;

<form>
  <label>
    Enter your name:
    <input type="text" />
  </label>
</form>;
