import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function LoginPage({ authuser, setAuthuser, username, setUsername }) {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const givenusername = "varun";
  const givenpassword = "abcde";

  const checkcredentials = () => {
    if (givenusername === username && givenpassword === password) {
      setAuthuser(true);
      navigate("/home");
    } else {
      setAuthuser(false);
      setUsername("");
      setPassword("");
      alert("Invalid credentials");
    }
  };

  if (authuser) {
    return <Outlet />;
  }

  return (
    <>
      <div>Login Page</div>
      <input
        type="text"
        placeholder="Enter UserName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={checkcredentials}>LOGIN</button>
    </>
  );
}

export default LoginPage;
