import React from "react";
import { useContext } from "react";
import { LoginContext } from "./LoginParent";

function LoginChild() {
  const { login, setLogin, username, setUsername } = useContext(LoginContext);

  const setter = (e) => {
    setLogin(!login);
    if (login) setUsername("");
  };
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={login}
      />
      <button onClick={setter} disabled={username.length > 0 ? false : true}>
        {login ? "Logout" : "Login"}
      </button>
      <p>{login ? `Welcome ${username}` : "Please Login"}</p>
    </div>
  );
}

export default LoginChild;
