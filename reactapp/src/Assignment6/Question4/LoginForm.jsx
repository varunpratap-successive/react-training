//Question4
// You are given a simple form component (LoginForm) that contains input fields for username and password, as well as a submit button.
// Create test cases to verify that the form fields can be filled, and the submit button works correctly.

import React, { useState } from "react";

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const [data, setData] = useState(null);

  const handleSubmit = () => {
    setData(userInfo);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          data-testid="username"
          type="text"
          value={userInfo.username}
          onChange={(e) =>
            setUserInfo({ ...userInfo, username: e.target.value })
          }
          placeholder="Enter Username"
        />
        <input
          data-testid="password"
          type="password"
          value={userInfo.password}
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
          placeholder="Enter Password"
        />
        <input type="submit" value="Submit" />
      </form>
      <div>
        {data && (
          <>
            <p data-testid="resultUsername">{data.username}</p>
            <p data-testid="resultPassword">{data.password}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
