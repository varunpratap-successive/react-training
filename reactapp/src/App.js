import "./App.css";
import Assignment1 from "./Assignment1/Assignment1";
import Assignment2 from "./Assignment2/Assignment2";
function App() {
  return (
    <>
      <div id="allAss">
        <div id="ass1">
          <h1>Assignment1</h1>
          <Assignment1 />
        </div>
        <div id="ass2">
          <h1>Assignment2</h1>
          <Assignment2 />
        </div>
      </div>
    </>
  );
}

export default App;
