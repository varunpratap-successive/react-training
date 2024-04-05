//Question18
// Design a custom hook named useLocalStorage to interact with local storage.
// Create a useLocalStorage hook that allows storing and retrieving data from local storage.
// Implement methods for setting, getting, and removing data using the hook.
// Utilize the localStorage API within the hook to manage data.
// Develop a component that uses the useLocalStorage hook to manage user preferences.

import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage.jsx";

function StorageApp() {
  const { getdata, setdata, removedata, getter, setGetter } = useLocalStorage();
  const [key, setKey] = useState();
  const [keyvalue, setKeyvalue] = useState();
  const [key2, setKey2] = useState();
  const reset = () => {
    setKey("");
    setKeyvalue("");
    setKey2("");
    setGetter("");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "20px",
          padding: "20px",
        }}
      >
        <input
          type="text"
          placeholder="enter key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter value"
          value={keyvalue}
          onChange={(e) => setKeyvalue(e.target.value)}
        />
        <button onClick={() => setdata(key, keyvalue)}>
          Set in localstorage
        </button>
        <button onClick={() => removedata(key)}>
          Remove From localstorage
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="enter key to get its data"
          value={key2}
          onChange={(e) => setKey2(e.target.value)}
        />
        <button onClick={() => getdata(key2)}>Get from localstorage</button>
        <p>FetchedValue:{getter}</p>
        <button onClick={reset}>Reset Alldata</button>
      </div>
    </>
  );
}

export default StorageApp;
