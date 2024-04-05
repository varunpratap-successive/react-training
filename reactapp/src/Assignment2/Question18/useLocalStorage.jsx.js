import { useState } from "react";

function useLocalStorage() {
  const [getter, setGetter] = useState("");
  const setdata = (key, val) => {
    localStorage.setItem(key, JSON.stringify(val));
  };
  const getdata = (key) => {
    const SavedValue = JSON.parse(localStorage.getItem(key));
    console.log(SavedValue);
    if (SavedValue) setGetter(SavedValue);
    else if (SavedValue === null) setGetter("no value");
  };
  const removedata = (key) => {
    localStorage.removeItem(key);
  };

  return { getdata, setdata, removedata, getter, setGetter };
}
export default useLocalStorage;
