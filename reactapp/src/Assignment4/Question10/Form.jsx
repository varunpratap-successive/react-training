//Question10
// Create a form with Material-UI text fields and implement form validation.
// Ensure that error messages are displayed when the user enters invalid data.

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = "First name is required";
    }
    if (!formData.lastName) {
      errors.lastName = "Last name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="firstName"
        name="firstName"
        label="First Name"
        variant="outlined"
        fullWidth
        value={formData.firstName}
        onChange={handleInputChange}
        error={formErrors.firstName}
        helperText={formErrors.firstName}
      />
      <TextField
        id="lastName"
        name="lastName"
        label="Last Name"
        variant="outlined"
        fullWidth
        value={formData.lastName}
        onChange={handleInputChange}
        error={formErrors.lastName}
        helperText={formErrors.lastName}
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        fullWidth
        value={formData.email}
        onChange={handleInputChange}
        error={formErrors.email}
        helperText={formErrors.email}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default Form;
