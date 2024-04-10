//Question4
// Build a registration form with two password fields. Implement controlled components for both password inputs.
// Add a validation rule to ensure that the two passwords match before allowing the form submission.

import React, { useState } from "react";

const PasswordMatch = () => {
  const [passwordOne, setpasswordOne] = useState("");
  const [passwordTwo, setpasswordTwo] = useState("");
  const [state, setState] = useState(false);
  const check = () => {
    if (passwordOne === passwordTwo) {
      setState(true);
    } else {
      setState(false);
      alert("password do not match");
    }
    setpasswordOne("");
    setpasswordTwo("");
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="password"
        placeholder="password1"
        value={passwordOne}
        onChange={(e) => setpasswordOne(e.target.value)}
      />
      <input
        type="password"
        placeholder="password2"
        value={passwordTwo}
        onChange={(e) => setpasswordTwo(e.target.value)}
      />
      <button onClick={check}>Login</button>
      {state ? "logged in" : null}
    </form>
  );
};

export default PasswordMatch;
