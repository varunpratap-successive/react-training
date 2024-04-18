import React from "react";
import "./Assignment6.css";
import Routing from "./Question1/Routing";
import RoutingHome from "./Question2/RoutingHome";
import Counter from "./Question3/Counter";
import LoginForm from "./Question4/LoginForm";
import Data from "./Question5/Data";
import ModalComponent from "./Question6/ModalComponent";
function Assignment6() {
  return (
    <>
      <div id="mainid">
        <div id="w1" className="class1">
          <h2>Question1</h2>
          <Routing />
        </div>
        <div id="w2" className="class1">
          <h2>Question2</h2>
          <RoutingHome />
        </div>
        <div id="w3" className="class1">
          <h2>Question3</h2>
          <Counter />
        </div>

        <div id="w4" className="class1">
          <h2>Question4</h2>
          <LoginForm />
        </div>

        <div id="w5" className="class1">
          <h2>Question5</h2>
          <Data />
        </div>

        <div id="w6" className="class1">
          <h2>Question6</h2>
          <ModalComponent />
        </div>
      </div>
    </>
  );
}

export default Assignment6;
