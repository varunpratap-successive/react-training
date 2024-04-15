//Question7
// Create a form in your React component that allows the user to input data (e.g., a post title and content).
//  Use Axios to send a POST request to an API endpoint, posting the user's data.

import React, { useState } from "react";
import axios from "axios";
const Form = () => {
  const data = {
    firstname: "",
    lastname: "",
  };
  const [inputdata, setInputdata] = useState(data);
  const handledata = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/todos", inputdata)
      .then((response) => console.log(response));
  };
  return (
    <div>
      <input
        type="text"
        name="firstname"
        value={inputdata.firstname}
        onChange={handledata}
        placeholder="enter first name"
      />
      <input
        type="text"
        name="lastname"
        value={inputdata.lastname}
        onChange={handledata}
        placeholder="enter last name"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;
