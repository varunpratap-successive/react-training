import "./App.css";
import Assignment1 from "./Assignment1/Assignment1";
import Assignment2 from "./Assignment2/Assignment2";
import Assignment3 from "./Assignment3/Assignment3";
import Assignment4 from "./Assignment4/Assignment4";
import Assignment5 from "./Assignment5/Assignment5";
import Assignment6 from "./Assignment6/Assignment6";
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
        <div id="ass3">
          <h1>Assignment3</h1>
          <Assignment3 />
        </div>
        <div id="ass3">
          <h1>Assignment4</h1>
          <Assignment4 />
        </div>
        <div id="ass5">
          <h1>Assignment5</h1>
          <Assignment5 />
        </div>
        <div id="ass6">
          <h1>Assignment6</h1>
          <Assignment6 />
        </div>
      </div>
    </>
  );
}

export default App;
