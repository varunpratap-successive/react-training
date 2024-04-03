import React from "react";
import "./Assignment2.css";
import Counter from "./Question1/Counter";
import PersonForm from "./Question2/PersonForm";
import ToDoList from "./Question3/ToDoList";
import RandomNumber from "./Question4/RandomNumber";
import CounterWitStep from "./Question5/CounterWitStep";
import Clock from "./Question6/Clock";
import Notification from "./Question7/Notification";
import SlideShow from "./Question8/SlideShow";
import ThemeApp from "./Question9/ThemeApp";
import LanguageApp from "./Question10/LanguageApp";
import ShoppingApp from "./Question11/ShoppingApp";
import Voting from "./Question12/Voting";
import Parent from "./Question13/Parent";
import Tasks from "./Question14/Tasks";
import StudenList from "./Question15/StudenList";
import EmployeeSalary from "./Question16/EmployeeSalary";
import ClipboardApp from "./Question17/ClipboardApp";
import StorageApp from "./Question18/StorageApp";
import CountdownTimer from "./Question19/CountdownTimer";

function Assignment2() {
  return (
    <>
      <div id="mainid">
        <div id="w1" className="class1">
          <h2>Question1</h2>
          <Counter />
        </div>

        <div id="w2" className="class1">
          <h2>Question2</h2>
          <PersonForm />
        </div>

        <div id="w3" className="class1">
          <h2>Question3</h2>
          <ToDoList />
        </div>

        <div id="w4" className="class1">
          <h2>Question4</h2>
          <RandomNumber />
        </div>

        <div id="w5" className="class1">
          <h2>Question5</h2>
          <CounterWitStep />
        </div>

        <div id="w6" className="class1">
          <h2>Question6</h2>
          <Clock />
        </div>

        <div id="w7" className="class1">
          <h2>Question7</h2>
          <Notification />
        </div>

        <div id="w8" className="class1">
          <h2>Question8</h2>
          <SlideShow />
        </div>

        <div id="w9" className="class1">
          <h2>Question9</h2>
          <ThemeApp />
        </div>

        <div id="w10" className="class1">
          <h2>Question10</h2>
          <LanguageApp />
        </div>

        <div id="w11">
          <h2>Question11</h2>
          <ShoppingApp />
        </div>

        <div id="w12" className="class1">
          <h2>Question12</h2>
          <Voting />
        </div>

        <div id="w13" className="class1">
          <h2>Question13</h2>
          <Parent />
        </div>

        <div id="w14" className="class1">
          <h2>Question14</h2>
          <Tasks />
        </div>

        <div id="w15" className="class1">
          <h2>Question15</h2>
          <StudenList />
        </div>

        <div id="w16" className="class1">
          <h2>Question16</h2>
          <EmployeeSalary />
        </div>

        <div id="w17" className="class1">
          <h2>Question17</h2>
          <ClipboardApp />
        </div>

        <div id="w18" className="class1">
          <h2>Question18</h2>
          <StorageApp />
        </div>

        <div id="w19" className="class1">
          <h2>Question19</h2>
          <CountdownTimer />
        </div>
      </div>
    </>
  );
}

export default Assignment2;
