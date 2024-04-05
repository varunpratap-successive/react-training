import React, { useContext, useState } from "react";
import { AuthContext2, ThemeContext } from "./Parent";

function Child(){
  const { isLogin, setIsLogin } = useContext(AuthContext2);
  const { prefernce, setPrefernce } = useContext(ThemeContext);
  const [username, setUsername] = useState("");
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={isLogin}
      />

      <button
        disabled={username.length > 0 ? false : true}
        onClick={() => {
          if (isLogin) {
            setUsername("");
          }
          setIsLogin(!isLogin);
        }}
      >
        {isLogin ? "Logout" : "login"}
      </button>
      <p>{isLogin ? `Welcome, ${username}!` : "Please log in"}</p>
      {isLogin && (
        <>
          <button onClick={() => setPrefernce({ ...prefernce, theme: "dark" })}>
            Dark Mode
          </button>
          <button
            onClick={() => setPrefernce({ ...prefernce, theme: "light" })}
          >
            Light Mode
          </button>
        </>
      )}
      <div>
        <div className={prefernce.theme}>Theme will change after you Login</div>
      </div>
    </div>
  );
};

export default Child;
