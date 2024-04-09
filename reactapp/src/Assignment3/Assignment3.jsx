import React from "react";
import "./Assignment3.css";
import LoginParent from "./Question1/LoginParent";
import Parent from "./Question2/Parent";
import Main from "./Question3/Main";
import MainApp from "./Question4/MainApp";
import DashboardRouting from "./Question5/DashboardRouting";
import ProductApp from "./Question6/ProductApp";

//sir,question 3,4,5,6 is of routing here,so if you run any question out of Question 3,4,5,6 ,then comment out remaining three questions
function Assignment3() {
  return (
    <div id="mainid1">
      <div id="w1" className="class1">
        <h2>Question1</h2>
        <LoginParent />
      </div>

      <div id="w2" className="class1">
        <h2>Question2</h2>
        <Parent />
      </div>

      <div id="w3" className="class1">
        <h2>Question3</h2>
        <Main />
      </div>

      <div id="w4" className="class1">
        <h2>Question4</h2>
        <MainApp />
      </div>

      <div id="w5" className="class1">
        <h2>Question5</h2>
        <DashboardRouting />
      </div>

      <div id="w6" className="class1">
        <h2>Question6</h2>
        <ProductApp />
      </div>
    </div>
  );
}

export default Assignment3;
