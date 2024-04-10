//Question7
// Design a search filter component that consists of an input field. As the user types into the input, use controlled
// components to filter a list of items displayed below. The list should dynamically update to show only items matching the search query.

import { useEffect, useState } from "react";

const itemArray = ["Task1", "Task2", "Task3", "Job1", "Job2", "Item1", "Item2"];

const Search = () => {
  const [items, setItems] = useState(itemArray);
  const [search, setSearch] = useState("");
  const [filterArray, setfilteredArray] = useState(itemArray);

  useEffect(() => {
    const filteredItems = items.filter((val) => val.startsWith(search));
    setfilteredArray(filteredItems);
  }, [search, items]);

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filterArray.map((element, index) => {
        return <li key={index}>{element}</li>;
      })}
    </div>
  );
};

export default Search;
