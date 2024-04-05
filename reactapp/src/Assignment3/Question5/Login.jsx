import { useContext, useState } from "react";
import { MyContext } from "./DashboardRouting";
import { useNavigate } from "react-router-dom";

function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useContext(MyContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuth({ ...auth, username: username, password: password });
    navigate("/");
  };

  return (
    <div>
      <p>Login Details</p>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="enter username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="enter password"
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
